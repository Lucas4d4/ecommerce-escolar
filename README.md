# 🎒 EscolarYa – Tienda de útiles escolares

Sitio web dinámico tipo e-commerce para una tienda ficticia de útiles escolares. Fue desarrollado como proyecto final para el curso 
FrontEnd de TalentoTech, simulando un trabajo real para un cliente, con foco en un diseño claro, ordenado y adaptable a distintos 
dispositivos.

🔗 **Demo en vivo:** [lucas4d4.github.io/ecommerce-escolar](https://lucas4d4.github.io/ecommerce-escolar/)

## 📌 Descripción

"EscolarYa" es una tienda pensada para que comprar los útiles de la vuelta a clases sea simple, rápido y confiable. El sitio presenta 
un catálogo de productos, los beneficios de la tienda, los medios de pago disponibles, una página de contacto y una página de carrito que
simula la compra de productos.
La página principal carga los productos dinámicamente a través de un archivo JSON de nombre 'productos.json'.
La conexion con los datos del JSON se realizaron a partir de funciones con sus respectivos metodos de implementación por medio de 
diferentes archivos javascript. Uso de fetch, .then y catch() para la comprobación y comunicación con el archivo JSON.
Uso del localStorage para la persistencia de datos en la muestra de productos agregados al carrito.
Uso de SweetAlert2 para la que los mensajes 'alert()' se vean más prolijos y profesionales estéticamente.

## ✨ Características

- **Sección principal** con la frase de la tienda y sus puntos fuertes: envíos a todo el país, compra por mayor o menor y marcas
  reconocidas.
- **Logo de carrito** que contabiliza los productos agregados al carrito y redirecciona a la "Página de Mi carrito"
- **Catálogo de productos** con imagen, descripción y precio:
  - Mochila escolar
  - Cartuchera
  - Carpeta N°3
  - Hojas rayadas N°3
  - Pack de lápices de colores
- **Sección "¿Por qué elegirnos?"** con los beneficios: envíos a domicilio, pago por entrega, atención personalizada y descuentos
  por cantidad.
- **Página de contacto** con los datos de la tienda.
- **Página de carrito** con la muestra de la lista de los productos agregados al carrito y la factura del total a pagar.
- **Footer** con redes sociales, secciones del sitio, métodos de pago (Mastercard, Mercado Pago, Santander y efectivo) y datos de contacto.
- **Navegación** simple entre Inicio, Contacto y Mi Carrito.


## 🛠️ Tecnologías utilizadas

<!-- Ajustá esta lista según lo que hayas usado realmente -->

- **HTML5** – estructura semántica del sitio
- **CSS3** – estilos y diseño responsive
- **GitHub Pages** – hosting del sitio
- **JavaScript** - funciones de agregar y actualizar etiquetas dinámicamente, conexion con el archivo JSON y uso y manejo de la
  persistencia de datos localStorage


## 📁 Estructura del proyecto

```
ecommerce-escolar/
├── index.html          # Página de inicio (hero, catálogo, beneficios)
├── pages/
│   └── contacto.html   # Página de contacto
    └── carrito.html    # Página de carrito
├── images/             # Logos, íconos e imágenes de productos
└── css/                # Hojas de estilo
    └── styles.css      # Hoja de estilo para diseños general
└── js/                 # Funciones y métodos
    └── ui.js
    └── funcionesCarritoStorage.js
    └── funcionesCarrito.js
    └── contacto.js
    └── carrito.js
    └── index.js   
└── data/               # Datos de JSON
    └── productos.json  # Datos JSON de productos
```


## 🚀 Cómo ejecutarlo en local

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/lucas4d4/ecommerce-escolar.git
   ```
2. Entrá a la carpeta del proyecto:
   ```bash
   cd ecommerce-escolar
   ```
3. Abrí el archivo `index.html` en tu navegador.

No requiere instalación de dependencias ni servidor.


## 🎯 Objetivo del proyecto

Practicar el desarrollo de un sitio web completo, trabajando en:

- Maquetación con HTML y CSS
- Funcionalidad, dinamismo e interactividad con JavaScript
- Diseño responsive
- Persistencia de datos localStorage
- Conectividad con datos del JSON
- Organización de contenido y navegación
- Presentación visual de productos
- Publicación de un sitio web con GitHub Pages


---

## 👤 Autor

**Lucas Gaston Gomez**
Desarrollador web – [GitHub](https://github.com/lucas4d4)

---

## 📄 Licencia

<!-- Elegí una licencia (por ejemplo MIT) o eliminá esta sección -->
Proyecto con fines educativos y de portfolio.
