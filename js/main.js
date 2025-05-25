// Funcionalidad principal del sitio web Maskotas
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio web Maskotas cargado correctamente');
      // Inicializar funcionalidades
    initSmoothScrolling();
    initFormValidation();
    initMobileMenu();
    initAnimations();
    initContactEnhancements();
    initAdvancedFeatures();
    setupSmartFormFeatures();
    setupKeyboardShortcuts();
    setupClipboardValidation();
    setupNetworkErrorHandling();
    setupBeforeUnloadProtection();
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

// Validación del formulario mejorada
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        // Añadir validación en tiempo real
        setupRealTimeValidation(form);
        
        // Manejar envío del formulario
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(form);
        });
    }
}

// Configurar validación en tiempo real
function setupRealTimeValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        // Validar al perder el foco
        input.addEventListener('blur', () => validateFieldEnhanced(input));
        
        // Validar mientras se escribe (con debounce)
        if (input.type !== 'checkbox') {
            input.addEventListener('input', Utils.debounce(() => {
                if (input.value.length > 0) {
                    validateFieldEnhanced(input);
                }
            }, 500));
        }
        
        // Validación especial para checkbox
        if (input.type === 'checkbox') {
            input.addEventListener('change', () => validateFieldEnhanced(input));
        }
    });
}

// Manejar envío del formulario
function handleFormSubmit(form) {
    // Marcar formulario como enviado para estilos CSS
    form.classList.add('form-submitted');
    
    // Obtener todos los valores
    const formData = getFormData(form);
    
    // Validar todo el formulario
    const isValid = validateForm(formData, form);
    
    if (isValid) {
        // Mostrar estado de carga
        setSubmitButtonLoading(true);
          // Simular envío (aquí iría la integración con backend)
        setTimeout(() => {
            setSubmitButtonLoading(false);
            showMessageEnhanced('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
            resetForm(form);
        }, 2000);    } else {
        showMessageEnhanced('Por favor, corrige los errores en el formulario.', 'error');
    }
}

// Obtener datos del formulario
function getFormData(form) {
    const formData = new FormData(form);
    return {
        nombre: formData.get('nombre')?.trim() || '',
        email: formData.get('email')?.trim() || '',
        telefono: formData.get('telefono')?.trim() || '',
        asunto: formData.get('asunto') || '',
        mensaje: formData.get('mensaje')?.trim() || '',
        terminos: formData.get('terminos') === 'on'
    };
}

// Validar todo el formulario
function validateForm(data, form) {
    let isValid = true;
      // Validar nombre
    if (!validateFieldEnhanced(form.querySelector('#nombre'))) {
        isValid = false;
    }
    
    // Validar email
    if (!validateFieldEnhanced(form.querySelector('#email'))) {
        isValid = false;
    }
    
    // Validar teléfono (opcional pero si tiene valor debe ser válido)
    const telefonoField = form.querySelector('#telefono');
    if (telefonoField.value && !validateFieldEnhanced(telefonoField)) {
        isValid = false;
    }
    
    // Validar asunto
    if (!validateFieldEnhanced(form.querySelector('#asunto'))) {
        isValid = false;
    }
    
    // Validar mensaje
    if (!validateFieldEnhanced(form.querySelector('#mensaje'))) {
        isValid = false;
    }
    
    // Validar términos
    if (!validateFieldEnhanced(form.querySelector('#terminos'))) {
        isValid = false;
    }
    
    return isValid;
}

// Validar campo individual
function validateField(field) {
    const fieldType = field.type;
    const fieldName = field.name;
    const value = field.value.trim();
    const formGroup = field.closest('.form-group');
    const errorElement = document.getElementById(field.id + '-error');
    
    let isValid = true;
    let errorMessage = '';
    
    // Limpiar estados anteriores
    formGroup.classList.remove('has-error', 'has-success');
    
    switch (fieldName) {
        case 'nombre':
            if (!value) {
                errorMessage = 'El nombre es obligatorio';
                isValid = false;
            } else if (value.length < 2) {
                errorMessage = 'El nombre debe tener al menos 2 caracteres';
                isValid = false;
            } else if (value.length > 50) {
                errorMessage = 'El nombre no puede exceder 50 caracteres';
                isValid = false;
            } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
                errorMessage = 'El nombre solo puede contener letras y espacios';
                isValid = false;
            }
            break;
            
        case 'email':
            if (!value) {
                errorMessage = 'El email es obligatorio';
                isValid = false;
            } else if (!isValidEmail(value)) {
                errorMessage = 'Ingresa un email válido';
                isValid = false;
            } else if (value.length > 100) {
                errorMessage = 'El email es demasiado largo';
                isValid = false;
            }
            break;
            
        case 'telefono':
            // Teléfono es opcional, pero si se proporciona debe ser válido
            if (value && !/^[\+]?[0-9\s\-\(\)]{8,15}$/.test(value)) {
                errorMessage = 'Formato de teléfono inválido (ej: +54 11 1234-5678)';
                isValid = false;
            }
            break;
            
        case 'asunto':
            if (!value) {
                errorMessage = 'Selecciona un asunto';
                isValid = false;
            }
            break;
            
        case 'mensaje':
            if (!value) {
                errorMessage = 'El mensaje es obligatorio';
                isValid = false;
            } else if (value.length < 10) {
                errorMessage = 'El mensaje debe tener al menos 10 caracteres';
                isValid = false;
            } else if (value.length > 1000) {
                errorMessage = 'El mensaje no puede exceder 1000 caracteres';
                isValid = false;
            }
            break;
            
        case 'terminos':
            if (!field.checked) {
                errorMessage = 'Debes aceptar los términos y condiciones';
                isValid = false;
            }
            break;
    }
    
    // Mostrar/ocultar mensaje de error
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    // Aplicar clases CSS según el estado
    if (isValid && value) {
        formGroup.classList.add('has-success');
    } else if (!isValid) {
        formGroup.classList.add('has-error');
    }
    
    return isValid;
}

// Controlar estado de carga del botón
function setSubmitButtonLoading(loading) {
    const button = document.querySelector('.btn-submit');
    const textSpan = button.querySelector('.btn-text');
    const loadingSpan = button.querySelector('.btn-loading');
    
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
        textSpan.style.display = 'none';
        loadingSpan.style.display = 'inline';
    } else {
        button.classList.remove('loading');
        button.disabled = false;
        textSpan.style.display = 'inline';
        loadingSpan.style.display = 'none';
    }
}

// Resetear formulario
function resetForm(form) {
    form.reset();
    form.classList.remove('form-submitted');
    
    // Limpiar estados de validación
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('has-error', 'has-success');
    });
    
    // Limpiar mensajes de error
    const errorElements = form.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
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

// Funciones adicionales para mejorar la experiencia de usuario

// Inicializar funcionalidades adicionales del formulario
function initContactEnhancements() {
    addCharacterCounter();
    setupFormAutoSave();
    addFormAccessibility();
    setupFormAnimations();
    setupSmartFormFeatures();
    setupKeyboardShortcuts();
    setupClipboardValidation();
    setupNetworkErrorHandling();
    setupBeforeUnloadProtection();
}

// Contador de caracteres para el textarea
function addCharacterCounter() {
    const textarea = document.getElementById('mensaje');
    if (textarea) {
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.innerHTML = '<span class="current">0</span> / <span class="max">1000</span> caracteres';
        
        textarea.parentNode.appendChild(counter);
        
        textarea.addEventListener('input', function() {
            const current = this.value.length;
            const currentSpan = counter.querySelector('.current');
            currentSpan.textContent = current;
            
            // Cambiar color según proximidad al límite
            if (current > 900) {
                counter.classList.add('warning');
            } else if (current > 800) {
                counter.classList.add('caution');
            } else {
                counter.classList.remove('warning', 'caution');
            }
        });
    }
}

// Auto-guardar datos del formulario en localStorage
function setupFormAutoSave() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const STORAGE_KEY = 'maskotas_contact_form';
    
    // Cargar datos guardados al inicializar
    loadSavedFormData(form, STORAGE_KEY);
    
    // Guardar datos mientras el usuario escribe
    const inputs = form.querySelectorAll('input:not([type="checkbox"]), textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', Utils.debounce(() => {
            saveFormData(form, STORAGE_KEY);
        }, 1000));
    });
    
    // Limpiar datos guardados cuando el formulario se envía exitosamente
    form.addEventListener('submit', () => {
        setTimeout(() => {
            if (form.classList.contains('form-success')) {
                localStorage.removeItem(STORAGE_KEY);
            }
        }, 3000);
    });
}

// Cargar datos guardados del formulario
function loadSavedFormData(form, storageKey) {
    try {
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const field = form.querySelector(`[name="${key}"]`);
                if (field && data[key]) {
                    field.value = data[key];
                }
            });
              // Mostrar notificación de datos recuperados
            showMessageEnhanced('Se recuperaron datos del formulario guardados anteriormente', 'info', 3000);
        }
    } catch (error) {
        console.warn('Error al cargar datos guardados:', error);
    }
}

// Guardar datos del formulario
function saveFormData(form, storageKey) {
    try {
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            if (key !== 'terminos') { // No guardar checkbox de términos
                data[key] = value;
            }
        });
        
        localStorage.setItem(storageKey, JSON.stringify(data));
        showAutoSaveIndicator();
    } catch (error) {
        console.warn('Error al guardar datos del formulario:', error);
    }
}

// Agregar indicador de auto-guardado
function showAutoSaveIndicator() {
    let indicator = document.querySelector('.autosave-indicator');
    
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'autosave-indicator';
        indicator.innerHTML = '💾 Guardando borrador...';
        document.body.appendChild(indicator);
    }
    
    indicator.classList.add('show');
    
    setTimeout(() => {
        indicator.innerHTML = '✓ Borrador guardado';
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 1500);
    }, 1000);
}

// Mejorar accesibilidad del formulario
function addFormAccessibility() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Agregar ARIA labels dinámicos
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.setAttribute('aria-required', 'true');
    });
    
    // Mejorar navegación por teclado
    form.addEventListener('keydown', function(e) {
        // Enviar formulario con Ctrl+Enter
        if (e.ctrlKey && e.key === 'Enter') {
            const submitButton = form.querySelector('.btn-submit');
            if (submitButton && !submitButton.disabled) {
                submitButton.click();
            }
        }
        
        // Navegación entre campos con Ctrl+Flecha
        if (e.ctrlKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
            e.preventDefault();
            const inputs = Array.from(form.querySelectorAll('input, textarea, select, button'));
            const currentIndex = inputs.indexOf(document.activeElement);
            
            if (currentIndex !== -1) {
                const nextIndex = e.key === 'ArrowDown' 
                    ? Math.min(currentIndex + 1, inputs.length - 1)
                    : Math.max(currentIndex - 1, 0);
                inputs[nextIndex].focus();
            }
        }
    });
}

// Configurar animaciones del formulario
function setupFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    // Animación de entrada para los campos
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = 'all 0.4s ease-out';
        
        setTimeout(() => {
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
            group.classList.add('animate-in');
        }, index * 100);
    });
    
    // Efecto de foco mejorado
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
}

// Función mejorada para mostrar mensajes con más opciones
function showMessageEnhanced(text, type = 'info', duration = 5000) {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    
    // Crear contenido del mensaje
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `
        <span class="message-icon">${getMessageIcon(type)}</span>
        <span class="message-text">${text}</span>
        <button class="message-close" aria-label="Cerrar mensaje">&times;</button>
    `;
    
    message.appendChild(messageContent);
    
    // Estilos para el mensaje
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        min-width: 300px;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
        ${getMessageBackgroundColor(type)}
    `;
    
    // Estilos para el contenido
    messageContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    // Estilo para el botón de cerrar
    const closeButton = messageContent.querySelector('.message-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
    `;
    
    closeButton.addEventListener('click', () => {
        removeMessage(message);
    });
    
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.backgroundColor = 'transparent';
    });
    
    document.body.appendChild(message);
    
    // Remover mensaje automáticamente
    if (duration > 0) {
        setTimeout(() => {
            if (message.parentNode) {
                removeMessage(message);
            }
        }, duration);
    }
    
    return message;
}

// Obtener icono según el tipo de mensaje
function getMessageIcon(type) {
    const icons = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
    };
    return icons[type] || icons.info;
}

// Obtener color de fondo según el tipo de mensaje
function getMessageBackgroundColor(type) {
    const colors = {
        success: 'background: linear-gradient(135deg, #2ecc71, #27ae60);',
        error: 'background: linear-gradient(135deg, #e74c3c, #c0392b);',
        warning: 'background: linear-gradient(135deg, #f39c12, #e67e22);',
        info: 'background: linear-gradient(135deg, #3498db, #2980b9);'
    };
    return colors[type] || colors.info;
}

// Función para remover mensaje con animación
function removeMessage(message) {
    message.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 300);
}

// Funciones de validación específicas mejoradas
const Validators = {
    nombre: (value) => {
        if (!value) return 'El nombre es obligatorio';
        if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (value.length > 50) return 'El nombre no puede exceder 50 caracteres';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return 'El nombre solo puede contener letras y espacios';
        return '';
    },
    
    email: (value) => {
        if (!value) return 'El email es obligatorio';
        if (!isValidEmail(value)) return 'Ingresa un email válido';
        if (value.length > 100) return 'El email es demasiado largo';
        return '';
    },
    
    telefono: (value) => {
        if (value && !/^[\+]?[0-9\s\-\(\)]{8,15}$/.test(value)) {
            return 'Formato de teléfono inválido (ej: +54 11 1234-5678)';
        }
        return '';
    },
    
    asunto: (value) => {
        if (!value) return 'Selecciona un asunto';
        return '';
    },
    
    mensaje: (value) => {
        if (!value) return 'El mensaje es obligatorio';
        if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        if (value.length > 1000) return 'El mensaje no puede exceder 1000 caracteres';
        return '';
    },
    
    terminos: (checked) => {
        if (!checked) return 'Debes aceptar los términos y condiciones';
        return '';
    }
};

// Función de validación mejorada usando los validadores específicos
function validateFieldEnhanced(field) {
    const fieldName = field.name;
    const value = field.type === 'checkbox' ? field.checked : field.value.trim();
    const formGroup = field.closest('.form-group');
    const errorElement = document.getElementById(field.id + '-error');
    
    let errorMessage = '';
    
    // Usar validador específico
    if (Validators[fieldName]) {
        errorMessage = Validators[fieldName](value);
    }
    
    const isValid = !errorMessage;
    
    // Limpiar estados anteriores
    formGroup.classList.remove('has-error', 'has-success');
    
    // Mostrar/ocultar mensaje de error
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    // Aplicar clases CSS según el estado
    if (isValid && (value || field.type === 'checkbox')) {
        formGroup.classList.add('has-success');
    } else if (!isValid) {
        formGroup.classList.add('has-error');
    }
    
    return isValid;
}

// Funcionalidad adicional: Autocompletar basado en selección de asunto
function setupSmartFormFeatures() {
    const asuntoSelect = document.getElementById('asunto');
    const mensajeTextarea = document.getElementById('mensaje');
    
    if (asuntoSelect && mensajeTextarea) {
        asuntoSelect.addEventListener('change', function() {
            const selectedOption = this.value;
            const currentMessage = mensajeTextarea.value.trim();
            
            // Solo sugerir texto si el mensaje está vacío
            if (!currentMessage) {
                const suggestions = {
                    'consulta-general': 'Hola, me gustaría obtener más información sobre...',
                    'cita-veterinaria': 'Necesito agendar una cita veterinaria para mi mascota. Disponibilidad preferida:',
                    'cuidado-perros': 'Tengo consultas sobre el cuidado de mi perro. Específicamente sobre...',
                    'cuidado-gatos': 'Necesito información sobre el cuidado de mi gato. Mi pregunta es sobre...',
                    'emergencia': 'EMERGENCIA: Mi mascota presenta los siguientes síntomas:'
                };
                
                if (suggestions[selectedOption]) {
                    mensajeTextarea.value = suggestions[selectedOption];
                    mensajeTextarea.focus();
                    // Posicionar cursor al final
                    mensajeTextarea.setSelectionRange(mensajeTextarea.value.length, mensajeTextarea.value.length);
                    
                    // Validar el campo después de agregar el texto
                    setTimeout(() => validateFieldEnhanced(mensajeTextarea), 100);
                }
            }
        });
    }
}

// Funcionalidad de atajos de teclado mejorada
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Atajo para ir directamente al formulario (Alt + C)
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                // Enfocar el primer campo del formulario
                setTimeout(() => {
                    const firstInput = document.getElementById('nombre');
                    if (firstInput) firstInput.focus();
                }, 500);
            }
        }
        
        // Atajo para limpiar formulario (Ctrl + Alt + R)
        if (e.ctrlKey && e.altKey && e.key === 'r') {
            e.preventDefault();
            const form = document.getElementById('contactForm');
            if (form && confirm('¿Estás seguro de que quieres limpiar el formulario?')) {
                resetForm(form);
                showMessageEnhanced('Formulario reiniciado', 'info', 2000);
            }
        }
    });
}

// Funcionalidad de detección de copy/paste para validación
function setupClipboardValidation() {
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    inputs.forEach(input => {
        input.addEventListener('paste', function(e) {
            // Validar después del paste
            setTimeout(() => {
                validateFieldEnhanced(this);
            }, 100);
        });
        
        input.addEventListener('cut', function(e) {
            // Validar después del cut
            setTimeout(() => {
                validateFieldEnhanced(this);
            }, 100);
        });
    });
}

// Funcionalidad de recuperación de errores de red
function setupNetworkErrorHandling() {
    // Simular detección de conexión
    window.addEventListener('online', function() {
        showMessageEnhanced('Conexión restaurada. Puedes enviar el formulario.', 'success', 3000);
    });
    
    window.addEventListener('offline', function() {
        showMessageEnhanced('Sin conexión a internet. El formulario se guardará automáticamente.', 'warning', 5000);
    });
}

// Funcionalidad de confirmación antes de abandonar la página
function setupBeforeUnloadProtection() {
    let formModified = false;
    const form = document.getElementById('contactForm');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                formModified = true;
            });
            
            input.addEventListener('change', () => {
                formModified = true;
            });
        });
        
        form.addEventListener('submit', () => {
            formModified = false;
        });
        
        window.addEventListener('beforeunload', function(e) {
            if (formModified) {
                const message = '¿Estás seguro de que quieres abandonar la página? Los cambios no guardados se perderán.';
                e.returnValue = message;
                return message;
            }
        });
    }
}

// Mostrar tips de usabilidad
function showUsabilityTips() {
    const tips = [
        { text: 'Presiona Alt + C para ir al formulario de contacto', delay: 3000 },
        { text: 'Usa Ctrl + Enter para enviar el formulario', delay: 8000 },
        { text: 'Tus datos se guardan automáticamente mientras escribes', delay: 15000 }
    ];
    
    tips.forEach(tip => {
        setTimeout(() => {
            showKeyboardHint(tip.text);
        }, tip.delay);
    });
}

// Mostrar hint de teclado
function showKeyboardHint(text) {
    let hint = document.querySelector('.keyboard-shortcuts-hint');
    
    if (!hint) {
        hint = document.createElement('div');
        hint.className = 'keyboard-shortcuts-hint';
        document.body.appendChild(hint);
    }
    
    hint.innerHTML = text;
    hint.classList.add('show');
    
    setTimeout(() => {
        hint.classList.remove('show');
    }, 4000);
}

// Inicializar tips después de un delay
function initUsabilityTips() {
    // Mostrar tips solo si es la primera visita en la sesión
    if (!sessionStorage.getItem('maskotas_tips_shown')) {
        setTimeout(showUsabilityTips, 5000);
        sessionStorage.setItem('maskotas_tips_shown', 'true');
    }
}

// Función de inicialización completa
function initAdvancedFeatures() {
    initUsabilityTips();
    
    // Agregar indicador de progreso de validación
    addValidationProgress();
    
    // Inicializar lazy loading de imágenes
    Utils.lazyLoadImages();
}

// Agregar indicador de progreso de validación
function addValidationProgress() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const progressContainer = document.createElement('div');
    progressContainer.className = 'validation-progress';
    progressContainer.innerHTML = '<div class="validation-progress-bar"></div>';
    
    form.insertBefore(progressContainer, form.querySelector('.btn-submit'));
    
    // Actualizar progreso basado en campos válidos
    const updateProgress = () => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        const validInputs = Array.from(inputs).filter(input => {
            if (input.type === 'checkbox') return input.checked;
            return input.value.trim() && !input.closest('.form-group').classList.contains('has-error');
        });
        
        const progress = (validInputs.length / inputs.length) * 100;
        const progressBar = progressContainer.querySelector('.validation-progress-bar');
        progressBar.style.width = `${progress}%`;
        
        // Cambiar color según progreso
        if (progress === 100) {
            progressBar.style.background = 'linear-gradient(90deg, #2ecc71, #27ae60)';
        } else if (progress > 50) {
            progressBar.style.background = 'linear-gradient(90deg, #f39c12, #e67e22)';
        } else {
            progressBar.style.background = 'linear-gradient(90deg, var(--color-primary), #2980b9)';
        }
    };
    
    // Escuchar cambios en el formulario
    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);
    
    // Actualizar inicialmente
    updateProgress();
}

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
    showMessage: showMessageEnhanced,
    showMessageEnhanced,
    Utils
};
