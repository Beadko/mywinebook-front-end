<template>
  <app-header />
  <SearchBar :items="[
        'Amarone',
        'Barolo',
        'Moet Chandon',
        'Jacobs Creek',
        'Ripasso',
        'Veuve Cliquot',
    ]"
  />
  <router-view />
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  components: {
    AppHeader,
    SearchBar,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
