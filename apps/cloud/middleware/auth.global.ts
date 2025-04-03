export default defineNuxtRouteMiddleware(async (to) => {
  const { authClient } = await import("@/lib/auth-client");
  const session = authClient.useSession();

  if (to.path === "/authenticate") {
    return;
  }

  let authenticated = ref(false);

  watchEffect(() => {
    authenticated.value = !!session.value.data?.user;
    !authenticated.value ? navigateTo("/authenticate") : null;
  });
});
