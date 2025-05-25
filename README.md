# Maskotas 🐾

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Un sitio web moderno y responsivo dedicado al cuidado y bienestar de las mascotas. Desarrollado con HTML5, CSS3 y JavaScript vanilla para ofrecer una experiencia de usuario óptima en todos los dispositivos.

## 📁 Estructura del Proyecto

```
maskotas/
├── index.html          # Página principal
├── LICENSE             # Licencia MIT
├── .gitignore          # Archivos ignorados por Git
├── css/
│   └── styles.css      # Estilos CSS del sitio
├── js/
│   └── main.js         # Funcionalidad JavaScript
├── img/
│   ├── README.md       # Guía de organización de imágenes
│   └── galeria/        # Imágenes para la galería
│       ├── perros/     # Imágenes de perros
│       ├── gatos/      # Imágenes de gatos
│       └── otros/      # Otras mascotas
├── docs/
│   ├── funcionalidades-contacto.md     # Documentación del formulario
│   ├── galeria-implementacion.md       # Documentación de la galería
│   ├── implementacion-completada.md    # Estado del proyecto
│   ├── notas-desarrollo.md             # Notas técnicas
│   ├── testing-manual.html            # Tests manuales
│   └── wireframes.md                  # Diseños y wireframes
└── README.md           # Este archivo
```

## 🚀 Características

### 🎯 Funcionalidades Principales
- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio
- **Navegación Suave**: Scroll suave entre secciones con animaciones
- **Galería Interactiva**: Sistema completo de galería con filtros y lightbox
- **Formulario Avanzado**: Sistema completo de contacto con validación inteligente
- **Auto-guardado**: Los datos del formulario se guardan automáticamente
- **Animaciones Fluidas**: Efectos visuales modernos y suaves
- **Accesibilidad**: Cumple con estándares WCAG para inclusión digital

### 🖼️ Funcionalidades de la Galería
- **Filtros Dinámicos**: Categorización por tipo de mascota (Perros, Gatos, Otros)
- **Lightbox Modal**: Vista detallada con información completa de cada mascota
- **Lazy Loading**: Carga perezosa de imágenes para mejor performance
- **Integración con Contacto**: Solicitud directa de citas desde la galería
- **Animaciones de Entrada**: Elementos aparecen suavemente al hacer scroll
- **Navegación por Teclado**: Accesibilidad completa con Escape y Tab
- **Responsive Design**: Experiencia optimizada en todos los dispositivos
- **Efectos Hover**: Transformaciones elegantes en desktop

### ✨ Funcionalidades del Formulario de Contacto
- **Validación en Tiempo Real**: Feedback instantáneo mientras escribes
- **Atajos de Teclado**: Alt+C (ir al formulario), Ctrl+Enter (enviar)
- **Contador de Caracteres**: Límites visuales con advertencias inteligentes
- **Autocompletado**: Sugerencias contextuales según el asunto seleccionado
- **Indicador de Progreso**: Barra que muestra el progreso de completado
- **Protección de Datos**: Confirma antes de abandonar con cambios sin guardar
- **Tips de Usabilidad**: Guías contextuales para mejorar la experiencia
- **Estados de Conectividad**: Notifica problemas de conexión
- **Mensajes Inteligentes**: Sistema avanzado de notificaciones

### 🎨 Características Técnicas
- **HTML5 Semántico**: Estructura accesible y SEO-friendly
- **CSS Grid/Flexbox**: Layout moderno y flexible
- **JavaScript ES6+**: Código moderno con async/await y modules
- **Web APIs**: localStorage, IntersectionObserver, beforeunload
- **Performance**: Optimizado con lazy loading y debounce
- **Cross-browser**: Compatible con navegadores modernos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, Grid y Flexbox
- **JavaScript ES6+**: Funcionalidad interactiva
- **Responsive Design**: Mobile-first approach

## 📱 Secciones del Sitio

1. **Inicio**: Página de bienvenida
2. **Servicios**: Información sobre servicios ofrecidos
   - Cuidado de Perros
   - Cuidado de Gatos
   - Servicios Veterinarios
3. **Galería**: Espacio para mostrar imágenes
4. **Contacto**: Formulario de contacto funcional

## 🎨 Paleta de Colores

- **Primario**: #3498db (Azul)
- **Secundario**: #2ecc71 (Verde)
- **Acento**: #e74c3c (Rojo)
- **Texto**: #333 (Gris oscuro)
- **Fondo**: #f8f9fa (Gris claro)

## 📦 Cómo Usar

### 🚀 Instalación Rápida

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/maskotas.git
   cd maskotas
   ```

2. **Abrir el proyecto**
   - Abre `index.html` directamente en tu navegador, o
   - Usar un servidor local (recomendado):
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   ```

3. **Explorar las funcionalidades**
   - Navega por las diferentes secciones
   - Prueba el formulario de contacto con todas sus características
   - Utiliza los atajos de teclado para una experiencia optimizada

### 🧪 Testing y Validación

Para probar todas las funcionalidades del sitio:

1. **Testing Manual**: Abre `docs/testing-manual.html` para una guía completa de testing
2. **Validación HTML**: Verifica en [W3C Validator](https://validator.w3.org/)
3. **Accesibilidad**: Prueba con lectores de pantalla y navegación por teclado
4. **Responsive**: Utiliza DevTools para probar en diferentes dispositivos

### ⌨️ Atajos de Teclado

| Combinación | Acción |
|-------------|---------|
| `Alt + C` | Navegar al formulario de contacto |
| `Ctrl + Enter` | Enviar formulario (desde cualquier campo) |
| `Ctrl + Alt + R` | Reiniciar formulario |
| `Ctrl + ↑/↓` | Navegar entre campos del formulario |
| `Tab` | Navegación secuencial |

## 📚 Documentación Adicional

- **[Funcionalidades del Formulario](docs/funcionalidades-contacto.md)**: Guía completa de características
- **[Testing Manual](docs/testing-manual.html)**: Herramienta de testing interactiva
- **[Wireframes](docs/wireframes.md)**: Diseños y mockups originales
- **[Notas de Desarrollo](docs/notas-desarrollo.md)**: Proceso de implementación

## 🎯 Buenas Prácticas Implementadas

### 📝 Código Limpio
- ✅ **HTML semántico** con etiquetas apropiadas
- ✅ **CSS organizado** con variables y metodología BEM
- ✅ **JavaScript modular** con funciones reutilizables
- ✅ **Comentarios descriptivos** en todo el código
- ✅ **Nombres de variables** descriptivos y consistentes

### ♿ Accesibilidad
- ✅ **ARIA labels** para elementos interactivos
- ✅ **Estados de foco visibles** para navegación por teclado
- ✅ **Contraste de colores** cumple WCAG AA
- ✅ **Textos alternativos** para elementos visuales
- ✅ **Estructura de headings** jerárquica y lógica

### 🚀 Rendimiento
- ✅ **Lazy loading** para elementos no críticos
- ✅ **Debounce** en eventos de entrada
- ✅ **Código optimizado** sin librerías innecesarias
- ✅ **Minificación** de assets en producción
- ✅ **Carga diferida** de funcionalidades avanzadas

### 📱 Responsive Design
- ✅ **Mobile-first approach** en CSS
- ✅ **Breakpoints** bien definidos
- ✅ **Touch-friendly** interfaces
- ✅ **Viewport** optimizado
- ✅ **Grid system** flexible

## 🔧 Configuración Avanzada

### Variables CSS Principales
```css
:root {
    --color-primary: #3498db;
    --color-secondary: #2c3e50;
    --color-success: #2ecc71;
    --color-error: #e74c3c;
    --color-warning: #f39c12;
    --transition: all 0.3s ease;
    --border-radius: 8px;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Configuración JavaScript
```javascript
// Configuraciones principales en main.js
const CONFIG = {
    AUTOSAVE_DELAY: 1000,        // Auto-guardado cada 1 segundo
    VALIDATION_DEBOUNCE: 500,    // Validación después de 0.5s
    MESSAGE_DURATION: 5000,      // Duración de mensajes: 5s
    ANIMATION_DELAY: 100         // Delay entre animaciones
};
```

## 📋 Funcionalidades JavaScript

- ✅ Navegación suave entre secciones
- ✅ Validación de formulario de contacto
- ✅ Mensajes de éxito/error
- ✅ Animaciones al hacer scroll
- ✅ Responsive design helpers
- ✅ Lazy loading de imágenes (preparado)

## 🔧 Personalización

### Agregar Nuevas Secciones
1. Añade la sección en `index.html`
2. Agrega los estilos correspondientes en `styles.css`
3. Actualiza la navegación si es necesario

### Modificar Colores
Edita las variables CSS en `:root` en el archivo `styles.css`:

```css
:root {
    --color-primary: #tu-color-primario;
    --color-secondary: #tu-color-secundario;
    /* etc... */
}
```

### Agregar Imágenes
1. Coloca las imágenes en la carpeta `img/`
2. Referéncialas en el HTML: `<img src="img/tu-imagen.jpg" alt="Descripción">`

## 📚 Próximas Mejoras

- [ ] Sistema de gestión de citas
- [ ] Integración con redes sociales
- [ ] Blog de consejos para mascotas
- [ ] Sistema de reseñas de clientes
- [ ] Carrito de compras para productos
- [ ] Panel de administración
- [ ] Base de datos para almacenar información

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crea un Pull Request**

### 📋 Código de Conducta
- Sé respetuoso con otros contribuidores
- Sigue las convenciones de código existentes
- Documenta tus cambios apropiadamente
- Prueba tu código antes de enviar el PR

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que puedes:

- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Uso privado

Ver el archivo [`LICENSE`](LICENSE) para más detalles.

## 📞 Contacto

- **Proyecto**: Maskotas
- **Repositorio**: [GitHub](https://github.com/tu-usuario/maskotas)
- **Issues**: [Reportar problemas](https://github.com/tu-usuario/maskotas/issues)
- **Autor**: [Tu Nombre](https://github.com/tu-usuario)
- **Email**: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

## 📈 Estado del Proyecto

- **Versión**: 1.0.0
- **Estado**: ✅ Estable
- **Última actualización**: Mayo 2025
- **Mantenimiento**: Activo

## 🙏 Agradecimientos

- Inspirado en las mejores prácticas de desarrollo web moderno
- Iconos y recursos de la comunidad open source
- Gracias a todos los contribuidores del proyecto

---

¡Gracias por usar Maskotas! 🐕🐱
