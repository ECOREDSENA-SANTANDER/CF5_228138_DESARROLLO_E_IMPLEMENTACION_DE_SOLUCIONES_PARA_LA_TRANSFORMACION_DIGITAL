<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 Evaluación y validación del informe de requisitos

      p Es un proceso de entendimiento de las necesidades, deseos y expectativas establecidas por los patrocinadores, que tiene como objetivo principal la comprensión de qué esperan los clientes y los usuarios que haga el sistema.

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-11
          .bloque-texto-g.colorimagen-texto.p-3.p-xs-1.p-lg-3.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
            )
            .bloque-texto-g__texto.p-3
              br
              p.mb-0 Se identifican los aspectos clave que el sistema requiere y se descartan los aspectos irrelevantes, se incluyen Requisitos Funcionales (RF) y restricciones o Requisitos No Funcionales (RNF); comienza con el grupo de interesados reunidos para definir las necesidades del negocio, descripción de los escenarios en los que se desempeñarán los usuarios, se delinean las funciones y características del producto de #[em software] o solución tecnológica, y se identifican las limitaciones del proyecto, que dependen de las herramientas que se usen para gestionar el conocimiento del grupo de interesados para generar productos #[em software] de alta calidad (Presman & Maxim, 2021).
              br
              br
              
              
      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-1.col-auto
            figure
              img(src="@/assets/curso/tema1/1.svg", alt="alt").img75.m-auto
          .col-lg-11
            p.p-4 Para la validación de estos, es necesario seguir una serie de recomendaciones que garanticen el cumplimiento y la gestión de los requisitos ya establecidos; además, después se deben definir y registrar los requisitos, sometiéndose a una observación y evaluación del cumplimiento de los elementos mínimos para garantizar que no se presenten dudas o ambigüedades en fases posteriores. <br><br>Si bien ningún proyecto está exento de que algunas cosas cambien, que estas novedades de cambios no suceden por mala planeación y mal análisis y toma de requisitos; esto, sin duda, reduce la incertidumbre que se pueda presentar en los proyectos y los estimativos pueden ser más aproximados a la realidad.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Variables claves y restricciones

      .row(data-aos="fade-right")
        p La ingeniería de requisitos abarca diferentes áreas de control para que los informes de requisitos contengan los aspectos mínimos, ya sea de manera explícita o implícita, dentro de la documentación.
        p Por lo cual, Presman & Maxim (2021) proponen los siguientes elementos en el proceso de validación:  


      .row.justify-content-center.align-items-center(data-aos="fade-left").p-2
      .col-12
      .container.tarjeta.fondo-banner.p-4.p-md-5
        SlyderA
          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Concepción
              p.mb-lg-0.mb-3 Es la documentación y el registro de los requisitos donde se enmarcan las razones para la elaboración del proyecto tecnológico, es decir, dan cuenta de las necesidades, detalles para la comprensión del problema, el área que requiere la solución y de qué tipo sería la solución (#[em hardware, software,] BI, etc.).
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner1.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Indagación 
              p.mb-lg-0.mb-3 En esta, se indican las metas y objetivos del negocio de forma concreta, dando cuenta de los plazos determinados (corto, mediano o largo); esto servirá para resolver los conflictos que se puedan presentar. Cada requisito debe estar relacionado con las metas, y la suma de estas debe llevar al logro de los objetivos.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner2.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Elaboración 
              p.mb-lg-0.mb-3 Es un proceso de análisis donde los requisitos se deben ir traduciendo en soluciones, creando un escenario visible para el usuario y los clientes; esto es clave para la claridad y validación de que se entendió correctamente el requisito. Se debe hacer uso de recursos gráficos (diagramas, pantallas, flujo de trabajo e información, etc.) donde se plasme la descripción del problema sin detalles innecesarios.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner3.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Negociación 
              p.mb-lg-0.mb-3 Es común que los clientes soliciten más de lo que puede lograrse; o incluso se contradicen con otros requisitos, haciéndose necesarias las habilidades de negociación para reconciliar los conflictos de requisitos; el trato siempre debe estar basado en gana / gana; el cliente debe quedar con claridad del alcance las restricciones y lo que se resuelve, pudiendo dejar para otro momento otras necesidades no prioritarias.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner4.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Especificación 
              p.mb-lg-0.mb-3 Es recomendable usar plantillas o formatos acordes con la metodología seleccionada; la documentación de requisitos debe tener la lista y detalle de cada requisito usando los parámetros necesarios. Se puede combinar el lenguaje natural con inclusión de especificaciones de tipo técnico, para que los programadores tengan absoluta claridad de lo que se espera que haga el sistema.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner5.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Validación 
              p.mb-lg-0.mb-3 Los productos que surgen del análisis de requisitos deben evaluarse y validar que no existan ambigüedades, que efectivamente se solucione el problema planteado, que los requisitos estén bien especificados. Esta revisión debe estar bajo un enfoque técnico; además, el cliente también debe entenderlo y validar bien la solución planteada al problema.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner6.png")

          .row.justify-content-center.p-4
            .col-lg-5.col-10
              h4 Gestión 
              p.mb-lg-0.mb-3 Es un conjunto de actividades que ayudan al equipo del proyecto a identificar, controlar y rastrear los requerimientos y los cambios a dichos requerimientos en cualquier momento, mientras el proyecto avanza.
            .col-lg-5.col-10
              img.mb-0(alt="" src="@/assets/curso/tema1/banner7.png")

      .row.p-4(data-aos="fade-right")
      p En el siguiente esquema, se resumen los elementos claves en la documentación de requisitos:
      
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-8
            .tabla-b.color-acento-contenido.mb-2.justify-content-center
              .tabla-b__header
                h4.mb-0 Concepción
              table.fondo-tabla
                tr
                  td Motivación para el desarrollo de la solución.
                  td Identificar necesidades.
              
              img.flecha.m-auto.p-1(src="@/assets/curso/tema1/flechabajo.svg")
          
            .tabla-b.color-acento-contenido.mb-2
              .tabla-b__header
                h4.mb-0 Indagación
              table.fondo-tabla
                tr
                  td Escuchar clientes, usuarios.
                  td Establece metas de negocio y las asocia con requisitos.
                  td Asociar requisitos a metas y ponderar requisitos.
              img.flecha.m-auto.p-1(src="@/assets/curso/tema1/flechabajo.svg")

            .tabla-b.color-acento-contenido.mb-2
              .tabla-b__header
                h4.mb-0 Elaboración
              table.fondo-tabla
                tr
                  td Análisis de requisitos.
                  td Diagramar soluciones.
                  td Describir solución claramente.
              img.flecha.m-auto.p-1(src="@/assets/curso/tema1/flechabajo.svg")
            
            .tabla-b.color-acento-contenido.mb-2
              .tabla-b__header
                h4.mb-0 Negociación
              table.fondo-tabla
                tr
                  td Establecer recursos (tiempo, dinero, equipo, etc.).
                  td Establecer prioridad de requisitos.
                  td Cierre de acuerdos gana / gana.
                  td Claridad del alcance.
              img.flecha.m-auto.p-1(src="@/assets/curso/tema1/flechabajo.svg")
            
            .tabla-b.color-acento-contenido.mb-2
              .tabla-b__header
                h4.mb-0 Especificación
              table.fondo-tabla
                tr
                  td Usar métodos de documentación según metodología (plantillas de requisitos).
                  td Especificaciones claras y técnicas para programar.
              img.flecha.m-auto.p-1(src="@/assets/curso/tema1/flechabajo.svg")
           
            .tabla-b.color-acento-contenido.mb-2
              .tabla-b__header
                h4.mb-0 Validación
              table.fondo-tabla
                tr
                  td Establecer viabilidad, claridad.
                  td Evaluar que esté bien registrado y documentado cada requisito.
              img.flecha.m-auto.p-1(src="@/assets/curso/tema1/flechabajo.svg")
            
            .tabla-b.color-acento-contenido.mb-2
              .tabla-b__header
                h4.mb-0 Gestión de cambios
              table.fondo-tabla
                tr
                  td Establecer actividades o protocolos que ayuden al equipo a controlar y gestionar cambios de requisitos.

            
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2 Criterios de aceptación y validación de resultados

      .row(data-aos="fade-left") 
        .col-lg-8.col-22
          p Según la metodología seleccionada, se emplean diversas técnicas de criterios de evaluación que engloban los parámetros establecidos del modelo de gestión del proyecto, en el cual deben estar inmersos los documentos de requisitos.
          p Es muy importante analizar cada requisito en detalle, pues equivocaciones en estos podrían suponer costos y atrasos futuros; se busca es que la experiencia de desarrollo e implantación del proyecto sea la mejor posible, fluida, bien planeada y sin novedades graves.
          p Es conveniente revisar cada requerimiento realizando preguntas puntuales para la comprobación de requisitos. En el siguiente esquema, se relaciona cada una de ellas:
        .col-lg-4.col-10
          img(src="@/assets/curso/tema1/1.2.png")
        
      .row(data-aos="fade-left")
        .col-lg-8.col-22
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 1.] Comprobación de validación de requisitos
        .col-lg-12.col-22
          img.d-block.d-md-none(src='@/assets/curso/tema1/validacionmobile.svg', alt='En el siguiente diagrama de flujo se muestra cada requerimiento con opción de Si o No con el fin de identificar la ruta de comprobación de requisitos para la validación.')
        .col-lg-12.col-22
          img.d-none.d-md-block(src='@/assets/curso/tema1/validacionerrores.svg', alt='En el siguiente diagrama de flujo se muestra cada requerimiento con opción de Si o No con el fin de identificar la ruta de comprobación de requisitos para la validación.') 
      
      .row 
        br

      .row(data-aos="fade-rigth") 
        br
        .col-lg-5.col-10
          img(src="@/assets/curso/tema1/1.2.1.png")
        .col-lg-7.col-12.py-2
          p Las preguntas anteriores son orientadoras al momento de realizar la validación de requisitos, pueden surgir otras según la naturaleza del proyecto o del requisito mismo, pero son una base que ayuda en el establecimiento procedimental para identificar de manera puntual cuándo es necesario ajustar el requisito especificado. Estas validaciones pueden tomar tiempo al hacer estas comprobaciones, pero vale la pena realizarlas, pues esto garantiza un mejor control, registro y seguimiento del desarrollo y entrega del proyecto.
          p Las preguntas anteriores podrían ser un insumo para la construcción de instrumentos que garanticen que todos los requisitos pasen por una validación adecuada, por lo que cada director de proyecto deberá crear su propia lista de chequeo con los ítems que considera son claros para aceptar o no un requisito; además, se pueden complementar otorgando a cada criterio un peso o una ponderación en el proyecto, pues hay requisitos que tienen una puntuación mayor que otros, ya sea por su importancia funcional, la complejidad de su desarrollo u otros factores.

      
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3 Opinión de expertos

      p La objetividad en los planteamientos y visiones de las organizaciones es un valor que se debe procurar cuidar; las empresas que se encierran en ellas mismas, por vanidad corporativa, por ímpetu, o en el otro extremo, organizaciones tímidas subvalorándose a sí mismas, ambos extremos, tienen un factor común: el aislamiento y la consideración que escuchar contextos externos podría afectar la imagen que los mismos gerentes y colaboradores tienen de su propia empresa. Esto es un error, pues la toma de decisiones debe tener en cuenta aspectos externos para ampliar horizontes, ideas, estar en el contexto del mercado y a la vanguardia de otros aspectos, como el económico, tecnológico, gubernamental, entre otros. 
      
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-10.col-12
          .row.p-1.fondo-rosado
            .col.lg-6
              br
              h5.p-4 Dentro del campo de la ingeniería de requisitos y el desarrollo de proyectos, es común la validación y revisión por parte de un experto o un grupo de expertos representados en una empresa, con recorrido y experiencia en el campo de desarrollo tecnológico. 
            .col-lg-4.col-10
              img.img-desbordante(src="@/assets/curso/tema1/icono1.3.png")
     
      .row(data-aos="fade-left").p-4 
        .col-lg-3.col-10.p-3
          img(src="@/assets/curso/tema1/1.3.png")
        .col-lg-9.col-22
          p Esta práctica expone los planes de la organización ante los ojos de experto con conocimientos técnicos y con un rol objetivo que busca apoyar en la toma de decisiones sin estar viciado por los juicios internos, que puede aportar teniendo en cuenta factores que, a lo mejor, se ignoraban y que podrían resultar críticos para los planes corporativos.
          p Los modelos empresariales y paradigmas administrativos han desarrollado una cantidad de empresas externas especializadas para cada sector, que apoyan asuntos en los que las organizaciones no son expertas y pueden contratar sus servicios. Por lo cual, es importante que se consideren dentro de los planes de inversión en los proyectos tecnológicos, con el fin de garantizar el éxito.
          p Identifique cómo las alianzas y la opinión de expertos externos potencializan las decisiones:

      .row.justify-content-center
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/icono1.svg' alt='AvatarTop')
            .tarjeta.fondo-naranja
              .p-4
                h4.text-center Mejores decisiones.
                p.text-center Ayudan a las organizaciones a tomar mejores decisiones bajo conceptos profesionales y técnicos, basados en proyecciones, objetivos, recursos y necesidades específicas del proyecto y el negocio.

        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/icono2.svg' alt='AvatarTop')
            .tarjeta.fondo-naranja
              .p-4
                h4.text-center Expertos externos.
                p.text-center Generan nuevas ideas de negocio, ampliando posibilidades comerciales, mejorando la experiencia de los clientes, identificando otras posibilidades, innovando en los procesos, haciendo las organizaciones más inteligentes.
      br
      p También existen los <b>consultores tecnológicos,</b> que se refieren a los servicios de consejería bajo el contexto de acciones de soluciones tecnológicas e informáticas. Las empresas usan estos servicios motivados por la necesidad de asesorías profesionales, en especial, para escuchar recomendaciones sobre la manera de actuar frente a necesidades tecnológicas y transformación digital, ayudando a las organizaciones a tomar mejores decisiones bajo conceptos profesionales, que se dedican a acompañar grandes corporaciones exitosas en temas como estrategia empresarial, economía, áreas financieras, tributarias, legal, tecnología, #[em marketing], etc.
      
      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-1.col-auto.py-4
            figure
              img(src="@/assets/curso/tema1/socios.svg", alt="alt").img75.m-auto
          .col-lg-11
            p.p-4 Otro término empleado para las empresas externas que apoyan y ofrecen soluciones tecnológicas a las organizaciones que requieren tener una mayor seguridad, asesoría y acompañamiento en la implementación de proyectos digitales especializados son los #[em partners] tecnológicos, estos pueden ofrecer servicios diversificados, desde educación y gestión del cambio cultural, hasta el desarrollo de #[em software] e implementación de soluciones tecnológicas, la mayoría tiene el rol de acercar las organizaciones de todos los tamaños con las grandes corporaciones y ecosistemas digitales.
      
      
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center.fondo-rosado
            .col.lg-6
              h5.p-4 Cuando una empresa desea implementar su ecosistema digital basado en una marca específica, por lo general, se realiza a través de un #[em partner]; quienes se responsabilizan de asesorías, certificaciones, formación y venta de soluciones. 
            .col-lg-4.col-8
              img.img-desbordante(src="@/assets/curso/tema1/icono1.3.2.png")
      br
      p El #[em partner] ejecuta proyectos y acompaña de manera técnica, basando la estrategia en las soluciones tecnológicas; si bien esto parece una ventaja sobre el consultor, estos están supeditados a un interés comercial, por lo que sus opiniones podrían estar basadas o acomodadas en marcas específicas.
      p También se encuentra el rol de <b>interventoría de proyectos tecnológicos,</b> que son las acciones de terceros que intervienen en proyectos de entidades privadas o públicas; por lo general, son un requisito de ley para inversiones de alto monto.
      p Las interventorías para planes tecnológicos pueden estar en dos momentos:
      br
      .row.justify-content-center
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar.fondo-naranja.p-4
            .col-lg-3.col-5
              img.w-75(src='@/assets/curso/tema1/p1.png' alt='')
            .tarjeta
                h4 Generar los pliegos de condiciones o requerimientos.
                p Es el documento con referencias técnicas más importante para la asignación de contratos de obras y servicios; a partir de los pliegos de condiciones, los proveedores o empresas del mercado se presentan como candidatos para asignarles el proyecto.
                p Este documento es clave, pues da cuenta de las especificidades técnicas, alcances, condiciones para que, a partir de los requisitos, necesidades y recursos, se haga el estudio y genere los pliegos con todas las condiciones requeridas.
           
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar.fondo-naranja.p-4
                .col-lg-3.col-5
                  img.w-75(src='@/assets/curso/tema1/p2.png' alt='')
                .tarjeta.p-1
                  h4 Durante el desarrollo del proyecto.
                  p Ejerciendo la supervisión de las actividades contractuales; de esta manera, el interventor asegura el cumplimiento de lo pactado bajo el pliego de condiciones, llevando el control de aspectos técnicos, calidad, condiciones, presupuesto y demás acuerdos.
      
      .row.py-4
        .col-12
          p En caso de presentarse algún tipo de desacuerdo entre el cliente y el contratista, la interventoría tiene autoridad para resolver controversias, esto hasta ciertos niveles.
      
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido
        h2 1.4 Gestión de cambios

      p La gestión de cambios es un cúmulo de actividades, políticas o protocolos establecidos que facilitan al equipo del proyecto la tarea de identificar, controlar, registrar y rastrear los requerimientos y las variaciones en dichos requerimientos en cualquier momento, incluso en fases avanzadas.

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-12
          .row.p-1
              .col.lg-4.fondo-amarillo
                br
                h5.p-2 En términos generales, las herramientas de gestión del cambio están dadas mediante la validación, aceptación y protocolos de desarrollo para llevar control de los cambios; sin embargo, para la gestión de proyectos de transformación digital, es importante gestionar cambios en los niveles de servicio. 
              .col-lg-6.col-12
                img(src="@/assets/curso/tema1/1.4.png")
      br
      p En el desarrollo de proyectos tecnológicos, es común que “cuando se soluciona un problema, aparezca otro”, en otras palabras, cuando se satisface una necesidad, surge otra, y al resolverla, surge otra, y así.
      p Parte de las características de las metodologías ágiles es que los requisitos no deben ser una camisa de fuerza, inflexibles e inmutables, pero sí es necesario tener claridad entre mejorar un requisito; por ejemplo, tener que mejorar el formato de presentación de un campo y que el requisito cambie según los acuerdos ya pactados. Una cosa es que el cliente sugiera mejorar un aspecto de navegabilidad en una aplicación, pues, a diferencia de cómo se programó inicialmente, en la práctica se nota que es confuso; a que solicite agregar funcionalidades al requisito, como nuevos cálculos o adicionar elementos que impliquen cambios estructurales en la solución #[em software].
      br

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-10.col-12
          .row.p-1.fondo-rosado
            .col.lg-6
              br
              h5.p-4 El propósito del proceso de gestión de niveles de servicio es asegurar que los servicios actuales y planificados sean entregados de acuerdo con lo negociado, acordado, y dentro de los objetivos establecidos.
            .col-lg-3.col-8
              img.img-desbordante(src="@/assets/curso/tema1/icono3.png")
      br
      .row(data-aos="fade-rigth").p-4 
        .col-lg-5.col-10
          img(src="@/assets/curso/tema1/sla.png")
        .col-lg-7.col-22
          p Esto es facilitado a través de un ciclo constante de negociación, donde todo el contexto de las soluciones entregadas debe estar en el marco de los #[b Acuerdos de Nivel de Servicio (SLA)], y todo debe estar muy especificado en relación con los alcances y servicios pactados. Para esto, existe un marco metodológico que permite llevar a cabo la gestión de los SLA, estos pactos de servicio pueden ser flexibles y se deben llevar seguimiento y un requisito nuevo.
      
      
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido
        h2 1.5 Herramientas para la gestión y trazabilidad
      p Actualmente, existen muchas herramientas para la gestión de proyectos y la trazabilidad de los procesos, en especial, para las metodologías de desarrollo ágiles. Si bien todo esto comienza con la idea del desarrollo de #[em software], tiene la posibilidad de gestionar cualquier clase de proyecto donde se definen roles, tareas específicas y otras responsabilidades, como, por ejemplo: el diseño y diagramación, la mejora de flujos de trabajo y procesos, el desarrollo de códigos, la documentación del código, la gestión de archivos, el soporte técnico, la gestión de la seguridad, las pruebas y control, el seguimiento de productividad, la planificación y la coordinación de un proyecto, etc.
      p Algunas de las herramientas más populares son:

    
    .container.tarjeta.fondo-amarillo.p-4.p-md-5
      p 
      span.subnaraja.px-3 #[b Jira Software:]
      | es una herramienta para la gestión de proyectos, presenta versatilidad para usarla en diversas metodologías de desarrollo; lleva trazabilidad y seguimiento de errores; ayuda a la gestión de requisitos, desarrollo y entregas. Su licenciamiento es sin costos para ciertas áreas y con algunas restricciones, las versiones más avanzadas son pagas. A diferencia de otras plataformas, no solicita método de pago para usarlo en su versión gratuita.
  
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-12
          .row.p-1.fondo-blanco.justify-content-center.align-items-center
            .col.lg-7
              br
              h5.p-4 Esta es una herramienta robusta que contiene plantillas predefinidas que se pueden usar para adaptar los proyectos propios; adicionalmente, se conecta con otras herramientas de productividad para potencializar la integración de herramientas usadas en los proyectos.
            .col-lg-4.col-11.p-3
              img(src="@/assets/curso/tema1/jira.svg")
              figcaption.text-center Sitio oficial: https://www.atlassian.com/es
        
        br
      .row(data-aos="fade-rigth").p-4 
        .col-lg-4.col-12
          img(src="@/assets/curso/tema1/final.png")
        .col-lg-8.col-22
          p Cuando se crea una cuenta, a cada usuario se le asigna una dirección o dominio, lo cual lo hace muy fácil de compartir e ingresar directamente a los proyectos asociados.
          p Cada proyecto tiene sus acciones, llamadas incidencias, tales como flujos o tareas de trabajo; se pueden crear los proyectos que sean necesarios; una incidencia puede ser una tarea, un ticket de asistencia, un formulario de solicitud o cualquier otra unidad de trabajo relevante de los proyectos.
          p Las #[em incidencias] es el término para referirse a las actividades que el equipo va a desempeñar; un proyecto, por lo general, contiene incidencias de tres tipos:

      .row.justify-content-center
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/03.png' alt='AvatarTop')
            .tarjeta.fondo-naranja
              .p-4
                h4.text-center Épicas
                p.text-center Son aquellas incidencias grandes, que se componen de otras incidencias.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/02.png' alt='AvatarTop')
            .tarjeta.fondo-naranja
              .p-4
                h4.text-center Historia
                p.text-center Por lo general, se podría generar una historia por cada flujo, todo depende del método de trabajo.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/03.png' alt='AvatarTop')
            .tarjeta.fondo-naranja
              .p-4
                h4.text-center #[em Bug]
                p.text-center Gestión de errores que se encuentren. Por lo general, estos errores, o bugs, se asocian a una historia de usuario.
        br
      .row.justify-content-center.align-items-center(data-aos="fade-rigth").py-4
        .col-lg-9.col-22
          h4 El principio de funcionalidad es muy simple. Básicamente, hay tres columnas que indican el periodo o fase de ejecución de las incidencias: están las pendientes de ejecutar, las que están en periodo de ejecución y las entregadas. Si bien, por defecto, son tres columnas, podrían agregarse más, por ejemplo, en caso de proyectos tecnológicos, se podría agregar una columna más que indique cuáles están en prueba y cuáles ya pasaron la prueba o lo que se necesite.
          p Adicionalmente, es una herramienta que se puede personalizar, configurando los diferentes tipos de incidencias, y está diseñada para trabajar con equipos de trabajo donde se asignan las incidencias y se gestionen los usuarios que tienen asignación.
          p Cada incidencia, según su naturaleza, solicita datos. Para una tarea normal, las tarjetas solicitan un nombre de tarea, se pueden añadir incidencias secundarias, vincular a través de enlace a otras tareas, una descripción, y los comentarios que cada participante de esta incidencia puede trabajar. Estos campos son configurables y personalizables, según las necesidades y lo que se desea registrar o controlar.
        .col-lg-3.col-10.mb-4-lg-0
          img(src="@/assets/curso/tema1/1.6.png")
      .row 
        .col-lg-10
          img(src="@/assets/curso/tema1/linea.svg")
        .row.py-4 
          .col-lg-9
            p 
            span.subnaraja.px-2 #[b Trello:]
            | es un programa destinado a la gestión, seguimiento de proyectos y equipos de trabajo; está basado en tarjetas y es un programa con facilidad de trabajo. Cuando se inicia la aplicación, solicita un espacio de trabajo donde se albergan todos los proyectos a gestionar. Si bien tiene versión pago, también tiene una opción de usarse de manera gratuita con limitaciones.

        br
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-12
          .row.p-1.fondo-blanco.justify-content-center.align-items-center
            .col.lg-9
              br
              h5.p-3 Es una herramienta sencilla, funciona basada en tarjetas, con gran capacidad para la gestión de tareas y coordinación de equipos de trabajo.
              h5.px-3 Por defecto, cuenta con las tres columnas “por hacer”, “en proceso” y “hecho” o “finalizado”, pero tiene la posibilidad de agregar más columnas según la dinámica y necesidades.
            .col-lg-3.col-9.p-3
              img(src="@/assets/curso/tema1/trello.svg")
              figcaption.text-center Sitio oficial: https://trello.com/es
              br
        p <br>Cuando se añade una tarjeta, esta presenta diversas opciones para registrar la actividad, con todas las opciones necesarias para el registro, control y avance del proyecto, así como las responsabilidades y ejecución de los miembros del equipo.
        
      .row.justify-content-center.align-items-center(data-aos="fade-left").p-2
        .col-lg-4.col-10.p-3
          img(src="@/assets/curso/tema1/termino.png")
        .col-lg-8.col-22
          h4 Las tarjetas permiten agregar o quitar miembros de las tareas específicas, permite incluir listas de chequeo para ir controlando acciones o tareas más pequeñas, adicionar fechas para llevar control de tiempos, archivos adjuntos y otras opciones.
          p Además, el área de comentarios o registro de actividades se emplea para que los miembros del equipo registren novedades, entregas, códigos, o lo que se establezca registrar, para mantener un historial completo sobre el avance y estado de la tarea que represente la tarjeta.
          p Existen otras herramientas para gestionar proyectos y que estos lleguen a feliz término; en este caso, es muy importante que los criterios de entrega cumplan con todas las pruebas y aprobaciones del negocio, como, por ejemplo: Azure DevOps o Monday.com




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
