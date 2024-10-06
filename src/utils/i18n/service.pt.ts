export const getStaticPathsServicesPt = () => {
  const pages = [
    {
      slug: 'general-cleaning',
      layout: {
        metadata: {
          title: '',
        },
        title: 'Limpeza Geral',
        content: 'Limpeza completa para um espaço impecável.',
        image:
          '/images/vista-lateral-mesa-limpieza-barista-femenina-guantes-latex.webp',
        position: 'bg-center',
      },
      serviceDetails: {
        id: 'detalles-del-servicio',
        paragraph1:
          'Nossos serviços de limpeza geral foram projetados para manter seu espaço impecável e acolhedor a todo momento. Com foco na atenção aos detalhes, nossa equipe altamente qualificada cuida de cada aspecto, da limpeza rotineira à remoção de manchas difíceis.',
        paragraph2:
          'Na Global Services and Maintenance, entendemos a importância de manter um ambiente limpo e saudável. Nos esforçamos para superar suas expectativas com cada serviço que oferecemos, seja uma limpeza programada regularmente ou uma limpeza profunda para um evento especial.',
        paragraph3:
          'Estamos comprometidos em fornecer serviços de limpeza impecáveis e de alta qualidade para satisfazer as necessidades mais exigentes de nossos clientes. Utilizamos técnicas avançadas e produtos de limpeza certificados para garantir resultados excepcionais a cada trabalho. Sua satisfação e tranquilidade são nossa prioridade absoluta.',
      },

      features: {
        title: 'Características dos Nossos Serviços',
        subtitle:
          'Descubra por que nossos serviços são a escolha ideal para manter seus espaços limpos e saudáveis.',
        items: [
          {
            title: 'Métodos Avançados',
            description:
              'Utilizamos técnicas de limpeza de ponta apoiadas por anos de experiência na indústria.',
            icon: 'mdi:tools',
          },
          {
            title: 'Inspeção Detalhada',
            description:
              'Realizamos uma inspeção meticulosa para identificar áreas problemáticas e oferecer soluções personalizadas.',
            icon: 'mdi:magnify',
          },
          {
            title: 'Produtos Ecológicos',
            description:
              'Priorizamos o uso de produtos de limpeza ecológicos para garantir um ambiente mais saudável e sustentável.',
            icon: 'mdi:leaf',
          },
        ],
      },

      serviceOfferings: {
        title: 'Serviços de Limpeza Geral',
        subtitle:
          'Descubra como podemos manter seus espaços impecáveis e livres de sujeira com nossos serviços de limpeza geral.',
        classes: {},
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/front-view-man-cleaning-indoors_pqgahy.webp',
          alt: 'limpieza-interior',
        },
        paragraphList: 'Aqui estão nossos serviços de limpeza geral:',
        listItems: [
          'Limpeza Regular',
          'Limpeza Profunda',
          'Lavagem de Carpetes',
          'Limpeza de Janelas',
          'Coleta e Descarte de Resíduos',
          'Desinfecção de Banheiros',
          'Cera e Polimento de Pisos',
          'Limpeza de Alta Pressão',
          'Opções de Limpeza Ecológica',
        ],
        titleHeading: 'Nosso Processo de Limpeza',
        paragraphText:
          'Nossa equipe segue um processo detalhado que inclui inspeção, limpeza profunda e acabamento final para garantir que seus espaços estejam impecáveis a todo momento. Com nosso compromisso e atenção aos detalhes, você pode ter confiança de que seus espaços estarão limpos e frescos para que você possa aproveitá-los ao máximo.',
        strongText:
          'Com nosso compromisso e atenção aos detalhes, você pode ter confiança de que seus espaços estarão limpos e frescos para que você possa aproveitá-los ao máximo.',
      },
      imageGallery: {
        images: [
          {
            src: 'https://img.freepik.com/foto-gratis/persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina_23-2150520631.jpg?t=st=1709169976~exp=1709173576~hmac=ae60dfdcc11a6d6425872deb5eae7ac68cc8513e77816452d65a3be32cbf5ff8&w=996',
            alt: 'limpieza-profesional-aspirando-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/hombres-tiro-completo-chocan-cinco-oficina_23-2149345549.jpg?t=st=1710092868~exp=1710096468~hmac=448b210a524726f64f9df6743bcafa8e6058f0172fd3eea774c5a589c8e37098&w=996',
            alt: 'hombres-choque-cinco-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre_637285-7996.jpg?t=st=1710092892~exp=1710096492~hmac=43304fb756f5c232fc829c5b6d7698eeb4f7e937cff84466f74a92bf5e654be0&w=996',
            alt: 'desinfeccion-mesas-cafe-aire-libre',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-que-encargan-limpieza-oficinas_23-2149374433.jpg?t=st=1710092805~exp=1710096405~hmac=0d5b20fd89bfea36de39e1b764c182e612a3c7d881b16235b0ee70720dd15bd6&w=360',
            alt: 'personas-supervisando-limpieza-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-frontal-hombre-limpiando-interior_23-2150454484.jpg?t=st=1710092908~exp=1710096508~hmac=b19dad312c34a93ce9791221a604cdc6aeb94fb3434df824fae22550231a1a2d&w=996',
            alt: 'vista-frontal-hombre-limpiando-interior',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta_1150-48118.jpg?t=st=1710092928~exp=1710096528~hmac=abc808091e3659bdb8bd653ee30e1293d73b8a02e45595bca68af1c27ae0c3b5&w=996',
            alt: 'mano-guantes-goma-sosteniendo-canasta-equipo-limpieza',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/persona-que-encarga-limpieza-oficinas_23-2149374462.jpg?t=st=1710092950~exp=1710096550~hmac=da1f46318a31d8c31f06255693ae1247d187e5e3213f0a5ef3cf06a0acf1d468&w=996',
            alt: 'supervisor-limpieza-oficinas',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina_231208-547.jpg?t=st=1710092844~exp=1710096444~hmac=7dc1197a612539e0c28792e87cb342fe7eaba417f166dba4cb231a252e93ed47&w=360',
            alt: 'ama-casa-sonriente-limpiando-cocina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/servicio-limpieza-profesional-personas-trabajando-juntas-oficina_23-2150520643.jpg?t=st=1710092971~exp=1710096571~hmac=22a2e97e64312e34f54a39d6e47651ec63a186c5fac24a4d411cdad4d2cf696e&w=996',
            alt: 'servicio-limpieza-profesional-trabajando-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-desinfectando-area-riesgo-biologico_23-2148848556.jpg?w=996',
            alt: 'desinfeccion-area-riesgo-biologico',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/edificio-limpieza-personas-tiro-medio_23-2150454565.jpg?t=st=1710093038~exp=1710096638~hmac=8e9f5b5769b07dc0b61c2fd03f92a574387fae810c70ee0138321d27edca9730&w=996',
            alt: 'edificio-limpieza-personas-tiro-medio',
          },
        ],
      },
      faqs: {
        title: 'Perguntas Frequentes',
        subtitle:
          'Encontre respostas para as perguntas mais comuns sobre nossos serviços de limpeza geral.',
        items: [
          {
            title: 'O que está incluído no serviço de limpeza geral?',
            description:
              'Nosso serviço de limpeza geral inclui a limpeza de todas as áreas comuns da sua casa ou empresa, incluindo pisos, superfícies, banheiros e muito mais.',
          },
          {
            title: 'Qual é o processo para contratar seus serviços?',
            description:
              'O processo é simples: primeiro, entre em contato conosco para agendar uma avaliação de suas necessidades de limpeza. Em seguida, forneceremos um orçamento detalhado e, uma vez aceito, coordenaremos a data e a hora de início do serviço.',
          },
          {
            title: 'Como vocês garantem a qualidade do seu trabalho?',
            description:
              'Estamos comprometidos em oferecer um serviço da mais alta qualidade. Nossa equipe é composta por profissionais qualificados e utilizamos produtos e equipamentos de limpeza de ponta para garantir resultados excepcionais em cada trabalho.',
          },
          {
            title:
              'Vocês oferecem serviços personalizados de acordo com minhas necessidades?',
            description:
              'Sim, adaptamos nossos serviços às suas necessidades específicas. Podemos criar um plano de limpeza personalizado que atenda às suas preferências e exigências, seja para uma limpeza regular ou para ocasiões especiais.',
          },
        ],
      },
    },
    {
      slug: 'window-cleaning',
      layout: {
        metadata: {
          title: '',
        },
        title: 'Limpeza de Janelas',
        content:
          'Limpeza profissional de janelas para um acabamento impecável e sem marcas.',
        image: '/images/person-taking-care-office-cleaning.webp',
        position: 'bg-center',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Nosso serviço de limpeza de janelas foi projetado para deixar suas janelas cristalinas e sem marcas. Usando técnicas avançadas e produtos ecológicos, nossa equipe garante uma limpeza profunda tanto do lado de dentro quanto do lado de fora das janelas.',
        paragraph2:
          'Na Global Services and Maintenance, entendemos a importância de manter janelas limpas para um espaço iluminado e acolhedor. Seja para propriedades residenciais ou comerciais, garantimos resultados excepcionais que superam suas expectativas.',
        paragraph3:
          'Com nossa atenção aos detalhes e nosso compromisso com a qualidade, você pode contar conosco para oferecer serviços de limpeza de janelas excepcionais em qualquer momento. Temos orgulho do nosso trabalho e nos esforçamos para deixar suas janelas impecáveis e brilhantes.',
      },
      features: {
        title:
          'Principais Características do Nosso Serviço de Limpeza de Janelas',
        subtitle:
          'Descubra por que nossos serviços de limpeza de janelas são a melhor opção para um acabamento brilhante.',
        items: [
          {
            title: 'Técnicas Profissionais',
            description:
              'Usamos técnicas profissionais de limpeza de janelas para garantir um acabamento sem marcas e janelas brilhantes.',
            icon: 'mdi:tools',
          },
          {
            title: 'Produtos Ecológicos',
            description:
              'Utilizamos produtos de limpeza ecológicos que são seguros para suas janelas e para o meio ambiente.',
            icon: 'mdi:leaf',
          },
          {
            title: 'Limpeza Interna e Externa',
            description:
              'Nosso serviço cobre tanto as janelas internas quanto externas, deixando toda a sua propriedade impecável.',
            icon: 'mdi:window-open-variant',
          },
        ],
      },
      serviceOfferings: {
        title: 'Nossos Serviços de Limpeza de Janelas',
        subtitle:
          'Explore nossos serviços completos de limpeza de janelas para manter suas janelas impecáveis.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/person-taking-care-office-cleaning_2_k7xanu.webp',
          alt: 'pessoa-cuidando-da-limpeza-de-escritórios',
        },
        paragraphList: 'Nossos serviços de limpeza de janelas incluem:',
        listItems: [
          'Limpeza de Janelas Internas',
          'Limpeza de Janelas Externas',
          'Limpeza de Caixilhos de Janelas',
          'Limpeza de Telas de Janelas',
          'Limpeza de Janelas de Difícil Acesso',
          'Planos de Limpeza Personalizados',
        ],
        titleHeading: 'Nosso Processo de Limpeza de Janelas',
        paragraphText:
          'Seguimos um processo minucioso que inclui inspeção, limpeza e inspeção final para garantir que suas janelas permaneçam impecáveis e sem marcas. Com nosso comprometimento com a qualidade, suas janelas brilharão e melhorarão a aparência geral de sua propriedade.',
        strongText:
          'Com nosso comprometimento com a qualidade, suas janelas brilharão e melhorarão a aparência geral de sua propriedade.',
      },
      imageGallery: {
        images: [
          {
            src: 'https://img.freepik.com/foto-gratis/persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina_23-2150520631.jpg?t=st=1709169976~exp=1709173576~hmac=ae60dfdcc11a6d6425872deb5eae7ac68cc8513e77816452d65a3be32cbf5ff8&w=996',
            alt: 'pessoa-usando-aspiradora-em-um-escritório',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/hombres-tiro-completo-chocan-cinco-oficina_23-2149345549.jpg?t=st=1710092868~exp=1710096468~hmac=448b210a524726f64f9df6743bcafa8e6058f0172fd3eea774c5a589c8e37098&w=996',
            alt: 'homens-que-se-cumprimentam-em-um-escritório',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre_637285-7996.jpg?t=st=1710092892~exp=1710096492~hmac=43304fb756f5c232fc829c5b6d7698eeb4f7e937cff84466f74a92bf5e654be0&w=996',
            alt: 'garçonete-desinfetando-mesas-em-café-ao-ar-livre',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-que-encargan-limpieza-oficinas_23-2149374433.jpg?t=st=1710092805~exp=1710096405~hmac=0d5b20fd89bfea36de39e1b764c182e612a3c7d881b16235b0ee70720dd15bd6&w=360',
            alt: 'pessoas-encarregadas-da-limpeza-em-escritórios',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-frontal-hombre-limpiando-interior_23-2150454484.jpg?t=st=1710092908~exp=1710096508~hmac=b19dad312c34a93ce9791221a604cdc6aeb94fb3434df824fae22550231a1a2d&w=996',
            alt: 'vista-frontal-de-homem-limpiando-no-interior',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta_1150-48118.jpg?t=st=1710092928~exp=1710096528~hmac=abc808091e3659bdb8bd653ee30e1293d73b8a02e45595bca68af1c27ae0c3b5&w=996',
            alt: 'vista-lateral-de-mão-segurando-cesta-de-limpeza',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/persona-que-encarga-limpieza-oficinas_23-2149374462.jpg?t=st=1710092950~exp=1710096550~hmac=da1f46318a31d8c31f06255693ae1247d187e5e3213f0a5ef3cf06a0acf1d468&w=996',
            alt: 'pessoa-encarada-da-limpeza-em-escritórios',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina_231208-547.jpg?t=st=1710092844~exp=1710096444~hmac=7dc1197a612539e0c28792e87cb342fe7eaba417f166dba4cb231a252e93ed47&w=360',
            alt: 'dona-de-casa-sorridente-limpando-móveis-da-cozinha',
          },
        ],
      },
      faqs: {
        title: 'Preguntas Frecuentes',
        subtitle:
          'Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de limpieza de ventanas.',
        items: [
          {
            title:
              '¿Con qué frecuencia debo programar la limpieza de ventanas?',
            description:
              'La frecuencia de la limpieza de ventanas depende de varios factores, como la ubicación, las condiciones climáticas y la preferencia personal. Recomendamos programar limpiezas regulares para mantener la apariencia y la integridad de sus ventanas.',
          },
          {
            title: '¿Limpiáis ventanas en altura?',
            description:
              'Sí, tenemos la experiencia y el equipo necesarios para limpiar ventanas en altura, incluyendo las de grandes edificios. Nuestro equipo sigue protocolos de seguridad estrictos para garantizar un proceso de limpieza seguro y eficaz.',
          },
          {
            title: '¿Podéis quitar manchas difíciles de las ventanas?',
            description:
              'Sí, utilizamos técnicas especializadas y soluciones de limpieza para eliminar manchas difíciles, incluyendo residuos de pintura, marcas de agua y otras manchas tenaces.',
          },
          {
            title: '¿Ofrecéis servicios de limpieza de otras superficies?',
            description:
              'Sí, además de la limpieza de ventanas, ofrecemos servicios de limpieza para otras superficies, como paredes, suelos y superficies comerciales.',
          },
        ],
      },
    },
    {
      slug: 'carpet-cleaning',
      layout: {
        metadata: {
          title: '',
        },
        title: 'Limpeza de Tapetes',
        content:
          'Limpeza profissional de tapetes para tapetes frescos e revitalizados.',
        image: '/images/closeup-vacuum-cleaner-living-room.webp',
        position: 'bg-center',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Nossos serviços de limpeza de tapetes são projetados para eliminar sujeira, manchas e alérgenos de seus tapetes, devolvendo-lhes uma aparência e sensação de frescor. Utilizando técnicas de limpeza avançadas e produtos ecológicos, nossa equipe garante uma limpeza profunda que revitaliza seus tapetes e melhora a qualidade do ar interior.',
        paragraph2:
          'Na Global Services and Maintenance, entendemos a importância de tapetes limpos para um ambiente saudável e confortável. Seja para propriedades residenciais ou comerciais, oferecemos resultados excepcionais que superam suas expectativas.',
        paragraph3:
          'Com nossa atenção aos detalhes e nosso compromisso com a qualidade, você pode contar conosco para fornecer serviços de limpeza de tapetes profissionais que deixam seus tapetes como novos. Temos orgulho do nosso trabalho e nos esforçamos para melhorar a aparência geral e a higiene do seu espaço.',
      },
      features: {
        title:
          'Características Principais do Nosso Serviço de Limpeza de Tapetes',
        subtitle:
          'Descubra por que nossos serviços de limpeza de tapetes são a melhor escolha para tapetes frescos e revitalizados.',
        items: [
          {
            title: 'Técnicas de Limpeza Avançadas',
            description:
              'Utilizamos técnicas de limpeza avançadas para eliminar de forma eficaz sujeira, manchas e alérgenos de seus tapetes.',
            icon: 'mdi:tools',
          },
          {
            title: 'Produtos Ecológicos',
            description:
              'Priorizamos o uso de produtos de limpeza ecológicos que são seguros para seus tapetes e para o meio ambiente.',
            icon: 'mdi:leaf',
          },
          {
            title: 'Experiência em Remoção de Manchas',
            description:
              'Nossa equipe tem experiência na remoção de uma ampla variedade de manchas de tapetes, incluindo manchas de animais de estimação, derramamentos de alimentos e muito mais.',
            icon: 'mdi:brush',
          },
        ],
      },
      serviceOfferings: {
        title: 'Nossos Serviços de Limpeza de Tapetes',
        subtitle:
          'Descubra nossos serviços completos de limpeza de tapetes para restaurar a beleza e frescor de seus tapetes.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/girl-cleaning-house-with-vacuum-cleaner_vt3urp.webp',
          alt: 'girl-cleaning-house-with-vacuum-cleaner',
        },
        paragraphList: 'Nossos serviços de limpeza de tapetes incluem:',
        listItems: [
          'Limpeza a Vapor',
          'Limpeza Profunda',
          'Remoção de Manchas',
          'Neutralização de Odores',
          'Limpeza Adaptada para Animais',
          'Opções de Limpeza Ecológicas',
          'Limpeza de Tapetes de Área',
          'Limpeza de Estofados',
          'Tratamentos de Proteção de Tapetes',
        ],
        titleHeading: 'Nosso Processo de Limpeza de Tapetes',
        paragraphText:
          'Seguimos um processo de limpeza de tapetes detalhado que começa com uma inspeção minuciosa e termina com uma inspeção final para garantir que seus tapetes estejam limpos, frescos e sem manchas. Graças à nossa experiência e dedicação, garantimos resultados excepcionais que rejuvenescem seus tapetes e melhoram a aparência geral de seu espaço.',
        strongText:
          'Com nossa experiência e dedicação, garantimos resultados excepcionais que rejuvenescem seus tapetes e melhoram a aparência geral de seu espaço.',
      },
      imageGallery: {
        images: [
          {
            src: 'https://img.freepik.com/foto-gratis/persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina_23-2150520631.jpg?t=st=1709169976~exp=1709173576~hmac=ae60dfdcc11a6d6425872deb5eae7ac68cc8513e77816452d65a3be32cbf5ff8&w=996',
            alt: 'persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/hombres-tiro-completo-chocan-cinco-oficina_23-2149345549.jpg?t=st=1710092868~exp=1710096468~hmac=448b210a524726f64f9df6743bcafa8e6058f0172fd3eea774c5a589c8e37098&w=996',
            alt: 'hombres-tiro-completo-chocan-cinco-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre_637285-7996.jpg?t=st=1710092892~exp=1710096492~hmac=43304fb756f5c232fc829c5b6d7698eeb4f7e937cff84466f74a92bf5e654be0&w=996',
            alt: 'primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-que-encargan-limpieza-oficinas_23-2149374433.jpg?t=st=1710092805~exp=1710096405~hmac=0d5b20fd89bfea36de39e1b764c182e612a3c7d881b16235b0ee70720dd15bd6&w=360',
            alt: 'personas-que-encargan-limpieza-oficinas',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-frontal-hombre-limpiando-interior_23-2150454484.jpg?t=st=1710092908~exp=1710096508~hmac=b19dad312c34a93ce9791221a604cdc6aeb94fb3434df824fae22550231a1a2d&w=996',
            alt: 'vista-frontal-hombre-limpiando-interior',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta_1150-48118.jpg?t=st=1710092928~exp=1710096528~hmac=abc808091e3659bdb8bd653ee30e1293d73b8a02e45595bca68af1c27ae0c3b5&w=996',
            alt: 'vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/persona-que-encarga-limpieza-oficinas_23-2149374462.jpg?t=st=1710092950~exp=1710096550~hmac=da1f46318a31d8c31f06255693ae1247d187e5e3213f0a5ef3cf06a0acf1d468&w=996',
            alt: 'persona-que-encarga-limpieza-oficinas',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina_231208-547.jpg?t=st=1710092844~exp=1710096444~hmac=7dc1197a612539e0c28792e87cb342fe7eaba417f166dba4cb231a252e93ed47&w=360',
            alt: 'ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/servicio-limpieza-profesional-personas-trabajando-juntas-oficina_23-2150520643.jpg?t=st=1710092971~exp=1710096571~hmac=22a2e97e64312e34f54a39d6e47651ec63a186c5fac24a4d411cdad4d2cf6964&w=996',
            alt: 'servicio-limpieza-profesional-personas-trabajando-juntas-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/una-mujer-de-limpieza-profesional-de-ropa_23-2149374439.jpg?t=st=1710092996~exp=1710096596~hmac=5804c64aa432b7c2482c69c0986b2c0ff5e62115f1d7cf2e65e7de8b2e946508&w=996',
            alt: 'una-mujer-de-limpieza-profesional-de-ropa',
          },
        ],
      },
      faqs: {
        title: 'Perguntas Frequentes',
        subtitle:
          'Encontre respostas para perguntas comuns sobre nossos serviços de limpeza de tapetes.',
        items: [
          {
            title:
              'Com que frequência devo fazer a limpeza profissional dos meus tapetes?',
            description:
              'Recomendamos fazer a limpeza profissional de seus tapetes pelo menos uma vez por ano para manter sua aparência e prolongar sua vida útil. No entanto, áreas de alto tráfego podem exigir uma limpeza mais frequente.',
          },
          {
            title: 'Vocês podem remover manchas difíceis dos tapetes?',
            description:
              'Sim, somos especializados na remoção de manchas difíceis dos tapetes, incluindo manchas de animais de estimação, derramamentos de alimentos e muito mais. Nossas técnicas de limpeza avançadas e produtos especializados garantem a remoção eficaz das manchas sem danificar seus tapetes.',
          },
          {
            title:
              'Seu processo de limpeza de tapetes é seguro para animais e crianças?',
            description:
              'Absolutamente, utilizamos produtos de limpeza ecológicos que são seguros para animais de estimação e crianças. Nosso processo de limpeza é projetado para eliminar efetivamente sujeira e alérgenos, minimizando os riscos para seus entes queridos.',
          },
          {
            title:
              'Vocês oferecem serviços de limpeza de tapetes para propriedades comerciais?',
            description:
              'Sim, oferecemos serviços de limpeza de tapetes para propriedades residenciais e comerciais. Seja em um edifício de escritórios, loja de varejo ou hotel, temos a experiência e o equipamento necessários para gerenciar projetos de limpeza de tapetes de qualquer tamanho.',
          },
        ],
      },
    },
    {
      slug: 'garden-maintenance',
      layout: {
        metadata: {
          title: '',
        },
        title: 'Manutenção de Jardins',
        content:
          'Manutenção profissional de jardins para espaços externos vibrantes e saudáveis.',
        image: '/images/male-hands-cutting-bushes-with-big-scissors.webp',
        position: 'bg-bottom',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Nossos serviços de manutenção de jardins são projetados para manter seu espaço externo bonito e saudável durante todo o ano. Desde o cuidado regular do gramado até limpezas sazonais, nossa equipe de jardineiros experientes garante que cada aspecto do seu jardim esteja bem cuidado.',
        paragraph2:
          'Na Global Services and Maintenance, entendemos a importância de um jardim bem cuidado para realçar a beleza e o valor da sua propriedade. Seja para cortar o gramado, podar sebes ou plantar flores, prestamos atenção a cada detalhe para criar um oásis externo vibrante.',
        paragraph3:
          'Com nosso compromisso com a qualidade e atenção aos detalhes, você pode contar conosco para fornecer serviços de manutenção de jardins profissionais que superam suas expectativas. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades e preferências, garantindo que seus espaços externos estejam sempre em excelente estado.',
      },
      features: {
        title:
          'Características Chaves do Nosso Serviço de Manutenção de Jardins',
        subtitle:
          'Descubra por que nossos serviços de manutenção de jardins são a melhor escolha para espaços externos vibrantes e saudáveis.',
        items: [
          {
            title: 'Manutenção do Gramado',
            description:
              'Fornecemos corte, borda e fertilização regulares do gramado para mantê-lo viçoso e verde.',
            icon: 'mdi:grass',
          },
          {
            title: 'Poda de Seber',
            description:
              'Nossos jardineiros qualificados podam sebes e arbustos para manter sua forma e promover um crescimento saudável.',
            icon: 'mdi:tree-outline',
          },
          {
            title: 'Limpezas Sazonais',
            description:
              'Oferecemos limpezas sazonais para remover detritos, podar plantas e preparar seu jardim para as mudanças de estação.',
            icon: 'mdi:leaf',
          },
        ],
      },
      serviceOfferings: {
        title: 'Nossos Serviços de Manutenção de Jardins',
        subtitle:
          'Explore nossos serviços completos de manutenção de jardins para manter seu espaço externo vibrante e saudável.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122518/pensive-middle-aged-gardener-holding-small-thuja-pot-bearded-garden-worker-glasses-wearing-blue-shirt-apron-growing-evergreen-plants-greenhouse-commercial-gardening-summer-concept_j2ytpe.webp',
          alt: 'trabalhador-jardim',
        },
        paragraphList: 'Nossos serviços de manutenção de jardins incluem:',
        listItems: [
          'Corte e Bordo do Gramado',
          'Capina e Manutenção das Plantas',
          'Poda de Seber e Arbustos',
          'Mulching e Fertilização',
          'Limpezas Sazonais',
          'Manutenção de Jardins de Flores',
          'Poda de Árvores e Arbustos',
          'Remoção de Folhas',
          'Controle de Pragas e Doenças',
          'Manutenção dos Sistemas de Irrigação',
        ],
        titleHeading: 'Nosso Processo de Manutenção de Jardins',
        paragraphText:
          'Nosso processo de manutenção de jardins começa com uma avaliação detalhada do seu espaço externo para identificar quaisquer áreas que necessitam de atenção. Em seguida, desenvolvemos um plano de manutenção personalizado adaptado às suas necessidades específicas e programamos visitas regulares para manter seu jardim em excelente estado. Com nossa experiência e dedicação, seu espaço externo florescerá e prosperará ao longo do ano.',
        strongText:
          'Com nossa experiência e dedicação, seu espaço externo florescerá e prosperará ao longo do ano.',
      },
      imageGallery: {
        images: [
          {
            src: 'https://img.freepik.com/foto-gratis/ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina_231208-547.jpg?t=st=1710092844~exp=1710096444~hmac=7dc1197a612539e0c28792e87cb342fe7eaba417f166dba4cb231a252e93ed47&w=360',
            alt: 'mulher-feliz-manutencao-cozinha',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/servicio-limpieza-profesional-personas-trabajando-juntas-oficina_23-2150520643.jpg?t=st=1710092971~exp=1710096571~hmac=22a2e97e64312e34f54a39d6e47651ec63a186c5fac24a4d411cdad4d2cf696e&w=996',
            alt: 'servico-limpeza-profissional-escritorio',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-desinfectando-area-riesgo-biologico_23-2148848556.jpg?w=996',
            alt: 'desinfeccao-area-risco-biologico',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/edificio-limpieza-personas-tiro-medio_23-2150454565.jpg?t=st=1710093038~exp=1710096638~hmac=8e9f5b5769b07dc0b61c2fd03f79132f89b467690356068d1a4a8c08742ade9d&w=996',
            alt: 'limpeza-edificio',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/barandilla-limpieza-hombre-angulo_23-2149345522.jpg?t=st=1710093020~exp=1710096620~hmac=c804fa432ca0a47637aeb0758ba3df29edd229ea8747e6c09f0e8b4892bb5fbe&w=360',
            alt: 'limpeza-guardacorpos',
          },
        ],
      },
      faqs: {
        title: 'Perguntas Frequentes',
        subtitle:
          'Encontre respostas para perguntas comuns sobre nossos serviços de manutenção de jardins.',
        items: [
          {
            title: 'Com que frequência devo agendar a manutenção do jardim?',
            description:
              'Recomendamos agendar a manutenção do jardim pelo menos uma vez por mês para garantir que seu espaço externo permaneça vibrante e saudável. No entanto, a frequência pode variar dependendo do tamanho e da complexidade do seu jardim.',
          },
          {
            title: 'Vocês oferecem serviços de paisagismo?',
            description:
              'Sim, oferecemos serviços de paisagismo além da manutenção de jardins. Se você precisar de novas plantações, design paisagístico ou paisagismo duro, nossa equipe pode ajudar a transformar seu espaço externo em uma paisagem linda e funcional.',
          },
          {
            title:
              'Vocês podem ajudar com o controle de pragas e doenças no meu jardim?',
            description:
              'Absolutamente, temos experiência na identificação e tratamento de pragas e doenças comuns do jardim. Nossa equipe utiliza métodos seguros e eficazes para controlar pragas e prevenir doenças, garantindo a saúde e a vitalidade das suas plantas.',
          },
          {
            title:
              'Vocês oferecem serviços de manutenção de jardins orgânicos?',
            description:
              'Sim, oferecemos serviços de manutenção de jardins orgânicos para clientes que preferem práticas ecológicas. Nossa abordagem orgânica prioriza soluções naturais e práticas de jardinagem sustentáveis para promover a saúde do seu jardim e do meio ambiente.',
          },
        ],
      },
    },
    {
      slug: 'maintenance-services',
      layout: {
        metadata: {
          title: '',
        },
        title: 'Serviços de Manutenção',
        content:
          'Soluções de manutenção abrangentes para propriedades residenciais e comerciais.',
        image:
          '/images/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen.webp',
        position: 'bg-top',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Nossos serviços de manutenção cobrem uma ampla gama de necessidades tanto para propriedades residenciais quanto comerciais. De reparos de rotina à manutenção preventiva, nossos técnicos qualificados garantem que sua propriedade permaneça segura, funcional e em excelente estado.',
        paragraph2:
          'Na Global Services and Maintenance, priorizamos a manutenção proativa para identificar e resolver problemas antes que se tornem grandes inconvenientes. Com inspeções regulares e reparos rápidos, ajudamos você a evitar reparos dispendiosos e períodos de inatividade.',
        paragraph3:
          'Com nosso compromisso com a qualidade e a satisfação do cliente, você pode contar conosco para manter sua propriedade em boas condições. Seja para encanamento, eletricidade, HVAC ou reparos gerais, temos a experiência e os recursos necessários para atender às suas necessidades de manutenção.',
      },
      features: {
        title: 'Principais Características de Nossos Serviços de Manutenção',
        subtitle:
          'Descubra por que nossos serviços de manutenção são a melhor escolha para manter sua propriedade em excelente estado.',
        items: [
          {
            title: 'Manutenção Proativa',
            description:
              'Priorizamos a manutenção proativa para identificar e resolver problemas antes que eles escalem, reduzindo o risco de reparos dispendiosos e períodos de inatividade.',
            icon: 'mdi:toolbox',
          },
          {
            title: 'Técnicos Experientes',
            description:
              'Nossa equipe é composta por técnicos qualificados com anos de experiência na gestão de uma ampla gama de tarefas de manutenção, garantindo um serviço e resultados de alta qualidade.',
            icon: 'mdi:worker',
          },
          {
            title: 'Soluções Personalizadas',
            description:
              'Fornecemos soluções de manutenção personalizadas adaptadas às necessidades únicas da sua propriedade, garantindo que você receba o serviço mais eficiente e econômico.',
            icon: 'mdi:hammer-wrench',
          },
        ],
      },
      serviceOfferings: {
        title: 'Nossos Serviços de Manutenção',
        subtitle:
          'Explore nossos serviços de manutenção abrangentes para propriedades residenciais e comerciais.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/service-maintenance-worker-repairing_panrjk.webp',
          alt: 'service-maintenance-worker-repairing-panrjk',
        },
        paragraphList: 'Nossos serviços de manutenção incluem:',
        listItems: [
          'Reparos de Encanamento',
          'Manutenção Elétrica',
          'Serviços de HVAC',
          'Reparos Gerais e Manutenção',
          'Manutenção de Eletrodomésticos',
          'Pintura e Decoração',
          'Trabalhos de Marcenaria',
          'Manutenção de Telhados e Calhas',
          'Reparos de Pisos',
          'Manutenção de Sistemas de Segurança',
        ],
        titleHeading: 'Nosso Processo de Manutenção',
        paragraphText:
          'Nosso processo de manutenção começa com uma avaliação abrangente das necessidades da sua propriedade e de quaisquer problemas existentes. Em seguida, desenvolvemos um plano de manutenção personalizado que inclui inspeções regulares, manutenção preventiva e reparos rápidos conforme necessário. Com nossa abordagem proativa e atenção aos detalhes, garantimos que sua propriedade permaneça segura, funcional e bem mantida.',
        strongText:
          'Com nossa abordagem proativa e atenção aos detalhes, garantimos que sua propriedade permaneça segura, funcional e bem mantida.',
      },
      imageGallery: {
        images: [
          {
            src: 'https://img.freepik.com/foto-gratis/persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina_23-2150520631.jpg?t=st=1709169976~exp=1709173576~hmac=ae60dfdcc11a6d6425872deb5eae7ac68cc8513e77816452d65a3be32cbf5ff8&w=996',
            alt: 'persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/hombres-tiro-completo-chocan-cinco-oficina_23-2149345549.jpg?t=st=1710092868~exp=1710096468~hmac=448b210a524726f64f9df6743bcafa8e6058f0172fd3eea774c5a589c8e37098&w=996',
            alt: 'hombres-tiro-completo-chocan-cinco-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre_637285-7996.jpg?t=st=1710092892~exp=1710096492~hmac=43304fb756f5c232fc829c5b6d7698eeb4f7e937cff84466f74a92bf5e654be0&w=996',
            alt: 'primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-que-encargan-limpieza-oficinas_23-2149374433.jpg?t=st=1710092805~exp=1710096405~hmac=0d5b20fd89bfea36de39e1b764c182e612a3c7d881b16235b0ee70720dd15bd6&w=360',
            alt: 'personas-que-encargan-limpieza-oficinas',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-frontal-hombre-limpiando-interior_23-2150454484.jpg?t=st=1710092908~exp=1710096508~hmac=b19dad312c34a93ce9791221a604cdc6aeb94fb3434df824fae22550231a1a2d&w=996',
            alt: 'vista-frontal-hombre-limpiando-interior',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta_1150-48118.jpg?t=st=1710092928~exp=1710096528~hmac=abc808091e3659bdb8bd653ee30e1293d73b8a02e45595bca68af1c27ae0c3b5&w=996',
            alt: 'vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/persona-que-encarga-limpieza-oficinas_23-2149374462.jpg?t=st=1710092950~exp=1710096550~hmac=da1f46318a31d8c31f06255693ae1247d187e5e3213f0a5ef3cf06a0acf1d468&w=996',
            alt: 'persona-que-encarga-limpieza-oficinas',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina_231208-547.jpg?t=st=1710092844~exp=1710096444~hmac=7dc1197a612539e0c28792e87cb342fe7eaba417f166dba4cb231a252e93ed47&w=360',
            alt: 'ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/servicio-limpieza-profesional-personas-trabajando-juntas-oficina_23-2150520643.jpg?t=st=1710092971~exp=1710096571~hmac=22a2e97e64312e34f54a39d6e47651ec63a186c5fac24a4d411cdad4d2cf696e&w=996',
            alt: 'servicio-limpieza-profesional-personas-trabajando-juntas-oficina',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-desinfectando-area-riesgo-biologico_23-2148848556.jpg?w=996',
            alt: 'personas-desinfectando-area-riesgo-biologico',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/edificio-limpieza-personas-tiro-medio_23-2150454565.jpg?t=st=1710093038~exp=1710096638~hmac=8e9f5b5769b07dc0b61c2fd03f79132f89b467690356068d1a4a8c08742ade9d&w=996',
            alt: 'edificio-limpieza-personas-tiro-medio',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/barandilla-limpieza-hombre-angulo_23-2149345522.jpg?t=st=1710093020~exp=1710096620~hmac=c804fa432ca0a47637aeb0758ba3df29edd229ea8747e6c09f0e8b4892bb5fbe&w=360',
            alt: 'barandilla-limpieza-hombre-angulo',
          },
        ],
      },
      faqs: {
        title: 'Perguntas Frequentes sobre os Serviços de Manutenção',
        items: [
          {
            title: 'Quais tipos de serviços de manutenção vocês oferecem?',
            description:
              'Oferecemos uma ampla gama de serviços, incluindo reparos de encanamento, manutenção elétrica, serviços de HVAC e reparos gerais.',
          },
          {
            title: 'Como posso agendar um serviço?',
            description:
              'Você pode agendar um serviço ligando diretamente para nós ou preenchendo nosso formulário de contato online.',
          },
          {
            title: 'Os seus técnicos são treinados e segurados?',
            description:
              'Sim, todos os nossos técnicos são totalmente treinados e segurados para garantir a tranquilidade dos nossos clientes.',
          },
        ],
      },
    },
  ];
  return pages.map(
    ({
      slug,
      layout,
      serviceDetails,
      features,
      serviceOfferings,
      imageGallery,
      faqs,
    }) => {
      return {
        params: { slug },
        props: {
          layout,
          serviceDetails,
          features,
          serviceOfferings,
          imageGallery,
          faqs,
        },
      };
    }
  );
};
