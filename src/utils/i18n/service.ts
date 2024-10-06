export const getStaticPathsServices = (url: URL) => {
  console.log(url)
  const pages = [
    {
      slug: 'general-cleaning',
      layout: {
        metadata: {
          title: ``,
        },
        title: 'General Cleaning',
        content: 'Comprehensive cleaning for a spotless space.',
        image: '/images/vista-lateral-mesa-limpieza-barista-femenina-guantes-latex.webp',
        position: 'bg-center',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Our general cleaning services are designed to keep your space immaculate and inviting at all times. With a focus on attention to detail, our highly trained team takes care of every aspect, from routine cleaning to tackling tough stains.',
        paragraph2:
          'At Global Services and Maintenance, we understand the importance of maintaining a clean and healthy environment. We strive to exceed your expectations with every service we offer, whether it\'s regularly scheduled cleaning or a deep clean for a special event.',
        paragraph3:
          'We are committed to providing impeccable, high-quality cleaning services to meet the most demanding needs of our clients. We use advanced techniques and certified cleaning products to ensure exceptional results on every job. Your satisfaction and peace of mind are our top priority.',
      },
    
      features: {
        title: 'Features of Our Services',
        subtitle:
          'Discover why our services are the ideal choice for keeping your spaces clean and healthy.',
        items: [
          {
            title: 'Advanced Methods',
            description:
              'We use cutting-edge cleaning techniques backed by years of experience in the industry.',
            icon: 'mdi:tools',
          },
          {
            title: 'Detailed Inspection',
            description:
              'We conduct a meticulous inspection to identify problem areas and offer customized solutions.',
            icon: 'mdi:magnify',
          },
          {
            title: 'Eco-Friendly Products',
            description:
              'We prioritize the use of eco-friendly cleaning products to ensure a healthier, more sustainable environment.',
            icon: 'mdi:leaf',
          },
        ],
      },
    
      serviceOfferings: {
        title: 'General Cleaning Services',
        subtitle:
          'Discover how we can keep your spaces spotless and dirt-free with our general cleaning services.',
        classes: {},
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/front-view-man-cleaning-indoors_pqgahy.webp',
          alt: 'cleaning-indoors',
        },
        paragraphList: 'These are our general cleaning services:',
        listItems: [
          'Regular Cleaning',
          'Deep Cleaning',
          'Carpet Washing',
          'Window Cleaning',
          'Trash Collection and Removal',
          'Bathroom Disinfection',
          'Floor Waxing and Polishing',
          'High-Pressure Washing',
          'Eco-Friendly Cleaning Options',
        ],
        titleHeading: 'Our Cleaning Process',
        paragraphText:
          'Our team follows a detailed process that includes inspection, thorough cleaning, and final finishing to ensure your spaces are immaculate at all times. With our dedication and attention to detail, you can trust that your spaces will be clean and fresh for you to enjoy fully.',
        strongText:
          'With our dedication and attention to detail, you can trust that your spaces will be clean and fresh for you to enjoy fully.',
      },
      imageGallery: {
        images: [
          {
            src: 'https://img.freepik.com/foto-gratis/persona-servicio-limpieza-profesional-que-usa-aspiradora-oficina_23-2150520631.jpg?t=st=1709169976~exp=1709173576~hmac=ae60dfdcc11a6d6425872deb5eae7ac68cc8513e77816452d65a3be32cbf5ff8&w=996',
            alt: 'cleaning-professional-vacuuming-office',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/hombres-tiro-completo-chocan-cinco-oficina_23-2149345549.jpg?t=st=1710092868~exp=1710096468~hmac=448b210a524726f64f9df6743bcafa8e6058f0172fd3eea774c5a589c8e37098&w=996',
            alt: 'full-length-men-high-fiving-office',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/primer-plano-camarera-desinfectando-mesas-cafe-al-aire-libre_637285-7996.jpg?t=st=1710092892~exp=1710096492~hmac=43304fb756f5c232fc829c5b6d7698eeb4f7e937cff84466f74a92bf5e654be0&w=996',
            alt: 'close-up-waitress-disinfecting-outdoor-cafe-tables',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-que-encargan-limpieza-oficinas_23-2149374433.jpg?t=st=1710092805~exp=1710096405~hmac=0d5b20fd89bfea36de39e1b764c182e612a3c7d881b16235b0ee70720dd15bd6&w=360',
            alt: 'people-overseeing-office-cleaning',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-frontal-hombre-limpiando-interior_23-2150454484.jpg?t=st=1710092908~exp=1710096508~hmac=b19dad312c34a93ce9791221a604cdc6aeb94fb3434df824fae22550231a1a2d&w=996',
            alt: 'front-view-man-cleaning-indoors',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/vista-lateral-cerca-mano-joven-delantal-guantes-goma-sosteniendo-canasta-equipo-limpieza-plumero-botella-rociadora-esponja-pano-limpiar-canasta_1150-48118.jpg?t=st=1710092928~exp=1710096528~hmac=abc808091e3659bdb8bd653ee30e1293d73b8a02e45595bca68af1c27ae0c3b5&w=996',
            alt: 'side-view-close-up-young-apron-gloves-rubber-holding-basket-cleaning-supplies-duster-spray-bottle-sponge-cloth-clean-basket',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/persona-que-encarga-limpieza-oficinas_23-2149374462.jpg?t=st=1710092950~exp=1710096550~hmac=da1f46318a31d8c31f06255693ae1247d187e5e3213f0a5ef3cf06a0acf1d468&w=996',
            alt: 'person-in-charge-office-cleaning',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/ama-casa-sonriente-mujer-joven-que-limpia-muebles-cocina_231208-547.jpg?t=st=1710092844~exp=1710096444~hmac=7dc1197a612539e0c28792e87cb342fe7eaba417f166dba4cb231a252e93ed47&w=360',
            alt: 'smiling-housewife-young-woman-cleaning-kitchen-furniture',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/servicio-limpieza-profesional-personas-trabajando-juntas-oficina_23-2150520643.jpg?t=st=1710092971~exp=1710096571~hmac=22a2e97e64312e34f54a39d6e47651ec63a186c5fac24a4d411cdad4d2cf696e&w=996',
            alt: 'professional-cleaning-service-people-working-together-office',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/personas-desinfectando-area-riesgo-biologico_23-2148848556.jpg?w=996',
            alt: 'people-disinfecting-biological-hazard-area',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/edificio-limpieza-personas-tiro-medio_23-2150454565.jpg?t=st=1710093038~exp=1710096638~hmac=8e9f5b5769b07dc0b61c2fd03f79132f89b467690356068d1a4a8c08742ade9d&w=996',
            alt: 'building-cleaning-people-medium-shot',
          },
          {
            src: 'https://img.freepik.com/foto-gratis/barandilla-limpieza-hombre-angulo_23-2149345522.jpg?t=st=1710093020~exp=1710096620~hmac=c804fa432ca0a47637aeb0758ba3df29edd229ea8747e6c09f0e8b4892bb5fbe&w=360',
            alt: 'railing-cleaning-man-angle',
          },
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Find answers to the most common questions about our general cleaning services.',
        items: [
          {
            title: 'What is included in the general cleaning service?',
            description:
              'Our general cleaning service covers cleaning all common areas of your home or business, including floors, surfaces, bathrooms, and more.',
          },
          {
            title: 'What is the process for hiring your services?',
            description:
              'The process is simple: first, contact us to schedule an evaluation of your cleaning needs. Then, we will provide you with a detailed quote and, once accepted, we will coordinate the start date and time of the service.',
          },
          {
            title: 'How do you ensure the quality of your work?',
            description:
              'We are committed to offering the highest quality service. Our team is composed of trained professionals, and we use state-of-the-art cleaning products and equipment to ensure exceptional results on every job.',
          },
          {
            title: 'Do you offer customized services based on my needs?',
            description:
              'Yes, we tailor our services to your specific needs. We can design a custom cleaning plan that fits your preferences and requirements, whether it\'s for regular cleaning or special occasions.',
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
        title: 'Window Cleaning',
        content:
          'Professional window cleaning for sparkling, streak-free windows.',
        image: '/images/person-taking-care-office-cleaning.webp',
        position: 'bg-center',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Our window cleaning service is designed to leave your windows crystal clear and free of streaks. Using advanced techniques and eco-friendly products, our team ensures a thorough clean for both interior and exterior windows.',
        paragraph2:
          "At Global Services and Maintenance, we understand the importance of maintaining clean windows for a bright and welcoming space. Whether it's for residential or commercial properties, we guarantee exceptional results that exceed your expectations.",
        paragraph3:
          'With our attention to detail and commitment to quality, you can trust us to deliver outstanding window cleaning services every time. We take pride in our work and strive to leave your windows looking spotless and gleaming.',
      },
      features: {
        title: 'Key Features of Our Window Cleaning Service',
        subtitle:
          'Discover why our window cleaning services are the best choice for a sparkling finish.',
        items: [
          {
            title: 'Professional Techniques',
            description:
              'We employ professional window cleaning techniques to ensure a streak-free finish and sparkling windows.',
            icon: 'mdi:tools',
          },
          {
            title: 'Eco-Friendly Products',
            description:
              'We use eco-friendly cleaning products that are safe for your windows and the environment.',
            icon: 'mdi:leaf',
          },
          {
            title: 'Interior and Exterior Cleaning',
            description:
              'Our service covers both interior and exterior windows, leaving your entire property looking pristine.',
            icon: 'mdi:window-open-variant',
          },
        ],
      },
      serviceOfferings: {
        title: 'Our Window Cleaning Services',
        subtitle:
          'Explore our comprehensive window cleaning services to keep your windows sparkling clean.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/person-taking-care-office-cleaning_2_k7xanu.webp',
          alt: 'person-taking-care-office-cleaning',
        },
        paragraphList: 'Our window cleaning services include:',
        listItems: [
          'Interior Window Cleaning',
          'Exterior Window Cleaning',
          'Window Frame Cleaning',
          'Screen Cleaning',
          'Hard-to-Reach Window Cleaning',
          'Customized Cleaning Plans',
        ],
        titleHeading: 'Our Window Cleaning Process',
        paragraphText:
          'We follow a meticulous process that involves inspection, cleaning, and final inspection to ensure your windows are spotless and streak-free. With our dedication to quality, your windows will shine brightly and enhance the overall appearance of your property.',
        strongText:
          'With our dedication to quality, your windows will shine brightly and enhance the overall appearance of your property.',
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
        ],
      },
      faqs: {
        title: 'Frequently Asked Questions',
        subtitle:
          'Find answers to common questions about our window cleaning services.',
        items: [
          {
            title: 'How often should I schedule window cleaning?',
            description:
              'The frequency of window cleaning depends on various factors such as location, weather conditions, and personal preference. We recommend scheduling regular cleaning to maintain the appearance and integrity of your windows.',
          },
          {
            title: 'Do you clean windows at height?',
            description:
              'Yes, we have the expertise and equipment to clean windows at height, including those in high-rise buildings. Our team follows strict safety protocols to ensure a secure and efficient cleaning process.',
          },
          {
            title: 'Can you remove stubborn stains from windows?',
            description:
              "Yes, we use specialised techniques and cleaning solutions to remove stubborn stains from windows. Whether it's hard water stains, bird droppings, or mineral deposits, we have the tools to restore your windows to their original condition.",
          },
          {
            title: 'Do you offer window cleaning for commercial properties?',
            description:
              "Absolutely, we provide window cleaning services for both residential and commercial properties. Whether it's an office building, storefront, or industrial facility, we can handle window cleaning projects of any size.",
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
        title: 'Carpet Cleaning',
        content:
          'Professional carpet cleaning for fresh and revitalized carpets.',
        image: '/images/closeup-vacuum-cleaner-living-room.webp',
        position: 'bg-center',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Our carpet cleaning services are designed to remove dirt, stains, and allergens from your carpets, leaving them looking and feeling fresh. Using advanced cleaning techniques and eco-friendly products, our team ensures a thorough clean that revitalizes your carpets and improves indoor air quality.',
        paragraph2:
          "At Global Services and Maintenance, we understand the importance of clean carpets for a healthy and comfortable environment. Whether it's for residential or commercial properties, we deliver exceptional results that exceed your expectations.",
        paragraph3:
          'With our attention to detail and commitment to quality, you can trust us to provide professional carpet cleaning services that leave your carpets looking as good as new. We take pride in our work and strive to enhance the overall appearance and hygiene of your space.',
      },
      features: {
        title: 'Key Features of Our Carpet Cleaning Service',
        subtitle:
          'Discover why our carpet cleaning services are the best choice for fresh and revitalized carpets.',
        items: [
          {
            title: 'Advanced Cleaning Techniques',
            description:
              'We use advanced cleaning techniques to effectively remove dirt, stains, and allergens from your carpets.',
            icon: 'mdi:tools',
          },
          {
            title: 'Eco-Friendly Products',
            description:
              'We prioritize the use of eco-friendly cleaning products that are safe for your carpets and the environment.',
            icon: 'mdi:leaf',
          },
          {
            title: 'Stain Removal Expertise',
            description:
              'Our team has expertise in removing a wide range of carpet stains, including pet stains, food spills, and more.',
            icon: 'mdi:brush',
          },
        ],
      },
      serviceOfferings: {
        title: 'Our Carpet Cleaning Services',
        subtitle:
          'Explore our comprehensive carpet cleaning services to restore the beauty and freshness of your carpets.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/girl-cleaning-house-with-vacuum-cleaner_vt3urp.webp',
          alt: 'girl-cleaning-house-with-vacuum-cleaner',
        },
        paragraphList: 'Our carpet cleaning services include:',
        listItems: [
          'Steam Cleaning',
          'Deep Cleaning',
          'Stain Removal',
          'Odor Neutralization',
          'Pet-Friendly Cleaning',
          'Eco-Friendly Cleaning Options',
          'Area Rug Cleaning',
          'Upholstery Cleaning',
          'Carpet Protection Treatments',
        ],
        titleHeading: 'Our Carpet Cleaning Process',
        paragraphText:
          'We follow a detailed carpet cleaning process that begins with a thorough inspection and ends with a final inspection to ensure your carpets are clean, fresh, and free of stains. With our expertise and dedication, we guarantee exceptional results that rejuvenate your carpets and enhance the overall appearance of your space.',
        strongText:
          'With our expertise and dedication, we guarantee exceptional results that rejuvenate your carpets and enhance the overall appearance of your space.',
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
        title: 'Frequently Asked Questions',
        subtitle:
          'Find answers to common questions about our carpet cleaning services.',
        items: [
          {
            title: 'How often should I have my carpets professionally cleaned?',
            description:
              'We recommend having your carpets professionally cleaned at least once a year to maintain their appearance and prolong their lifespan. However, high-traffic areas may require more frequent cleaning.',
          },
          {
            title: 'Can you remove tough stains from carpets?',
            description:
              'Yes, we specialize in removing tough stains from carpets, including pet stains, food spills, and more. Our advanced cleaning techniques and specialized products ensure effective stain removal without damaging your carpets.',
          },
          {
            title:
              'Is your carpet cleaning process safe for pets and children?',
            description:
              'Absolutely, we use eco-friendly cleaning products that are safe for pets and children. Our cleaning process is designed to effectively remove dirt and allergens while minimizing any risk to your loved ones.',
          },
          {
            title: 'Do you offer carpet cleaning for commercial properties?',
            description:
              "Yes, we provide carpet cleaning services for both residential and commercial properties. Whether it's an office building, retail store, or hotel, we have the expertise and equipment to tackle carpet cleaning projects of any size.",
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
        title: 'Garden Maintenance',
        content:
          'Professional garden maintenance for vibrant and healthy outdoor spaces.',
        image: '/images/male-hands-cutting-bushes-with-big-scissors.webp',
        position: 'bg-bottom',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Our garden maintenance services are designed to keep your outdoor space looking beautiful and healthy throughout the year. From regular lawn care to seasonal clean-ups, our team of experienced gardeners ensures that every aspect of your garden is well-maintained.',
        paragraph2:
          "At Global Services and Maintenance, we understand the importance of a well-maintained garden for enhancing the beauty and value of your property. Whether it's mowing the lawn, trimming hedges, or planting flowers, we take care of every detail to create a vibrant outdoor oasis.",
        paragraph3:
          'With our commitment to quality and attention to detail, you can trust us to provide professional garden maintenance services that exceed your expectations. We work closely with our clients to understand their needs and preferences, ensuring that their outdoor spaces are always in top condition.',
      },
      features: {
        title: 'Key Features of Our Garden Maintenance Service',
        subtitle:
          'Discover why our garden maintenance services are the best choice for vibrant and healthy outdoor spaces.',
        items: [
          {
            title: 'Lawn Care',
            description:
              'We provide regular lawn mowing, edging, and fertilization to keep your lawn lush and green.',
            icon: 'mdi:grass',
          },
          {
            title: 'Hedge Trimming',
            description:
              'Our skilled gardeners trim hedges and shrubs to maintain their shape and promote healthy growth.',
            icon: 'mdi:tree-outline',
          },
          {
            title: 'Seasonal Clean-Ups',
            description:
              'We offer seasonal clean-ups to remove debris, trim plants, and prepare your garden for the changing seasons.',
            icon: 'mdi:leaf',
          },
        ],
      },
      serviceOfferings: {
        title: 'Our Garden Maintenance Services',
        subtitle:
          'Explore our comprehensive garden maintenance services to keep your outdoor space vibrant and healthy.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122518/pensive-middle-aged-gardener-holding-small-thuja-pot-bearded-garden-worker-glasses-wearing-blue-shirt-apron-growing-evergreen-plants-greenhouse-commercial-gardening-summer-concept_j2ytpe.webp',
          alt: 'garden-worker',
        },
        paragraphList: 'Our garden maintenance services include:',
        listItems: [
          'Lawn Mowing and Edging',
          'Weeding and Plant Care',
          'Hedge and Shrub Trimming',
          'Mulching and Fertilization',
          'Seasonal Clean-Ups',
          'Flower Bed Maintenance',
          'Tree and Bush Pruning',
          'Leaf Removal',
          'Pest and Disease Control',
          'Irrigation System Maintenance',
        ],
        titleHeading: 'Our Garden Maintenance Process',
        paragraphText:
          'Our garden maintenance process begins with a thorough assessment of your outdoor space to identify any areas that require attention. We then develop a customized maintenance plan tailored to your specific needs and schedule regular visits to keep your garden in top condition. With our expertise and dedication, your outdoor space will flourish and thrive throughout the year.',
        strongText:
          'With our expertise and dedication, your outdoor space will flourish and thrive throughout the year.',
      },
      imageGallery: {
        images: [
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
        title: 'Frequently Asked Questions',
        subtitle:
          'Find answers to common questions about our garden maintenance services.',
        items: [
          {
            title: 'How often should I schedule garden maintenance?',
            description:
              'We recommend scheduling garden maintenance at least once a month to ensure your outdoor space remains vibrant and healthy. However, the frequency may vary depending on the size and complexity of your garden.',
          },
          {
            title: 'Do you provide landscaping services?',
            description:
              'Yes, we offer landscaping services in addition to garden maintenance. Whether you need new plantings, landscape design, or hardscaping, our team can help transform your outdoor space into a beautiful and functional landscape.',
          },
          {
            title: 'Can you help with pest and disease control in my garden?',
            description:
              'Absolutely, we have expertise in identifying and treating common garden pests and diseases. Our team uses safe and effective methods to control pests and prevent disease, ensuring the health and vitality of your plants.',
          },
          {
            title: 'Do you offer organic garden maintenance services?',
            description:
              'Yes, we offer organic garden maintenance services for clients who prefer environmentally friendly practices. Our organic approach prioritizes natural solutions and sustainable gardening practices to promote the health of your garden and the environment.',
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
        title: 'Maintenance Services',
        content:
          'Comprehensive maintenance solutions for residential and commercial properties.',
        image:
          '/images/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen.webp',
        position: 'bg-top',
      },
      serviceDetails: {
        id: 'service-details',
        paragraph1:
          'Our maintenance services cover a wide range of needs for both residential and commercial properties. From routine repairs to preventive maintenance, our skilled technicians ensure that your property remains safe, functional, and in optimal condition.',
        paragraph2:
          'At Global Services and Maintenance, we prioritize proactive maintenance to identify and address issues before they become major problems. With regular inspections and timely repairs, we help you avoid costly repairs and downtime.',
        paragraph3:
          "With our dedication to quality and customer satisfaction, you can trust us to keep your property running smoothly. Whether it's plumbing, electrical, HVAC, or general repairs, we have the expertise and resources to meet your maintenance needs.",
      },
      features: {
        title: 'Key Features of Our Maintenance Services',
        subtitle:
          'Discover why our maintenance services are the best choice for keeping your property in top condition.',
        items: [
          {
            title: 'Proactive Maintenance',
            description:
              'We prioritize proactive maintenance to identify and address issues before they escalate, reducing the risk of costly repairs and downtime.',
            icon: 'mdi:toolbox',
          },
          {
            title: 'Experienced Technicians',
            description:
              'Our team consists of skilled technicians with years of experience in handling a wide range of maintenance tasks, ensuring high-quality service and results.',
            icon: 'mdi:worker',
          },
          {
            title: 'Customized Solutions',
            description:
              'We provide customized maintenance solutions tailored to the unique needs of your property, ensuring that you receive the most effective and cost-efficient service.',
            icon: 'mdi:hammer-wrench',
          },
        ],
      },
      serviceOfferings: {
        title: 'Our Maintenance Services',
        subtitle:
          'Explore our comprehensive maintenance services for residential and commercial properties.',
        image: {
          src: 'https://res.cloudinary.com/dnw9rbfpx/image/upload/v1710122517/service-maintenance-worker-repairing_panrjk.webp',
          alt: 'service-maintenance-worker-repairing-panrjk',
        },
        paragraphList: 'Our maintenance services include:',
        listItems: [
          'Plumbing Repairs',
          'Electrical Maintenance',
          'HVAC Services',
          'General Repairs and Upkeep',
          'Appliance Maintenance',
          'Painting and Decorating',
          'Carpentry Work',
          'Roofing and Gutter Maintenance',
          'Flooring Repairs',
          'Security System Maintenance',
        ],
        titleHeading: 'Our Maintenance Process',
        paragraphText:
          "Our maintenance process begins with a thorough assessment of your property's needs and any existing issues. We then develop a customized maintenance plan that includes regular inspections, preventive maintenance, and prompt repairs as needed. With our proactive approach and attention to detail, we ensure that your property remains safe, functional, and well-maintained.",
        strongText:
          'With our proactive approach and attention to detail, we ensure that your property remains safe, functional, and well-maintained.',
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
        title: 'Frequently Asked Questions',
        subtitle:
          'Find answers to common questions about our maintenance services.',
        items: [
          {
            title: 'Do you offer emergency maintenance services?',
            description:
              'Yes, we provide emergency maintenance services to address urgent issues outside of regular business hours. Our team is available 24/7 to handle emergencies and ensure the safety and security of your property.',
          },
          {
            title: 'How often should I schedule preventive maintenance?',
            description:
              'The frequency of preventive maintenance depends on factors such as the age of your property, its condition, and the type of systems and equipment it contains. We can help you develop a customized preventive maintenance schedule to ensure optimal performance and longevity.',
          },
          {
            title: 'Can you handle large-scale maintenance projects?',
            description:
              "Yes, we have the resources and expertise to handle large-scale maintenance projects for residential and commercial properties. Whether it's a renovation, repair, or ongoing maintenance contract, we can manage projects of any size with efficiency and professionalism.",
          },
          {
            title: 'What sets your maintenance services apart?',
            description:
              'Our maintenance services stand out due to our commitment to quality, reliability, and customer satisfaction. We prioritize proactive maintenance, employ experienced technicians, and offer customized solutions to meet the unique needs of each client.',
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
