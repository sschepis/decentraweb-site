// DecentraClick Documentation Site

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle for mobile
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  // Search
  const searchInput = document.querySelector('.sidebar-search input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(query) ? '' : 'none';
      });
      // Show all section titles if searching, hide empty sections
      document.querySelectorAll('.nav-section').forEach(section => {
        const visibleLinks = section.querySelectorAll('.nav-link:not([style*="display: none"])');
        section.style.display = visibleLinks.length > 0 || !query ? '' : 'none';
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Card clicks
  document.querySelectorAll('.card[data-href]').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = card.dataset.href;
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

function navigate(page) {
  window.location.href = page;
}
