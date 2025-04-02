<script setup lang="ts">
import { authClient } from "@/lib/auth-client";
import { ChevronLeft } from "lucide-vue-next";

const isLoading = ref(true);
const authenticated = ref(false);
const session = authClient.useSession();

watchEffect(() => {
  isLoading.value = session.value.isPending;
  authenticated.value = !!session.value.data?.user;
  !authenticated.value ? goauth() : null;
});

function goauth() {
  useRouter().push("/authenticate");
}
</script>

<template>
  <div
    v-if="isLoading || !authenticated"
    class="w-full h-screen flex items-center justify-center px-3"
  >
    <div class="flex space-x-2 justify-center items-center h-screen">
      <div
        class="h-4 w-4 bg-[#729171] rounded-full animate-bounce [animation-delay:-0.3s]"
      ></div>
      <div
        class="h-4 w-4 bg-[#729171] rounded-full animate-bounce [animation-delay:-0.15s]"
      ></div>
      <div class="h-4 w-4 bg-[#729171] rounded-full animate-bounce"></div>
    </div>
  </div>
  <div class="h-svh w-full" v-else>
    <div
      class="flex h-full w-full flex-col text-sidebar-foreground bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
    >
      <header
        class="flex w-full h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center justify-between w-full gap-2 px-4">
          <nuxt-link
            to="/"
            class="text-[#000] dark:text-[#fff] uppercase font-semibold inline-flex items-center group text-[0.875rem]"
          >
            <ChevronLeft
              class="mr-1 transition-transform duration-300 group-hover:-translate-x-1"
            />
            Go home
          </nuxt-link>
          <ProfileDropDown />
        </div>
      </header>
      <slot />
      <Footer />
    </div>
  </div>
</template>
