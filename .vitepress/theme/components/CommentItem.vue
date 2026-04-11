<template>
  <Waline :serverURL="serverURL" :path="path" :dark="dark" />
</template>

<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import '@waline/client/style';

const serverURL = 'https://api.zcservice.houlang.cloud/comment/90e6d97b81ea7b7eccc80c92be550f47';
const route = useRoute(); // 单独写
const path = computed(() => route.path);
const dark = 'html[class~="dark"]';
</script>

<style scoped>
[data-waline] {
  --waline-theme-color: var(--vp-c-brand);
  --waline-active-color: var(--vp-c-brand);
}

:deep(.wl-emoji-popup, .wl-gif-popup) {
  z-index: 99;
}
</style>