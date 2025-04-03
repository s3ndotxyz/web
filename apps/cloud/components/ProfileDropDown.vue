<script setup lang="ts">
import { Bell, CreditCard, LogOut, Moon, Sun } from "lucide-vue-next";

import { authClient } from "@/lib/auth-client";

const toggleScheme = () => {
  const colorMode = useColorMode();
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};

const isLoading = ref(true);
const authenticated = ref(false);
const session = authClient.useSession();

watchEffect(() => {
  isLoading.value = session.value.isPending;
  authenticated.value = !!session.value.data?.user;
});

const data = {
  user: {
    name: session.value.data?.user.name,
    email: session.value.data?.user.email,
    avatar: session.value.data?.user.image,
  },
};

const isActive = (url: string) => {
  return useRoute().path.startsWith(url);
};

function goto(link: string) {
  useRouter().push(link);
}

const logout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        useRouter().push("/");
      },
    },
  });
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Avatar class="h-8 w-8 hover:cursor-pointer">
        <AvatarImage :src="data.user.avatar as string" :alt="data.user.name" />
        <AvatarFallback class=""> // </AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side="bottom"
      align="end"
      :side-offset="4"
    >
      <DropdownMenuLabel class="p-0 font-normal">
        <DropdownMenuItem
          @click="goto('/account')"
          class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
          :class="{
            'bg-sidebar-accent text-sidebar-accent-foreground':
              isActive('/account'),
          }"
        >
          <Avatar class="h-8 w-8">
            <AvatarImage
              :src="data.user.avatar as string"
              :alt="data.user.name"
            />
            <AvatarFallback class=""> // </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ data.user.name }}</span>
            <span class="truncate text-xs">{{ data.user.email }}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem
          :class="{
            'bg-sidebar-accent text-sidebar-accent-foreground':
              isActive('/notifications'),
          }"
        >
          <Bell />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuGroup>
        <DropdownMenuItem
          @click="goto('/billing')"
          :class="{
            'bg-sidebar-accent text-sidebar-accent-foreground':
              isActive('/billing'),
          }"
        >
          <CreditCard />
          Billing
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="hidden dark:flex" @click="toggleScheme">
        <Sun />
        Light Theme
      </DropdownMenuItem>
      <DropdownMenuItem class="dark:hidden" @click="toggleScheme">
        <Moon />
        Dark Theme
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logout">
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
