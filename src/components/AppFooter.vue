<template>
    <footer>
      <p>Copyright &copy; {{ year }} By: Beatrise Babra</p>
    </footer>
  </template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>