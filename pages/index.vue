<template>
  <div>
    <p v-if="pending">Loading...</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        {{post.title}} <NuxtLink :to="`/${post.id}`">go to post</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useLazyFetch} from "nuxt/app"

const {data: posts, pending} = await useLazyFetch('/api/posts')
</script>
