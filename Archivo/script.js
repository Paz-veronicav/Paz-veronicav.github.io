// JavaScript portafolio

document.addEventListener('DOMContentLoaded', () => {
    // Implementa dezplazamiento suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();   // Previene el comportamiento por efecto del enlace
            const targetId = link.getAttribute('href').slice(1);  // Obtiene Id del destino
            const targetSection = document.getElementById(targetId);  // Encuentra la sección correspondiente

            if (targetSection) {
                // Realiza un dezplazamiento suave hacia la sección de destino
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Ajusta la pocisión por altura del encabezado
                    behavior: 'smooth', // Se mueve suave
                });
            }
        });
    });

    // Maneja el envío del formulario del contacto
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Previene el envío del formulario por defecto

        const formData = new FormData(contactForm);  // Obtiene los datos del formulario
        const name = formData.get('name');   // Obtiene el valor del campo "nombre"
        const email = formData.get('email');  // Obtiene el valor del campo "email" 
        const message = formData.get('message');  // Obtiene el valor del campo "mensaje"

        if (name && email && message) {
            // Muestra un mensaje de agradecimiento y reinicia el formulario
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();   // Muestra una alerta si hay campos vacíos
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
});
