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
│   └── (imágenes)      # Carpeta para imágenes del sitio
├── docs/
│   └── (documentación) # Wireframes, notas y documentación
└── README.md           # Este archivo
```

## 🚀 Características

- **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario de Contacto**: Validación en tiempo real
- **Animaciones**: Efectos visuales al hacer scroll
- **Código Limpio**: HTML semántico, CSS organizado y JavaScript modular

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
   
   # Con VS Code Live Server (extensión)
   # Click derecho en index.html > "Open with Live Server"
   ```

3. **Visitar el sitio**
   - Navegador directo: `file:///ruta/al/proyecto/index.html`
   - Servidor local: `http://localhost:8000`

### 🎨 Personalización

1. **Personalizar contenido** en `index.html`
2. **Agregar imágenes** en la carpeta `img/`
3. **Modificar estilos** en `css/styles.css`
4. **Añadir funcionalidad** en `js/main.js`

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
