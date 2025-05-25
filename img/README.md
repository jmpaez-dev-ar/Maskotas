# Carpeta de Imágenes - Maskotas

Esta carpeta está destinada para almacenar todas las imágenes del sitio web.

## Estructura Recomendada

```
img/
├── logo/
│   ├── logo.png
│   ├── logo.svg
│   └── favicon.ico
├── servicios/
│   ├── perros.jpg
│   ├── gatos.jpg
│   └── veterinaria.jpg
├── galeria/                  # ✅ IMPLEMENTADO
│   ├── perros/              # Imágenes de perros
│   │   ├── golden-retriever.jpg
│   │   ├── pastor-aleman.jpg
│   │   └── labrador.jpg
│   ├── gatos/               # Imágenes de gatos
│   │   ├── persa.jpg
│   │   ├── maine-coon.jpg
│   │   └── siames.jpg
│   └── otros/               # Otras mascotas
│       ├── conejo.jpg
│       └── loro.jpg
├── heroes/
│   └── hero-banner.jpg
└── icons/
    ├── phone.svg
    ├── email.svg
    └── location.svg
```

## Estado Actual de Implementación

### ✅ Galería Completada
- **Estructura de carpetas**: Creada y organizada
- **Imágenes de demostración**: Usando Unsplash API para alta calidad
- **Categorización**: Perros, Gatos y Otras mascotas
- **Optimización**: Lazy loading implementado para performance

### 📝 Nota sobre Imágenes Actuales
Las imágenes de la galería actualmente utilizan URLs de Unsplash para demostración. Para producción, se recomienda:

1. **Descargar y optimizar** las imágenes seleccionadas
2. **Guardarlas** en las carpetas correspondientes (`perros/`, `gatos/`, `otros/`)
3. **Actualizar las URLs** en `index.html` para apuntar a archivos locales
4. **Mantener los nombres descriptivos** para SEO y accesibilidad

## Formatos Recomendados

- **Fotos**: JPG (optimizadas para web)
- **Gráficos/Logos**: PNG o SVG
- **Iconos**: SVG preferiblemente

## Tamaños Sugeridos

- **Hero Banner**: 1920x1080px
- **Imágenes de servicios**: 400x300px
- **Galería**: 800x600px
- **Logo**: 200x80px

## Optimización

Recuerda optimizar las imágenes antes de subirlas:
- Comprimir sin perder calidad
- Usar formatos modernos como WebP cuando sea posible
- Incluir alt text descriptivo en el HTML

---

**Nota**: Este archivo puede eliminarse una vez que se agreguen las imágenes reales.
