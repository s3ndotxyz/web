<template>
  <div
    class="w-full min-h-[calc(100vh-204px)] py-8 md:py-[0px] flex flex-col justify-center items-center"
  >
    <div class="container max-w-5xl px-6">
      <h2 class="text-md text-center font-bold text-[#EE6F53] mb-4">
        Serverless that is
      </h2>
      <div class="grid md:grid-cols-2 gap-6 mt-12">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0 }"
        >
          <Feature>
            <template #icon>
              <RiDoorLockLine class="w-6 h-6 text-[#F96D4E]" />
            </template>
            <template #title>Secure</template>
            <template #description>
              Hardware-level security guarantees through Trusted Execution
              Environments (TEEs), ensuring your code and data remain protected.
            </template>
          </Feature>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
        >
          <Feature>
            <template #icon>
              <RiFileShield2Line class="w-6 h-6 text-[#F96D4E]" />
            </template>
            <template #title>Verifiable</template>
            <template #description>
              Cryptographic proof of correct execution, enabling transparent and
              trustless computation verification.
            </template>
          </Feature>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <Feature>
            <template #icon>
              <RiEarthLine class="w-6 h-6 text-[#F96D4E]" />
            </template>
            <template #title>Scalable</template>
            <template #description>
              Elastically scale your applications from zero to global scale with
              automatic resource provisioning.
            </template>
          </Feature>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <Feature>
            <template #icon>
              <RiFlashlightLine class="w-6 h-6 text-[#F96D4E]" />
            </template>
            <template #title>Performant</template>
            <template #description>
              Optimized runtime environment ensuring low latency and high
              throughput for your applications.
            </template>
          </Feature>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
import {
  RiDoorLockLine,
  RiFileShield2Line,
  RiEarthLine,
  RiFlashlightLine,
} from "@remixicon/vue";
</script>
