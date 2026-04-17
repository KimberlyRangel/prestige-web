document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_materials: "Materiales",
            nav_projects: "Proyectos",
            nav_contact: "Contacto",
            nav_legacy: "Nuestro Legado",
            leg_header: "La Esencia de la Madera",
            leg_p1: "Nuestra historia se escribe en las vetas del nogal y el roble. Con más de 35 años de experiencia, hemos perfeccionado el arte de escuchar a la madera antes de tocarla con una gubia.",
            leg_p2: "Cada pieza es un diálogo entre la naturaleza y la precisión técnica, diseñada para trascender el tiempo y las tendencias.",
            mat_header: "Maderas Nobles",
            mat_1_title: "Nogal Americano",
            mat_1_desc: "Profundidad y carácter en una veta oscura incomparable.",
            mat_2_title: "Roble Europeo",
            mat_2_desc: "Fuerza estructural con una elegancia atemporal y cálida.",
            mat_3_title: "Caoba Selección",
            mat_3_desc: "El tono rojizo del lujo clásico, ahora reinterpretado.",
            contact_header: "Inicie Su Proyecto",
            form_name: "Nombre y Apellidos",
            form_email: "Correo Electrónico",
            form_message: "Detalles del Proyecto",
            form_submit: "Confirmar Solicitud",
            form_success: "¡Mensaje enviado con éxito! Nos contactaremos pronto.",
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
            stat_projects: "Proyectos de Autor",
            stat_years: "Años de Maestría",
            stat_satisfaction: "Excelencia Garantizada",
            val_1_title: "Sostenibilidad",
            val_1_desc: "Compromiso con el uso de maderas de origen certificado y procesos de bajo impacto ambiental.",
            val_2_title: "Precisión Milimétrica",
            val_2_desc: "Cada corte y ensamble es verificado bajo los estándares más estrictos de la alta carpintería.",
            val_3_title: "Trascendencia",
            val_3_desc: "No creamos objetos temporales; diseñamos piezas destinadas a ser heredadas por generaciones.",
            trans_header: "El Poder de la Transformación",
            footer_slogan: "Arte y precisión en cada veta.",
            footer_contact_header: "Consultoría Privada & Ubicación",
            footer_contact_desc: "Para comisiones y proyectos especiales, visítanos o contáctanos.",
            footer_map: "📍 Abrir en Google Maps",
            footer_rights: "Todos los derechos reservados.",
            testimonials_header: "Voces de Excelencia",
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
            nav_materials: "Materials",
            nav_projects: "Projects",
            nav_contact: "Contact",
            nav_legacy: "Our Legacy",
            leg_header: "The Essence of Wood",
            leg_p1: "Our history is written in the grains of walnut and oak. With over 35 years of experience, we have perfected the art of listening to the wood before touching it with a gouge.",
            leg_p2: "Each piece is a dialogue between nature and technical precision, designed to transcend time and trends.",
            mat_header: "Noble Woods",
            mat_1_title: "American Walnut",
            mat_1_desc: "Intense dark tones and a tight grain pattern for maximum sophistication.",
            mat_2_title: "European Oak",
            mat_2_desc: "Structural strength with a warm and timeless elegance.",
            mat_3_title: "Select Mahogany",
            mat_3_desc: "The reddish tone of classic luxury, now reinterpreted.",
            contact_header: "Start Your Project",
            form_name: "Full Name",
            form_email: "Email Address",
            form_message: "Project Details",
            form_submit: "Confirm Request",
            form_success: "Message sent successfully! We will contact you soon.",
            hero_title: "Prestige Wood Solutions LLC",
            hero_subtitle: "Art and precision in every grain.",
            hero_cta: "Request Private Consultation",
            services_header: "Our Mastery",
            srv_1_title: "Design & Planning",
            srv_1_desc: "Meticulous analysis and mapping so your vision comes to life with perfect proportions.",
            srv_2_title: "Bespoke Furniture",
            srv_2_desc: "Exclusive pieces assembled with noble woods, respecting the natural texture.",
            srv_3_title: "Architectural Installations",
            srv_3_desc: "From monumental doors to beams and coatings that define the luxury of any space.",
            proj_header: "Author Portfolio",
            proj_1: "Author Kitchen in Oak",
            proj_2: "Monumental Walnut Door",
            proj_3: "Exposed Beam Structure",
            proj_4: "Dining Room",
            stat_projects: "Signature Projects",
            stat_years: "Years of Mastery",
            stat_satisfaction: "Guaranteed Excellence",
            val_1_title: "Sustainability",
            val_1_desc: "Commitment to the use of wood from certified origin.",
            val_2_title: "Millimeter Precision",
            val_2_desc: "Each cut and assembly is verified under strict standards.",
            val_3_title: "Transcendence",
            val_3_desc: "We design pieces destined to be inherited for generations.",
            trans_header: "The Power of Transformation",
            footer_slogan: "Art and precision in every grain.",
            footer_contact_header: "Private Consultation & Location",
            footer_contact_desc: "For commissions and special projects, visit us or contact us.",
            footer_map: "📍 Open in Google Maps",
            footer_rights: "All rights reserved.",
            testimonials_header: "Voices of Excellence",
            test_1_quote: "\"Working with Prestige Wood Solutions was the best decision for our residential projects. Their seriousness in deadlines and execution marks a standard difficult to match.\"",
            test_1_name: "Julián Alarcón",
            test_1_role: "Senior Architect",
            test_2_quote: "\"The technical precision of their team is absolute. They have proven to be extremely serious professionals, delivering pieces with impeccable finishes.\"",
            test_2_name: "Elena Santamaría",
            test_2_role: "Interior Designer",
            test_3_quote: "\"I was looking for exclusivity and found exemplary management. Their work in custom furniture is impeccable; the best option for detail and formality.\"",
            test_3_name: "Marcos V. Riva",
            test_3_role: "Private Client",
            test_4_quote: "\"Choosing Prestige was the best technical decision of the year. They proved to be exceptionally serious people, solving high-complexity assemblies.\"",
            test_4_name: "Isabel Córcega",
            test_4_role: "Project Director",
            test_5_quote: "\"The formality they handle each commission with is outstanding. Their serious approach and level of detail justify considering them the best high-luxury option.\"",
            test_5_name: "Diego Astorga",
            test_5_role: "Real Estate Investor"
        }
    };

    let currentLang = 'es';

    const updateLang = () => {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    };

    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateLang();
    });

    // 2. Navbar transparency on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 27, 0.98)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.background = 'rgba(26, 26, 27, 0.95)';
            navbar.style.padding = '1.5rem 5%';
        }
    });

    // 3. Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 4. Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 5. Carousels
    const initCarousel = (trackId, prevId, nextId) => {
        const track = document.getElementById(trackId);
        const prevButton = document.getElementById(prevId);
        const nextButton = document.getElementById(nextId);

        if (track && prevButton && nextButton) {
            let currentIndex = 0;
            const updateCarousel = () => {
                const slideWidth = track.querySelector('.carousel-slide').offsetWidth;
                track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            };

            const getVisibleSlides = () => {
                if (window.innerWidth >= 900) return 3;
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
    };

    initCarousel('portfolio-track', 'carousel-prev', 'carousel-next');
    initCarousel('testimonials-track', 'testimonials-prev', 'testimonials-next');

    // 6. Transformation Slider
    initTransformationSlider();

    // 7. Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.getElementById('form-status');
            status.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                status.style.display = 'none';
            }, 5000);
        });
    }
});

function initTransformationSlider() {
    const slider = document.getElementById('before-after-slider');
    if (!slider) return;

    const beforeImg = slider.querySelector('.image-before');
    const handle = slider.querySelector('.slider-handle');
    let isResizing = false;

    const moveSlider = (clientX) => {
        const rect = slider.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        beforeImg.style.width = `${position}%`;
        handle.style.left = `${position}%`;
    };

    handle.addEventListener('mousedown', () => isResizing = true);
    window.addEventListener('mouseup', () => isResizing = false);
    window.addEventListener('mousemove', (e) => {
        if (isResizing) moveSlider(e.clientX);
    });

    handle.addEventListener('touchstart', () => isResizing = true);
    window.addEventListener('touchend', () => isResizing = false);
    window.addEventListener('touchmove', (e) => {
        if (isResizing) moveSlider(e.touches[0].clientX);
    });
}
