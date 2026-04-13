document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto Scroll en Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger animation
            const spans = hamburger.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu on link click
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // Trigger scroll event once on load to show elements in viewport
    window.dispatchEvent(new Event('scroll'));

    // 4. Language Translation
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_projects: "Proyectos",
            nav_contact: "Contacto",
            hero_title: "Prestige Wood Solutions LLC",
            hero_subtitle: "Arte y precisión en cada veta.",
            hero_cta: "Solicitar Consultoría Privada",
            services_header: "Nuestra Maestría",
            srv_1_title: "Diseño & Planificación",
            srv_1_desc: "Análisis meticuloso y trazado para que tu visión cobre vida con proporciones perfectas antes del primer corte.",
            srv_2_title: "Mobiliario a Medida",
            srv_2_desc: "Piezas exclusivas ensambladas con maderas nobles, respetando la textura natural para crear muebles eternos.",
            srv_3_title: "Instalaciones Arquitectónicas",
            srv_3_desc: "Desde puertas monumentales hasta vigas de techo y revestimientos que definen el lujo de cualquier espacio.",
            proj_header: "Proyectos de Autor",
            proj_1: "Cocina de Autor en Roble",
            proj_2: "Puerta Monumental de Nogal",
            proj_3: "Estructura de Vigas Vistas",
            proj_4: "Comedor a Medida",
            proj_5: "Obra de Autor",
            proj_6: "Detalle de Carpintería",
            proj_7: "Acabado Premium",
            proj_8: "Instalación Especializada",
            proj_9: "Diseño de Veta",
            footer_slogan: "Arte y precisión en cada veta.",
            footer_contact_header: "Consultoría Privada & Ubicación",
            footer_contact_desc: "Para comisiones y proyectos especiales, visítanos o contáctanos.",
            footer_map: "📍 Abrir en Google Maps",
            footer_rights: "&copy; 2026 Prestige Wood Solutions LLC. Todos los derechos reservados.",
            test_header: "Clientela Distinguida",
            test_1_quote: "\"Trabajar con Prestige Wood Solutions ha sido la mejor decisión para nuestros proyectos residenciales. Su seriedad en los plazos y la ejecución impecable de la madera marcan un estándar difícil de igualar.\"",
            test_1_name: "Julián Alarcón",
            test_1_role: "Arquitecto Senior",
            test_2_quote: "\"La precisión técnica de su equipo es absoluta. Han demostrado ser profesionales extremadamente serios, entregando piezas con acabados impecables que elevan el valor de cualquier propiedad.\"",
            test_2_name: "Elena Santamaría",
            test_2_role: "Interiorista",
            test_3_quote: "\"Buscaba exclusividad y encontré en esta empresa una gestión ejemplar. Su trabajo en mobiliario a medida es impecable; sin duda, la mejor opción para quienes valoramos el detalle y la formalidad.\"",
            test_3_name: "Marcos V. Riva",
            test_3_role: "Cliente Particular",
            test_4_quote: "\"Elegir a Prestige ha sido la mejor decisión técnica del año. Demostraron ser personas excepcionalmente serias, resolviendo montajes de alta complejidad con resultados finales impecables.\"",
            test_4_name: "Isabel Córcega",
            test_4_role: "Directora de Proyectos",
            test_5_quote: "\"La formalidad con la que manejan cada encomienda es sobresaliente. Su enfoque serio y el nivel de detalle impecable en cada veta justifican plenamente considerarlos como la mejor opción de alto lujo.\"",
            test_5_name: "Diego Astorga",
            test_5_role: "Inversor Inmobiliario"
        },
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_title: "Prestige Wood Solutions LLC",
            hero_subtitle: "Art and precision in every grain.",
            hero_cta: "Request Private Consultation",
            services_header: "Our Mastery",
            srv_1_title: "Design & Planning",
            srv_1_desc: "Meticulous analysis and layout to bring your vision to life with perfect proportions before the first cut.",
            srv_2_title: "Custom Furniture",
            srv_2_desc: "Exclusive pieces assembled with noble woods, respecting natural textures to create eternal furniture.",
            srv_3_title: "Architectural Installations",
            srv_3_desc: "From monumental doors to ceiling beams and claddings that define the luxury of any space.",
            proj_header: "Signature Projects",
            proj_1: "Signature Oak Kitchen",
            proj_2: "Monumental Walnut Door",
            proj_3: "Exposed Beam Structure",
            proj_4: "Custom Dining Room",
            proj_5: "Signature Masterpiece",
            proj_6: "Carpentry Detail",
            proj_7: "Premium Finish",
            proj_8: "Specialized Installation",
            proj_9: "Grain Design",
            footer_slogan: "Art and precision in every grain.",
            footer_contact_header: "Private Consultation & Location",
            footer_contact_desc: "For commissions and special projects, visit or contact us.",
            footer_map: "📍 Open in Google Maps",
            footer_rights: "&copy; 2026 Prestige Wood Solutions LLC. All rights reserved.",
            test_header: "Distinguished Clientele",
            test_1_quote: "\"Working with Prestige Wood Solutions has been the best decision for our residential projects. Their seriousness in deadlines and the impeccable execution of woodwork set a standard hard to match.\"",
            test_1_name: "Julián Alarcón",
            test_1_role: "Senior Architect",
            test_2_quote: "\"The technical precision of their team is absolute. They have proven to be extremely serious professionals, delivering pieces with impeccable finishes that elevate the value of any luxury property.\"",
            test_2_name: "Elena Santamaría",
            test_2_role: "Interior Designer",
            test_3_quote: "\"I sought exclusivity and found exemplary management here. Their work on custom furniture is impeccable; undoubtedly, the best choice for those who value detail and formality.\"",
            test_3_name: "Marcos V. Riva",
            test_3_role: "Private Client",
            test_4_quote: "\"Choosing Prestige was the best technical decision of the year. They proved to be exceptionally serious, solving high-complexity assemblies with impeccable final results.\"",
            test_4_name: "Isabel Córcega",
            test_4_role: "Projects Director",
            test_5_quote: "\"Their formality in handling every task is outstanding. Their serious approach and impeccable attention to detail justify considering them the best high-luxury option.\"",
            test_5_name: "Diego Astorga",
            test_5_role: "Real Estate Investor"
        }
    };

    let currentLang = 'es';
    const langToggle = document.getElementById('lang-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES'; 
            
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    if (key === 'footer_rights') {
                        el.innerHTML = translations[currentLang][key]; // preserve HTML tags like &copy;
                    } else {
                        el.textContent = translations[currentLang][key];
                    }
                }
            });
        });
    }

    // 5. Portfolio Carousel
    const track = document.getElementById('portfolio-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');

    if (track && prevButton && nextButton) {
        let currentIndex = 0;
        
        const updateCarousel = () => {
            const slide = track.querySelector('.carousel-slide');
            if(slide) {
                const slideWidth = slide.clientWidth;
                track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }
        };

        const getVisibleSlides = () => {
            if (window.innerWidth >= 900) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        };

        nextButton.addEventListener('click', () => {
            const totalSlides = track.children.length;
            const visible = getVisibleSlides();
            if (currentIndex < totalSlides - visible) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            const totalSlides = track.children.length;
            const visible = getVisibleSlides();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - visible;
            }
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
    }
});
