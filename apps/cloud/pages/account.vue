<script setup lang="ts">
import {
  Mail,
  User,
  Key,
  Edit2,
  Shield,
  BellRing,
  Eye,
  EyeOff,
  Github,
  LinkIcon,
  UnlinkIcon,
  Trash2,
} from "lucide-vue-next";
import { authClient } from "@/lib/auth-client";

definePageMeta({
  layout: "outofbounds",
});

useSeoMeta({
  title: "Account",
  ogTitle: "Account",
  description: "One-click TEE application deployment.",
  ogDescription: "One-click TEE application deployment.",
  ogImage: "/hero.png",
  twitterCard: "summary_large_image",
  twitterSite: "@s3ndotxyz",
});

const session = authClient.useSession();
const user = computed(() => session.value.data?.user);

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "security", label: "Security" },
  { id: "preferences", label: "Preferences" },
];

const activeTab = ref("profile");

// Profile form
const profileForm = reactive({
  name: user.value?.name || "",
  email: user.value?.email || "",
  avatarUrl: user.value?.image || "",
});

// GitHub connection status
const githubConnected = ref(true);

// Preferences form
const preferencesForm = reactive({
  emailNotifications: true,
  marketingEmails: false,
  productUpdates: true,
});

const toggleGitHubConnection = () => {
  // Implementation for connecting/disconnecting GitHub would go here
  githubConnected.value = !githubConnected.value;
};

// For delete account confirmation
const showDeleteConfirm = ref(false);
</script>

<template>
  <main class="w-full flex items-center justify-center px-5">
    <div class="container max-w-6xl py-10 h-full">
      <div class="mb-8 max-md:text-center">
        <h1 class="text-3xl font-bold">Account Settings</h1>
        <p class="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        <!-- Sidebar Navigation -->
        <div class="hidden md:block">
          <div class="space-y-1">
            <Button
              v-for="tab in tabs"
              :key="tab.id"
              :variant="activeTab === tab.id ? 'default' : 'ghost'"
              class="w-full justify-start"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </Button>
          </div>
        </div>

        <div class="md:hidden">
          <Tabs v-model="activeTab" class="w-full flex justify-center">
            <TabsList>
              <TabsTrigger v-for="tab in tabs" :key="tab.id" :value="tab.id">
                {{ tab.label }}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <!-- Profile Tab -->
        <Card class="md:col-span-1" v-if="activeTab === 'profile'">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Manage your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              class="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6"
            >
              <Avatar class="h-24 w-24 border">
                <AvatarImage :src="profileForm.avatarUrl" />
                <AvatarFallback>{{
                  profileForm.name?.charAt(0) || user?.name?.charAt(0) || "//"
                }}</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="text-lg font-medium mb-1">
                  {{ profileForm.name || "Your Profile" }}
                </h3>
                <p class="text-muted-foreground text-sm mb-3">
                  {{ profileForm.email }}
                </p>
                <Button size="sm" variant="outline">Update Photo</Button>
              </div>
            </div>

            <form class="space-y-4">
              <div class="grid grid-cols-1 gap-4">
                <div class="space-y-2">
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    v-model="profileForm.name"
                    placeholder="Your name"
                  />
                </div>
                <div class="space-y-2">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    v-model="profileForm.email"
                    placeholder="Your email"
                    disabled
                  />
                </div>
              </div>
              <Button>Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <!-- Security Tab -->
        <Card class="md:col-span-1" v-if="activeTab === 'security'">
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Manage your account security settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <!-- Authentication Information -->
              <div class="space-y-3">
                <h3 class="text-lg font-medium">Authentication</h3>
                <div class="rounded-lg border p-4">
                  <div class="flex items-center gap-4">
                    <div class="p-2 bg-muted rounded-full">
                      <Mail class="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p class="font-medium">Magic Link Authentication</p>
                      <p class="text-sm text-muted-foreground">
                        You sign in with magic links sent to your email
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- GitHub Connection -->
              <div class="space-y-3">
                <h3 class="text-lg font-medium">Connected Services</h3>
                <div
                  class="rounded-lg border p-4 max-md:grid max-md:grid-cols-1"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="p-2 bg-muted rounded-full">
                        <Github class="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p class="font-medium">GitHub</p>
                        <p class="text-sm text-muted-foreground">
                          {{
                            githubConnected
                              ? "Connected to GitHub"
                              : "Not connected to GitHub"
                          }}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      @click="toggleGitHubConnection"
                      class="flex items-center gap-1"
                    >
                      <LinkIcon v-if="!githubConnected" class="h-4 w-4" />
                      <UnlinkIcon v-else class="h-4 w-4" />
                      {{ githubConnected ? "Disconnect" : "Connect" }}
                    </Button>
                  </div>
                </div>
              </div>

              <!-- Two-Factor Authentication (Coming Soon) -->
              <div class="space-y-3">
                <h3 class="text-lg font-medium">Two-Factor Authentication</h3>
                <div class="rounded-lg border p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <div class="p-2 bg-muted rounded-full">
                        <Shield class="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p class="font-medium">Two-Factor Authentication</p>
                        <p class="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                </div>
              </div>

              <!-- Session Management -->
              <div class="space-y-3">
                <h3 class="text-lg font-medium">Session Management</h3>
                <div class="rounded-lg border p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium">Log out from all devices</p>
                      <p class="text-sm text-muted-foreground">
                        This will end all your active sessions
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">Log out All</Button>
                  </div>
                </div>
              </div>

              <!-- Delete Account -->
              <div class="space-y-3">
                <h3 class="text-lg font-medium">Delete Account</h3>
                <div class="rounded-lg border border-destructive/20 p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium">Delete your account</p>
                      <p class="text-sm text-muted-foreground">
                        This will permanently delete your account and all
                        associated data
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            class="flex items-center gap-1"
                          >
                            <Trash2 class="h-4 w-4" />
                            Delete Account
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Account</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete your account? This
                              action cannot be undone and all your data will be
                              permanently removed.
                            </DialogDescription>
                          </DialogHeader>
                          <div class="pt-4 pb-2">
                            <p class="text-sm font-medium text-destructive">
                              To confirm, type "delete my account"
                            </p>
                            <Input
                              class="mt-2"
                              placeholder="delete my account"
                            />
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="destructive"
                              >Confirm Delete</Button
                            >
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div class="md:hidden">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            class="flex items-center gap-1"
                          >
                            <Trash2 class="h-4 w-4" />
                            Delete Account
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" class="rounded-lg">
                          <SheetHeader>
                            <SheetTitle>Delete Account</SheetTitle>
                            <SheetDescription>
                              Are you sure you want to delete your account? This
                              action cannot be undone and all your data will be
                              permanently removed.
                            </SheetDescription>
                          </SheetHeader>
                          <div class="pt-4 pb-2">
                            <p class="text-sm font-medium text-destructive">
                              To confirm, type "delete my account"
                            </p>
                            <Input
                              class="mt-2"
                              placeholder="delete my account"
                            />
                          </div>
                          <SheetFooter class="mt-4">
                            <SheetClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </SheetClose>
                            <Button variant="destructive"
                              >Confirm Delete</Button
                            >
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Preferences Tab -->
        <Card class="md:col-span-1" v-if="activeTab === 'preferences'">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Manage your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="space-y-4">
                <h3 class="text-lg font-medium">Email Notifications</h3>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="space-y-0.5">
                      <Label>Account notifications</Label>
                      <p class="text-xs text-muted-foreground">
                        Receive emails about your account activity
                      </p>
                    </div>
                    <Switch v-model="preferencesForm.emailNotifications" />
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="space-y-0.5">
                      <Label>Marketing emails</Label>
                      <p class="text-xs text-muted-foreground">
                        Receive emails about new products and features
                      </p>
                    </div>
                    <Switch v-model="preferencesForm.marketingEmails" />
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="space-y-0.5">
                      <Label>Product updates</Label>
                      <p class="text-xs text-muted-foreground">
                        Receive emails about product updates and changes
                      </p>
                    </div>
                    <Switch v-model="preferencesForm.productUpdates" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </main>
</template>
