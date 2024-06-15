<script setup>
const appTitle = 'COMPAS'
const appContent = 'Проверьте штрафы и зарегестрируйтесь в 1 клик.'

useHead({
  title: appTitle,
  meta: [
    { name: 'description', content: appContent},
    { property: 'vk:image', content: '/preview.png' },
    { property: 'og:image', content: '/preview.png' }
  ],
})

useSeoMeta({
  title: appTitle,
  ogTitle: appTitle,
  description: appContent,
  ogDescription: appContent,
  ogImage: '/preview.png',
  ogImageSecureUrl: '/preview.png',
  ogImageHeight: 630,
  ogImageWidth: 1200,
  twitterTitle: appTitle,
  twitterDescription: appContent,
  twitterImage: '/preview.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <nuxt-layout />
</template>
