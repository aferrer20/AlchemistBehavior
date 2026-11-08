// Alchemist Behavior: progressive enhancement. Content lives in the HTML.
(function () {
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  };

  // ---------- Nav ----------
  var nav = document.querySelector('.nav');
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

  // ---------- Reveal ----------
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('is-in'); }); }

  // ---------- Form helper ----------
  function send(form) {
    return fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok || j.success === false) throw new Error('bad');
          return j;
        });
      });
  }
  function busy(btn, on, label) {
    if (!btn) return;
    if (on) { btn.dataset.label = btn.innerHTML; btn.disabled = true; btn.textContent = label || 'Sending…'; }
    else { btn.disabled = false; btn.innerHTML = btn.dataset.label; }
  }

  // ---------- Lead magnet forms ----------
  document.querySelectorAll('[data-lead]').forEach(function (box) {
    var form = box.querySelector('form');
    var status = box.querySelector('.lead__status');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type=submit]');
      busy(btn, true);
      if (status) status.textContent = '';
      send(form).then(function () {
        store.set('ab_lead', '1');
        box.classList.add('is-done');
      }).catch(function () {
        busy(btn, false);
        if (status) status.textContent = 'Something went wrong. Please try again in a moment.';
      });
    });
  });

  // ---------- Dialogs ----------
  function wireDialog(id, openSel) {
    var d = document.getElementById(id);
    if (!d || typeof d.showModal !== 'function') return null;
    document.querySelectorAll(openSel).forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); d.showModal(); });
    });
    d.querySelectorAll('.modal__close').forEach(function (c) { c.addEventListener('click', function () { d.close(); }); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    return d;
  }
  var orderDialog = wireDialog('order', '[data-order]');
  var kitDialog = wireDialog('kit-offer', '[data-kit]');

  if (orderDialog) {
    var oform = orderDialog.querySelector('form');
    var ostatus = orderDialog.querySelector('.order__status');
    oform.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = oform.querySelector('[type=submit]');
      busy(btn, true); ostatus.textContent = '';
      send(oform).then(function () {
        orderDialog.querySelector('.order__form').hidden = true;
        orderDialog.querySelector('.order__done').hidden = false;
      }).catch(function () {
        busy(btn, false);
        ostatus.textContent = 'Something went wrong. Please try again, or message Amanda on Instagram.';
      });
    });
  }

  // One-time exit offer: desktop exit intent, or mobile after deep scroll. Never for existing leads.
  if (kitDialog && !store.get('ab_lead') && !store.get('ab_offer_seen')) {
    var shown = false;
    var show = function () {
      if (shown || document.querySelector('dialog[open]')) return;
      shown = true; store.set('ab_offer_seen', '1'); kitDialog.showModal();
    };
    var armed = false;
    setTimeout(function () { armed = true; }, 12000);
    document.addEventListener('mouseout', function (e) {
      if (armed && !e.relatedTarget && e.clientY <= 0) show();
    });
    if (window.matchMedia('(max-width: 680px)').matches) {
      window.addEventListener('scroll', function onS() {
        var h = document.documentElement;
        if (armed && h.scrollTop / (h.scrollHeight - h.clientHeight) > 0.6) { window.removeEventListener('scroll', onS); show(); }
      }, { passive: true });
    }
  }

  // ---------- Quiz ----------
  var quiz = document.getElementById('quiz-app');
  if (quiz) {
    var steps = Array.prototype.slice.call(quiz.querySelectorAll('.quiz__step[data-q]'));
    var gate = quiz.querySelector('[data-gate]');
    var bar = quiz.querySelector('.quiz__progress i');
    var answers = [];
    var idx = 0;
    var total = steps.length + 1;
    var setBar = function (n) { if (bar) bar.style.width = Math.round((n / total) * 100) + '%'; };
    var go = function (el) {
      quiz.querySelectorAll('.quiz__step').forEach(function (s) { s.classList.remove('is-active'); });
      el.classList.add('is-active');
      var f = el.querySelector('button, input'); if (f && idx > 0) f.focus({ preventScroll: true });
    };
    var result = function () {
      var tally = {};
      answers.forEach(function (a) { tally[a] = (tally[a] || 0) + 1; });
      var best = answers[0];
      Object.keys(tally).forEach(function (k) { if (tally[k] > tally[best]) best = k; });
      return best;
    };
    quiz.classList.add('is-js');
    go(steps[0]); setBar(0);
    steps.forEach(function (step, i) {
      step.querySelectorAll('.quiz__opt').forEach(function (opt) {
        opt.addEventListener('click', function () {
          answers[i] = opt.getAttribute('data-type');
          idx = i + 1; setBar(idx);
          go(i + 1 < steps.length ? steps[i + 1] : gate);
        });
      });
    });
    var gform = gate.querySelector('form');
    var gstatus = gate.querySelector('.lead__status');
    gform.addEventListener('submit', function (e) {
      e.preventDefault();
      var r = result();
      var names = { S: 'The Story Keeper', B: 'The Skeptic', E: 'The Energy Leaker', A: 'The Waiting Dreamer' };
      gform.querySelector('[name=result]').value = names[r];
      gform.querySelector('[name=answers]').value = answers.join(',');
      var btn = gform.querySelector('[type=submit]');
      busy(btn, true, 'Revealing…'); gstatus.textContent = '';
      send(gform).then(function () {
        store.set('ab_lead', '1'); setBar(total);
        go(quiz.querySelector('[data-result="' + r + '"]'));
        quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }).catch(function () {
        busy(btn, false);
        gstatus.textContent = 'Something went wrong. Please try again in a moment.';
      });
    });
    quiz.querySelectorAll('.quiz__restart').forEach(function (b) {
      b.addEventListener('click', function () {
        answers = []; idx = 0; setBar(0);
        var btn = gform.querySelector('[type=submit]'); if (btn.disabled) busy(btn, false);
        go(steps[0]);
      });
    });
  }
})();
