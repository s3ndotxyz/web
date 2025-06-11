<template>
  <div
    class="w-full min-h-[calc(100vh-52px)] flex flex-col justify-center items-center relative mb-[52px]"
  >
    <div class="container flex justify-center items-center">
      <h1
        class="text-6xl max-sm:text-4xl font-bold uppercase text-center text-[#EE6F53] font-[]"
      >
        <div
          class="relative inline-block overflow-hidden"
          style="vertical-align: bottom"
        >
          <div class="relative h-fit">
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
            serverless compute
          </div>
        </div>
        <br />
        //
      </h1>
    </div>
    <div class="absolute bottom-8 text-[#729171] text-sm">
      Secured by
      <a href="https://eigenlayer.xyz" target="blank">
        <img
          class="h-5 w-fit inline"
          alt="EigenLayer"
          src="@/assets/img/eigenlayer.svg"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const words = ref(["secure", "scalable", "stateful"]);
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
