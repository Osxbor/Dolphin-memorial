<template>
  <div>
    <HeroSection title="Recursos y Educación" subtitle="Materiales de Aprendizaje y Recursos de Conservación"
      heroClass="is-primary" />

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12 mb-5">
            <div class="content has-text-centered">
              <p class="is-size-5">
                Esta página proporciona recursos educativos, artículos científicos e información sobre iniciativas
                de conservación enfocadas en proteger especies acuáticas en peligro y prevenir futuras extinciones.
              </p>
            </div>
          </div>

          <div class="column is-4">
            <h3 class="title is-3">Recursos Educativos</h3>
            <div class="content">
              <ul class="resource-list">
                <li v-for="(resource, index) in educationalResources" :key="index">
                  <a :href="resource.url" target="_blank" rel="noopener noreferrer">
                    {{ resource.title }}
                  </a>
                  <p>{{ resource.description }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="column is-4">
            <h3 class="title is-3">Artículos Científicos</h3>
            <div class="content">
              <ul class="resource-list">
                <li v-for="(paper, index) in scientificPapers" :key="index">
                  <a :href="paper.url" target="_blank" rel="noopener noreferrer">
                    {{ paper.title }}
                  </a>
                  <p>{{ paper.authors }}</p>
                  <p><em>{{ paper.journal }}</em></p>
                </li>
              </ul>
            </div>
          </div>

          <div class="column is-4">
            <h3 class="title is-3">Organizaciones de Conservación</h3>
            <div class="content">
              <ul class="resource-list">
                <li v-for="(org, index) in conservationOrgs" :key="index">
                  <a :href="org.url" target="_blank" rel="noopener noreferrer">
                    {{ org.name }}
                  </a>
                  <p>{{ org.description }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="columns mt-6">
          <div class="column is-8 is-offset-2">
            <h3 class="title is-3 has-text-centered">Contáctanos</h3>
            <div class="box">
              <p class="has-text-centered mb-4">
                Si tienes preguntas, sugerencias o te gustaría contribuir a este proyecto memorial,
                por favor completa el formulario a continuación.
              </p>
              <form @submit.prevent="submitForm">
                <div class="field">
                  <label class="label">Nombre</label>
                  <div class="control">
                    <input class="input" type="text" v-model="contactForm.name" placeholder="Tu nombre">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Correo Electrónico</label>
                  <div class="control">
                    <input class="input" type="email" v-model="contactForm.email" placeholder="Tu correo electrónico">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Asunto</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="contactForm.subject">
                        <option value="">Selecciona un asunto</option>
                        <option value="question">Pregunta</option>
                        <option value="suggestion">Sugerencia</option>
                        <option value="contribution">Contribución</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Mensaje</label>
                  <div class="control">
                    <textarea class="textarea" v-model="contactForm.message" placeholder="Tu mensaje"></textarea>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-fullwidth">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'

export default {
  name: 'Resources',
  components: {
    HeroSection
  },
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      educationalResources: [
        {
          title: 'Guía Educativa del Delfín del Río Yangtsé',
          description: 'Una guía completa para educadores sobre el Baiji y su extinción.',
          url: '#'
        },
        {
          title: 'Conservación de Delfines de Agua Dulce',
          description: 'Materiales educativos sobre especies de delfines de agua dulce en todo el mundo y esfuerzos de conservación.',
          url: '#'
        },
        {
          title: 'Protección de Ecosistemas Fluviales',
          description: 'Recursos para entender y proteger los ecosistemas fluviales y su biodiversidad.',
          url: '#'
        }
      ],
      scientificPapers: [
        {
          title: "El rápido descenso del Baiji hacia la extinción: ¿Fue la conservación demasiado escasa y tardía?",
          authors: 'Turvey, S.T., et al.',
          journal: 'Conservation Biology, 21(5), 1269-1271 (2007)',
          url: '#'
        },
        {
          title: 'Extinción de una especie: El Delfín del Río Yangtsé',
          authors: 'Zhou, K., & Wang, X.',
          journal: 'Aquatic Conservation: Marine and Freshwater Ecosystems, 18(5), 612-618 (2008)',
          url: '#'
        },
        {
          title: 'Evaluación retrospectiva del estado de conservación del Baiji',
          authors: 'Turvey, S.T., et al.',
          journal: 'Biology Letters, 3(5), 537-540 (2007)',
          url: '#'
        }
      ],
      conservationOrgs: [
        {
          name: 'Fondo Mundial para la Naturaleza (WWF)',
          description: 'Trabajando para proteger especies en peligro y sus hábitats en todo el mundo.',
          url: 'https://www.worldwildlife.org/'
        },
        {
          name: 'Unión Internacional para la Conservación de la Naturaleza (UICN)',
          description: 'La autoridad mundial sobre el estado del mundo natural y las medidas necesarias para salvaguardarlo.',
          url: 'https://www.iucn.org/'
        },
        {
          name: 'Conservación de Ballenas y Delfines (WDC)',
          description: 'Una organización benéfica global líder dedicada a la conservación y protección de ballenas y delfines.',
          url: 'https://us.whales.org/'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.resource-list {
  list-style-type: none;
  padding: 0;
}

.resource-list li {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.resource-list li:last-child {
  border-bottom: none;
}

.resource-list a {
  font-weight: bold;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.h-100 {
  height: 100%;
}
</style>
