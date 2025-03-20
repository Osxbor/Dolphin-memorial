<template>
  <div class="card memorial-card">
    <div class="card-image" v-if="imageUrl">
      <figure class="image">
        <img :src="imageUrl" :alt="title">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h3 class="title is-4">{{ title }}</h3>
        <p>{{ description }}</p>
        <slot></slot>
      </div>
    </div>
    <footer class="card-footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    hasFooter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
}

.image {
  overflow: hidden;
}

.image img {
  transition: transform var(--transition-normal);
}

.card:hover .image img {
  transform: scale(1.05);
}
</style>

