<template>
  <div>
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <TrackLoader />
    </div>
    <div
      :class="{
        'opacity-0': isLoading,
        'opacity-100': !isLoading,
      }"
      class="transition-opacity duration-300"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isLoading = ref(true);

onMounted(() => {
  // Check if all resources are loaded
  if (document.readyState === "complete") {
    isLoading.value = false;
  } else {
    window.addEventListener("load", () => {
      isLoading.value = false;
    });
  }
});

// Reset loading state on route change
watch(
  () => route.path,
  () => {
    isLoading.value = true;
  },
);
</script>
