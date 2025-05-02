<template>
  <!-- <div class="flex flex-col h-full snap"> -->
  <Hero />
  <!-- <About /> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
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
