<template>
  <div class="px-9 flex justify-center items-center py-4">
    <div class="w-fit">
      <div class="grid logo-grid">
        <div class="flex justify-center items-center">
          <div class="h-[16rem] md:h-[5rem]">
            <img
              src="@/assets/img/eigenlayer.svg"
              loading="lazy"
              alt=""
              class="h-fit w-[80px]"
            />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="h-[16rem] md:h-[5rem]">
            <img
              src="@/assets/img/irys.svg"
              loading="lazy"
              alt=""
              class="h-fit w-[80px]"
            />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="h-[16rem] md:h-[5rem]">
            <img
              src="@/assets/img/othentic.svg"
              loading="lazy"
              alt=""
              class="h-fit w-[80px]"
            />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="h-[16rem] md:h-[5rem]">
            <img
              src="@/assets/img/sindri.svg"
              loading="lazy"
              alt=""
              class="h-fit w-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.logo-grid {
  grid-column-gap: 2rem;
  grid-row-gap: 1px;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-columns: 1fr;
}
</style>
