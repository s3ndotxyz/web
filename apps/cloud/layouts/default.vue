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
  <div class="min-h-screen bg-sidebar w-full flex flex-col" v-else>
    <div class="flex flex-col flex-grow">
      <Header />
      <main class="flex-grow flex items-center justify-center">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
