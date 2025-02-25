// Configuración de la validación de formularios y funcionalidades interactivas
document.addEventListener('DOMContentLoaded', function() {
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Simulación del envío del formulario
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
                
                // Simulación de respuesta del servidor
                setTimeout(() => {
                    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Enviar Mensaje';
                }, 1500);
            }
            contactForm.classList.add('was-validated');
        });
    }

    // Validación y simulación de los formularios de rastreo
    const trackingForms = document.querySelectorAll('#trackingForm, #trackingFormLarge');
    trackingForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const guideNumber = this.querySelector('input').value;
            
            // Validación del número de guía
            if (guideNumber.trim() === '') {
                alert('Por favor ingrese un número de guía válido');
                return;
            }

            // Simulación del proceso de rastreo
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Buscando...';

            // Simulación de respuesta del sistema de rastreo
            setTimeout(() => {
                alert(`Rastreando envío: ${guideNumber}\n\nEstatus: En tránsito\nUbicación: Centro de distribución\nEstimación de entrega: 24-48 horas`);
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Rastrear';
                form.reset();
            }, 1500);
        });
    });

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Control del estado activo de la barra de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Actualización del enlace activo según la sección visible
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});