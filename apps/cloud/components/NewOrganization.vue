<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { authClient } from "@/lib/auth-client";
import { ImagePlus, X } from "lucide-vue-next";

// Validation schema
const formSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .min(2, "Organization name must be at least 2 characters")
      .max(50, "Organization name must be less than 50 characters"),
    slug: z
      .string()
      .min(2, "Slug must be at least 2 characters")
      .max(50, "Slug must be less than 50 characters")
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug must contain only lowercase letters, numbers, and hyphens",
      ),
    image: z.any().optional(),
  }),
);

const { handleSubmit, values, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: "",
    slug: "",
    image: null,
  },
});

const isLoading = ref(false);
const router = useRouter();
const imagePreview = ref<string | null>(null);
const dragOver = ref(false);
const error = ref<string | null>(null);

// Auto-generate slug from name
watch(
  () => values.name,
  (name: string) => {
    setFieldValue(
      "slug",
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    );
  },
);

let doc: Document;

onMounted(() => {
  doc = document;
});

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    if (validateImage(file)) {
      processImage(file);
    }
  }
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  dragOver.value = false;

  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    const file = event.dataTransfer.files[0];
    if (validateImage(file)) {
      processImage(file);
    }
  }
};

const validateImage = (file: File) => {
  const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!validTypes.includes(file.type)) {
    console.log(file.type);
    error.value = "Please upload an image file (JPG, PNG, SVG or GIF)";
    return false;
  }

  if (file.size > maxSize) {
    error.value = "File size should be less than 5MB";
    return false;
  }

  return true;
};

const processImage = (file: File) => {
  setFieldValue("image", file);
  imagePreview.value = URL.createObjectURL(file);
};

const removeImage = () => {
  setFieldValue("image", null);
  imagePreview.value = null;
  const input = document.getElementById("image-upload") as HTMLInputElement;
  if (input) input.value = "";
};

const onSubmit = handleSubmit(async (values) => {
  try {
    error.value = null;
    isLoading.value = true;

    let imageUrl = null;
    if (values.image) {
      // TODO: Implement image upload
      // imageUrl = await uploadImage(values.image);
    }

    const { error: apiError } = await authClient.organization.create({
      name: values.name as string,
      slug: values.slug as string,
      logo: imageUrl || "",
    });

    if (apiError) {
      throw apiError;
    }

    await router.push(`/organizations/${values.slug}`);
  } catch (err: any) {
    error.value = `Failed to create organization: ${err.statusText}`;
    console.error("Failed to create organization:", err);
  } finally {
    isLoading.value = false;
  }
});

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

const isOpen = computed({
  get: () => props.open,
  set: (value) => emit("update:open", value),
});
</script>

<template>
  <Sheet v-model:open="isOpen" @update:open="isOpen = $event">
    <SheetContent side="bottom" class="rounded-t-xl" @click.stop>
      <SheetHeader>
        <SheetTitle>Create New Organization</SheetTitle>
        <SheetDescription>
          Create a new organization to collaborate with your team.
        </SheetDescription>
      </SheetHeader>
      <form @submit.prevent="onSubmit" :validation-schema="formSchema">
        <div
          v-if="error"
          class="mb-4 p-4 text-sm text-destructive bg-destructive/10 rounded-xl"
        >
          {{ error }}
        </div>

        <div class="space-y-6">
          <FormField v-model="values.image" name="image" #default="{ field }">
            <FormItem>
              <FormLabel>Organization Logo</FormLabel>
              <FormControl>
                <div
                  class="relative flex items-center justify-center w-32 h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors"
                  :class="{
                    'border-primary bg-primary/5': dragOver,
                    'border-muted-foreground/25 hover:border-primary/50':
                      !dragOver,
                  }"
                  @dragover.prevent="dragOver = true"
                  @dragleave.prevent="dragOver = false"
                  @drop.prevent="handleDrop"
                  @click="() => doc.getElementById('image-upload')?.click()"
                >
                  <input
                    type="file"
                    id="image-upload"
                    class="hidden"
                    accept="image/*"
                    @change="handleImageUpload"
                  />

                  <div v-if="!imagePreview" class="flex flex-col items-center">
                    <ImagePlus class="w-8 h-8 text-muted-foreground" />
                    <span class="mt-2 text-sm text-muted-foreground">
                      Upload logo
                    </span>
                  </div>

                  <div v-else class="relative w-full h-full">
                    <img
                      :src="imagePreview"
                      class="w-full h-full object-cover rounded-xl"
                      alt="Organization logo preview"
                    />
                    <button
                      type="button"
                      class="absolute -top-2 -right-2 p-1 rounded-full bg-destructive text-destructive-foreground"
                      @click.stop="removeImage"
                    >
                      <X class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Upload a square logo for your organization. SVG, PNG, or JPG
                (max. 5MB)
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-model="values.name" name="name" #default="{ field }">
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Acme Inc."
                  v-bind="field"
                  :disabled="isLoading"
                />
              </FormControl>
              <FormDescription>
                This is your organization's displayed name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-model="values.slug" name="slug" #default="{ field }">
            <FormItem>
              <FormLabel>Organization Slug</FormLabel>
              <FormControl>
                <Input
                  placeholder="acme"
                  v-bind="field"
                  :disabled="isLoading"
                />
              </FormControl>
              <FormDescription>
                This will be used in URLs and API requests. Can contain
                lowercase letters, numbers, and hyphens.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <SheetFooter class="flex justify-between">
          <SheetClose as-child>
            <Button variant="outline" :disabled="isLoading"> Cancel </Button>
          </SheetClose>
          <Button type="submit" :disabled="isLoading" :loading="isLoading">
            Create Organization
          </Button>
        </SheetFooter>
      </form>
    </SheetContent>
  </Sheet>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 1rem;
}

button {
  @apply font-semibold capitalize !important;
}
</style>
