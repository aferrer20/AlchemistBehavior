// Alchemist Behavior: progressive enhancement only. All content is in the HTML.
(function () {
  var nav = document.querySelector('.nav');
  if (nav && !nav.classList.contains('nav--solid')) {
    var onScroll = function () { nav.classList.toggle('is-solid', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); });
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Book order dialog
  var dialog = document.getElementById('order');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  document.querySelectorAll('[data-order]').forEach(function (btn) {
    btn.addEventListener('click', function (e) { e.preventDefault(); dialog.showModal(); });
  });
  dialog.querySelector('.order__close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });

  var form = dialog.querySelector('form');
  var status = dialog.querySelector('.order__status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var submit = form.querySelector('[type=submit]');
    submit.disabled = true; submit.textContent = 'Sending…'; status.textContent = '';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('bad');
        dialog.querySelector('.order__form').hidden = true;
        dialog.querySelector('.order__done').hidden = false;
      })
      .catch(function () {
        status.textContent = 'Something went wrong. Please try again, or message Amanda on Instagram.';
        submit.disabled = false; submit.textContent = 'Reserve my copy';
      });
  });
})();
