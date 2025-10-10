<template>
  <div
    class="px-4 min-w-[calc(100%-1rem)] md:min-w-[calc(100%-4rem)] md:px-16 py-9 md:py-11 flex flex-col justify-center items-center border-b border-[#EE6F53]/20 border-dashed"
  >
    <div class="flex flex-col md:flex-row justify-between gap-16">
      <div class="flex flex-col items-start gap-3">
        <h2 class="flex flex-col w-fit uppercase">
          <span class="text-[#F96D4E] flex justify-between">
            <span class="text-3xl md:text-4xl">Confidential</span>
          </span>
          <span class="text-4xl md:text-7xl text-[#F96D4E]">Execution</span>
        </h2>
        <p class="text-[1.125rem] text-left text-[#fff] mb-4">
          Enable your edge instances to collaboratively process sensitive
          datasets that are otherwise siloed. Built with TEEs, our runtime
          ensures your supply-chain is kept protected.
        </p>
        <nuxt-link
          class="h-[36px] w-[15rem] btn border-[0.5px] border-[#EE6F53] mx-1 shadow hidden md:flex"
          to="https://cal.com/ewanretor/slipstream-live"
        >
          <span class="uppercase font-bold text-[#EE6F53]">book a demo</span>
        </nuxt-link>
      </div>
      <div class="grid lg:grid-cols-2 gap-x-11 gap-y-10">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0 }"
        >
          <Feature>
            <template #icon>
              <font-awesome-icon
                icon="fa-solid fa-location-crosshairs"
                class="w-6 h-6 text-[#F96D4E]"
              />
            </template>
            <template #title>Co-ordinated</template>
            <template #description>
              Multiple workload instances can securely share and process data in
              real-time. Built-in message queues and multi-party primitives
              enable seamless distributed computing without compromising data
              isolation.
            </template>
          </Feature>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <Feature>
            <template #icon>
              <font-awesome-icon
                icon="fa-solid fa-plug-circle-check"
                class="w-6 h-6 text-[#F96D4E]"
              />
            </template>
            <template #title>Persistent</template>
            <template #description>
              We go beyond stateless functions with in-runtime key-value stores,
              websocket connections, and scheduling to enable stateful
              workloads. Your distributed instances can maintain shared state
              and co-ordinate complex multistep processes.
            </template>
          </Feature>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          class="resilient"
        >
          <Feature>
            <template #icon>
              <font-awesome-icon
                icon="fa-solid fa-bolt"
                class="w-6 h-6 text-[#F96D4E]"
              />
            </template>
            <template #title>Resilient</template>
            <template #description>
              We only rely on TEE isolation for execution life-cycles,
              decoupling key-management and sandboxing to ensure your data
              remain protected even from privileged access or zero-day exploits.
            </template>
          </Feature>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <Feature>
            <template #icon>
              <font-awesome-icon
                icon="fa-solid fa-layer-group"
                class="w-6 h-6 text-[#F96D4E]"
              />
            </template>
            <template #title>Compliant</template>
            <template #description>
              Hardware-enforced data isolation simplifies compliance with GDPR,
              HIPAA, and other industry regulations for environments where
              compliance is cut-throat.
            </template>
          </Feature>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
</script>

<!-- <style scoped>
.resilient {
  grid-column-end: span 2;
  grid-row-end: span 1;
}
</style> -->
