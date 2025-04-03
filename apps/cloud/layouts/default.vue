<script setup lang="ts">
import { authClient } from "@/lib/auth-client";

const isLoading = ref(true);
const authenticated = ref(false);
const session = authClient.useSession();

watchEffect(() => {
  isLoading.value = session.value.isPending;
  authenticated.value = !!session.value.data?.user;
});
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
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>
