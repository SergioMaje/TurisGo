// Datos de ejemplo de hoteles
const hotelsData = [
    {
        id: 1,
        name: "Hotel La Rivera",
        location: "Ubicación central con vistas del río",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=400",
        rating: 4,
        reviews: 156,
        price: 180000,
        category: "standard",
        services: ["wifi", "restaurant", "parking"]
    },
    {
        id: 2,
        name: "GHL Hotel Neiva",
        location: "Hotel con cercanía con vistas río",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&w=400",
        rating: 4,
        reviews: 203,
        price: 220000,
        category: "standard",
        services: ["wifi", "restaurant", "parking", "pool"]
    },
    {
        id: 3,
        name: "Hotel Pamplona",
        location: "Centro histórico de Neiva",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&w=400",
        rating: 4,
        reviews: 89,
        price: 150000,
        category: "economic",
        services: ["wifi", "parking"]
    },
    {
        id: 4,
        name: "San Agustín Hotel",
        location: "Cerca del aeropuerto",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&w=400",
        rating: 4,
        reviews: 167,
        price: 190000,
        category: "standard",
        services: ["wifi", "restaurant", "parking"]
    },
    {
        id: 5,
        name: "Ruta del Café",
        location: "Zona residencial tranquila",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=400",
        rating: 5,
        reviews: 134,
        price: 250000,
        category: "premium",
        services: ["wifi", "restaurant", "parking", "pool"]
    },
    {
        id: 6,
        name: "Hotel Boutique Centro",
        location: "En el corazón de Neiva",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&w=400",
        rating: 4,
        reviews: 92,
        price: 320000,
        category: "premium",
        services: ["wifi", "restaurant", "parking", "pool"]
    }
];

// Variables globales
let filteredHotels = [...hotelsData];
let currentFilters = {
    maxPrice: 500000,
    categories: [],
    services: []
};

// Funciones principales
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Inicializar menú móvil
    initMobileMenu();
    
    // Si estamos en la página de hoteles, cargar hoteles
    if (document.getElementById('hotels-grid')) {
        loadHotels();
        initializeFilters();
    }
    
    // Inicializar búsqueda
    initSearch();
}

// Menú móvil
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Cargar hoteles
function loadHotels() {
    const hotelsGrid = document.getElementById('hotels-grid');
    if (!hotelsGrid) return;
    
    hotelsGrid.innerHTML = '';
    
    filteredHotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelsGrid.appendChild(hotelCard);
    });
    
    updateResultsCount();
}

// Crear tarjeta de hotel
function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    
    const stars = generateStars(hotel.rating);
    const formattedPrice = formatPrice(hotel.price);
    
    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}" onerror="this.src='https://via.placeholder.com/400x200?text=Hotel+Image'">
        <div class="hotel-info">
            <h3>${hotel.name}</h3>
            <p class="hotel-location">${hotel.location}</p>
            <div class="hotel-rating">
                <div class="stars">${stars}</div>
                <span class="reviews">(${hotel.reviews} reseñas)</span>
            </div>
            <div class="hotel-footer">
                <div class="hotel-price">${formattedPrice}</div>
                <button class="hotel-btn" onclick="viewHotelDetails(${hotel.id})">Ver Detalles</button>
            </div>
        </div>
    `;
    
    return card;
}

// Generar estrellas
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<span class="star">★</span>';
        } else {
            starsHTML += '<span class="star empty">☆</span>';
        }
    }
    return starsHTML;
}

// Formatear precio
function formatPrice(price) {
    return `$${price.toLocaleString('es-CO')} COP`;
}

// Inicializar filtros
function initializeFilters() {
    // Filtro de precio
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            const value = parseInt(this.value);
            priceValue.textContent = formatPrice(value);
            currentFilters.maxPrice = value;
            applyFilters();
        });
    }
    
    // Filtros de categoría
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateArrayFilter('categories', this.value, this.checked);
            applyFilters();
        });
    });
    
    // Filtros de servicios
    const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateArrayFilter('services', this.value, this.checked);
            applyFilters();
        });
    });
    
    // Botón aplicar filtros
    const applyBtn = document.querySelector('.apply-filters-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyFilters);
    }
}

// Actualizar filtros de array
function updateArrayFilter(filterType, value, isChecked) {
    if (isChecked) {
        if (!currentFilters[filterType].includes(value)) {
            currentFilters[filterType].push(value);
        }
    } else {
        currentFilters[filterType] = currentFilters[filterType].filter(item => item !== value);
    }
}

// Aplicar filtros
function applyFilters() {
    filteredHotels = hotelsData.filter(hotel => {
        // Filtro de precio
        if (hotel.price > currentFilters.maxPrice) return false;
        
        // Filtro de categoría
        if (currentFilters.categories.length > 0 && 
            !currentFilters.categories.includes(hotel.category)) return false;
        
        // Filtro de servicios
        if (currentFilters.services.length > 0) {
            const hasAllServices = currentFilters.services.every(service => 
                hotel.services.includes(service)
            );
            if (!hasAllServices) return false;
        }
        
        return true;
    });
    
    loadHotels();
}

// Actualizar contador de resultados
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        const count = filteredHotels.length;
        resultsCount.textContent = `${count} hotel${count !== 1 ? 'es' : ''} encontrado${count !== 1 ? 's' : ''}`;
    }
}

// Ver detalles del hotel
function viewHotelDetails(hotelId) {
    alert(`Ver detalles del hotel con ID: ${hotelId}`);
    // Aquí puedes redirigir a una página de detalles o abrir un modal
}

// Inicializar búsqueda
function initSearch() {
    const searchButtons = document.querySelectorAll('.search-btn');
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const destination = document.getElementById('destination') || document.getElementById('destination-hotels');
            const location = document.getElementById('location') || document.getElementById('location-hotels');
            
            if (destination && location) {
                performSearch(destination.value, location.value);
            }
        });
    });
    
    // Búsqueda al presionar Enter
    const searchInputs = document.querySelectorAll('#destination, #destination-hotels, #location, #location-hotels');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchBtn = this.parentElement.querySelector('.search-btn');
                if (searchBtn) searchBtn.click();
            }
        });
    });
}

// Realizar búsqueda
function performSearch(destination, location) {
    console.log('Buscando:', destination, 'en', location);
    
    if (destination.trim() === '' || location.trim() === '') {
        alert('Por favor ingresa destino y ubicación');
        return;
    }
    
    // Si no estamos en la página de hoteles, redirigir
    if (!document.getElementById('hotels-grid')) {
        window.location.href = 'hoteles.html';
        return;
    }
    
    // Filtrar hoteles por búsqueda
    filteredHotels = hotelsData.filter(hotel => 
        hotel.name.toLowerCase().includes(destination.toLowerCase()) ||
        hotel.location.toLowerCase().includes(destination.toLowerCase())
    );
    
    loadHotels();
}

// Funciones de utilidad
function showLoading() {
    // Implementar indicador de carga
    console.log('Cargando...');
}

function hideLoading() {
    // Ocultar indicador de carga
    console.log('Carga completa');
}

// Función para simular carga de más hoteles (paginación)
function loadMoreHotels() {
    // Simular carga de más hoteles
    console.log('Cargando más hoteles...');
}