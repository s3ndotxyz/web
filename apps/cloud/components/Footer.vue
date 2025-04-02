<template>
  <div class="w-full px-5">
    <ul class="uppercase font-semibold">
      <li>
        <nuxt-link to="https://github.com/0xZeroLabs/s3n">gitHub</nuxt-link>
      </li>
      <li><nuxt-link to="https://t.me/s3ndotxyz">telegram</nuxt-link></li>
      <li><nuxt-link to="https://docs.s3n.xyz">Docs</nuxt-link></li>
    </ul>
    <div class="w-full flex justify-between items-center py-4">
      <div class="flex items-center font-bold">
        All rights reserved © {{ new Date().getFullYear() }}.
      </div>
      <nuxt-link to="https://www.s3n.xyz" class="h-[40px] btn">
        <img
          src="@/assets/img/s3n-white.svg"
          class="w-fit h-7 hidden dark:inline-block"
        />
        <img src="@/assets/img/s3n-black.svg" class="w-fit h-7 dark:hidden" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
li a {
  position: relative;
  text-decoration: none;
}

li a::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transition: width 0.25s ease;
}

li a:hover::before {
  width: 100%;
}
</style>
