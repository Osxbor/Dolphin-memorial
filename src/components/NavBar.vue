<template>
  <nav class="navbar" role="navigation" aria-label="navegación principal">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="title is-4">Delfín del Río Yangtsé</h1>
      </router-link>

      <a 
        role="button" 
        class="navbar-burger" 
        :class="{ 'is-active': isMenuActive }" 
        aria-label="menú" 
        aria-expanded="false" 
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Inicio</router-link>
        <router-link to="/about" class="navbar-item">Acerca de</router-link>
        <router-link to="/gallery" class="navbar-item">Galería</router-link>
        <router-link to="/conservation" class="navbar-item">Conservación</router-link>
        <router-link to="/timeline" class="navbar-item">Cronología</router-link>
        <router-link to="/resources" class="navbar-item">Recursos</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--background-color);
  box-shadow: var(--shadow-sm);
}

.navbar-item {
  color: var(--text-color);
  transition: color var(--transition-fast);
}

.navbar-item:hover {
  color: var(--primary-color);
}

.router-link-active {
  color: var(--primary-color);
  font-weight: bold;
}
</style>

