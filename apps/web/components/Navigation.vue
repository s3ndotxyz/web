<template>
  <div class="w-full py-4 flex justify-center items-center font-[Actay]">
    <div
      class="min-w-[calc(100%-2.125rem)] md:min-w-[calc(100%-7.75rem)] mt-8 flex justify-between items-center fixed top-0 z-[999]"
    >
      <div class="flex items-center"></div>
      <div
        class="z-[999] flex flex-wrap gap-2 justify-end items-center text-white"
        ref="menuContent"
      >
        <Transition name="menu" :duration="250">
          <ul
            class="gap-2 contents"
            :class="{ '!pointer-events-none': !menuOpen }"
          >
            <Motion
              v-for="i in items"
              :key="i.id"
              as="li"
              :initial="{ x: 4, opacity: 0 }"
              :animate="menuOpen ? { x: 0, opacity: 1 } : { x: 4, opacity: 0 }"
              :transition="
                menuOpen
                  ? { delay: (items.length - 1 - i.id) * 0.05 }
                  : { delay: i.id * 0.05 }
              "
              class="inline-block"
            >
              <nuxt-link class="text-start" :to="i.url"
                ><span class="uppercase px-2 text-[#EE6F53] font-semibold"
                  >_{{ i.name }}</span
                >
              </nuxt-link>
            </Motion>
          </ul>
        </Transition>
        <button
          @click="toggleMenuState"
          class="h-[40px] btn border-[0.5px] border-[#EE6F53] gap-2"
        >
          <svg
            class="fill-[#EE6F53] shrink-0 ml-2"
            width="20"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="11"
              width="20"
              height="2"
              rx="1"
              class="transform origin-center translate-x-0 transition duration-200 ease-out -rotate-[60deg]"
            />
            <rect
              y="11"
              width="20"
              height="2"
              rx="1"
              class="transform origin-center translate-x-2 transition duration-200 ease-out -rotate-[60deg]"
              :class="{
                '!translate-x-0': menuOpen,
              }"
            />
          </svg>
          <span class="uppercase text-[#EE6F53] font-bold mr-2"> MENU </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Motion, useAnimate, stagger } from "motion-v";

let menuOpen = ref(false);
const toggleMenuState = () => {
  menuOpen.value = !menuOpen.value;
};

const menuContent = ref(null);

const handleClickOutside = (event: any) => {
  if (
    menuContent.value &&
    !(menuContent.value as HTMLElement).contains(event.target)
  ) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const items = [
  {
    name: "Cloud",
    url: "https://cloud.s3n.xyz",
    // children: [],
    external: false,
  },
  {
    name: "Docs",
    url: "https://docs.s3n.xyz",
    // children: [],
    external: false,
  },
].map((i, j) => ({
  ...i,
  id: j,
}));
</script>
