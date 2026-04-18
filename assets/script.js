(function () {
  var nav = document.querySelector('.cl-nav');
  if (!nav) return;

  var lastY = window.scrollY;
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y > lastY && y > 80) {
          // scrollt naar beneden
          nav.classList.add('nav-hidden');
        } else {
          // scrollt naar boven
          nav.classList.remove('nav-hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
