<template>
  <div>
    <HeroSection
      title="Cronología de la Extinción"
      subtitle="La Historia del Declive del Delfín del Río Yangtsé"
      heroClass="is-info"
    />
    
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="content">
              <p class="is-size-5 has-text-centered mb-6">
                Esta cronología traza la historia del Delfín del Río Yangtsé desde su descubrimiento por 
                científicos occidentales hasta su extinción funcional en 2006.
              </p>
              
              <div class="timeline">
                <div class="timeline-item" v-for="(event, index) in timelineEvents" :key="index">
                  <div class="timeline-marker is-primary"></div>
                  <div class="timeline-content">
                    <p class="heading">{{ event.year }}</p>
                    <div class="box">
                      <h4 class="title is-4">{{ event.title }}</h4>
                      <p>{{ event.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="notification is-warning mt-6">
                <p class="has-text-centered">
                  <strong>Nota:</strong> Aunque el Baiji fue declarado funcionalmente extinto en 2006, ha habido 
                  avistamientos no confirmados desde entonces. Sin embargo, incluso si quedan algunos individuos, la población es 
                  demasiado pequeña para recuperarse sin intervención humana.
                </p>
              </div>
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
  name: 'Timeline',
  components: {
    HeroSection
  },
  data() {
    return {
      timelineEvents: [
        {
          year: '1918',
          title: 'Descubrimiento Científico',
          description: 'El Baiji fue descrito científicamente por primera vez por Charles M. Hoy, un naturalista estadounidense que recolectó un espécimen para el Museo Americano de Historia Natural.'
        },
        {
          year: '1950s',
          title: 'Comienza el Declive de la Población',
          description: 'La población de Baiji comenzó a disminuir significativamente a medida que la industrialización de China se aceleró después de la fundación de la República Popular China en 1949.'
        },
        {
          year: '1970s',
          title: 'Rápida Industrialización',
          description: 'La rápida industrialización a lo largo del Río Yangtsé llevó a un aumento de la contaminación, el tráfico de embarcaciones y las actividades pesqueras, amenazando aún más a la población de Baiji.'
        },
        {
          year: '1979',
          title: 'Estado de Especie Protegida',
          description: 'El Baiji fue declarado especie protegida por el gobierno chino, pero la aplicación de medidas de protección fue limitada.'
        },
        {
          year: '1980s',
          title: 'Comienzan los Esfuerzos de Conservación',
          description: 'La atención internacional se centró en la difícil situación del Baiji, y comenzaron los esfuerzos de conservación, incluido el establecimiento del Delfinario Baiji en Wuhan.'
        },
        {
          year: '1986',
          title: 'Estudio de Población',
          description: 'Un estudio exhaustivo estimó que solo quedaban 300 Baijis en estado salvaje, clasificándolo como en peligro crítico.'
        },
        {
          year: '1994',
          title: 'Reserva del Meandro Tian-e-Zhou',
          description: 'Se estableció el Meandro Tian-e-Zhou como reserva semi-natural para el Baiji, pero ningún delfín fue reubicado allí con éxito.'
        },
        {
          year: '1997',
          title: 'Construcción de la Presa de las Tres Gargantas',
          description: 'Comenzó la construcción de la Presa de las Tres Gargantas, alterando aún más el ecosistema del Río Yangtsé y el hábitat del Baiji.'
        },
        {
          year: '1997-1999',
          title: 'Colapso de la Población',
          description: 'Los estudios durante este período encontraron solo 13 Baijis, lo que indica un colapso catastrófico de la población.'
        },
        {
          year: '2002',
          title: 'Muere el Último Baiji en Cautiverio',
          description: 'Qi Qi, el último Baiji en cautiverio, murió en el Delfinario Baiji después de vivir en cautiverio durante 22 años.'
        },
        {
          year: '2006',
          title: 'Expedición No Encuentra Baijis',
          description: 'La Expedición de Delfines de Agua Dulce del Yangtsé, un estudio de seis semanas que cubrió todo el rango del Baiji, no logró encontrar ningún delfín.'
        },
        {
          year: 'Agosto 2007',
          title: 'Declarado Funcionalmente Extinto',
          description: 'Los científicos declararon al Baiji funcionalmente extinto, convirtiéndolo en la primera especie de cetáceo llevada a la extinción por actividades humanas.'
        },
        {
          year: '2016',
          title: 'Posible Avistamiento',
          description: 'Un posible avistamiento de Baiji fue reportado por un equipo de conservacionistas aficionados, pero el avistamiento no pudo ser verificado científicamente.'
        },
        {
          year: 'Presente',
          title: 'Legado y Lecciones',
          description: 'La extinción del Baiji sirve como una advertencia sobre el impacto de las actividades humanas en los ecosistemas de agua dulce y la necesidad de esfuerzos de conservación proactivos.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-marker {
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: var(--primary-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  z-index: 1;
}

.timeline-item:nth-child(even) .timeline-marker {
  left: -8px;
}

.timeline-content {
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
}

.timeline-item:nth-child(odd) .timeline-content {
  text-align: right;
}

@media screen and (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .timeline-item:nth-child(even) {
    left: 0;
  }

  .timeline-marker {
    left: 15px;
    right: auto;
  }

  .timeline-item:nth-child(odd) .timeline-content {
    text-align: left;
  }

  .timeline-item:nth-child(even) .timeline-marker {
    left: 15px;
  }
}
</style>

