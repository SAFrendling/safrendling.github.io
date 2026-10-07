document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navDrawer = document.querySelector('.nav-drawer');
  const overlay = document.querySelector('.overlay');

  function toggleMenu() {
    navDrawer.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
      toggleMenu();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Navigation Drawer Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navDrawer = document.querySelector('.nav-drawer');
  const overlay = document.querySelector('.overlay');

  function toggleMenu() {
    if (navDrawer && overlay) {
      navDrawer.classList.toggle('open');
      overlay.classList.toggle('active');
    }
  }

  if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('open')) {
      toggleMenu();
    }
  });

  // --- 2. Load-Bearing Coconut Safeguard ---
  const isErrorPage = document.body.classList.contains('error-page');

  fetch('/coconut.jpg', { method: 'HEAD' })
    .then((response) => {
      if (!response.ok) throw new Error('Coconut missing');
    })
    .catch(() => {
      // Crash normal pages if coconut.jpg is missing
      if (!isErrorPage) {
        document.body.innerHTML = `
          <div style="background:#0d1117; color:#ff7b72; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:monospace; text-align:center; padding:2rem;">
            <h1 style="font-size:2rem; margin-bottom:1rem;">CRITICAL SYSTEM FAILURE</h1>
            <p style="color:#c9d1d9; max-width:500px;">FATAL: Load-bearing artifact (<code>coconut.jpg</code>) missing from site root.</p>
            <a href="/404.html" style="margin-top:1.5rem; color:#58a6ff;">Run Diagnostics</a>
          </div>
        `;
      }
    });

  // --- 3. 404 Diagnostic Button Handler ---
  const checkBtn = document.getElementById('check-coconut-btn');
  const statusDiv = document.getElementById('coconut-status');

  if (checkBtn && statusDiv) {
    checkBtn.addEventListener('click', () => {
      statusDiv.className = 'coconut-status loading';
      statusDiv.innerHTML = 'Pinging /coconut.jpg...';

      fetch('/coconut.jpg', { method: 'HEAD' })
        .then((res) => {
          if (res.ok) {
            statusDiv.className = 'coconut.jpg located';
            statusDiv.innerHTML = '✔ [OK] <code>coconut.jpg</code> is present. This 404 is on you.';
          } else {
            statusDiv.className = 'coconut.jpg missing';
            statusDiv.innerHTML = '✖ [CRITICAL] I have no fucking idea who put this here, but when I deleted it the website would not start. Words cannot describe my fucking confusion.';
          }
        })
        .catch(() => {
          statusDiv.className = 'coconut.jpg missing';
          statusDiv.innerHTML = '✖ [CRITICAL] I have no fucking idea who put this here, but when I deleted it the website would not start. Words cannot describe my fucking confusion.';
        });
    });
  }
});
