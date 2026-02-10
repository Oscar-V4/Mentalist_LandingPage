/* ============================================= */
/*  멘탈+진심 — Interactions                       */
/* ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initSplitPage();
  initHeader();
  initMobileMenu();
  initPhotoGallery();
  initScrollReveal();
});

/* --- Split Page (갈림길) --- */
function initSplitPage() {
  const page = document.querySelector('.split-page');
  if (!page) return;

  const sides = page.querySelectorAll('.split-side');
  sides.forEach(side => {
    const btn = side.querySelector('.split-btn');
    const target = side.dataset.target;

    const navigate = () => {
      const direction = side.classList.contains('split-side--jinsim') ? 'left' : 'right';
      page.classList.add(`exit-${direction}`);
      page.style.transition = 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    };

    if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); navigate(); });
    side.addEventListener('click', navigate);
  });
}

/* --- Sticky Header with shadow --- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* --- Photo Gallery: Scroll-linked spread animation --- */
function initPhotoGallery() {
  const galleries = document.querySelectorAll('.photo-gallery');
  if (!galleries.length) return;

  galleries.forEach(gallery => {
    gallery.setAttribute('data-spread', '');
  });

  function updateSpread() {
    galleries.forEach(gallery => {
      const rect = gallery.getBoundingClientRect();
      const windowH = window.innerHeight;
      const galleryCenter = rect.top + rect.height / 2;
      const viewportCenter = windowH / 2;
      const maxDistance = windowH * 0.6;
      const distance = Math.abs(galleryCenter - viewportCenter);
      const progress = Math.max(0, Math.min(1, 1 - distance / maxDistance));

      // Smooth easing
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      gallery.style.setProperty('--spread', eased.toFixed(3));
    });
  }

  let rafId = null;
  window.addEventListener('scroll', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateSpread);
  }, { passive: true });

  // Initial calc
  updateSpread();
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .notice-item, .activity-item');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger animation for list items
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el, i) => {
    // Add stagger delay for list items
    if (el.classList.contains('notice-item') || el.classList.contains('activity-item')) {
      el.dataset.delay = i * 80;
    }
    observer.observe(el);
  });
}
