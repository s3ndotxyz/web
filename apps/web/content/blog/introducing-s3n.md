---
title: "Slipstream: A serverless TEE runtime"
description: "Serverless compute you can trust. Secure, stateless, and actually verifiable."
date: "2025-06-01"
image: "/blog/intro-banner_.png"
tags: [serverless, secure compute, confidential compute, TEE, wasm]
---

We’ve been quiet for a long time — building, rethinking, and iterating on what secure compute should look like in an adversarial world.

Today, we’re introducing **Slipstream**, a **WMM (WASM Module Monitor)**, the first component of our serverless compute platform powered by trusted execution environments.

A WMM is a minimal, high-performance runtime built to verify, execute, and monitor WASM functions within hardware-secured enclaves like Intel SGX. It’s optimized for:

- [x] **Secure, stateless edge functions**
- [x] **End-to-end attestation of execution**
- [x] **Isolated, deterministic compute**
- [ ] **Statefulness via a runtime KV store**

Whether you're building zero-trust microservices or sensitive apps that need hard guarantees about where and how your code runs, Slipstream provides a programmable foundation you can trust.

We’re just getting started.

If you’re a systems engineer, cryptography nerd, or developer pushing the limits of privacy-preserving compute, reach out to [ewan@s3n.xyz]. We’ll be publishing the technical docs and showing more of the architecture soon.

Follow along, and welcome to **S3N**.
