<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <TabsTrigger
    class="hover:cursor-pointer"
    :value="to"
    @click="useRouter().push(to)"
    as-child
  >
    <slot />
  </TabsTrigger>
</template>
