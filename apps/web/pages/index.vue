<template>
  <div class="relative">
    <!-- <div class="flex flex-col h-full snap"> -->
    <Hero />
    <!-- <Partners /> -->
    <!-- <About /> -->
    <a
      href="https://cal.com/ewanretor-giwa-okugbe-u0xylh"
      class="fixed bottom-8 right-8 z-10"
    >
      <div class="relative w-32 h-32 md:w-48 md:h-48">
        <Circuit class="w-full h-full" />
        <span
          class="absolute inset-0 flex items-center justify-end text-[#729171] text-xs md:pr-4 md:text-sm font-medium"
        >
          Talk to us
        </span>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { animate } from "motion-v";
import { useScroll } from "@vueuse/core";

const { y, directions } = useScroll(window);

watch([y, directions], () => {
  const path = document.querySelector("#track-animated");
  const footerHeight = 168;
  // const footerHeight = 0;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight - footerHeight;
  const progress = Math.min(1, Math.max(0, y.value / scrollHeight));

  animate(
    path,
    {
      pathLength: progress,
      easing: "ease-out",
    },
    {
      duration: 0.1,
    },
  );
});

useSeoMeta({
  title: "S3N | TEE as a Service network",
  ogTitle: "S3N | TEE as a Service network",
  description: "One-click TEE application deployment.",
  ogDescription: "One-click TEE application deployment.",
  ogImage: "/hero.png",
  twitterCard: "summary_large_image",
  twitterSite: "@s3ndotxyz",
});
</script>

<style scoped>
.snap {
  scroll-snap-type: y mandatory;
}

.snap > * {
  scroll-snap-align: center;
}
</style>
