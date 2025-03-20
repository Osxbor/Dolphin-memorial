<template>
  <div>
    <HeroSection title="Galería de Fotos" subtitle="Imágenes del Delfín del Río Yangtsé" heroClass="is-primary" />

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12 mb-5">
            <div class="content has-text-centered">
              <p class="is-size-5">
                Esta galería contiene algunas de las pocas fotografías e ilustraciones del Delfín del Río Yangtsé.
                Debido a su rareza y a las aguas turbias de su hábitat, la documentación fotográfica del Baiji es
                limitada.
              </p>
            </div>
          </div>

          <div class="column is-4" v-for="(image, index) in images" :key="index">
            <div class="card memorial-card gallery-card mb-5">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="image.url" :alt="image.caption" @click="openModal(index)">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p>{{ image.caption }}</p>
                  <p><small>{{ image.credit }}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <p class="image">
          <img :src="currentImage.url" :alt="currentImage.caption">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="cerrar" @click="closeModal"></button>
      <button class="modal-nav-left" @click="prevImage" v-if="images.length > 1">
        <span class="icon">
          <i class="fas fa-chevron-left"></i>
        </span>
      </button>
      <button class="modal-nav-right" @click="nextImage" v-if="images.length > 1">
        <span class="icon">
          <i class="fas fa-chevron-right"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'

export default {
  name: 'Gallery',
  components: {
    HeroSection
  },
  data() {
    return {
      modalActive: false,
      currentImageIndex: 0,
      images: [
        {
          url: '/src/assets/img/dolphin-1990.jpg',
          caption: 'Una rara fotografía de un delfín Baiji en el Río Yangtsé, tomada en la década de 1990.',
          credit: 'Foto: Instituto de Hidrobiología, Academia China de Ciencias'
        },
        {
          url: '/src/assets/img/Qiqi-Chinese_River_Dolphin_Baiji.jpg',
          caption: 'Qiqi, uno de los últimos delfines Baiji conocidos mantenidos en cautiverio en el Delfinario Baiji.',
          credit: 'Foto: Instituto de Hidrobiología de Wuhan'
        },
        {
          url: '/src/assets/img/science-dolphin.png',
          caption: 'Ilustración científica del Delfín del Río Yangtsé mostrando sus características distintivas.',
          credit: 'Ilustración: Sociedad de Conservación de la Vida Silvestre'
        },
        {
          url: '/src/assets/img/river-habitat.jpg',
          caption: 'El Río Yangtsé, el único hábitat donde se encontraba el Baiji.',
          credit: 'Foto: National Geographic'
        },
        {
          url: '/src/assets/img/dolphin-conservated.jpg',
          caption: 'Un espécimen de Baiji conservado en el Instituto de Hidrobiología en Wuhan, China.',
          credit: 'Foto: Institución Smithsonian'
        },
        {
          url: '/src/assets/img/qiqi-dolphin.jpg',
          caption: 'Fotografía histórica de un delfín Baiji de los esfuerzos de conservación de la década de 1980.',
          credit: 'Foto: Archivos WWF'
        }
      ]
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  },
  methods: {
    openModal(index) {
      this.currentImageIndex = index
      this.modalActive = true
      document.documentElement.classList.add('is-clipped')
    },
    closeModal() {
      this.modalActive = false
      document.documentElement.classList.remove('is-clipped')
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
.gallery-card .image img {
  cursor: pointer;
}

.modal-content {
  max-width: 80%;
}

.modal-nav-left,
.modal-nav-right {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  border-radius: 50%;
}

.modal-nav-left {
  left: 1rem;
}

.modal-nav-right {
  right: 1rem;
}
</style>
