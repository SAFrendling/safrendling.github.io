document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Off-Canvas Navigation Drawer Toggle ---
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
            statusDiv.className = 'coconut-status intact';
            statusDiv.innerHTML = '✔ [OK] <code>coconut.jpg</code> is present. This 404 is on you.';
          } else {
            statusDiv.className = 'coconut-status missing';
            statusDiv.innerHTML = '✖ [CRITICAL] I have no fucking idea who put this here, but when I deleted it the website would not start. Words cannot describe my fucking confusion.';
          }
        })
        .catch(() => {
          statusDiv.className = 'coconut-status missing';
          statusDiv.innerHTML = '✖ [CRITICAL] I have no fucking idea who put this here, but when I deleted it the website would not start. Words cannot describe my fucking confusion.';
        });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
  const recItems = document.querySelectorAll('.rec-item');
  const detailImg = document.getElementById('detail-img');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');

  recItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active highlight from all items
      recItems.forEach(i => i.classList.remove('active'));
      
      // Highlight clicked item
      item.classList.add('active');

      // Extract details from data-attributes
      const title = item.getAttribute('data-title');
      const img = item.getAttribute('data-img');
      const desc = item.getAttribute('data-desc');

      // Update detail panel content
      detailTitle.textContent = title;
      detailImg.src = img || '/assets/img/placeholder.jpg';
      detailDesc.textContent = desc;
    });
  });
});
});
