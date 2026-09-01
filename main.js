(function () {
  'use strict';

  // ---------- Preloader ----------
  var loaderEl = document.getElementById('acv-loader');
  var loaderStart = Date.now();
  var MIN_LOADER_MS = 500;
  function hideLoader() {
    var elapsed = Date.now() - loaderStart;
    var wait = Math.max(0, MIN_LOADER_MS - elapsed);
    setTimeout(function () { loaderEl.classList.add('is-hidden'); }, wait);
  }
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);

  // ---------- Mobile menu ----------
  var burger = document.getElementById('acv-burger');
  var closeBtn = document.getElementById('acv-close');
  var mobileMenu = document.getElementById('acv-mobile-menu');

  function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
  }
  burger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  mobileMenu.querySelectorAll('.acv-mobile-link, .acv-mobile-cta').forEach(function (el) {
    el.addEventListener('click', function () { mobileMenu.classList.remove('is-open'); });
  });

  // ---------- Header: scroll-progress bar, hide on scroll down / show on scroll up, active-section nav highlight ----------
  var headerEl = document.getElementById('acv-header');
  var progressBar = document.getElementById('acv-progress-bar');
  var navLinks = document.querySelectorAll('#acv-nav-desktop a[data-nav]');
  var lastScrollY = window.scrollY;

  function updateHeaderOnScroll() {
    var y = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
    progressBar.style.transform = 'scaleX(' + progress + ')';

    if (y > 140 && y > lastScrollY) headerEl.classList.add('is-hidden');
    else headerEl.classList.remove('is-hidden');
    lastScrollY = y;
  }
  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  var navSections = ['metodo', 'resultados', 'relatorio', 'faq']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActiveNav(id) {
    navLinks.forEach(function (a) {
      a.classList.toggle('is-active', a.dataset.nav === id);
    });
  }
  if ('IntersectionObserver' in window && navSections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navSections.forEach(function (s) { navObserver.observe(s); });
  }

  // ---------- Scroll reveal (ported from the Ceres Wealth reference: .rv fades/slides in once, staggered by --i) ----------
  var revealObserver;
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });
  }

  function observeReveal(el) {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in');
  }

  function makeReveal(el, index) {
    el.classList.add('rv');
    if (typeof index === 'number') el.style.setProperty('--i', index);
    observeReveal(el);
    return el;
  }

  // Reveal every static .rv block already present in the markup.
  document.querySelectorAll('.rv').forEach(function (el) { observeReveal(el); });

  // ---------- Steps (Método) — one line each, per the approved copy ----------
  var STEPS = [
    { num: '01', title: 'Diagnóstico', desc: 'Mapeamos cartões, programas e saldos atuais.', numColor: '#756545', barColor: '#A69984', barWidth: '38%' },
    { num: '02', title: 'Estruturação', desc: 'Organizamos o gasto e os limites por programa.', numColor: 'rgba(10,22,40,.62)', barColor: 'rgba(10,22,40,.12)', barWidth: '100%' },
    { num: '03', title: 'Monitoramento', desc: 'Acompanhamos bônus e janelas de transferência.', numColor: 'rgba(10,22,40,.62)', barColor: 'rgba(10,22,40,.12)', barWidth: '100%' },
    { num: '04', title: 'Resgate', desc: 'Emitimos no seu nome, no momento certo.', numColor: 'rgba(10,22,40,.62)', barColor: 'rgba(10,22,40,.12)', barWidth: '100%' }
  ];
  var stepsEl = document.getElementById('acv-steps');
  STEPS.forEach(function (s, i) {
    var div = document.createElement('div');
    div.className = 'acv-step';
    div.innerHTML =
      '<div class="acv-step-num" style="color:' + s.numColor + '">' + s.num + '</div>' +
      '<div class="acv-step-title">' + s.title + '</div>' +
      '<div class="acv-step-desc">' + s.desc + '</div>' +
      '<div class="acv-step-bar" style="background:' + s.barColor + ';width:' + s.barWidth + '"></div>';
    stepsEl.appendChild(div);
    makeReveal(div, i);
  });

  // ---------- Resultados — honest placeholders, no fabricated numbers ----------
  var PLACEHOLDERS = [
    'Milhas sob gestão',
    'Bilhetes emitidos',
    'Economia gerada',
    'Famílias atendidas'
  ];
  var placeholderGrid = document.getElementById('acv-placeholder-grid');
  PLACEHOLDERS.forEach(function (label, i) {
    var card = document.createElement('div');
    card.className = 'acv-placeholder-card';
    card.innerHTML = '<div class="acv-placeholder-value">Em breve</div><div class="acv-placeholder-label">' + label + '</div>';
    placeholderGrid.appendChild(card);
    makeReveal(card, i);
  });

  // ---------- Comparação table ----------
  var CMP = [
    { feature: 'Monitoramento de promoções', solo: 'Você descobre pelo Instagram, quase sempre no último dia', gerido: 'Acompanhamento diário das plataformas, com alerta na abertura' },
    { feature: 'Controle de limite por CPF', solo: 'Risco real de bloqueio de conta e perda do saldo', gerido: 'Uso monitorado por programa, sempre abaixo do teto' },
    { feature: 'Timing da transferência', solo: 'Transfere quando lembra — em geral sem bônus', gerido: 'Executada na janela de bônus, com CM projetado antes' },
    { feature: 'Emissão do bilhete', solo: 'Horas procurando disponibilidade e taxas altas', gerido: 'Emitimos no seu nome, comparando rotas e taxas' },
    { feature: 'Relatório mensal', solo: 'Não existe', gerido: 'Saldo, expirações, CM e economia acumulada' }
  ];
  var cmpTable = document.getElementById('acv-cmp-table');
  CMP.forEach(function (r, i) {
    var row = document.createElement('div');
    row.className = 'acv-cmp-row';
    row.innerHTML =
      '<div class="acv-cmp-feature">' + r.feature + '</div>' +
      '<div class="acv-cmp-solo">' + r.solo + '</div>' +
      '<div class="acv-cmp-gerido">' + r.gerido + '</div>';
    cmpTable.appendChild(row);
    makeReveal(row, i);
  });

  // ---------- Pilares ----------
  var PILARES = [
    { title: 'Segurança', desc: 'Nunca pedimos senha de banco ou token. O acesso é apenas aos programas de fidelidade, com sua autorização explícita e registro de cada operação.', solo: 'Reserva apenas o que pede', gerido: 'Administra o patrimônio inteiro' },
    { title: 'Transparência', desc: 'Cada transferência tem CM projetado antes e CM realizado depois. Você vê o número, não a promessa.', solo: 'Atende uma vez, sem acompanhar depois', gerido: 'Acompanha o ciclo completo de bônus' },
    { title: 'Especialidade', desc: 'Sete programas, regras que mudam sem aviso e janelas de 48 horas. É isso que fazemos todos os dias.', solo: 'Você decide sozinho, sem dados', gerido: 'Decidimos com dados, todos os dias' }
  ];
  var pilaresItemsEl = document.getElementById('acv-pilares-items');
  var pilaresPillsEl = document.getElementById('acv-pilares-pills');
  var pilarSoloEl = document.getElementById('acv-pilar-solo');
  var pilarGeridoEl = document.getElementById('acv-pilar-gerido');
  var pilarNumEl = document.getElementById('acv-pilar-num');
  var pilarTitleEl = document.getElementById('acv-pilar-title');
  var pilarItemEls = [];
  var pilarPillEls = [];
  var activePilar = 0;

  function setActivePilar(i) {
    if (i === activePilar) return;
    activePilar = i;
    pilarItemEls.forEach(function (el, idx) { el.classList.toggle('is-active', idx === i); });
    pilarPillEls.forEach(function (el, idx) { el.classList.toggle('is-active', idx === i); });
    pilarSoloEl.textContent = PILARES[i].solo;
    pilarGeridoEl.textContent = PILARES[i].gerido;
    pilarNumEl.textContent = String(i + 1).padStart(2, '0');
    pilarTitleEl.textContent = PILARES[i].title;
  }

  // Build once — scroll (not click) drives which pillar is active, mirroring the
  // Ceres Wealth sticky-column reference: text blocks scroll past a pinned visual.
  PILARES.forEach(function (p, i) {
    var num = String(i + 1).padStart(2, '0');

    var item = document.createElement('div');
    item.className = 'acv-pilar-item' + (i === activePilar ? ' is-active' : '');
    item.innerHTML = '<div class="acv-pilar-title">' + p.title + '</div><div class="acv-pilar-desc">' + p.desc + '</div>';
    item.addEventListener('click', function () { setActivePilar(i); });
    pilaresItemsEl.appendChild(item);
    pilarItemEls.push(item);
    // No .rv fade-in here: acv-pilar-item already owns its own opacity (active/inactive
    // dimming) and adding the reveal system's opacity:0→1 would fight that via specificity.

    var pill = document.createElement('div');
    pill.className = 'acv-pill' + (i === activePilar ? ' is-active' : '');
    pill.textContent = num + ' ' + p.title;
    pill.addEventListener('click', function () { setActivePilar(i); });
    pilaresPillsEl.appendChild(pill);
    pilarPillEls.push(pill);
  });
  pilarSoloEl.textContent = PILARES[activePilar].solo;
  pilarGeridoEl.textContent = PILARES[activePilar].gerido;
  pilarNumEl.textContent = String(activePilar + 1).padStart(2, '0');
  pilarTitleEl.textContent = PILARES[activePilar].title;

  if ('IntersectionObserver' in window) {
    var pilarScrollObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActivePilar(pilarItemEls.indexOf(entry.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    pilarItemEls.forEach(function (el) { pilarScrollObserver.observe(el); });
  }

  // ---------- FAQ ----------
  var FAQS = [
    { q: 'Vocês pedem a senha do meu banco?', a: 'Não. Em nenhuma hipótese pedimos senha de banco, token ou acesso a conta corrente. Trabalhamos apenas com os portais dos programas de fidelidade, com autorização registrada e senhas trocadas por você a qualquer momento.' },
    { q: 'Como funciona a cobrança?', a: 'O valor é definido após o diagnóstico, conforme volume e complexidade da sua estrutura de cartões e programas.' },
    { q: 'Existe um gasto mensal mínimo no cartão?', a: 'Não exigimos um mínimo fixo — analisamos caso a caso durante o diagnóstico para saber se a gestão compensa para o seu perfil.' },
    { q: 'Minha conta pode ser bloqueada?', a: 'Trabalhamos sempre dentro dos limites de uso por CPF de cada programa, justamente para evitar esse risco.' },
    { q: 'As passagens saem no meu nome?', a: 'Sim. A emissão é sempre feita no seu nome ou de quem você indicar como beneficiário.' }
  ];
  var faqListEl = document.getElementById('acv-faq-list');
  var faqOpen = 0;
  var faqRendered = false;

  function renderFaqs() {
    faqListEl.innerHTML = '';
    FAQS.forEach(function (f, i) {
      var item = document.createElement('div');
      item.className = 'acv-faq-item' + (i === faqOpen ? ' is-open' : '');
      item.innerHTML =
        '<div class="acv-faq-q"><div class="acv-faq-q-text">' + f.q + '</div><div class="acv-faq-plus">+</div></div>' +
        '<div class="acv-faq-a-wrap"><div class="acv-faq-a-inner"><div class="acv-faq-a">' + f.a + '</div></div></div>';
      item.querySelector('.acv-faq-q').addEventListener('click', function () {
        faqOpen = faqOpen === i ? -1 : i;
        renderFaqs();
      });
      faqListEl.appendChild(item);
      if (!faqRendered) makeReveal(item, i);
    });
    faqRendered = true;
  }
  renderFaqs();
})();
