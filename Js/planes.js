// Base de datos de los planes con información de presupuesto de hotel
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
        presupuesto_hotel: {
            economico: 50000,   // Hotel hasta 50k
            medio: 150000,      // Hotel hasta 150k
            premium: 300000     // Hotel de 150k en adelante
        },
        opciones: {
            cercano: {
                alojamiento: '🏨 EcoHotel del Sol (Juncal)',
                desc_alojamiento: 'Cabañas rústicas y ecológicas dentro del complejo Juncal. (Más Cercano)',
                precio_hotel: 120000,
                restaurante: '🍽️ Restaurante El Caimán',
                desc_restaurante: 'Pescados y mariscos de río frescos con vista al lago. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Hostal El Viajero (Aipe)',
                desc_alojamiento: 'Hostal simple con ventilador en el pueblo de Aipe, a 15 min. (Más Económico)',
                precio_hotel: 45000,
                restaurante: '🍽️ Piqueteadero La Esquina',
                desc_restaurante: 'Comida corrida y menú del día tradicional huilense. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Rivera Termal Resort',
                desc_alojamiento: 'Resort de lujo con piscinas y spa, a 30 min de Juncal. (Lujoso/Premium)',
                precio_hotel: 280000,
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
        presupuesto_hotel: {
            economico: 50000,
            medio: 150000,
            premium: 300000
        },
        opciones: {
            cercano: {
                alojamiento: '🏨 Refugio de Alta Montaña',
                desc_alojamiento: 'Alojamiento básico especializado en montañistas, el más cercano a los picos. (Más Cercano)',
                precio_hotel: 80000,
                restaurante: '🍽️ Alimentación de Expedición',
                desc_restaurante: 'Menús calóricos preempacados para la jornada de alta montaña. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Cabaña La Laguna',
                desc_alojamiento: 'Cabañas rústicas en las faldas del Nevado, compartidas y sin lujos. (Más Económico)',
                precio_hotel: 40000,
                restaurante: '🍽️ Sancocho de la Finca',
                desc_restaurante: 'Comida caliente y reconfortante en una finca local. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Los Nevados Ecolodge',
                desc_alojamiento: 'Ecolodge con chimenea y servicios de calefacción, ideal para el descanso premium. (Lujoso)',
                precio_hotel: 320000,
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
        presupuesto_hotel: {
            economico: 50000,
            medio: 150000,
            premium: 300000
        },
        opciones: {
            cercano: {
                alojamiento: '🏨 Hotel Monasterio de San Agustín',
                desc_alojamiento: 'Hotel boutique con arquitectura colonial, a pocos pasos de la entrada del Parque. (Más Cercano)',
                precio_hotel: 180000,
                restaurante: '🍽️ Café La Casona Histórica',
                desc_restaurante: 'Café gourmet y platos típicos servidos en un patio colonial céntrico. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Hostal Casa de Nelly',
                desc_alojamiento: 'Hostal popular entre mochileros, con ambiente social y precios bajos. (Más Económico)',
                precio_hotel: 35000,
                restaurante: '🍽️ El Desayunadero Popular',
                desc_restaurante: 'Arepas, huevos y café a precios locales en el mercado central. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Akawanka Lodge',
                desc_alojamiento: 'Cabañas con vistas panorámicas al cañón del río Magdalena y piscina. (Lujoso)',
                precio_hotel: 350000,
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
        presupuesto_hotel: {
            economico: 50000,
            medio: 150000,
            premium: 300000
        },
        opciones: {
            cercano: {
                alojamiento: '🏨 Observatorio Astro-Hotel',
                desc_alojamiento: 'Alojamiento básico, el más cercano a la zona de observación astronómica. (Más Cercano)',
                precio_hotel: 90000,
                restaurante: '🍽️ La Chiva del Desierto',
                desc_restaurante: 'Comida fresca y rápida con servicio directo al observatorio. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Zona de Camping El Cáctus',
                desc_alojamiento: 'Permite acampar con tu propia carpa o alquilar una básica. (Más Económico)',
                precio_hotel: 25000,
                restaurante: '🍽️ Comedor El Sol y la Luna',
                desc_restaurante: 'Platos sencillos como pollo sudado o pescado frito a buen precio. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Glamping Noche Estelar',
                desc_alojamiento: 'Tiendas de lujo con domos transparentes para ver el cielo desde la cama. (Lujoso)',
                precio_hotel: 280000,
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
        presupuesto_hotel: {
            economico: 50000,
            medio: 150000,
            premium: 300000
        },
        opciones: {
            cercano: {
                alojamiento: '🏨 Hotel Termales de Rivera (Oficial)',
                desc_alojamiento: 'Ubicado dentro del complejo principal de termales. (Más Cercano)',
                precio_hotel: 160000,
                restaurante: '🍽️ El Fogón de la Abuela (Rivera)',
                desc_restaurante: 'Comida tradicional huilense en un ambiente rústico cerca de los termales. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Finca Hotel San Miguel',
                desc_alojamiento: 'Alojamiento campestre sencillo en el pueblo de Rivera. (Más Económico)',
                precio_hotel: 45000,
                restaurante: '🍽️ Restaurante Mi Tierra',
                desc_restaurante: 'Menú fijo y económico, enfocado en platos grandes y sustanciosos. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Spa & Resort Termales Paraíso',
                desc_alojamiento: 'Complejo de alta gama con piscinas termales privadas y servicios de spa. (Lujoso)',
                precio_hotel: 380000,
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
        presupuesto_hotel: {
            economico: 50000,
            medio: 150000,
            premium: 300000
        },
        opciones: {
            cercano: {
                alojamiento: '🏨 Hotel Campestre La Vista',
                desc_alojamiento: 'Alojamiento tranquilo con vistas panorámicas a los cafetales, muy cerca del mirador. (Más Cercano)',
                precio_hotel: 140000,
                restaurante: '🍽️ Restaurante El Mirador',
                desc_restaurante: 'Especializado en carnes a la parrilla con vistas espectaculares. (Más Cercano)',
            },
            economico: {
                alojamiento: '🏨 Hospedaje Central Gigante',
                desc_alojamiento: 'Hotel básico en el casco urbano de Gigante, requiere transporte. (Más Económico)',
                precio_hotel: 40000,
                restaurante: '🍽️ Empanadas y Café Gigante',
                desc_restaurante: 'Tienda local con snacks rápidos y café fresco de la zona. (Más Económico)',
            },
            lujoso: {
                alojamiento: '🏨 Finca Agroturística El Balcón',
                desc_alojamiento: 'Lujosas suites con jacuzzi y tours privados de café. (Lujoso)',
                precio_hotel: 290000,
                restaurante: '🍽️ Cocina de Origen (Finca)',
                desc_restaurante: 'Platos preparados con café y productos orgánicos de la finca. (Lujoso)',
            }
        }
    }
];

// *****************************************************************
// FUNCIONES PRINCIPALES
// *****************************************************************

// Función para generar el HTML de una sola tarjeta de destino
function generarTarjetaHTML(plan, prioridad, presupuestoHotel) {
    const opcionesPrioridad = plan.opciones[prioridad];
    const precioHotel = opcionesPrioridad.precio_hotel || 0;
    
    // Determinar badge de presupuesto
    let badgePresupuesto = '';
    if (presupuestoHotel <= 100000) {
        badgePresupuesto = '<span class="badge economico">Económico</span>';
    } else if (presupuestoHotel <= 200000) {
        badgePresupuesto = '<span class="badge cercano">Precio Medio</span>';
    } else {
        badgePresupuesto = '<span class="badge lujoso">Premium</span>';
    }

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
                    <p style="margin-top: 10px;"><strong>Precio por noche:</strong> $${precioHotel.toLocaleString('es-CO')} COP ${badgePresupuesto}</p>
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
function mostrarPlanes(tipoSeleccionado, prioridadSeleccionada, presupuestoHotel) {
    const contenedorResultados = document.getElementById('resultados-grid');

    if (!contenedorResultados) {
        console.error("El contenedor #resultados-grid no fue encontrado.");
        return; 
    }
    
    // Ocultar resultados con transición
    contenedorResultados.style.opacity = 0; 
    
    setTimeout(() => {
        contenedorResultados.innerHTML = ''; 

        // Filtrar planes según tipo
        let planesFiltrados = PLANES_HUILA.filter(plan => plan.tipo === tipoSeleccionado);
        
        // Filtrar según presupuesto de hotel
        planesFiltrados = planesFiltrados.filter(plan => {
            const precioHotel = plan.opciones[prioridadSeleccionada].precio_hotel || 0;
            return precioHotel <= presupuestoHotel;
        });

        // Generar HTML de las tarjetas
        if (planesFiltrados.length > 0) {
            let htmlTotal = '';
            planesFiltrados.forEach(plan => {
                htmlTotal += generarTarjetaHTML(plan, prioridadSeleccionada, presupuestoHotel); 
            });
            
            contenedorResultados.innerHTML = htmlTotal;
            contenedorResultados.style.opacity = 1;

        } else {
            contenedorResultados.innerHTML = `
                <p class="instruccion-inicial">
                    ❌ No se encontraron planes que cumplan con todos los filtros seleccionados.<br>
                    💡 Intenta ajustar el presupuesto de hotel o cambiar la prioridad.
                </p>
            `;
            contenedorResultados.style.opacity = 1;
        }
    }, 250);
}

// Función para actualizar el valor mostrado del slider de presupuesto
function actualizarValorPresupuesto(valor) {
    const valorElement = document.getElementById('presupuesto-valor');
    if (valorElement) {
        valorElement.textContent = `$${parseInt(valor).toLocaleString('es-CO')} COP`;
    }
    
    // Actualizar el color del slider
    const slider = document.getElementById('presupuesto-hotel');
    if (slider) {
        const porcentaje = ((valor - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, 
            var(--primary-color) 0%, 
            var(--primary-color) ${porcentaje}%, 
            #e0e0e0 ${porcentaje}%, 
            #e0e0e0 100%)`;
    }
}

// Inicialización y Asignación de Eventos
document.addEventListener('DOMContentLoaded', () => {
    const radioButtonsTipo = document.querySelectorAll('input[name="tipo_viaje"]');
    const radioButtonsPrioridad = document.querySelectorAll('input[name="prioridad"]');
    const sliderPresupuesto = document.getElementById('presupuesto-hotel');
    
    // Inicializar valor del slider
    if (sliderPresupuesto) {
        actualizarValorPresupuesto(sliderPresupuesto.value);
    }
    
    // Función que lee todos los filtros y actualiza los planes
    function actualizarPlanes() {
        const tipoSeleccionado = document.querySelector('input[name="tipo_viaje"]:checked')?.value || 'aventura'; 
        const prioridadSeleccionada = document.querySelector('input[name="prioridad"]:checked')?.value || 'cercano';
        const presupuestoHotel = parseInt(document.getElementById('presupuesto-hotel')?.value || 500000);
        
        mostrarPlanes(tipoSeleccionado, prioridadSeleccionada, presupuestoHotel);
    }
    
    // Eventos para tipo de viaje
    radioButtonsTipo.forEach(radio => {
        radio.addEventListener('change', actualizarPlanes);
    });
    
    // Eventos para prioridad
    radioButtonsPrioridad.forEach(radio => {
        radio.addEventListener('change', actualizarPlanes);
    });
    
    // Evento para slider de presupuesto
    if (sliderPresupuesto) {
        sliderPresupuesto.addEventListener('input', function() {
            actualizarValorPresupuesto(this.value);
        });
        
        sliderPresupuesto.addEventListener('change', actualizarPlanes);
    }

    // Mostrar planes iniciales
    actualizarPlanes(); 
});