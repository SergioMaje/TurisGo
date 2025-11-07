// Base de datos de los planes y destinos solicitados, ACTUALIZADA con opciones de PRIORIDAD

const PLANES_HUILA = [
    // ===============================================
    // 1. PLAN AVENTURA - PLAYA JUNCAL
    // ===============================================
    {
        id: 'playa-juncal',
        tipo: 'aventura',
        titulo: 'Playa Juncal (Aventura)',
        destino: '📍 Playa Juncal y alrededores',
        desc_destino: 'Ideal para deportes acuáticos, canotaje y disfrutar de cuerpos de agua en un clima cálido.',
        enlace: 'playaJuncal.html',
        opciones: {
            cercano: {
                alojamiento: '🏨 EcoHotel del Sol (Juncal)',
                desc_alojamiento: 'Cabañas rústicas y ecológicas dentro del complejo Juncal. (Más Cercano)',
                restaurante: '🍽️ Restaurante El Caimán',
                desc_restaurante: 'Pescados y mariscos de río frescos con vista al lago. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Hostal El Viajero (Aipe)',
                desc_alojamiento: 'Hostal simple con ventilador en el pueblo de Aipe, a 15 min. (Más Económico)',
                restaurante: '🍽️ Piqueteadero La Esquina',
                desc_restaurante: 'Comida corrida y menú del día tradicional huilense. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Rivera Termal Resort',
                desc_alojamiento: 'Resort de lujo con piscinas y spa, a 30 min de Juncal. (Lujoso/Premium)',
                restaurante: '🍽️ Fusión Gourmet Río',
                desc_restaurante: 'Platos de autor con ingredientes locales y ambiente exclusivo. (Lujoso)',
            }
        }
    },
    // ===============================================
    // 2. PLAN AVENTURA - NEVADO DEL HUILA
    // ===============================================
    {
        id: 'nevado',
        tipo: 'aventura',
        titulo: 'Nevado del Huila (Aventura Extrema)',
        destino: '📍 Parque Nacional Natural Nevado del Huila',
        desc_destino: 'Trekking en alta montaña, paisajes glaciares y vistas impresionantes (Requiere guía).',
        enlace: 'Nevado.html',
        opciones: {
            cercano: {
                alojamiento: '🏨 Refugio de Alta Montaña',
                desc_alojamiento: 'Alojamiento básico especializado en montañistas, el más cercano a los picos. (Más Cercano)',
                restaurante: '🍽️ Alimentación de Expedición',
                desc_restaurante: 'Menús calóricos preempacados para la jornada de alta montaña. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Cabaña La Laguna',
                desc_alojamiento: 'Cabañas rústicas en las faldas del Nevado, compartidas y sin lujos. (Más Económico)',
                restaurante: '🍽️ Sancocho de la Finca',
                desc_restaurante: 'Comida caliente y reconfortante en una finca local. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Los Nevados Ecolodge',
                desc_alojamiento: 'Ecolodge con chimenea y servicios de calefacción, ideal para el descanso premium. (Lujoso)',
                restaurante: '🍽️ Restaurante El Cóndor',
                desc_restaurante: 'Cocina de autor con énfasis en ingredientes andinos y alta coctelería. (Lujoso)',
            }
        }
    },
    // ===============================================
    // 3. PLAN CULTURA - SAN AGUSTÍN
    // ===============================================
    {
        id: 'san-agustin',
        tipo: 'cultura',
        titulo: 'Parque Arqueológico San Agustín',
        destino: '📍 San Agustín (Zona Central)',
        desc_destino: 'Patrimonio de la Humanidad. Explora las majestuosas estatuas precolombinas.',
        enlace: 'sanAgustin.html',
        opciones: {
            cercano: {
                alojamiento: '🏨 Hotel Monasterio de San Agustín',
                desc_alojamiento: 'Hotel boutique con arquitectura colonial, a pocos pasos de la entrada del Parque. (Más Cercano)',
                restaurante: '🍽️ Café La Casona Histórica',
                desc_restaurante: 'Café gourmet y platos típicos servidos en un patio colonial céntrico. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Hostal Casa de Nelly',
                desc_alojamiento: 'Hostal popular entre mochileros, con ambiente social y precios bajos. (Más Económico)',
                restaurante: '🍽️ El Desayunadero Popular',
                desc_restaurante: 'Arepas, huevos y café a precios locales en el mercado central. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Akawanka Lodge',
                desc_alojamiento: 'Cabañas con vistas panorámicas al cañón del río Magdalena y piscina. (Lujoso)',
                restaurante: '🍽️ Finca Raíz Restaurant',
                desc_restaurante: 'Gastronomía de la tierra con técnicas modernas y servicio exclusivo. (Lujoso)',
            }
        }
    },
    // ===============================================
    // 4. PLAN CULTURA - DESIERTO DE LA TATACOA
    // ===============================================
    {
        id: 'tatacoa',
        tipo: 'cultura',
        titulo: 'Desierto de la Tatacoa (Cultura Estelar)',
        destino: '📍 Observatorio Astronómico de La Tatacoa',
        desc_destino: 'Experiencia inmersiva para observación de estrellas y paleontología.',
        enlace: 'desiertoTatacoa.html',
        opciones: {
            cercano: {
                alojamiento: '🏨 Observatorio Astro-Hotel',
                desc_alojamiento: 'Alojamiento básico, el más cercano a la zona de observación astronómica. (Más Cercano)',
                restaurante: '🍽️ La Chiva del Desierto',
                desc_restaurante: 'Comida fresca y rápida con servicio directo al observatorio. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Zona de Camping El Cáctus',
                desc_alojamiento: 'Permite acampar con tu propia carpa o alquilar una básica. (Más Económico)',
                restaurante: '🍽️ Comedor El Sol y la Luna',
                desc_restaurante: 'Platos sencillos como pollo sudado o pescado frito a buen precio. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Glamping Noche Estelar',
                desc_alojamiento: 'Tiendas de lujo con domos transparentes para ver el cielo desde la cama. (Lujoso)',
                restaurante: '🍽️ El Sabor del Oasis',
                desc_restaurante: 'Platos locales con énfasis en carnes al barril y ambiente temático. (Lujoso)',
            }
        }
    },
    // ===============================================
    // 5. PLAN RELAX - RIVERA (TERMALES)
    // ===============================================
    {
        id: 'rivera',
        tipo: 'relax',
        titulo: 'Termales de Rivera (Relax)',
        destino: '📍 Municipio de Rivera, Vía Termales',
        desc_destino: 'Famoso por sus aguas termales curativas, ideal para el descanso corporal y mental.',
        enlace: 'termales.html',
        opciones: {
            cercano: {
                alojamiento: '🏨 Hotel Termales de Rivera (Oficial)',
                desc_alojamiento: 'Ubicado dentro del complejo principal de termales. (Más Cercano)',
                restaurante: '🍽️ El Fogón de la Abuela (Rivera)',
                desc_restaurante: 'Comida tradicional huilense en un ambiente rústico cerca de los termales. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Finca Hotel San Miguel',
                desc_alojamiento: 'Alojamiento campestre sencillo en el pueblo de Rivera. (Más Económico)',
                restaurante: '🍽️ Restaurante Mi Tierra',
                desc_restaurante: 'Menú fijo y económico, enfocado en platos grandes y sustanciosos. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Spa & Resort Termales Paraíso',
                desc_alojamiento: 'Complejo de alta gama con piscinas termales privadas y servicios de spa. (Lujoso)',
                restaurante: '🍽️ Terraza Gourmet Rivera',
                desc_restaurante: 'Cena a la luz de las velas con cocina internacional y carta de vinos. (Lujoso)',
            }
        }
    },
    // ===============================================
    // 6. PLAN RELAX - LA MANO DEL GIGANTE
    // ===============================================
    {
        id: 'mano-gigante',
        tipo: 'relax',
        titulo: 'La Mano del Gigante (Relax Visual)',
        destino: '📍 Gigante, Mirador del Gigante',
        desc_destino: 'Un mirador famoso con una escultura gigante de una mano, perfecto para fotos y disfrutar de la vista.',
        enlace: 'manoGigante.html',
        opciones: {
            cercano: {
                alojamiento: '🏨 Hotel Campestre La Vista',
                desc_alojamiento: 'Alojamiento tranquilo con vistas panorámicas a los cafetales, muy cerca del mirador. (Más Cercano)',
                restaurante: '🍽️ Restaurante El Mirador',
                desc_restaurante: 'Especializado en carnes a la parrilla con vistas espectaculares. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Hospedaje Central Gigante',
                desc_alojamiento: 'Hotel básico en el casco urbano de Gigante, requiere transporte. (Más Económico)',
                restaurante: '🍽️ Empanadas y Café Gigante',
                desc_restajrurante: 'Tienda local con snacks rápidos y café fresco de la zona. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Finca Agroturística El Balcón',
                desc_alojamiento: 'Lujosas suites con jacuzzi y tours privados de café. (Lujoso)',
                restaurante: '🍽️ Cocina de Origen (Finca)',
                desc_restaurante: 'Platos preparados con café y productos orgánicos de la finca. (Lujoso)',
            }
        }
    }
];

// *****************************************************************
// IMPORTANTE: DEBES INCLUIR LAS FUNCIONES DE LÓGICA DE FILTRADO AQUÍ ABAJO
// (generarTarjetaHTML, mostrarPlanes, y el addEventListener)
// *****************************************************************


// [AQUÍ VA EL CÓDIGO JS DE LÓGICA QUE TE PROPORCIONÉ ANTERIORMENTE]

// Función para generar el HTML de una sola tarjeta de destino
function generarTarjetaHTML(plan, prioridad) {
    // Obtenemos las opciones específicas para la prioridad seleccionada
    const opcionesPrioridad = plan.opciones[prioridad];

    return `
        <div class="tarjeta-dinamica" id="resultado-${plan.id}-${prioridad}">
            <div class="tarjeta-contenido">
                <h3>${plan.titulo}</h3>
                <div class="detalle destino">
                    <h4>${plan.destino}</h4>
                    <p>${plan.desc_destino}</p>
                    <a href="${plan.enlace}" class="boton-destino">Ver Más del Destino</a>
                </div>
                <div class="detalle alojamiento">
                    <h4>${opcionesPrioridad.alojamiento}</h4>
                    <p>${opcionesPrioridad.desc_alojamiento}</p>
                </div>
                <div class="detalle gastronomia">
                    <h4>${opcionesPrioridad.restaurante}</h4>
                    <p>${opcionesPrioridad.desc_restaurante}</p>
                </div>
            </div>
        </div>
    `;
}

// Función principal para filtrar y mostrar los resultados
function mostrarPlanes(tipoSeleccionado, prioridadSeleccionada) {
    const contenedorResultados = document.getElementById('resultados-grid');

    // 1. Ocultar los resultados actuales antes de filtrar
    // Añadir una comprobación de seguridad para evitar el error de 'null'
    if (!contenedorResultados) {
        console.error("El contenedor #resultados-grid no fue encontrado.");
        return; 
    }
    
    contenedorResultados.style.opacity = 0; 
    
    setTimeout(() => {
        // Limpiar resultados anteriores después de un breve retardo para la transición
        contenedorResultados.innerHTML = ''; 

        // 2. Filtrar los planes según el tipo seleccionado
        const planesFiltrados = PLANES_HUILA.filter(plan => plan.tipo === tipoSeleccionado);

        // 3. Generar el HTML de las tarjetas filtradas
        if (planesFiltrados.length > 0) {
            let htmlTotal = '';
            planesFiltrados.forEach(plan => {
                // 4. Pasar el plan y la prioridad seleccionada a la función
                htmlTotal += generarTarjetaHTML(plan, prioridadSeleccionada); 
            });
            
            contenedorResultados.innerHTML = htmlTotal;
            contenedorResultados.style.opacity = 1;

        } else {
            contenedorResultados.innerHTML = '<p class="instruccion-inicial">No se encontraron planes para esta categoría.</p>';
            contenedorResultados.style.opacity = 1;
        }
    }, 250); // Transición suave
}

// Inicialización y Asignación de Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar AMBOS grupos de radio buttons
    const radioButtonsTipo = document.querySelectorAll('input[name="tipo_viaje"]');
    const radioButtonsPrioridad = document.querySelectorAll('input[name="prioridad"]');
    
    // Función que se encarga de leer AMBOS filtros y llamar a mostrarPlanes
    function actualizarPlanes() {
        // Se asegura de que haya una opción seleccionada antes de obtener el valor
        const tipoSeleccionado = document.querySelector('input[name="tipo_viaje"]:checked')?.value || 'aventura'; 
        const prioridadSeleccionada = document.querySelector('input[name="prioridad"]:checked')?.value || 'cercano'; 
        
        mostrarPlanes(tipoSeleccionado, prioridadSeleccionada);
    }
    
    // Asignar el evento 'change' a ambos grupos
    radioButtonsTipo.forEach(radio => {
        radio.addEventListener('change', actualizarPlanes);
    });
    
    radioButtonsPrioridad.forEach(radio => {
        radio.addEventListener('change', actualizarPlanes);
    });

    // Ejecutar al inicio (Esto mostrará los planes para Aventura y Cercano)
    actualizarPlanes(); 
});