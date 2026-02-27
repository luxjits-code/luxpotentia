// Nav overlay toggle
function toggleMenu() {
  const overlay = document.getElementById('navOverlay');
  overlay.classList.toggle('open');
}

// Close on link click
document.addEventListener('DOMContentLoaded', () => {
  const overlayLinks = document.querySelectorAll('#navOverlay a');
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navOverlay').classList.remove('open');
    });
  });
});
