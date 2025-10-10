<template>
  <div
    class="min-h-[calc(100vh-64px)] relative flex flex-col gap-8 border-b border-[#EE6F53]/20 border-dashed"
  >
    <header class="flex-1 relative h-full overflow-hidden">
      <div
        class="flex flex-col items-center justify-center md:grid grid-cols-6 gap-32 relative px-[1.25rem] lg:px-[1.25rem] pt-24 h-full max-w-[1920px] mx-auto"
      >
        <div
          class="h-full col-[2/6] xl:col-[2/5] flex flex-col gap-8 justify-center z-10 pt-[6.25rem]"
        >
          <h1
            class="flex flex-col text-reveal-title-fluid tracking-headline text-[#eeeeee] uppercase"
          >
            Confidential computing for distributed workloads.
          </h1>
          <div
            class="md:grid grid-cols-3 xl:grid-cols-4 gap-x-32 gap-y-12 flex flex-col"
          >
            <p
              class="flex flex-col text-left text-medium-fluid col-[1/4] xl:col-[1/4.5] text-[#f1f1f1]"
            >
              We take your most sensitive edge data and transform it into
              co-ordinated intelligence. Our runtime enables secure,
              multi-instance processing with built-in storage, multi-party
              collaboration, and zero-trust cryptographic guarantees.
            </p>
            <div class="col-[1/3] xl:col-[1/4] flex items-center gap-12">
              <div
                class="w-full max-w-[800px] gap-12 flex flex-col sm:flex-row"
              >
                <nuxt-link
                  class="h-[40px] w-[15rem] btn border-[0.5px] border-[#EE6F53] shadow"
                  to="https://cal.com/ewanretor/slipstream-live"
                >
                  <span class="uppercase font-bold text-[#EE6F53]"
                    >see it live</span
                  >
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- <div class="absolute bottom-8 text-[#729171] text-sm">
        Secured by
        <a href="https://eigenlayer.xyz" target="blank">
          <img
            class="h-5 w-fit inline"
            alt="EigenLayer"
            src="@/assets/img/eigenlayer.svg"
          />
        </a>
      </div> -->
  </div>
</template>

<script setup>
// const words = ref(["confidential", "verifiable", "stateful"]);
// const currentWordIndex = ref(0);

// const currentTextArray = computed(() => {
//   return words.value[currentWordIndex.value].split(" ");
// });

// onMounted(() => {
//   setInterval(() => {
//     currentWordIndex.value = (currentWordIndex.value + 1) % words.value.length;
//   }, 4000);
// });
</script>

<style scoped>
@import "tailwindcss";

.hero {
  @apply relative bg-[#001917] px-2 rounded-xl flex justify-start items-center;
  * {
    @apply z-10 relative text-[#EE6F53];
  }
}
/* .hero::before {
  content: "";
  @apply bg-[#001917]/80 absolute top-[8px] left-[-2px] w-[calc(100%+4px)] h-[calc(100%-16px)];
}
.hero::after {
  content: "";
  @apply bg-[#001917]/80 absolute left-[8px] top-[-2px] h-[calc(100%+4px)] w-[calc(100%-16px)];
} */

.text-reveal-title-fluid {
  font-size: clamp(
    2.25rem,
    calc(2.25rem + (5 - 2.25) * ((100vw - 30rem) / (120 - 30))),
    5rem
  );
  line-height: clamp(
    2.025rem,
    calc(2.025rem + (4.5 - 2.025) * ((100vw - 30rem) / (120 - 30))),
    4.5rem
  );
}

.text-medium-fluid {
  font-size: clamp(
    1.125rem,
    calc(1.125rem + (1.25 - 1.125) * ((100vw - 30rem) / (120 - 30))),
    1.25rem
  );
  line-height: clamp(
    1.5rem,
    calc(1.5rem + (1.75 - 1.5) * ((100vw - 30rem) / (120 - 30))),
    1.75rem
  );
}
</style>
