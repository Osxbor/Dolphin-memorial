<template>
  <div>
    <HeroSection title="Acerca del Baiji" subtitle="La Historia del Delfín del Río Yangtsé" heroClass="is-info" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="content">
              <h2 class="title is-2">El Delfín del Río Yangtsé</h2>

              <p class="is-size-5">
                El Delfín del Río Yangtsé (Lipotes vexillifer), también conocido como Baiji, era un delfín de agua dulce
                que vivía exclusivamente en el Río Yangtsé en China. Fue uno de los cetáceos más amenazados
                del mundo antes de ser declarado funcionalmente extinto en 2006.
              </p>

              <figure class="image is-16by9 mb-5">
                <img src="../assets/img/about-1.jpeg" alt="Delfín del Río Yangtsé">
              </figure>

              <h3 class="title is-3">Biología y Características</h3>

              <p>
                El Baiji era un delfín relativamente pequeño, que típicamente medía entre 2,3 y 2,6 metros de longitud
                y pesaba alrededor de 100-105 kg. Tenía un hocico largo y estrecho con 31-36 pares de dientes
                tanto en la mandíbula superior como en la inferior. Su aleta dorsal era baja y triangular, y su
                coloración era
                gris azulada a gris por encima y blanca a blanco ceniza por debajo.
              </p>

              <p>
                A diferencia de muchas otras especies de delfines, el Baiji tenía mala visión debido a sus pequeños
                ojos.
                Dependía principalmente de la ecolocalización para navegar por las turbias aguas del Río Yangtsé y para
                localizar presas. La dieta del Baiji consistía principalmente en peces, particularmente pequeños peces
                que habitan en el fondo y anguilas de agua dulce.
              </p>

              <h3 class="title is-3">Hábitat y Distribución</h3>

              <p>
                El Baiji era endémico de los tramos medio e inferior del Río Yangtsé, desde Yichang hasta Shanghai,
                cubriendo aproximadamente 1.700 km del río. Prefería los canales principales del río y las
                desembocaduras
                de grandes afluentes, evitando secciones poco profundas o estrechas del río.
              </p>

              <p>
                Históricamente, el Baiji también se encontraba en algunos de los lagos más grandes conectados al
                Yangtsé,
                como el Lago Dongting y el Lago Poyang, pero para la década de 1990, su rango se había reducido
                significativamente
                debido a la degradación del hábitat y las actividades humanas.
              </p>

              <h3 class="title is-3">Significado Cultural</h3>

              <p>
                En la cultura china, el Baiji a menudo era referido como la "Diosa del Yangtsé" y era considerado
                un símbolo de paz y prosperidad. Según la leyenda, el Baiji era la reencarnación de una princesa
                que se había ahogado en el Río Yangtsé en lugar de casarse con un hombre al que no amaba.
              </p>

              <p>
                El Baiji también aparecía en la literatura y el arte chinos, y era considerado un tesoro nacional.
                Su extinción representa no solo una pérdida significativa para la biodiversidad sino también para el
                patrimonio cultural chino.
              </p>
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
  name: 'About',
  components: {
    HeroSection
  }
}
</script>
