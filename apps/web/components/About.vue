<template>
  <div
    class="w-full px-4 md:px-16 py-9 md:py-11 flex flex-col justify-center items-center"
  >
    <div class="flex flex-col md:flex-row justify-between gap-16">
      <div class="flex flex-col items-start gap-3">
        <h2 class="flex flex-col w-fit uppercase">
          <span class="text-[#F96D4E] flex justify-between">
            <span class="text-3xl md:text-4xl">Global</span>
          </span>
          <span class="text-4xl md:text-7xl text-[#F96D4E]">Compute</span>
        </h2>
        <p class="text-[1.125rem] text-left text-[#fff] mb-4">
          S3N is the go-to platform for deploying and managing secure
          applications on the edge, secured by TEEs.
        </p>
        <nuxt-link
          class="h-[36px] bg-[#EE6F53] mx-1 btn shadow hidden md:flex"
          to="https://t.me/lordewan"
        >
          integrate us
        </nuxt-link>
      </div>
      <div class="grid md:grid-cols-2 gap-x-11 gap-y-10">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0 }"
        >
          <Feature>
            <template #icon>
              <RiDoorLockLine class="w-6 h-6 text-[#F96D4E]" />
            </template>
            <template #title>Confidential</template>
            <template #description>
              The core runtime orchestrates WASM functions within Intel SGX,
              ensuring no participant of the network has access to code, data
              and runtime lifecylces.
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
            <template #title>Modular</template>
            <template #description>
              Components of the network are given specialisation of functions to
              reduce the attack surface, isolating compromised participants in
              the case of a zero day incident.
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
            <template #title>Verifiable</template>
            <template #description>
              Nodes are reproducible and we've shifted some element of trust
              on-chain, where anyone can attest to the integrity of nodes and
              their participation in the network.
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
            <template #description
              >S3N is designed to have low latency and high availability, to
              help you scale with minimal trade offs on security and compliance.
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
