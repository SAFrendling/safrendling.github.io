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
  // --- 4. Artist Accordion Toggle (One Open at a Time) ---
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentBlock = trigger.closest('.artist-block');
      const isAlreadyOpen = parentBlock.classList.contains('open');

      // Close all artist blocks
      document.querySelectorAll('.artist-block').forEach(block => {
        block.classList.remove('open');
      });

      // Open the clicked one if it wasn't already open
      if (!isAlreadyOpen) {
        parentBlock.classList.add('open');
      }
    });
  });

  // --- 5. Recommendation Item Detail Inspector ---
  const recItems = document.querySelectorAll('.rec-item');
  const detailImg = document.getElementById('detail-img');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');
  const detailLink = document.getElementById('detail-link');
  const detailLinkText = document.getElementById('detail-link-text');
  const detailLink2 = document.getElementById('detail-link-2');
  const detailLink2Text = document.getElementById('detail-link-2-text');

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
      const link = item.getAttribute('data-link');
      const linkText = item.getAttribute('data-link-text');
      const link2 = item.getAttribute('data-link-2');
      const link2Text = item.getAttribute('data-link-2-text');

      // Update detail panel content
      if (detailTitle) detailTitle.textContent = title;
      if (detailImg) detailImg.src = img || '/assets/img/placeholder.jpg';
      if (detailDesc) detailDesc.textContent = desc;

      // Show or hide the optional link button
      if (detailLink) {
        if (link) {
          detailLink.href = link;
          if (detailLinkText) detailLinkText.textContent = linkText || 'Listen';
          detailLink.classList.remove('hidden');
        } else {
          detailLink.classList.add('hidden');
          detailLink.href = '#';
        }
      }
      if (detailLink2) {
  if (link2) {
    detailLink2.href = link2;
    if (detailLink2Text) detailLink2Text.textContent = link2Text || 'Link';
    detailLink2.classList.remove('hidden');
  } else {
    detailLink2.classList.add('hidden');
    detailLink2.href = '#';
  }
}
    });
  });
});
