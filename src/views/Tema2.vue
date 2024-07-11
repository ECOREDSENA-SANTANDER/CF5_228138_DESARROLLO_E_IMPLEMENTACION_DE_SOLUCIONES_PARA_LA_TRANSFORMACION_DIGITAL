<template lang="pug">
  .curso-main-container.pb-3.tema2
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 Derechos de autor
      
      .row(data-aos="fade-left")
        p Es la rama de la propiedad intelectual que reconoce en cabeza de los autores ciertas prerrogativas morales y patrimoniales sobre sus obras artísticas y literarias, que sean originales y susceptibles de ser divulgadas o reproducidas por cualquier medio.
        p Los derechos conexos, por otro lado, son aquellos derechos reconocidos a los artistas, intérpretes o ejecutantes por los productores de fonogramas y los organismos de radiodifusión sobre sus interpretaciones, fonogramas o emisiones de radiodifusión. #[b La regulación del derecho de autor y los derechos conexos se encuentra principalmente en la Ley 23 de 1982 y la Decisión Andina 351 de 1993].
        p Colombia se rige por la normatividad establecida en la Ley 23 de 1982, sobre los derechos de autor, en la cual se indica: 

      .row.justify-content-center.align-items-center(data-aos="fade-left").p-2
      .col-12
      .container.tarjeta.fondo-banner.p-4.p-md-5
        SlyderA
          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Art. 1º. 
              p.mb-lg-0.mb-3 Los autores de obras literarias, científicas y artísticas gozarán de protección para sus obras. 
            .col-lg-5.col-9
              img.mb-0(alt="" src="@/assets/curso/tema2/01.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Art. 2º.
              p.mb-lg-0.mb-3 Los derechos del autor recaen sobre las obras científicas, literarias y artísticas, las cuales comprenden todas las creaciones del espíritu en el campo científico, literario y artístico, cualquiera que sea el modo o forma de expresión y cualquiera que sea su destinación.
            .col-lg-5.col-9
              img.mb-0(alt="" src="@/assets/curso/tema2/02.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 
              p.mb-lg-0.mb-3 Al hilo de lo anterior, el término derecho de autor, tal y como se contempla hoy en la legislación y en las normas internacionales sobre la materia, comprendería fundamentalmente dos aspectos:<br><br>
              p ● El aspecto patrimonial.
              p ● El aspecto moral.
            .col-lg-5.col-9
              img.mb-0(alt="" src="@/assets/curso/tema2/03.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 
              p.mb-lg-0.mb-3 Combinando estos dos aspectos, se puede decir que el derecho de autor es aquella facultad que tiene una persona para el disfrute y explotación económica de una obra literaria, artística o científica, creada por el mismo, así como el derecho a decidir sobre su divulgación, sobre el respeto a su integridad y sobre las demás consecuencias inherentes a la paternidad de esta.
            .col-lg-5.col-9
              img.mb-0(alt="" src="@/assets/curso/tema2/04.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 
              p.mb-lg-0.mb-3 Aunque el derecho de autor es inescindible (no se puede dividir), tiene un contenido plural de facultades: <br><br>
              p ● Las patrimoniales y las personales. 
            .col-lg-5.col-9
              img.mb-0(alt="" src="@/assets/curso/tema2/05.png")
        
      p <br> En el derecho de autor, la ley protege al autor de la obra, declarando a favor de él el derecho que posee. En cambio, en el sistema de copyright, la ley protegerá al autor cuando cumpla con una serie de formalidades establecidas por esta para ello.  

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-12
          .row.fondo-rosado.justify-content-center.align-items-center
            .col.lg-7
              br
              p.px-4 En este orden de ideas, en segundo momento, se encuentra el copyright principalmente. No obstante, es una mezcla de ambos, debido a que protege los derechos morales, que son los que le confieren al autor la paternidad y la integridad de la obra como suya, mientras que en el sistema de copyright se ha delegado a los tribunales que intervienen en el derecho moral.  
              p.px-4 El derecho de autor es esencialmente individualista, sosteniendo a éste como un derecho personal e inalienable del autor; persona física para controlar el uso de las obras de creación. 
            .col-lg-4.col-9.py-4
              img(src="@/assets/curso/tema2/06.png")
      .row 
        br
        p <br><br>Para la comprensión de los derechos de autor es necesario tener en cuenta:
      .row.justify-content-center(data-aos="fade-left").p-2
        TabsB.fondo-amarillo
          .py-4.py-md-5(titulo="Características derechos de autor." :icono="require('@/assets/curso/tema2/reglas.svg')")
            .row.justify-content-center(data-aos="fade-left")
              .col-md-6.mb-4.mb-md-0
                p <br>● El derecho de autor no es un derecho primordial, como sí lo es el derecho a la protección de datos de carácter personal.
                p <br>● Es un derecho de propiedad y de exclusividad, ya que configura una distinción sobre una obra concreta.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/tema2/001.png', alt='Texto que describa la imagen')

          .py-4.py-md-5(titulo="Independientes y compatibles." :icono="require('@/assets/curso/tema2/reglas.svg')")
            .row.justify-content-center.align-items-center(data-aos="fade-left")
              .col-md-6.mb-4.mb-md-0
                p <br>● La propiedad y otros derechos que tengan por objeto la cosa material a la que está incorporada la creación intelectual. 
                p <br>● Los derechos de propiedad industrial que puedan existir sobre la obra.            
              .col-md-4
                figure
                  img(src='@/assets/curso/tema2/002.png', alt='Texto que describa la imagen')
          
          .py-4.py-md-5(titulo="¿Qué tipo de obras protege el Derecho de Autor?" :icono="require('@/assets/curso/tema2/reglas.svg')")
            .row.justify-content-center(data-aos="fade-left")
              .col-lg-4
                  ol.lista-ol.p-4
                    li 
                      | ● Literarias
                    li  
                      | ● Musicales, con o sin letra
                    li 
                      | ● Dramática
                    li 
                      | ● Danza 
                    li 
                      | ● Pictóricas o de dibujo
                    li  
                      | ● Escultóricas y de carácter plástico
                    li 
                      | ● Caricatura e historieta
                    li 
                      | ●  Arquitectónicas 
                  
              
              .col-lg-4
                  ol.lista-ol.p-4
                    li 
                      | ● Cinematográficas y audiovisuales
                    li  
                      | ● Programas de radio y TV
                    li 
                      | ● Programas de cómputo
                    li 
                      | ● Fotográficas 
                    li 
                      | ● Obras de compilación
                    li  
                      | ● Obras de arte aplicado 
                      | (incluyen diseño gráfico o textil)
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema2/003.png', alt='Texto que describa la imagen')
            
            p.px-4 Todas aquellas que por su analogía se logren incluir en la rama afín a su naturaleza.

      br
      p <br>Con el ánimo de que pueda comprender de manera integral los principios y el concepto de los derechos de autor se sugiere revisar el siguiente video:

      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/0HzR16QhGNI" title="Derechos de autor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Derechos de autor
      br 
      .row.justify-content-around.align-items-center
        .col-10       
          .row.justify-content-around.align-items-center.BGR07.p-3
            .col-lg-2.col-sm-3.col-4
              img.w-75(src='@/assets/curso/tema2/link.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h4.text-white.mb-1 Principios básicos del derecho de autor y los derechos conexos
                  p.text-white Para ampliar el tema sobre derechos de autor se invita a leer el documento de la Organización Mundial de la Propiedad Intelectual OMPI, denominado “Principios básicos del derecho de autor y los derechos conexos”.
                .col-sm-auto
                  a.boton.color-acento-botones(href='https://www.wipo.int/edocs/pubdocs/es/wipo_pub_909_2016.pdf' target='_blank')
                    span Ir al sitio
                    i.fas.fa-file-download

      Separador
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1 Protección de la propiedad intelectual 

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-md-1.order-2.aos-init.aos-animate(data-aos='fade-right')
          p 
            | Refiere a la protección de las creaciones del intelecto, partiendo de las obras de arte hasta las invenciones, los programas informáticos, las marcas y otros signos comerciales de acuerdo con la definición de la Organización Mundial de la Propiedad Intelectual OMPI (2021), apoyándose su conceptualización con el Artículo 27 de la Declaración Universal de los Derechos Humanos; en el mundo actualmente se cuenta con 25 tratados internacionales de protección de la propiedad intelectual.
          .BGR07.p-3
            .row.justify-content-around.align-items-center.p-4
              .col-lg-2.col-sm-3.col-4  
                img.w-75(src='@/assets/curso/tema2/link.svg')
              .col-lg-10
                .row.justify-content-between.align-items-center
                  .col.mb-5.mb-sm-0
                    h4.text-white.mb-1 Organización Mundial de la Propiedad Intelectual OMPI.
                    p.text-white 
                      |Conozca el folleto de asesoría jurídica elaborado por la Organización Mundial de la Propiedad Intelectual OMPI.
                  .col-sm-auto
                    a.boton.color-acento-botones(href='https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf' target='_blank')
                      span Ir al sitio
                      i.fas.fa-file-download
        .col-md-4.col-8.order-md-2.order-1.mb-md-2.mb-4.aos-init.aos-animate(data-aos='fade-left')
          img(src='@/assets/curso/tema2/2.1.png')


      Separador
      #t_2_2.titulo-segundo.color-acento-contenido
        h2 2.2 Políticas de confidencialidad

      .row(data-aos="fade-left") 
        p 
          |La administración de la información y el tratamiento de datos personales son prioridades organizacionales, las cuales deben estar enfocadas a la protección de la información; por ello, se debe validar las políticas de confidencialidad en la estandarización de cualquier manejo de información, priorizando la protección de información confidencial.

      .row.justify-content-center.align-items-center 
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .bloque-texto-g.fondo-rojo.p-4.p-xs-1.p-lg-3.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema2/2.2.png')})`}"
              )
              .bloque-texto-g__texto.p-3
                br
                p.mb-0 Ahora bien, los criterios a partir de los cuales se ha legislado en Colombia procuran la protección integral de la información de la persona natural o jurídica contratada y tiene un respaldo establecido para la protección de sus datos, tomando como referencia la compilación de argumentos jurídicos evidenciados por la Superintendencia de Industria y Comercio de Colombia (2022), la información y el acceso a la misma, pueden ser establecidos de manera restringida, teniendo en cuenta que se puede determinar así o se puede solicitar de manera personal a la organización.
                br
                br
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido
        h2 2.3 Criterios éticos del tratamiento de los datos


      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-12
          .row
            .col-lg-5.col-9
              img(src="@/assets/curso/tema2/2.3.png")
            .col.lg-6
              br
              p El acceso y administración de la información éticamente debe partir del cuidado de esta, lo cual aplica al desarrollo computacional para el manejo de datos y los soportes documentales que se generan o que requieren las organizaciones o las personas (naturales o jurídicas), por esto es importante validar los parámetros que establece la gestión documental y las políticas de tratamiento de la información y de los datos personales gestionados de manera física y digital; este último mecanismo que día a día se va desarrollando con una constante innovación, ligada a la cuarta revolución industrial, aunado a una aceleración motivada por la pandemia del SARS-CoV-2 COVID-19.
  
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido
        h2 2.4 Políticas legales
      
      .row(data-aos="fade-left") 
        p 
          |Las plataformas tienen dentro de los términos y condiciones de uso un apartado que bien podría entenderse como un contrato de adhesión, que es aceptado desde el momento en que se abre una cuenta como nuevo usuario. En este sentido, es importante identificar la normatividad colombiana que regula las identidades en la Web y la propiedad intelectual. Adelante: 
      
      .row.justify-content-center.align-items-center
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center(data-aos="fade-right").fondo-amarillo 
            .linea-tiempo-b.py-5.color-secundario.mb-5
              .linea-tiempo-b__line-row.row
                .col-5.d-none.d-md-block
                .col-3.col-md-2
                  .linea-tiempo-b__line
                .col-9.col-md-5
              
              .linea-tiempo-b__row.row.align-items-center
                .col-5.d-none.d-md-block
                .col-3.col-md-2
                  .linea-tiempo-b__icon
                    img(src='@/assets/curso/tema2/01.svg')
                .col-9.col-md-5
                  .linea-tiempo-b__content
                    h3.mb-2 Ley 23 de 1982
                    span
                      | Ley de derechos de autor. Es la rama del derecho y concretamente de la propiedad intelectual, que se ocupa de establecer la protecci&oacute;n y reglamento sobre las obras creadas por el ser humano, las cuales pueden ser literarias y art&iacute;sticas.
              
              .linea-tiempo-b__row.row.align-items-center
                .col-5.d-none.d-md-block
                .col-3.col-md-2
                  .linea-tiempo-b__icon
                    img(src='@/assets/curso/tema2/02.svg')
                .col-9.col-md-5
                  .linea-tiempo-b__content
                    h3.mb-2 Decisi&oacute;n Andina 351 de 1993
                    span
                      | Reconoce una adecuada y efectiva protecci&oacute;n a los autores y dem&aacute;s titulares de derechos, sobre las obras del ingenio, en el campo literario, art&iacute;stico o cient&iacute;fico.
              
              .linea-tiempo-b__row.row.align-items-center
                .col-5.d-none.d-md-block
                .col-3.col-md-2
                  .linea-tiempo-b__icon
                    img(src='@/assets/curso/tema2/03.svg')
                .col-9.col-md-5
                  .linea-tiempo-b__content
                    h3.mb-2 Ley 241 de 2011
                    span
                      | Regula la responsabilidad por las infracciones de derechos de autor y derechos conexos en Internet.
              
              .linea-tiempo-b__row.row.align-items-center
                .col-5.d-none.d-md-block
                .col-3.col-md-2
                  .linea-tiempo-b__icon
                    img(src='@/assets/curso/tema2/04.svg')
                .col-9.col-md-5
                  .linea-tiempo-b__content
                    h3.mb-2 Ley 1834 de 2017
                    span Por la cual se fomenta la econom&iacute;a creativa (Ley naranja).
              
              .linea-tiempo-b__row.row.align-items-center
                .col-5.d-none.d-md-block
                .col-3.col-md-2
                  .linea-tiempo-b__icon
                    img(src='@/assets/curso/tema2/05.svg')
                .col-9.col-md-5
                  .linea-tiempo-b__content
                    h3.mb-2 Ley 1915 de 2018
                    span
                      | Por la cual se modifica la Ley 23 de 1982 y se establecen otras disposiciones en materia de derechos de autor y derechos conexos.
  
  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
