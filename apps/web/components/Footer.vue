<template>
  <div class="w-full px-4 md:px-16 py-9 md:py-11 bg-[#001917] z-20 footer">
    <ul class="uppercase text-[#EE6F53] font-semibold">
      <li>
        <nuxt-link to="https://github.com/0xZeroLabs/s3n">gitHub</nuxt-link>
      </li>
      <li>
        <nuxt-link to="https://x.com/s3ndotxyz"
          >x <span class="line-through">twitter</span></nuxt-link
        >
      </li>
      <li><nuxt-link to="https://t.me/s3ndotxyz">telegram</nuxt-link></li>
      <li><nuxt-link to="/blog">blog</nuxt-link></li>
    </ul>
    <div class="w-full flex justify-between items-center py-4">
      <div class="flex items-center text-[#EE6F53] font-bold">
        ZERO Labs Ltd © {{ new Date().getFullYear() }}.
      </div>
      <span class="h-[40px]"
        ><img
          src="@/assets/img/s3n-full.svg"
          class="w-fit h-7 cursor-pointer"
          @click="useRouter().push('/')"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>
.footer {
  @apply font-[Actay] text-[#EE6F53];
}

a {
  position: relative;
  text-decoration: none;
}

a::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transition: width 0.25s ease;
}

a:hover::before {
  width: 100%;
}
</style>
