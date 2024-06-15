<script setup>
const appTitle = 'COMPAS'
const appContent = 'Проверьте штрафы и зарегестрируйтесь в 1 клик.'

useHead({
  title: appTitle,
  meta: [
    { name: 'description', content: appContent},
    { property: 'vk:image', content: '@/assets/images/hero/main-image.png' }
  ],
})

useSeoMeta({
  title: appTitle,
  ogTitle: appTitle,
  description: appContent,
  ogDescription: appContent,
  ogImage: '@/assets/images/hero/main-image.png',
  ogImageSecureUrl: '@/assets/images/hero/main-image.png',
  ogImageHeight: 630,
  ogImageWidth: 1200,
  twitterTitle: appTitle,
  twitterDescription: appContent,
  twitterImage: '@/assets/images/hero/main-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <nuxt-layout />
</template>
