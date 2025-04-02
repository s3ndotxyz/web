<template>
  <header
    class="flex w-full h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center justify-between w-full gap-2 px-4">
      <HomeTabs />
      <ProfileDropDown />
    </div>
  </header>
</template>
