// Funcionalidad principal del sitio web Maskotas
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio web Maskotas cargado correctamente');
    
    // Inicializar funcionalidades
    initSmoothScrolling();
    initFormValidation();
    initMobileMenu();
    initAnimations();
});

// Navegación suave
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Validación del formulario
function initFormValidation() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const mensaje = form.querySelector('textarea').value.trim();
            
            if (validateForm(nombre, email, mensaje)) {
                showMessage('¡Mensaje enviado correctamente!', 'success');
                form.reset();
            }
        });
    }
}

// Validar campos del formulario
function validateForm(nombre, email, mensaje) {
    if (!nombre) {
        showMessage('Por favor, ingresa tu nombre', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Por favor, ingresa un email válido', 'error');
        return false;
    }
    
    if (!mensaje) {
        showMessage('Por favor, escribe un mensaje', 'error');
        return false;
    }
    
    return true;
}

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar mensajes al usuario
function showMessage(text, type) {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    message.textContent = text;
    
    // Estilos para el mensaje
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        ${type === 'success' ? 'background-color: #2ecc71;' : 'background-color: #e74c3c;'}
    `;
    
    document.body.appendChild(message);
    
    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        if (message.parentNode) {
            message.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }
    }, 3000);
}

// Menú móvil (preparado para futuras mejoras)
function initMobileMenu() {
    // Funcionalidad de menú móvil se puede añadir aquí
    console.log('Menú móvil inicializado');
}

// Animaciones al hacer scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

// Agregar estilos CSS dinámicamente para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Utility functions
const Utils = {
    // Debounce function para optimizar eventos
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Función para cargar imágenes lazy
    lazyLoadImages: function() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};

// Exportar funciones para uso global si es necesario
window.MaskotasApp = {
    showMessage,
    Utils
};
