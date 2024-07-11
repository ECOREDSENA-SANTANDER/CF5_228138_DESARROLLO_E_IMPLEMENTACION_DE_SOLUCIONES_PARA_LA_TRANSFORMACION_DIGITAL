<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-5 En el siguiente diagrama se resume las temáticas desarrolladas en el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se puede apreciar una estructura de conceptos claves sobre las validaciones del informe de requisitos, de donde se desprende la evaluación, con sus diferentes pasos hasta llegar a acuerdos de nivel de servicios SLA, En la segunda línea participación de expertos, se encuentra consultorías, interventorías y partners y en Derechos de autor toda la parte legal con descripción de leyes. ")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
