
/* ==========================================
   EF IMAGINE - SCRIPT.JS
   Español / English
========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // FORMULARIOS TYPEFORM
    // ======================================

    const typeformLinks = {
        es: "https://form.typeform.com/to/NuJf1cET",
        en: "https://form.typeform.com/to/EDcyUlbv"
    };

    // ======================================
    // TRADUCCIONES
    // ======================================

    const translations = {

        es: {
            navHome: "Inicio",
            navServices: "Servicios",
            navAbout: "Nosotros",
            navContact: "Contacto",
            navQuote: "Solicitar cotización",

            heroBadge: "Diseño web y crecimiento digital",
            heroTitle: "Imaginamos tu idea. Creamos tu presencia digital.",
            heroDescription: "Diseñamos páginas web modernas, profesionales y adaptadas a tu negocio para ayudarte a destacar, atraer clientes y crecer en el mundo digital.",
            heroPrimaryButton: "Comienza tu proyecto",
            heroSecondaryButton: "Explorar servicios",
            heroFeature1: "Diseño moderno",
            heroFeature2: "Adaptado a móviles",
            heroFeature3: "Enfoque en resultados",

            servicesTag: "Nuestros servicios",
            servicesTitle: "Soluciones digitales para tu negocio",
            servicesDescription: "Te ayudamos a construir una presencia digital profesional con soluciones adaptadas a tus objetivos.",

            service1Title: "Diseño web",
            service1Description: "Creamos páginas web modernas, rápidas y adaptadas a teléfonos, tabletas y computadoras.",

            service2Title: "SEO local",
            service2Description: "Optimizamos la presencia de tu negocio para facilitar que los clientes te encuentren en los buscadores.",

            service3Title: "Crecimiento digital",
            service3Description: "Te ayudamos a mejorar tu presencia online y desarrollar estrategias digitales enfocadas en tu negocio.",

            aboutTag: "Sobre EF IMAGINE",
            aboutTitle: "Tu visión merece una gran presencia digital",
            aboutDescription1: "En EF IMAGINE creemos que cada negocio merece una página web que represente su identidad y transmita confianza a sus clientes.",
            aboutDescription2: "Nuestro objetivo es transformar ideas en experiencias digitales modernas, funcionales y preparadas para crecer.",
            aboutButton: "Hablemos de tu proyecto",

            contactTag: "Comienza hoy",
            contactTitle: "¿Listo para llevar tu negocio al siguiente nivel?",
            contactDescription: "Cuéntanos sobre tu idea o proyecto. Completa nuestro formulario y nos pondremos en contacto contigo para conocer tus necesidades.",
            contactButton: "Solicitar cotización",

            footerDescription: "Transformamos ideas en experiencias digitales.",
            footerLinksTitle: "Enlaces",
            footerContactTitle: "Trabajemos juntos",
            footerContactButton: "Solicitar un presupuesto",
            footerRights: "Todos los derechos reservados."
        },

        en: {
            navHome: "Home",
            navServices: "Services",
            navAbout: "About Us",
            navContact: "Contact",
            navQuote: "Get a Quote",

            heroBadge: "Web Design & Digital Growth",
            heroTitle: "We Imagine Your Idea. We Build Your Digital Presence.",
            heroDescription: "We design modern, professional websites tailored to your business to help you stand out, attract customers, and grow online.",
            heroPrimaryButton: "Start Your Project",
            heroSecondaryButton: "Explore Services",
            heroFeature1: "Modern Design",
            heroFeature2: "Mobile Friendly",
            heroFeature3: "Results Focused",

            servicesTag: "Our Services",
            servicesTitle: "Digital Solutions for Your Business",
            servicesDescription: "We help you build a professional digital presence with solutions tailored to your goals.",

            service1Title: "Web Design",
            service1Description: "We create modern, fast, responsive websites for phones, tablets, and computers.",

            service2Title: "Local SEO",
            service2Description: "We optimize your business's online presence to make it easier for customers to find you through search engines.",

            service3Title: "Digital Growth",
            service3Description: "We help improve your online presence and develop digital strategies focused on your business.",

            aboutTag: "About EF IMAGINE",
            aboutTitle: "Your Vision Deserves a Great Digital Presence",
            aboutDescription1: "At EF IMAGINE, we believe every business deserves a website that reflects its identity and inspires customer confidence.",
            aboutDescription2: "Our goal is to transform ideas into modern, functional digital experiences built for growth.",
            aboutButton: "Let's Talk About Your Project",

            contactTag: "Get Started Today",
            contactTitle: "Ready to Take Your Business to the Next Level?",
            contactDescription: "Tell us about your idea or project. Complete our form and we'll contact you to learn more about your needs.",
            contactButton: "Get a Quote",

            footerDescription: "Transforming ideas into digital experiences.",
            footerLinksTitle: "Quick Links",
            footerContactTitle: "Let's Work Together",
            footerContactButton: "Request a Quote",
            footerRights: "All rights reserved."
        }
    };

    // ======================================
    // ELEMENTOS
    // ======================================

    const header = document.getElementById("header");
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");

    const languageButtons = document.querySelectorAll(".lang-btn");
    const translatedElements = document.querySelectorAll("[data-i18n]");
    const formButtons = document.querySelectorAll(".typeform-link");
    const navigationLinks = document.querySelectorAll(".nav-link");

    // ======================================
    // CAMBIAR IDIOMA
    // ======================================

    function changeLanguage(language) {

        if (!translations[language]) {
            language = "es";
        }

        const selectedLanguage = translations[language];

        // Traducir contenido
        translatedElements.forEach((element) => {

            const key = element.getAttribute("data-i18n");

            if (Object.prototype.hasOwnProperty.call(selectedLanguage, key)) {
                element.textContent = selectedLanguage[key];
            }

        });

        // Cambiar enlace de todos los formularios
        formButtons.forEach((button) => {
            button.href = typeformLinks[language];
        });

        // Actualizar botones ES / EN
        languageButtons.forEach((button) => {

            const isActive = button.dataset.lang === language;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));

        });

        // Idioma del documento
        document.documentElement.lang = language;

        // Título y descripción SEO
        const description = document.querySelector('meta[name="description"]');

        if (language === "es") {

            document.title = "EF IMAGINE | Diseño Web, SEO y Crecimiento Digital";

            if (description) {
                description.content = "EF IMAGINE crea páginas web modernas, soluciones SEO y estrategias digitales para ayudar a crecer tu negocio.";
            }

        } else {

            document.title = "EF IMAGINE | Web Design, SEO & Digital Growth";

            if (description) {
                description.content = "EF IMAGINE creates modern websites, SEO solutions, and digital strategies to help your business grow.";
            }

        }

        // Guardar preferencia
        try {
            localStorage.setItem("efImagineLanguage", language);
        } catch (error) {
            // La web seguirá funcionando si el navegador bloquea el almacenamiento.
        }

    }

    // ======================================
    // INICIALIZAR IDIOMA
    // ======================================

    let savedLanguage = null;

    try {
        savedLanguage = localStorage.getItem("efImagineLanguage");
    } catch (error) {
        savedLanguage = null;
    }

    const browserLanguage = navigator.language
        .toLowerCase()
        .startsWith("es") ? "es" : "en";

    const initialLanguage =
        savedLanguage === "es" || savedLanguage === "en"
            ? savedLanguage
            : browserLanguage;

    changeLanguage(initialLanguage);

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {
            changeLanguage(button.dataset.lang);
        });

    });

    // ======================================
    // MENÚ MÓVIL
    // ======================================

    function closeMobileMenu() {

        if (!menuToggle || !navLinks) return;

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

        document.body.classList.remove("menu-open");
    }

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

            document.body.classList.toggle("menu-open", isOpen);

        });

        // Cerrar al seleccionar una sección
        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", closeMobileMenu);

        });

        // Cerrar con Escape
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        });

        // Cerrar al pasar a pantalla grande
        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                closeMobileMenu();
            }

        });

    }

    // ======================================
    // EFECTO HEADER AL HACER SCROLL
    // ======================================

    function updateHeader() {

        if (!header) return;

        header.classList.toggle("scrolled", window.scrollY > 30);

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();

    // ======================================
    // NAVEGACIÓN ACTIVA
    // ======================================

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNavigation() {

        let activeSection = "home";

        const scrollPosition = window.scrollY + 160;

        sections.forEach((section) => {

            if (scrollPosition >= section.offsetTop) {
                activeSection = section.id;
            }

        });

        navigationLinks.forEach((link) => {

            const isActive =
                link.getAttribute("href") === "#" + activeSection;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation, {
        passive: true
    });

    window.addEventListener("resize", updateActiveNavigation);

    updateActiveNavigation();

    // ======================================
    // ANIMACIONES AL DESPLAZARSE
    // ======================================

    const animatedElements = document.querySelectorAll(
        ".section-heading, .service-card, .about-content, .about-card, .contact-box"
    );

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !reducedMotion) {

        const observer = new IntersectionObserver((entries, currentObserver) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    currentObserver.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -30px 0px"
        });

        animatedElements.forEach((element) => {

            element.classList.add("hidden");
            observer.observe(element);

        });

    }

    // ======================================
    // AÑO AUTOMÁTICO DEL FOOTER
    // ======================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
