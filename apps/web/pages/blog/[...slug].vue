<template>
  <div class="w-full py-20">
    <!-- Reading progress indicator -->
    <div class="fixed bottom-0 left-0 w-full z-50">
      <div class="h-1 w-full bg-[#003d34]">
        <div
          class="h-1 bg-[#EE6F53]"
          :style="{ width: readingProgress + '%' }"
        ></div>
      </div>
    </div>

    <div class="px-5">
      <!-- Two-column layout for desktop -->
      <div class="flex flex-col gap-12">
        <!-- Main content -->
        <article
          class="prose prose-invert container mx-auto blog-content flex-grow"
        >
          <div class="mb-8">
            <nuxt-link
              to="/blog"
              class="text-[#EE6F53] uppercase font-semibold inline-flex items-center group"
            >
              <svg
                class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back to Blog
            </nuxt-link>
          </div>

          <div v-if="post">
            <!-- Post header -->
            <div class="mb-10">
              <div
                v-if="parsedTags.length > 0"
                class="flex flex-wrap gap-2 mb-4"
              >
                <nuxt-link
                  v-for="tag in parsedTags"
                  :key="tag"
                  :to="`/blog/tag/${tag}`"
                  class="px-3 py-1 text-xs rounded-full tag bg-[#EE6F53] text-[#001917] uppercase font-bold hover:bg-[#f95b3e] transition-colors"
                >
                  {{ tag }}
                </nuxt-link>
              </div>

              <h1
                class="text-5xl sm:text-6xl font-bold text-[#EE6F53] tracking-tight leading-tight mb-6 font-[]"
              >
                {{ post.title }}
              </h1>

              <div
                v-if="post.date"
                class="flex items-center text-lg text-[#EE6F53] font-medium mb-6"
              >
                <RiCalendarView class="mr-2" />
                {{ formatDate(post.date) }}
              </div>

              <!-- Featured image -->
              <div v-if="post.image" class="mb-8 rounded-xl overflow-visible">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full object-cover max-h-[500px]"
                />
              </div>
            </div>

            <!-- Post content -->
            <div class="blog-content-wrapper">
              <ContentRenderer :value="post" class="blog-content-renderer" />
            </div>

            <!-- Post footer -->
            <div class="mt-16 pt-8 border-t border-[#00403a]">
              <div
                class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4"
              >
                <nuxt-link
                  to="/blog"
                  class="text-[#EE6F53] uppercase font-semibold inline-flex items-center group"
                >
                  <svg
                    class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Back to all posts
                </nuxt-link>

                <!-- Social share buttons -->
                <div class="flex items-center gap-3">
                  <span class="text-white text-sm">Share:</span>
                  <a
                    :href="`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(useRequestURL().href)}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#EE6F53] hover:text-white transition-colors"
                  >
                    <RiTwitterXLine />
                  </a>
                  <a
                    :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(useRequestURL().href)}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#EE6F53] hover:text-white transition-colors"
                  >
                    <RiFacebookFill />
                  </a>
                  <a
                    :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(useRequestURL().href)}&title=${encodeURIComponent(post.title)}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#EE6F53] hover:text-white transition-colors"
                  >
                    <RiLinkedinFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Metadata bar -->
        <div class="w-full shrink-0 order-last mx-auto container meta">
          <!-- Table of Contents -->
          <!-- <BlogTableOfContents
              v-if="post && post.body && post.body.toc"
              :toc="post.body.toc.links"
            /> -->

          <!-- Recent Posts -->
          <div
            v-if="otherPosts.length > 0"
            class="mt-8 p-6 bg-[#00231f] rounded-[1.75rem] shadow-md"
          >
            <h3 class="text-[#EE6F53] font-bold text-lg mb-4 uppercase">
              Recent Posts
            </h3>
            <div class="space-y-4">
              <div
                v-for="recentPost in otherPosts.slice(0, 3)"
                :key="recentPost.path"
                class="flex gap-3"
              >
                <nuxt-link
                  :to="recentPost.path || '#'"
                  class="flex flex-row group"
                >
                  <div class="w-16 h-16 shrink-0 overflow-hidden rounded-xl">
                    <img
                      :src="recentPost.image || '/blog-placeholder.png'"
                      :alt="recentPost.title || 'Blog post'"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="ml-4">
                    <div
                      class="text-white group-hover:text-[#EE6F53] transition-colors"
                    >
                      <h4 class="font-bold text-sm line-clamp-2">
                        {{ recentPost.title || "Untitled Post" }}
                      </h4>
                    </div>
                    <p
                      v-if="recentPost.date"
                      class="text-xs text-[#EE6F53] mt-1"
                    >
                      {{ formatDate(recentPost.date) }}
                    </p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  RiTwitterXLine,
  RiFacebookFill,
  RiLinkedinFill,
  RiCalendarView,
} from "@remixicon/vue";

const route = useRoute();

// Get the slug from route params
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

// Build the full path to match the blog post
const postPath = `/blog/${slug}`;

// Use the path method to find the post
const { data: post } = await useAsyncData(`post-${postPath}`, () => {
  return queryCollection("blog").path(postPath).first();
});

// Fetch all posts for related posts section
const { data: allPosts } = await useAsyncData("all-blog-posts", () => {
  return queryCollection("blog").all();
});

// Filter out current post for "other posts" section
const otherPosts = computed(() => {
  if (!allPosts.value || !post.value) return [];
  return allPosts.value.filter((p) => p.path !== post.value?.path);
});

// Parse tags to ensure they're an array
const parsedTags = computed(() => {
  if (!post.value || !post.value.tags) return [];

  // Handle different formats of tags
  if (Array.isArray(post.value.tags)) {
    return post.value.tags;
  } else if (typeof post.value.tags === "string") {
    // If it's a comma-separated string
    return post.value?.tags
      .split(",")
      .map((tag: string) => tag.trim())
      .filter((tag: string) => Boolean(tag));
  }

  return [];
});

// Handle page not found
if (!post.value) {
  throw createError({ statusCode: 404, message: "Post not found" });
}

// Reading progress functionality
const readingProgress = ref(0);

// Calculate reading progress
const calculateReadingProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = scrollTop / (docHeight - winHeight);
  readingProgress.value = Math.min(Math.max(scrollPercent * 100, 0), 100);
};

onMounted(() => {
  window.addEventListener("scroll", calculateReadingProgress);
  calculateReadingProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", calculateReadingProgress);
});

const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

useSeoMeta({
  title: post.value.title,
  ogTitle: `${post.value.title} | S3N Blog`,
  description: post.value.description || "S3N Blog Post",
  ogDescription: post.value.description || "S3N Blog Post",
  ogImage: post.value.image || "/blog-hero.png",
  twitterCard: "summary_large_image",
  twitterSite: "@s3ndotxyz",
});
</script>

<style>
@import "tailwindcss";
/* Use the blog.scss styles instead of redefining styles here */
.prose {
  color: white;
  max-width: 100%;
}

.tag {
  @apply !bg-[#EE6F53] !text-[#001917] !no-underline;
}

.blog-content-wrapper {
  font-size: 1.125rem;
  line-height: 1.75;
  @apply font-[Actay];
}

/* Image styling */
.prose img,
.prose video {
  border-radius: 1.75rem;
  border-width: 0.6rem;
  border-color: #00231f;
  outline: rgb(0 61 52 / var(--tw-border-opacity, 1)) 1px solid !important;
  margin: 2rem auto;
  padding: 0;
  transition: transform 0.3s ease;
  width: 100%;
  height: auto;
}

.prose img:hover,
.prose video:hover {
  transform: translateY(-2px);
}

/* Custom checklist styling */
.blog-content-wrapper ul li:has(input[type="checkbox"]),
.blog-content-wrapper ul li[data-task-list-item] {
  list-style-type: none !important;
  position: relative;
  margin: 0.5rem 0;
}

.blog-content-wrapper ul li:has(input[type="checkbox"]:checked),
.blog-content-wrapper ul li[data-task-list-item][data-checked] {
  list-style-type: none !important;
}

.blog-content-wrapper ul li:has(input[type="checkbox"]:checked)::before,
.blog-content-wrapper ul li[data-task-list-item][data-checked]::before {
  content: "";
  position: absolute;
  left: -1.75rem;
  top: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #ee6f53;
  border-radius: 6px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23001917'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E");
  background-size: contain;
  background-color: #ee6f53;
  background-repeat: no-repeat;
}

.blog-content-wrapper ul li:has(input[type="checkbox"]:not(:checked))::before,
.blog-content-wrapper ul li[data-task-list-item]:not([data-checked])::before {
  content: "";
  position: absolute;
  left: -1.75rem;
  top: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #ee6f53;
  border-radius: 6px;
  background: transparent;
}

/* Hide the default checkbox */
.blog-content-wrapper ul li input[type="checkbox"] {
  display: none !important;
}

article,
.meta {
  @apply !max-w-3xl !font-[Actay];
}
</style>
