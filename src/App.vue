<template>
  <div class="app-container">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

