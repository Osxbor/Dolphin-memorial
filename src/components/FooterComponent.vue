<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Memorial del Delfín del Río Yangtsé</strong> - Recordando a <em>Lipotes vexillifer</em>
      </p>
      <p>
        <small>
          Este sitio web está dedicado a crear conciencia sobre especies extintas y la importancia de la conservación.
        </small>
      </p>
      <p>
        <small>© {{ currentYear }} Memorial del Delfín del Río Yangtsé</small>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--memorial-gray);
  padding: var(--spacing-lg) var(--spacing-md);
}
</style>

