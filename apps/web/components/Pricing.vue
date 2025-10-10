<template>
  <h2 class="text-center text-2xl uppercase font-bold text-[#EE6F53] pt-24">
    deploy with
    <span class="line-through opacity-50">vendor lock-in</span> freedom
  </h2>
  <div
    class="px-4 min-w-[calc(100%-1rem)] md:min-w-[calc(100%-4rem)] md:px-16 py-9 md:py-11 flex flex-col justify-center items-center"
  >
    <div class="flex flex-col justify-between gap-16">
      <div class="flex flex-col items-center gap-12 lg:gap-16">
        <div
          class="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-x-10 gap-y-10"
        >
          <nuxt-link
            class="h-[86px] w-[15rem] lg:w-[16rem] btn border-[0.5px] border-[#EE6F53] mx-1"
            to="https://cal.com/ewanretor/slipstream-live"
          >
            <span class="uppercase font-bold text-[#EE6F53]"
              >azure marketplace</span
            >
          </nuxt-link>
          <nuxt-link
            class="h-[86px] w-[15rem] lg:w-[16rem] btn border-[0.5px] border-[#EE6F53] mx-1 shadow"
            to="https://cal.com/ewanretor/slipstream-live"
          >
            <span class="uppercase font-bold text-[#EE6F53]">on prem</span>
          </nuxt-link>
          <nuxt-link
            class="h-[86px] w-[15rem] btn border-[0.5px] border-[#EE6F53] mx-1 shadow"
            to="https://cal.com/ewanretor/slipstream-live"
          >
            <span class="uppercase font-bold text-[#EE6F53]"
              >cloud coming soon...</span
            >
          </nuxt-link>
        </div>
      </div>
      <!-- <div class="flex flex-col items-start gap-12">
        <p class="text-[1.125rem] text-left text-[#fff] mb-4">
          Enable your edge instances to collaboratively process sensitive datasets that are otherwise siloed. Built with TEEs, our runtime ensures your supply-chain is kept protected.
        </p>
      </div> -->
    </div>
  </div>
</template>
