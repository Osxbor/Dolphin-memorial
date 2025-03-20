<template>
  <div>
    <HeroSection title="Lecciones de Conservación" subtitle="Entendiendo la Extinción del Baiji"
      heroClass="is-primary" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="content">
              <h2 class="title is-2">Factores que Llevaron a la Extinción</h2>

              <p class="is-size-5">
                La extinción del Delfín del Río Yangtsé sirve como un claro recordatorio del impacto devastador
                que las actividades humanas pueden tener en la vida silvestre. Entender los factores que llevaron a su
                desaparición es crucial para prevenir tragedias similares en el futuro.
              </p>

              <div class="box memorial-bg mb-5">
                <h3 class="title is-4">Amenazas Clave que Llevaron a la Extinción</h3>
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <div class="notification is-danger">
                      <p class="has-text-weight-bold">Prácticas de Pesca</p>
                      <p>Pesca insostenible, incluyendo pesca eléctrica, anzuelos rodantes y redes de enmalle</p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="notification is-danger">
                      <p class="has-text-weight-bold">Tráfico de Embarcaciones</p>
                      <p>Aumento del tráfico de embarcaciones causando colisiones y perturbación acústica</p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="notification is-danger">
                      <p class="has-text-weight-bold">Degradación del Hábitat</p>
                      <p>Construcción de presas, contaminación y modificación del río</p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="notification is-danger">
                      <p class="has-text-weight-bold">Contaminación</p>
                      <p>Contaminación por desechos industriales, agrícolas y municipales</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="title is-3">El Impacto de la Presa de las Tres Gargantas</h3>

              <p>
                La construcción de la Presa de las Tres Gargantas, completada en 2006, tuvo un impacto significativo en
                el
                ecosistema del Río Yangtsé. Si bien la presa proporciona energía hidroeléctrica y control de
                inundaciones, también:
              </p>

              <ul>
                <li>Alteró los patrones de flujo de agua críticos para el hábitat del Baiji</li>
                <li>Creó barreras que fragmentaron la población de delfines</li>
                <li>Cambió los patrones de sedimentación y la calidad del agua</li>
                <li>Aumentó el tráfico de embarcaciones en el río</li>
              </ul>

              <figure class="image is-16by9 mb-5">
                <img src="/src/assets/img/hover.jpg" alt="Presa de las Tres Gargantas">
                <figcaption>La Presa de las Tres Gargantas en el Río Yangtsé</figcaption>
              </figure>

              <h3 class="title is-3">Esfuerzos de Conservación</h3>

              <p>
                Para cuando comenzaron los esfuerzos serios de conservación en la década de 1980, la población de Baiji
                ya había disminuido a números críticamente bajos. A pesar de estos esfuerzos, incluyendo:
              </p>

              <div class="columns">
                <div class="column is-6">
                  <div class="box">
                    <h4 class="title is-5">Conservación Ex-situ</h4>
                    <p>
                      Intentos de establecer una población reproductora en cautiverio en el Delfinario Baiji en el
                      Instituto de Hidrobiología en Wuhan. Desafortunadamente, estos esfuerzos no tuvieron éxito debido
                      a la dificultad de mantener Baijis en cautiverio y a la población ya pequeña.
                    </p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="box">
                    <h4 class="title is-5">Reservas Protegidas</h4>
                    <p>
                      Establecimiento de reservas naturales en el Río Yangtsé, incluyendo el Meandro Tian-e-Zhou,
                      que estaba destinado a ser una reserva semi-natural para el Baiji. Sin embargo, ningún Baiji
                      fue reubicado con éxito en esta reserva antes de la extinción.
                    </p>
                  </div>
                </div>
              </div>

              <h3 class="title is-3">Lecciones para la Conservación Futura</h3>

              <p>
                La extinción del Baiji ofrece varias lecciones importantes para los esfuerzos de conservación:
              </p>

              <ol>
                <li>
                  <strong>La Intervención Temprana es Crítica:</strong> Los esfuerzos de conservación deben comenzar
                  antes de que una especie
                  alcance un estado críticamente amenazado.
                </li>
                <li>
                  <strong>Enfoque Ecosistémico:</strong> La conservación debe abordar todo el ecosistema, no solo la
                  especie en sí.
                </li>
                <li>
                  <strong>Equilibrar Desarrollo y Conservación:</strong> El desarrollo económico debe equilibrarse con
                  la protección ambiental.
                </li>
                <li>
                  <strong>Cooperación Internacional:</strong> La conservación efectiva requiere coordinación entre
                  gobiernos, científicos y organizaciones de conservación.
                </li>
                <li>
                  <strong>Conciencia Pública:</strong> Crear conciencia pública sobre especies en peligro es esencial
                  para obtener apoyo para los esfuerzos de conservación.
                </li>
              </ol>
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
  name: 'Conservation',
  components: {
    HeroSection
  }
}
</script>
