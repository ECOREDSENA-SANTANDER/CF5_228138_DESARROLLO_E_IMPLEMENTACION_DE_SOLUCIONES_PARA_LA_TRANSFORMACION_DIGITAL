<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
          p En este componente, se abordarán los conceptos y fundamentos para realizar validación del informe de requisitos con base en las buenas prácticas; además, se abordarán conceptos acerca de los derechos de autor como principio importante en el tratamiento de los datos y la confidencialidad de la información. Veamos un video que nos contextualiza al respecto:
  

      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/gaKft83hlSQ" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Validaciones del informe de requisitos

  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
