<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import { setAppAccessTitle } from '@/use/useAccess'

const store = useMainStore()

setAppAccessTitle()

onMounted(() => {
  store.parseTasks()
})
</script>

<style scoped></style>
