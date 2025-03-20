<template>
  <section class="hero is-medium" :class="heroClass">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">{{ title }}</h1>
        <h2 class="subtitle is-3">{{ subtitle }}</h2>
        <div v-if="hasButton" class="mt-5">
          <router-link :to="buttonLink" class="button is-primary is-large">{{ buttonText }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    heroClass: {
      type: String,
      default: 'is-primary'
    },
    hasButton: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Saber Más'
    },
    buttonLink: {
      type: String,
      default: '/about'
    }
  }
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}

.hero.is-primary {
  background-color: var(--primary-color);
}

.hero.is-info {
  background-color: var(--accent-color);
}

.hero.is-memorial {
  background: linear-gradient(to right, var(--dolphin-blue), var(--river-teal));
}

.hero-body {
  padding: var(--spacing-xxl) var(--spacing-md);
}

.title, .subtitle {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>

