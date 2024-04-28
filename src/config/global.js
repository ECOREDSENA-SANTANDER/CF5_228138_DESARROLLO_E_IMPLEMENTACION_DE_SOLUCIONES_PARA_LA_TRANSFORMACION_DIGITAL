export default {
  global: {
    componenteFormativo: 'Validaciones del informe de requisitos',
    descripcionCurso:
      'Los requisitos se constituyen como la base fundamental para el desarrollo de proyectos de software y transformación digital, debido al impacto en el diseño y demás fases del ciclo de vida del producto, por lo que validar la documentación de requisitos apropiadamente ayuda a reducir los cambios y correcciones en los proyectos, optimizando los costos en el desarrollo de software o soluciones tecnológicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación y validación del informe de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables claves y restricciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios de aceptación y validación de resultados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Opinión de expertos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión de cambios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Herramientas para la gestión y trazabilidad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Derechos de autor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Protección de la propiedad intelectual',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Políticas de confidencialidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios éticos del tratamiento de los datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Políticas legales',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228138_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Caurin, J. (2018). Políticas de seguridad ¿Qué son las políticas de seguridad? Emprende Pyme. ',
      link: 'https://www.emprendepyme.net/politicas-de-seguridad.html',
    },
    {
      referencia:
        'Decisión Andina 351 de 1993. [Comisión del Acuerdo de Cartagena]. Régimen común sobre derecho de autor y derechos conexos. Diciembre 17 de 1993. ',
      link: 'https://www.wipo.int/edocs/lexdocs/laws/es/can/can010es.pdf ',
    },
    {
      referencia:
        'Ley 23 de 1982. [Congreso de Colombia]. Sobre derechos de autor. Enero 28 de 1982. https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S',
    },
    {
      referencia:
        'Ley 241 de 2011. [Congreso de Colombia]. Por la cual se regula la responsabilidad por las infracciones al derecho de autor y los derechos conexos en Internet. Abril de 2011.',
      link:
        'http://www.informatica-juridica.com/proyecto-de-ley/proyecto-ley-241-derecho-autor-los-derechos-conexos-internet/',
    },
    {
      referencia:
        'Organización Mundial de la Propiedad Intelectual OMP. (2021). ¿Qué es la propiedad intelectual? OMP',
      link: 'https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (ISO). (2013). Seguridad de la información, ciberseguridad y protección de la privacidad (ISO 27001). ',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'Netec. (2021). Curso Fundamentos de ITIL® V3 | EOL. Proceso de gestión de niveles de servicio. México. Obtenido de',
      link: 'https://www.netecdigital.com/courses/195795/lectures/3432553',
    },
    {
      referencia:
        'Presman, R., & Maxim, B. (2021). Ingeniería de software - un enfoque práctico. Guadalajara, México:McGraw-Hill Interamericana. Repositorio Sena.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=16414',
    },
  ],
  glosario: [
    {
      termino: 'AWS',
      significado:
        'son las  siglas de Amazon Web Service, que es una de plataformas tecnológicas donde muchas empresas tienen para guardar sus datos y su infraestructura tecnológica.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'propiedad que determina que la información solo esté disponible y sea revelada a individuos, entidades o procesos autorizados.',
    },
    {
      termino: 'Disponibilidad de servicios',
      significado:
        'se refiere al porcentaje garantizado. Entre menos disponibilidad menos garantía y el servicio estará interrumpido o con fallos. Se usa para medir cumplimiento de requerimientos y hacer cumplir contratos o en su defecto sanciones pactadas.',
    },
    {
      termino: 'Google Workspace',
      significado:
        'es un conjunto de herramientas para la productividad de las empresas creado por Google.',
    },
    {
      termino: 'Insigth',
      significado:
        'es un término de la Psicología que indica una verdad general, en términos de informática y marketing se refiere a las verdades (a veces relativa según tiempo y condiciones), que generan los datos o los comportamientos de consumo.',
    },
    {
      termino: 'Metodología Scrum',
      significado:
        'hace parte del paradigma de metodologías ágiles, actualmente es la metodología más empleada para el desarrollo de proyectos tecnológicos, se caracteriza por ser flexible, ágil y desarrollar módulos o mejoras sobre la marcha de la implementación.',
    },
    {
      termino: 'Microsoft Office 365',
      significado:
        'son un conjunto de herramientas ofimáticas de productividad para las empresas, contratadas con la empresa Microsoft.',
    },
    {
      termino: 'Requisitos Funcionales (RF)',
      significado:
        'definen las funcionalidades como reglas de negocio, condiciones, cálculos, etc.',
    },
    {
      termino: 'Requisitos No Funcionales (RNF)',
      significado:
        'son los requerimientos transversales del sistema, no son propiamente de función del sistema, pero sí necesarios, tales como el ambiente gráfico, proveedores de servicios, fiabilidad, velocidad, etc.',
    },
    {
      termino: 'Supeditados',
      significado:
        'condicionado a algo, indica que dependiendo de una situación está sometido a actuar de una manera específica.',
    },
    {
      termino: 'Testeos',
      significado:
        'son las pruebas de software, donde el área de la ingeniería de software emplea metodologías de pruebas para detectar errores de programación o errores funcionales a partir de los requisitos.',
    },
  ],
  complementario: [
    {
      tema: '1. Evaluación y validación del informe de requisitos',
      referencia:
        'Echeverri, J. Aristizábal, M. & González, L. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de software.. Corporación Universitaria Remington. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/68913',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/68913?page=64',
    },
    {
      tema: '1.2 Criterios de aceptación y validación de resultados',
      referencia:
        'De Querétaro, S. (2021). 06 - Ingeniería de requerimientos: aprende a validar. YouTube. https://youtu.be/6llMdLDkanM',
      tipo: 'Video',
      link: 'https://youtu.be/6llMdLDkanM',
    },
    {
      tema: '1.4 Gestión de cambios',
      referencia:
        'IBM. (2021). Acuerdos de nivel de servicio (SLA). Documentación IBM. https://www.ibm.com/docs/es/mfsp/7.6.1?topic=records-service-level-agreements-slas',
      tipo: 'Documento',
      link:
        'https://www.ibm.com/docs/es/mfsp/7.6.1?topic=records-service-level-agreements-slas',
    },
    {
      tema: '1.5 Herramientas para la gestión y trazabilidad',
      referencia:
        'Canal Geek QA. (2021). Como usar JIRA desde 0 en equipos SCRUM. YouTube. https://youtu.be/ViwOKhYx4kg',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ViwOKhYx4kg',
    },
    {
      tema: '1.5 Herramientas para la gestión y trazabilidad',
      referencia:
        'Canal EducaTIC. (2021). Tutorial Trello actualizado 2022. YouTube. https://youtu.be/sZd7uUPigk8',
      tipo: 'Video',
      link: 'https://youtu.be/sZd7uUPigk8',
    },
    {
      tema: '2.1 Protección de la propiedad intelectual',
      referencia:
        'Organización Mundial de la Propiedad Intelectual OMPI. (2021). ¿Qué es la propiedad intelectual? OMPI. https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf',
      tipo: 'Folleto',
      link: 'https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada',
          cargo: 'Experto Temático',
          centro:
            'Regional Norte de Santander Centro de la Industria, la empresa y los servicios - CIES',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander Centro de la Industria, la empresa y los servicios - CIES',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador Fullstack',
          centro: 'San Gil - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
