<template>
  <div
    class="bg-[#00231f] rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(238,111,83,0.2)] border border-transparent hover:border-[#EE6F53]/20 p-6"
  >
    <div class="flex gap-6 items-start">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center">
        <slot name="icon" />
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-xl font-bold text-[#EE6F53]">
          <slot name="title" />
        </h3>
        <p class="text-white/80 text-sm leading-relaxed">
          <slot name="description" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  delay?: number;
}>();
</script>
