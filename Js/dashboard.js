// Dashboard Simple SIN autenticación
class Dashboard {
  constructor() {
    this.sidebar = null;
    this.overlay = null;
    this.toggleBtn = null;
    this.closeBtn = null;
    this.init();
  }

  init() {
    this.createDashboardElements();
    this.addEventListeners();
    this.setActivePage();
  }

  createDashboardElements() {
    // Botón toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'dashboard-toggle';
    toggleBtn.id = 'dashboard-toggle';
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    `;
    document.body.appendChild(toggleBtn);

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'dashboard-overlay';
    overlay.id = 'dashboard-overlay';
    document.body.appendChild(overlay);

    // Sidebar
    const sidebar = document.createElement('div');
    sidebar.className = 'dashboard-sidebar';
    sidebar.id = 'dashboard-sidebar';
    sidebar.innerHTML = `
      <div class="dashboard-header">
        <button class="dashboard-close" id="dashboard-close">&times;</button>
        <div class="dashboard-title">
          <h2>TURISGO</h2>
          <p>Menú de Navegación</p>
        </div>
      </div>

      <nav class="dashboard-nav">
        <div class="nav-section">
          <div class="nav-section-title">NAVEGACIÓN PRINCIPAL</div>
          <a href="index.html" class="nav-item">
            <span class="nav-icon">🏠</span>
            <span class="nav-text">Inicio</span>
          </a>
        </div>

        <div class="nav-section">
          <div class="nav-section-title">DESTINOS TURÍSTICOS</div>
          <a href="desiertoTatacoa.html" class="nav-item">
            <span class="nav-icon">🏜️</span>
            <span class="nav-text">Desierto Tatacoa</span>
          </a>
          <a href="sanAgustin.html" class="nav-item">
            <span class="nav-icon">🗿</span>
            <span class="nav-text">San Agustín</span>
          </a>

          <a href="termales.html" class="nav-item">
            <span class="nav-icon">🌡️</span>
            <span class="nav-text">Termales de Rivera</span>
          </a>
          <a href="manoGigante.html" class="nav-item">
            <span class="nav-icon">🖐️</span>
            <span class="nav-text">La Mano del Gigante</span>
          </a>
          <a href="playaJuncal.html" class="nav-item">
            <span class="nav-icon">🏖️</span>
            <span class="nav-text">Playa Juncal</span>
          </a>
          <a href="Nevado.html" class="nav-item">
            <span class="nav-icon">🏔️</span>
            <span class="nav-text">Nevado del Huila</span>
          </a>
        </div>

        <div class="nav-section">
          <div class="nav-section-title">INFORMACIÓN</div>
          <a href="#planes" class="nav-item">
            <span class="nav-icon">✈️</span>
            <span class="nav-text">Planes Personalizados</span>
          </a>
          <a href="#contacto" class="nav-item">
            <span class="nav-icon">📧</span>
            <span class="nav-text">Contacto</span>
          </a>
          <a href="#ayuda" class="nav-item">
            <span class="nav-icon">❓</span>
            <span class="nav-text">Ayuda</span>
          </a>
        </div>
      </nav>

      <div class="dashboard-footer">
        <p>© 2025 TURISGO</p>
        <p>Explora el Huila</p>
      </div>
    `;
    document.body.appendChild(sidebar);

    this.sidebar = sidebar;
    this.overlay = overlay;
    this.toggleBtn = toggleBtn;
    this.closeBtn = document.getElementById('dashboard-close');
  }

  addEventListeners() {
    this.toggleBtn.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    // Scroll suave a secciones en la misma página
    document.querySelectorAll('[data-scroll]').forEach(link => {
      link.addEventListener('click', (e) => {
        const section = link.dataset.scroll;
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (currentPage === 'index.html' || currentPage === '') {
          e.preventDefault();
          this.scrollToSection(section);
        }
      });
    });
  }

  open() {
    this.sidebar.classList.add('active');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.sidebar.classList.remove('active');
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  scrollToSection(sectionId) {
    this.close();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

  setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href) {
        const linkPage = href.split('#')[0] || href;
        if (linkPage === currentPage || linkPage === `./${currentPage}`) {
          item.classList.add('active');
        }
      }
    });
  }
}

// Inicializar dashboard
document.addEventListener('DOMContentLoaded', () => {
  new Dashboard();
});