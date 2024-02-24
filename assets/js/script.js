// Ejemplo de arreglo de propiedades en venta
const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en exclusiva zona residencial',
      src: './assets/img/home-4708883_1280.jpg',
      descripcion: 'Un apartamento hermoso con vistas al parque.',
      ubicacion: '123 Luxury Lane, Prestige Suburbs, CA 94078',
      habitaciones: 3,
      costo: 500000,
      smoke: false,
      pets: true
    },
    // Agrega al menos 3 objetos más aquí
  ];
  
  // Ejemplo de arreglo de propiedades en alquiler
  const propiedades_alquiler = [
    {
      nombre: 'Casa espaciosa en el centro de la ciudad',
      src: './assets/img/condo-2414328_1280.jpg',
      descripcion: 'Casa amplia con acceso a todas las comodidades de la ciudad.',
      ubicacion: '456 Central St, Downtown, CA 93124',
      habitaciones: 2,
      costo: 2000,
      smoke: true,
      pets: false
    },
    // Agrega al menos 3 objetos más aquí
  ];
  
  // Función para generar el HTML de las propiedades
  function generarHTMLPropiedades(propiedades) {
    // Usar map y template literals para generar HTML
    return propiedades.map(propiedad => `
      <article class="propiedad">
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <h3>${propiedad.nombre}</h3>
        <p class="direccion">${propiedad.ubicacion}</p>
        <p class="precio">${propiedad.costo}</p>
        <div class="iconos">
          ${propiedad.smoke ? '<span class="smoke-allowed">Se permite fumar</span>' : '<span class="no-smoke">No se permite fumar</span>'}
          ${propiedad.pets ? '<span class="pets-allowed">Mascotas permitidas</span>' : '<span class="no-pets">No se permiten mascotas</span>'}
        </div>
      </article>
    `).join('');
  }
  
  // Función para cargar las propiedades en la página
  function cargarPropiedades(tipo) {
    const contenedor = tipo === 'venta' ? document.getElementById('propiedades-venta') : document.getElementById('propiedades-alquiler');
    const propiedades = tipo === 'venta' ? propiedades_venta : propiedades_alquiler;
    
    contenedor.innerHTML = generarHTMLPropiedades(propiedades.slice(0, 3)); // Mostrar solo 3 propiedades
  }
  
  // Ejecutar al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    cargarPropiedades('venta');
    cargarPropiedades('alquiler');
  });
  
  // En las páginas venta.html y alquiler.html, puedes llamar a cargarPropiedades con el tipo correspondiente para cargar todas las propiedades.
  