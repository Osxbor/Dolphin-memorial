<template>
  <div>
    <HeroSection title="El Delfín del Río Yangtsé" subtitle="Recordando al Lipotes vexillifer" heroClass="is-memorial"
      :hasButton="true" buttonText="Conoce al Baiji" buttonLink="/about" />

    <section class="section memorial-section">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-6">Un Memorial al Baiji</h2>

        <div class="columns is-multiline">
          <div class="column is-12 is-8-desktop is-offset-2-desktop mb-6">
            <div class="content has-text-centered">
              <p class="is-size-5">
                El Delfín del Río Yangtsé, también conocido como Baiji, fue declarado funcionalmente extinto en 2006.
                Este sitio web sirve como un memorial digital a esta notable especie y tiene como objetivo crear
                conciencia sobre la importancia de los esfuerzos de conservación para prevenir tragedias similares.
              </p>
            </div>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-4">
            <InfoCard title="Acerca del Baiji"
              description="Aprende sobre la biología, comportamiento y hábitat del Delfín del Río Yangtsé."
              imageUrl="/src/assets/img/about-1.jpeg" :hasFooter="true">
              <template v-slot:footer>
                <router-link to="/about" class="card-footer-item">Saber Más</router-link>
              </template>
            </InfoCard>
          </div>

          <div class="column is-4">
            <InfoCard title="Galería de Fotos"
              description="Ver imágenes del Baiji y su hábitat natural en el Río Yangtsé."
              imageUrl="/src/assets/img/galeries-1.jpg" :hasFooter="true">
              <template v-slot:footer>
                <router-link to="/gallery" class="card-footer-item">Ver Galería</router-link>
              </template>
            </InfoCard>
          </div>

          <div class="column is-4">
            <InfoCard title="Lecciones de Conservación"
              description="Comprende los factores que llevaron a la extinción y lo que podemos aprender de esta tragedia."
              imageUrl="/src/assets/img/learns-1.jpg" :hasFooter="true">
              <template v-slot:footer>
                <router-link to="/conservation" class="card-footer-item">Leer Más</router-link>
              </template>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>

    <section class="section memorial-bg">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <h3 class="title is-3">Cronología de la Extinción</h3>
            <p class="mb-4">
              El declive del Delfín del Río Yangtsé ocurrió durante varias décadas, con múltiples factores que
              contribuyeron
              a su extinción.
              Explora nuestra cronología interactiva para entender la historia y las circunstancias que llevaron a la
              pérdida de esta especie única.
            </p>
            <router-link to="/timeline" class="button is-primary">Ver Cronología</router-link>
          </div>
          <div class="column is-6">
            <figure class="image">
              <img src="/src/assets/img/time-line-1.jpg" alt="Ilustración de la cronología">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-6">Recursos y Educación</h2>
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="content has-text-centered">
              <p class="is-size-5 mb-5">
                Descubre recursos educativos, artículos científicos e iniciativas de conservación enfocadas en
                proteger especies acuáticas en peligro y prevenir futuras extinciones.
              </p>
              <router-link to="/resources" class="button is-info is-medium">Explorar Recursos</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import InfoCard from '../components/InfoCard.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    InfoCard
  }
}
</script>
