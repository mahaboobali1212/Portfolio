/**
 * Application Interactivity - Mahaboob Ali Shaik Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Light / Dark)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  // Restore saved preference if any
  const savedTheme = localStorage.getItem('editorial-theme');
  if (savedTheme === 'dark') {
    htmlEl.classList.add('dark-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      htmlEl.classList.toggle('dark-theme');
      const isDark = htmlEl.classList.contains('dark-theme');
      localStorage.setItem('editorial-theme', isDark ? 'dark' : 'light');
    });
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.style.transform = 'translateX(0)';
      drawerOverlay.style.opacity = '1';
      drawerOverlay.style.pointerEvents = 'auto';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.style.transform = 'translateX(100%)';
      drawerOverlay.style.opacity = '0';
      drawerOverlay.style.pointerEvents = 'none';
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // 3. Active Nav Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
});
