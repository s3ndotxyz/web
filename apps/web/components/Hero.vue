<template>
  <div
    class="w-full h-[calc(100%-104px)] absolute flex justify-center items-center"
  >
    <div class="container h-full flex justify-center items-center">
      <h1
        class="text-6xl max-sm:text-4xl font-bold uppercase text-center text-[#EE6F53] font-[]"
      >
        <div
          class="relative inline-block overflow-hidden"
          style="vertical-align: bottom"
        >
          <div class="relative h-fit">
            Hardware-secured compute at
            <span class="negative">
              <Motion
                v-for="(word, index) in currentTextArray"
                :key="`word-${currentWordIndex}-${index}`"
                :initial="{ opacity: 0, y: 50 }"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: -50 }"
                :transition="{
                  duration: 0.4,
                  delay: index * 0.16,
                  ease: 'easeOut',
                }"
                class="inline-block mr-2"
                :style="{ left: index > 0 ? `${index * 3.5}rem` : '0' }"
              >
                {{ word }}
              </Motion>
            </span>
          </div>
        </div>
        <br />
        //
      </h1>
    </div>
  </div>
</template>

<script setup>
const words = ref(["scale", "turbo speed", "full throttle"]);
const currentWordIndex = ref(0);

const currentTextArray = computed(() => {
  return words.value[currentWordIndex.value].split(" ");
});

onMounted(() => {
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.value.length;
  }, 4000);
});
</script>
