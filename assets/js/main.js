(function () {
  /*COUNTDOWN*/
  var TARGET = Date.parse('2027-08-27T00:00:00+05:30');
  function parts(ms) {
    if (ms < 0) ms = 0;
    var s = Math.floor(ms / 1000);
    return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
  }
  function two(n) { return (n < 10 ? '0' : '') + n; }
  /*END-COUNTDOWN*/

  var el = {
    d: document.getElementById('cd-d'), h: document.getElementById('cd-h'),
    m: document.getElementById('cd-m'), s: document.getElementById('cd-s')
  };
  var note = document.getElementById('cd-note');
  function tick() {
    var left = TARGET - Date.now();
    var p = parts(left);
    el.d.textContent = p.d;
    el.h.textContent = two(p.h);
    el.m.textContent = two(p.m);
    el.s.textContent = two(p.s);
    if (left <= 0 && note) note.textContent = 'The day is here';
  }
  tick();
  setInterval(tick, 1000);

  var opener = document.getElementById('opener');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function openIt() {
    if (opener.classList.contains('opening')) return;
    opener.classList.add('opening');
    document.documentElement.classList.add('is-open');
    setTimeout(function () {
      opener.hidden = true;
      window.scrollTo(0, 0);
      var h = document.getElementById('names');
      if (h) { try { h.focus({ preventScroll: true }); } catch (e) {} }
    }, reduce ? 60 : 1700);
  }
  opener.addEventListener('click', openIt);
})();
