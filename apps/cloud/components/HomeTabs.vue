<script setup lang="ts">
import { Motion } from "motion-v";

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

const route = useRoute();
const selectedTab = ref(route.path);

watch(
  () => route.path,
  (newPath) => {
    selectedTab.value = newPath;
  },
);
</script>

<template>
  <div
    class="z-[999] flex flex-wrap gap-2 justify-end items-center text-white max-w-[calc(100%-10px)] md:hidden"
    ref="menuContent"
  >
    <button @click="toggleMenuState" class="w-[40px] h-[40px] btn">
      <svg
        class="fill-[#000] dark:fill-[#fff] shrink-0"
        width="18"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="11"
          width="18"
          height="2"
          rx="1"
          class="transform origin-center -translate-y-1 transition duration-200 ease-out"
          :class="{ '!rotate-[315deg]': menuOpen, '!translate-y-0': menuOpen }"
        />
        <rect
          y="11"
          width="18"
          height="2"
          rx="1"
          class="transform origin-center translate-y-1 transition duration-200 ease-out"
          :class="{
            '!-rotate-[315deg]': menuOpen,
            '!translate-y-0': menuOpen,
          }"
        />
      </svg>
    </button>
    <Motion
      as="div"
      :initial="{ y: -4, opacity: 0 }"
      :animate="menuOpen ? { y: 0, opacity: 1 } : { y: -4, opacity: 0 }"
      class="absolute left-0 ml-4 top-[64px]"
    >
      <Tabs
        class="w-[224px]"
        v-model="selectedTab"
        :class="{ '!pointer-events-none': !menuOpen }"
        orientation="vertical"
      >
        <TabsList class="grid w-full grid-cols-1">
          <TabsLinkTrigger to="/">Containers</TabsLinkTrigger>
          <TabsLinkTrigger to="/functions">Functions</TabsLinkTrigger>
          <TabsLinkTrigger to="/storage">Storage</TabsLinkTrigger>
        </TabsList>
      </Tabs>
    </Motion>
  </div>

  <Tabs class="max-md:hidden" v-model="selectedTab">
    <TabsList>
      <TabsLinkTrigger to="/">Containers</TabsLinkTrigger>
      <TabsLinkTrigger to="/functions">Functions</TabsLinkTrigger>
      <TabsLinkTrigger to="/storage">Storage</TabsLinkTrigger>
    </TabsList>
  </Tabs>
</template>
