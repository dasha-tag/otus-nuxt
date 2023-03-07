<template>
  <pre>
    {{post}}
  </pre>
  <NuxtLink to="/">go home</NuxtLink>
</template>

<script setup>
import {useFetch, useRoute} from "nuxt/app"

const route = useRoute()

const {data: post} = useFetch(`/api/post/${route.params.id}`)

definePageMeta({
  layout: 'other',
})
</script>

<style scoped>

</style>
