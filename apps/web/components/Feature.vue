<template>
  <div class="flex gap-6 items-start">
    <div class="w-12 h-12 flex flex-grow-0 flex-shrink-0 basis-12">
      <slot name="icon" />
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl uppercase font-bold text-[#EE6F53]">
        <slot name="title" />
      </h3>
      <p class="text-white/80 text-md leading-relaxed">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  delay?: number;
}>();
</script>
