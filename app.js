// ═══════════════════════════════════════════
// app.js — Application Core v3.0
// Dr El Hakima · 1ère Année Médecine
// ═══════════════════════════════════════════
'use strict';

/* ══════════════════════════════════════════
   I18N — Complete bilingual dictionary
══════════════════════════════════════════ */
const i18n = {
  fr: {
    'nav.dashboard':'Tableau de bord','nav.courses':'COURS','nav.optics':'Optique Géométrique',
    'nav.radiation':'Rayonnement','nav.practice':'PRATIQUE','nav.methods':'Méthodes Pas-à-Pas',
    'nav.traps':'Pièges Fréquents','nav.exam':'Simulation Examen','nav.ai':'INTELLIGENCE',
    'nav.ai_assistant':'IA Assistant',
    'dashboard.title':'Tableau de bord','dashboard.sub':'Suivi de ta progression en temps réel',
    'dashboard.ai_rec':'🤖 Recommandations IA','dashboard.weak':'📉 Points faibles détectés',
    'dashboard.quick':'🚀 Accès rapide','dashboard.pareto':'⚡ Règle de Pareto 80/20 — Priorités Examen',
    'dashboard.no_data':'Effectue le Diagnostic ou le QCM pour des recommandations personnalisées.',
    'dashboard.score':'Score QCM','dashboard.errors':'Erreurs','dashboard.qcm':'QCM faits',
    'dashboard.program':'Programme','dashboard.excellent':'🔥 Excellent','dashboard.good':'👍 Bien',
    'dashboard.review':'📚 À revoir','dashboard.no_test':'Aucun test','dashboard.recorded':'Enregistrées',
    'dashboard.session':'Cette session','dashboard.optic_ray':'Optique + Rayon.',
    'methods.sub':'7 méthodes pas-à-pas pour l\'examen','traps.sub':'16 erreurs critiques · À mémoriser absolument',
    'exam.sub':'QCM type EMD 2024/2025 · 0.5 pt/question','exam.timer_label':'⏱️ Paramètres du timer',
    'exam.timer_off':'Sans timer','exam.timer_global':'Global','exam.timer_perq':'Par question',
    'exam.global_duration':'Durée totale :','exam.perq_duration':'Durée par question :',
    'exam.minutes':'minutes','exam.seconds':'secondes','exam.qcount':'Nombre de questions :',
    'exam.start':'▶ Démarrer l\'examen','exam.prev':'← Précédent','exam.next':'Suivant →',
    'exam.finish':'✓ Terminer l\'examen','exam.analyze':'🤖 Analyser mes erreurs',
    'exam.reset':'↺ Recommencer','exam.generating':'Génération des questions...',
    'exam.correct':'✅ Correct !','exam.incorrect':'❌ Incorrect','exam.no_answer':'Non répondu',
    'ia.sub':'Diagnostic · Flash Cards · Statistiques personnalisées',
    'ia.tab_diag':'🎯 Diagnostic','ia.tab_flash':'🔁 Flash Cards','ia.tab_stats':'📊 Statistiques',
    'ia.diag_title':'🎯 Diagnostic de Niveau',
    'ia.diag_desc':'5 questions aléatoires. L\'IA analyse et te dit quoi réviser en priorité.',
    'ia.diag_refresh':'↺ Nouvelles questions','ia.diag_submit':'🤖 Analyser mon niveau',
    'ia.diag_complete':'Réponds à toutes les questions !','ia.diag_analyzing':'Analyse en cours...',
    'ia.diag_score':'Score','ia.diag_success':'Réussite',
    'ia.flash_title':'🔁 Flash Cards — Depuis tes erreurs',
    'ia.flash_desc':'Cartes personnalisées générées depuis tes erreurs d\'examen et de diagnostic.',
    'ia.flash_gen':'✨ Générer mes cartes','ia.flash_loading':'Génération en cours...',
    'ia.flash_error_btn':'↺ Réessayer',
    'ia.flash_no_errors':'Aucune erreur enregistrée.',
    'ia.flash_no_errors_hint':'Fais d\'abord le QCM ou le Diagnostic pour générer des flashcards personnalisées.',
    'ia.flash_errors_count':'{n} erreur(s) disponible(s) — cartes ciblées',
    'ia.flash_new_session':'✨ Nouvelle session',
    'ia.stats_title':'📊 Statistiques Intelligentes',
    'ia.stats_desc':'L\'IA analyse toutes tes erreurs et génère un bilan personnalisé.',
    'ia.stats_gen':'🤖 Générer mon bilan','ia.stats_clear':'🗑 Effacer erreurs',
    'ia.stats_confirm_clear':'Effacer toutes les erreurs enregistrées ?',
    'ia.stats_no_errors':'Aucune erreur enregistrée. Fais d\'abord le QCM ou le Diagnostic !',
    'opt.optics':'Optique Géométrique','opt.radiation':'Rayonnement','opt.both':'Optique + Rayonnement',
    'opt.easy':'Facile','opt.medium':'Moyen','opt.hard':'Difficile',
    'fc.question':'❓ Question','fc.answer':'✅ Réponse','fc.tap':'Cliquer pour voir la réponse',
    'fc.no':'✗ À revoir','fc.yes':'✓ Je sais',
    'ai.label':'🤖 Explication IA','ai.analyze_label':'🤖 Bilan personnalisé',
    'ai.no_errors':'Aucune erreur à analyser. Parfait !',
    'quick.optic':'Optique Géométrique','quick.optic_desc':'Descartes · Prisme · Lame',
    'quick.ray':'Rayonnement','quick.ray_desc':'RX · Radioactivité · De Broglie',
    'quick.exam':'Simulation Examen','quick.exam_desc':'QCM type EMD 2024/2025',
    'quick.ia':'IA Assistant','quick.ia_desc':'Flashcards · Diagnostic · Stats',
    'quick.meth':'Méthodes pas-à-pas','quick.meth_desc':'7 méthodes de résolution',
    'quick.trap':'Pièges fréquents','quick.trap_desc':'16 erreurs critiques',
    'trap.opt_title':'OPTIQUE — 8 pièges','trap.ray_title':'RAYONNEMENT — 8 pièges',
    'trap.vf_title':'QCM Vrai/Faux — EMD type','trap.true':'VRAI','trap.false':'FAUX',
    'meth.example':'Exemple',
  },
  en: {
    'nav.dashboard':'Dashboard','nav.courses':'COURSES','nav.optics':'Geometric Optics',
    'nav.radiation':'Radiation','nav.practice':'PRACTICE','nav.methods':'Step-by-Step Methods',
    'nav.traps':'Common Traps','nav.exam':'Exam Simulation','nav.ai':'INTELLIGENCE',
    'nav.ai_assistant':'AI Assistant',
    'dashboard.title':'Dashboard','dashboard.sub':'Real-time progress tracking',
    'dashboard.ai_rec':'🤖 AI Recommendations','dashboard.weak':'📉 Detected Weak Points',
    'dashboard.quick':'🚀 Quick Access','dashboard.pareto':'⚡ Pareto 80/20 — Exam Priorities',
    'dashboard.no_data':'Take the Diagnostic or QCM for personalized recommendations.',
    'dashboard.score':'QCM Score','dashboard.errors':'Errors','dashboard.qcm':'QCMs done',
    'dashboard.program':'Program','dashboard.excellent':'🔥 Excellent','dashboard.good':'👍 Good',
    'dashboard.review':'📚 Review needed','dashboard.no_test':'No test','dashboard.recorded':'Recorded',
    'dashboard.session':'This session','dashboard.optic_ray':'Optics + Radiation',
    'methods.sub':'7 step-by-step methods for the exam','traps.sub':'16 critical errors · Must memorize',
    'exam.sub':'MCQ type EMD 2024/2025 · 0.5 pt/question','exam.timer_label':'⏱️ Timer Settings',
    'exam.timer_off':'No timer','exam.timer_global':'Global','exam.timer_perq':'Per question',
    'exam.global_duration':'Total duration:','exam.perq_duration':'Per-question duration:',
    'exam.minutes':'minutes','exam.seconds':'seconds','exam.qcount':'Number of questions:',
    'exam.start':'▶ Start Exam','exam.prev':'← Previous','exam.next':'Next →',
    'exam.finish':'✓ Finish Exam','exam.analyze':'🤖 Analyze my errors',
    'exam.reset':'↺ Restart','exam.generating':'Generating questions...',
    'exam.correct':'✅ Correct!','exam.incorrect':'❌ Incorrect','exam.no_answer':'Not answered',
    'ia.sub':'Diagnostic · Flash Cards · Personalized Statistics',
    'ia.tab_diag':'🎯 Diagnostic','ia.tab_flash':'🔁 Flash Cards','ia.tab_stats':'📊 Statistics',
    'ia.diag_title':'🎯 Level Diagnostic',
    'ia.diag_desc':'5 random questions. AI analyzes and tells you what to review.',
    'ia.diag_refresh':'↺ New questions','ia.diag_submit':'🤖 Analyze my level',
    'ia.diag_complete':'Answer all questions first!','ia.diag_analyzing':'Analyzing...',
    'ia.diag_score':'Score','ia.diag_success':'Success rate',
    'ia.flash_title':'🔁 Flash Cards — From Your Errors',
    'ia.flash_desc':'Personalized cards generated from your exam and diagnostic mistakes.',
    'ia.flash_gen':'✨ Generate my cards','ia.flash_loading':'Generating...',
    'ia.flash_error_btn':'↺ Retry',
    'ia.flash_no_errors':'No errors recorded yet.',
    'ia.flash_no_errors_hint':'Take the QCM or Diagnostic first to generate personalized flashcards.',
    'ia.flash_errors_count':'{n} error(s) available — targeted cards',
    'ia.flash_new_session':'✨ New session',
    'ia.stats_title':'📊 Smart Statistics',
    'ia.stats_desc':'AI analyzes all your errors and generates a personalized report.',
    'ia.stats_gen':'🤖 Generate my report','ia.stats_clear':'🗑 Clear errors',
    'ia.stats_confirm_clear':'Clear all recorded errors?',
    'ia.stats_no_errors':'No errors recorded. Take the QCM or Diagnostic first!',
    'opt.optics':'Geometric Optics','opt.radiation':'Radiation','opt.both':'Optics + Radiation',
    'opt.easy':'Easy','opt.medium':'Medium','opt.hard':'Hard',
    'fc.question':'❓ Question','fc.answer':'✅ Answer','fc.tap':'Click to see the answer',
    'fc.no':'✗ Review','fc.yes':'✓ Got it',
    'ai.label':'🤖 AI Explanation','ai.analyze_label':'🤖 Personalized Report',
    'ai.no_errors':'No errors to analyze. Perfect!',
    'quick.optic':'Geometric Optics','quick.optic_desc':'Descartes · Prism · Plate',
    'quick.ray':'Radiation','quick.ray_desc':'X-rays · Radioactivity · De Broglie',
    'quick.exam':'Exam Simulation','quick.exam_desc':'MCQ type EMD 2024/2025',
    'quick.ia':'AI Assistant','quick.ia_desc':'Flashcards · Diagnostic · Stats',
    'quick.meth':'Step-by-step methods','quick.meth_desc':'7 resolution methods',
    'quick.trap':'Common traps','quick.trap_desc':'16 critical errors',
    'trap.opt_title':'OPTICS — 8 traps','trap.ray_title':'RADIATION — 8 traps',
    'trap.vf_title':'True/False MCQ — EMD type','trap.true':'TRUE','trap.false':'FALSE',
    'meth.example':'Example',
  }
};

const Lang = (() => {
  let _lang = localStorage.getItem('bp_lang') || 'fr';
  function t(key) { return (i18n[_lang] || i18n.fr)[key] || key; }
  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n, val = t(k);
      if (val && val !== k) el.textContent = val;
    });
    document.getElementById('langIcon').textContent = _lang === 'fr' ? '🇫🇷' : '🇬🇧';
    document.getElementById('langLabel').textContent = _lang.toUpperCase();
    document.documentElement.lang = _lang;
    // Re-render dynamic pages on language switch
    renderOptique();
    renderRayonnement();
    renderMethodes();
    renderPieges();
    Dashboard.refresh();
  }
  function toggle() {
    _lang = _lang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('bp_lang', _lang);
    apply();
  }
  function get() { return _lang; }
  return { t, apply, toggle, get };
})();

/* ══════════════════════════════════════════
   STATE — Robust localStorage management
══════════════════════════════════════════ */
const State = (() => {
  const _defaults = { theme:'dark', errors:[], qcmCount:0, lastScore:0, usedExamIds:[] };
  let _s = { ..._defaults };
  function _load() {
    try {
      const raw = localStorage.getItem('bpState3');
      if (raw) _s = { ..._defaults, ...JSON.parse(raw) };
    } catch { _s = { ..._defaults }; }
  }
  function _save() {
    try { localStorage.setItem('bpState3', JSON.stringify(_s)); } catch {}
  }
  _load();
  return {
    get: k => _s[k],
    set: (k, v) => { _s[k] = v; _save(); },
    push: (k, v) => {
      if (!Array.isArray(_s[k])) _s[k] = [];
      // Avoid exact duplicates (same question + same wrong answer)
      const isDup = _s[k].some(e => e.question === v.question && e.given === v.given);
      if (!isDup) _s[k] = [..._s[k], v].slice(-150);
      _save();
    },
    clear: (k) => { _s[k] = Array.isArray(_s[k]) ? [] : _defaults[k]; _save(); },
  };
})();

/* ══════════════════════════════════════════
   ROUTER
══════════════════════════════════════════ */
const Router = (() => {
  const PAGES = ['dashboard','optique','rayonnement','methodes','pieges','exam','ia'];
  let _cur = 'dashboard';
  function go(pageId) {
    if (!PAGES.includes(pageId)) return;
    _cur = pageId;
    PAGES.forEach(id => {
      const pg = document.getElementById('pg-' + id);
      if (pg) pg.classList.toggle('active', id === pageId);
    });
    document.querySelectorAll('.nav-item[data-page]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === pageId);
    });
    if (pageId === 'dashboard') Dashboard.refresh();
    if (window.innerWidth <= 768) Sidebar.close();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function init() {
    document.getElementById('sidebar-nav').addEventListener('click', e => {
      const btn = e.target.closest('.nav-item[data-page]');
      if (btn) go(btn.dataset.page);
    });
  }
  return { go, init, current: () => _cur };
})();

/* ══════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════ */
const Sidebar = (() => {
  function open()  { document.getElementById('sidebar').classList.add('open'); document.getElementById('sidebar-overlay').classList.add('show'); document.getElementById('hamburger').classList.add('open'); }
  function close() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sidebar-overlay').classList.remove('show'); document.getElementById('hamburger').classList.remove('open'); }
  function init()  {
    document.getElementById('hamburger').addEventListener('click', () => document.getElementById('sidebar').classList.contains('open') ? close() : open());
    document.getElementById('sidebar-overlay').addEventListener('click', close);
  }
  return { open, close, init };
})();

/* ══════════════════════════════════════════
   THEME
══════════════════════════════════════════ */
const Theme = (() => {
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    document.getElementById('themeIcon').textContent = t === 'dark' ? '🌙' : '☀️';
    State.set('theme', t);
  }
  function init() {
    apply(State.get('theme') || 'dark');
    document.getElementById('themeBtn').addEventListener('click', () => apply(State.get('theme') === 'dark' ? 'light' : 'dark'));
  }
  return { init };
})();

const FocusMode = (() => {
  let _active = false;
  function init() {
    document.getElementById('focusBtn').addEventListener('click', () => {
      _active = !_active;
      document.querySelector('.sidebar')?.classList.toggle('hidden', _active);
      document.querySelector('.topbar')?.classList.toggle('hidden', _active);
      document.getElementById('layout').style.marginLeft = _active ? '0' : '';
      document.getElementById('focusBtn').querySelector('span').textContent = _active ? '✕' : '🎯';
    });
  }
  return { init };
})();

function initOnlineStatus() {
  const dot = document.getElementById('online-dot');
  function update() { dot.classList.toggle('offline', !navigator.onLine); dot.title = navigator.onLine ? 'En ligne' : 'Hors ligne'; }
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

/* ══════════════════════════════════════════
   COMPONENT FACTORIES
══════════════════════════════════════════ */
const C = {
  formula(formula, aiId, label) {
    return `<div class="formula-block">
      <div class="formula-row">
        <span class="formula-text">${formula}</span>
        <button class="btn-explain" data-formula="${encodeURIComponent(formula)}" data-label="${encodeURIComponent(label||formula)}" data-ai-id="${aiId}">💡 ${Lang.get()==='en'?'Explain':'Explique'}</button>
      </div>
      <div class="ai-response" id="${aiId}"></div>
    </div>`;
  },
  alert(type, icon, html) { return `<div class="alert alert--${type}"><span>${icon}</span><div>${html}</div></div>`; },
  step(n, text)           { return `<div class="step-row"><div class="step-num">${n}</div><div class="step-text">${text}</div></div>`; },
  stat(val, lbl, color, note='') {
    return `<div class="stat-card"><div class="stat-val" style="color:${color}">${val}</div><div class="stat-lbl">${lbl}</div>${note?`<div class="stat-note" style="color:var(--text3)">${note}</div>`:''}</div>`;
  },
  loading(msg='') { return `${msg||Lang.t('ai.label')} <span class="dots"><span></span><span></span><span></span></span>`; },
  sectionTitle(label, badge='') { return `<div class="section-title">${label}${badge?` <span class="badge badge--exam">${badge}</span>`:''}</div>`; },
};

/* ══════════════════════════════════════════
   AI EXPLAIN HANDLER
══════════════════════════════════════════ */
function initExplainButtons(container) {
  container.querySelectorAll('.btn-explain').forEach(btn => {
    btn.addEventListener('click', async () => {
      const formula = decodeURIComponent(btn.dataset.formula);
      const label   = decodeURIComponent(btn.dataset.label);
      const box     = document.getElementById(btn.dataset.aiId);
      if (!box) return;
      if (box.classList.contains('show') && !box.querySelector('.dots')) { box.classList.remove('show'); return; }
      box.innerHTML = `<span class="ai-response-label">${Lang.t('ai.label')}</span>${C.loading()}`;
      box.classList.add('show');
      btn.disabled = true;
      try {
        const res = await AI.explain(formula, label, Lang.get());
        box.innerHTML = `<span class="ai-response-label">${Lang.t('ai.label')}</span>${res.replace(/\n/g,'<br>')}`;
      } catch {
        box.innerHTML = `<span class="ai-response-label">${Lang.t('ai.label')}</span>${Lang.get()==='en'?'Error.':'Erreur.'} <button class="ai-retry-btn">↺ ${Lang.get()==='en'?'Retry':'Réessayer'}</button>`;
        box.querySelector('.ai-retry-btn')?.addEventListener('click', () => { btn.disabled = false; btn.click(); });
      }
      btn.disabled = false;
    });
  });
}

/* ══════════════════════════════════════════
   OPTIQUE CONTENT — Full course from OPTIC.txt
══════════════════════════════════════════ */
function renderOptique() {
  const el = document.getElementById('optique-content');
  const L = Lang.get();
  const isEN = L === 'en';

  el.innerHTML = `
  ${C.sectionTitle(isEN?'1. Snell-Descartes Law':'1. Loi de Snell-Descartes', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="card card--blue">
    <div class="card-label">${isEN?'Definitions':'Définitions'}</div>
    <p class="text-body">${isEN
      ? '<strong>Refractive index:</strong> measures a medium\'s ability to slow light. n_vacuum=1, n_air≈1, n_water≈1.33, n_glass≈1.5, n_diamond≈2.42'
      : '<strong>Indice de réfraction :</strong> mesure la capacité d\'un milieu à ralentir la lumière. n_vide=1, n_air≈1, n_eau≈1.33, n_verre≈1.5, n_diamant≈2.42'}</p>
    <p class="text-body">${isEN
      ? 'Angles i and r are <strong>ALWAYS</strong> measured from the <strong>NORMAL</strong> to the surface.'
      : 'Les angles i et r sont <strong>TOUJOURS</strong> mesurés par rapport à la <strong>NORMALE</strong> à la surface.'}</p>
    ${C.formula('n = c / v &nbsp;(n ≥ 1)', 'ar-n', isEN?'n=c/v refractive index definition':'n=c/v définition indice réfraction')}
    ${C.formula('n₁ · sin(i) = n₂ · sin(r)', 'ar-sn', isEN?'Snell-Descartes Law':'Loi Snell-Descartes')}
    ${C.alert('info','ℹ️', isEN
      ? 'If n₁ < n₂: r < i (ray toward normal). If n₁ > n₂: r > i (ray away from normal).'
      : 'Si n₁ < n₂ : r < i (rayon vers la normale). Si n₁ > n₂ : r > i (rayon s\'éloigne de la normale).')}
  </div>

  ${C.sectionTitle(isEN?'2. Total Internal Reflection':'2. Réflexion Totale Interne', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="grid-2 mb-16">
    <div class="card card--green mb-0">
      <div class="card-label">${isEN?'Critical angle (n₁ < n₂)':'Angle limite (n₁ < n₂)'}</div>
      ${C.formula('sin(l) = n₁ / n₂', 'ar-l1', isEN?'Critical angle of refraction':'Angle limite de réfraction')}
    </div>
    <div class="card card--amber mb-0">
      <div class="card-label">${isEN?'Total reflection (n₁ > n₂)':'Réflexion totale (n₁ > n₂)'}</div>
      ${C.formula('sin(l) = n₂/n₁ &nbsp;·&nbsp; si i > l → R.T. !', 'ar-l2', isEN?'Total reflection condition':'Réflexion totale sin(l)=n₂/n₁')}
    </div>
  </div>
  ${C.alert('danger','⚠️', isEN
    ? '<strong>TRAP:</strong> Total reflection ONLY dense→less dense (n₁>n₂). If reversed (n₁<n₂): impossible!'
    : '<strong>PIÈGE :</strong> Réflexion totale UNIQUEMENT dense → moins dense (n₁>n₂). En sens inverse (n₁<n₂): impossible !')}

  ${C.sectionTitle(isEN?'3. Optical Systems Table':'3. Tableau des Systèmes Optiques')}
  <div class="card">
    <table class="tbl">
      <thead><tr><th>${isEN?'System':'Système'}</th><th>${isEN?'Key formula':'Formule clé'}</th><th>${isEN?'Property':'Propriété'}</th><th>Exam</th></tr></thead>
      <tbody>
        <tr><td>${isEN?'Flat diopter':'Dioptre plan'}</td><td><code>OA/n₁ = OA'/n₂</code></td><td>${isEN?'Real obj → virtual image':'Objet réel → image virtuelle'}</td><td><span class="badge badge--exam">★★★</span></td></tr>
        <tr><td>${isEN?'Parallel plate':'Lame parallèle'}</td><td><code>d = e(1 − n'/n)</code></td><td>${isEN?'Emergent ray PARALLEL':'Rayon émergent PARALLÈLE'}</td><td><span class="badge badge--exam">★★★</span></td></tr>
        <tr><td>${isEN?'Prism':'Prisme'}</td><td><code>D = i+i'−A ; A = r+r'</code></td><td>${isEN?'Deviation + dispersion':'Déviation + dispersion'}</td><td><span class="badge badge--exam">★★★</span></td></tr>
        <tr><td>${isEN?'Thin lens':'Lentille mince'}</td><td><code>1/OA'−1/OA = 1/f'</code></td><td>${isEN?"Converging f'>0; Diverging f'<0":"Convergente f'>0 ; Divergente f'<0"}</td><td><span class="badge badge--priority">★★☆</span></td></tr>
      </tbody>
    </table>
  </div>

  ${C.sectionTitle(isEN?'4. The Prism':'4. Le Prisme', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="card">
    <div class="card-label">${isEN?'4 fundamental equations':'4 équations fondamentales'}</div>
    ${C.formula('Face 1 : sin(i) = n · sin(r)', 'ar-p1', isEN?'Prism face 1':'Prisme face 1')}
    ${C.formula("Face 2 : n · sin(r') = sin(i')", 'ar-p2', isEN?'Prism face 2':'Prisme face 2')}
    ${C.formula("Géométrie : A = r + r'", 'ar-p3', isEN?'Geometric constraint: A=r+r\'':'Contrainte géométrique A=r+r\'')}
    ${C.formula("Déviation : D = (i + i') − A", 'ar-p4', isEN?'Deviation angle prism':'Angle déviation prisme')}
    <div class="card-label mt-12">${isEN?'Minimum deviation Dₘ':'Minimum de déviation Dₘ'}</div>
    ${C.formula('n = sin((Dₘ + A)/2) / sin(A/2)', 'ar-dm', isEN?'Index at minimum deviation':'Indice au minimum de déviation')}
    ${C.alert('info','💡', isEN
      ? "At minimum Dₘ: i = i' and r = r' = A/2. Internal ray parallel to base."
      : "Au minimum Dₘ : i = i' et r = r' = A/2. Rayon interne parallèle à la base.")}
    <div class="card-label mt-12">${isEN?'Emergence conditions':'Conditions d\'émergence'}</div>
    <p class="text-body">${isEN
      ? '1st condition: A ≤ 2·arcsin(1/n). 2nd condition: i ≥ arcsin(n·sin(A−l)) — minimum incidence angle for emergence.'
      : '1ère condition : A ≤ 2·arcsin(1/n). 2ème condition : i ≥ arcsin(n·sin(A−l)) — angle d\'incidence minimum pour que la lumière sorte.'}</p>
    ${C.formula('i_min = arcsin(n · sin(A − l))', 'ar-imin', isEN?'Minimum incidence angle for emergence':'Angle incidence minimum émergence')}
    <div class="card-label mt-12">${isEN?'Reversibility principle':'Principe du retour inverse'}</div>
    ${C.alert('success','💡', isEN
      ? 'Reversing the propagation direction: ray supports are identical. Light path is reversible.'
      : 'En inversant la direction de propagation : les supports des rayons sont identiques. Le chemin de la lumière est réversible.')}
  </div>

  ${C.sectionTitle(isEN?'5. Parallel-Face Plate':'5. Lame à Faces Parallèles')}
  <div class="card">
    <div class="grid-2">
      <div>
        <div class="card-label">${isEN?'Lateral displacement d₁':'Déplacement latéral d₁'}</div>
        ${C.formula("d₁ = e · sin(i−r) / cos(r)", 'ar-lame1', isEN?'Lateral displacement parallel plate':'Déplacement latéral lame')}
      </div>
      <div>
        <div class="card-label">${isEN?'Apparent shortening d':'Rapprochement apparent d'}</div>
        ${C.formula("d = e · (1 − n'/n)", 'ar-lame2', isEN?'Apparent shortening parallel plate':'Rapprochement apparent lame')}
      </div>
    </div>
    ${C.alert('danger','⚠️', isEN
      ? "<strong>KEY RULE:</strong> Emergent ray PARALLEL to incident (i'=i). Zero angular deviation. Only lateral translation d₁."
      : "<strong>RÈGLE CLÉ :</strong> Rayon émergent PARALLÈLE à l'incident (i'=i). Zéro déviation angulaire. Uniquement translation d₁.")}
    <div class="card-label mt-12">${isEN?'Case: n\' < n (e.g. air in glass)':'Cas pratique : n\' < n (ex: air dans verre)'}</div>
    <p class="text-body">${isEN
      ? 'd > 0 → apparent shortening (object seems closer). If n\' > n: d < 0 → apparent receding.'
      : 'd > 0 → rapprochement (objet paraît plus proche). Si n\' > n : d < 0 → éloignement apparent.'}</p>
  </div>

  ${C.sectionTitle(isEN?'6. Flat Diopter & Thin Lenses':'6. Dioptre Plan & Lentilles Minces')}
  <div class="card">
    <div class="card-label">${isEN?'Flat diopter':'Dioptre plan'}</div>
    ${C.formula("OA / n₁ = OA' / n₂", 'ar-diop', isEN?'Flat diopter (OA<0 real object)':'Dioptre plan (OA<0 objet réel)')}
    ${C.alert('warn','⚠️', isEN
      ? 'OA < 0 for real object on the left. OA\' is the image position. Virtual image on same side as object.'
      : 'OA < 0 pour objet réel à gauche. OA\' est la position de l\'image. Image virtuelle du côté de l\'objet.')}
    <div class="card-label mt-12">${isEN?'Thin lens (Gauss)':'Lentille mince (Gauss)'}</div>
    ${C.formula("1/OA' − 1/OA = 1/f' = V &nbsp;&nbsp; γ = OA'/OA", 'ar-lens', isEN?'Conjugation formula thin lens':'Formule conjugaison lentille mince')}
    <table class="tbl mt-8">
      <thead><tr><th>${isEN?'Type':'Type'}</th><th>f'</th><th>V</th><th>${isEN?'Image at ∞':'Image à ∞'}</th></tr></thead>
      <tbody>
        <tr><td style="color:var(--green);font-weight:700">${isEN?'Converging':'Convergente'}</td><td>&gt;0</td><td>&gt;0</td><td>${isEN?'Real at F\'':'Réelle en F\''}</td></tr>
        <tr><td style="color:var(--red);font-weight:700">${isEN?'Diverging':'Divergente'}</td><td>&lt;0</td><td>&lt;0</td><td>${isEN?'Virtual at F\'':'Virtuelle en F\''}</td></tr>
      </tbody>
    </table>
    <div class="card-label mt-12">${isEN?'Top 5 formulas — must memorize':'Top 5 formules — à mémoriser absolument'}</div>
    <table class="tbl">
      <thead><tr><th>#</th><th>${isEN?'Formula':'Formule'}</th><th>${isEN?'Usage':'Usage'}</th></tr></thead>
      <tbody>
        <tr><td>1</td><td><code>n₁sinᵢ = n₂sinᵣ</code></td><td>${isEN?'Refraction':'Réfraction'}</td></tr>
        <tr><td>2</td><td><code>sinl = n₂/n₁</code></td><td>${isEN?'Total reflection':'Réfl. totale'}</td></tr>
        <tr><td>3</td><td><code>n = sin((Dₘ+A)/2)/sin(A/2)</code></td><td>${isEN?'Prism min deviation':'Prisme Dₘ'}</td></tr>
        <tr><td>4</td><td><code>d₁ = e·sin(i−r)/cosr</code></td><td>${isEN?'Plate displacement':'Lame d₁'}</td></tr>
        <tr><td>5</td><td><code>1/OA' − 1/OA = 1/f'</code></td><td>${isEN?'Thin lens':'Lentille'}</td></tr>
      </tbody>
    </table>
  </div>`;
  initExplainButtons(el);
}

/* ══════════════════════════════════════════
   RAYONNEMENT CONTENT — Full course
══════════════════════════════════════════ */
function renderRayonnement() {
  const el = document.getElementById('rayonnement-content');
  const isEN = Lang.get() === 'en';

  el.innerHTML = `
  ${C.sectionTitle(isEN?'1. Electromagnetic Waves':'1. Ondes Électromagnétiques')}
  <div class="card card--blue">
    <div class="card-label">${isEN?'Fundamental relations':'Relations fondamentales'}</div>
    ${C.formula('E = h · ν = h · c / λ', 'ar-hv', isEN?'Photon energy E=hν=hc/λ':'Énergie photon E=hν=hc/λ')}
    ${C.formula('c = λ · ν &nbsp;&nbsp; T = 1/ν &nbsp;&nbsp; v = c/n', 'ar-rel', isEN?'EM wave relations':'Relations OEM c=λν, T=1/ν')}
    <div class="card-label mt-12">${isEN?'EM Spectrum':'Spectre Électromagnétique'}</div>
    <table class="tbl">
      <thead><tr><th>${isEN?'Radiation':'Rayonnement'}</th><th>λ (${isEN?'approx.':'approx.'})</th><th>${isEN?'Ionizing?':'Ionisant ?'}</th><th>${isEN?'Application':'Application'}</th></tr></thead>
      <tbody>
        <tr><td style="color:var(--red);font-weight:700">γ</td><td><code>&lt;0.01Å</code></td><td><span class="badge badge--exam">${isEN?'Yes★★★':'Oui★★★'}</span></td><td>${isEN?'Radiotherapy':'Radiothérapie'}</td></tr>
        <tr><td style="color:var(--amber);font-weight:700">${isEN?'X-rays':'Rayons X'}</td><td><code>0.01–100Å</code></td><td><span class="badge badge--exam">${isEN?'Yes★★★':'Oui★★★'}</span></td><td>${isEN?'Radiography':'Radiographie'}</td></tr>
        <tr><td>UV</td><td><code>10–400nm</code></td><td><span class="badge badge--ok">${isEN?'Partial':'Partiel'}</span></td><td>${isEN?'Sterilization':'Stérilisation'}</td></tr>
        <tr><td style="color:var(--green);font-weight:700">${isEN?'Visible':'Visible'}</td><td><code>400–800nm</code></td><td><span class="tag-f">${isEN?'No':'Non'}</span></td><td>${isEN?'Ophthalmology':'Ophtalmologie'}</td></tr>
        <tr><td>IR</td><td><code>0.8–1000μm</code></td><td><span class="tag-f">${isEN?'No':'Non'}</span></td><td>${isEN?'Thermography':'Thermographie'}</td></tr>
        <tr><td>${isEN?'Microwaves':'Micro-ondes'}</td><td><code>mm–cm</code></td><td><span class="tag-f">${isEN?'No':'Non'}</span></td><td>${isEN?'Radar, microwave':'Radar, four micro-ondes'}</td></tr>
      </tbody>
    </table>
    ${C.alert('warn','⚡', isEN
      ? '<strong>Biological ionization threshold:</strong> 13.6 eV (H ionization energy). E > 13.6 eV → ionizing. Visible light (E≈2eV) is NOT ionizing.'
      : '<strong>Seuil ionisation biologique :</strong> 13.6 eV (énergie ionisation H). E > 13.6 eV → ionisant. La lumière visible (E≈2eV) est NON ionisante.')}
    <div class="card-label mt-12">${isEN?'Ionizing vs Non-ionizing':'Classification ionisant / non-ionisant'}</div>
    <table class="tbl">
      <thead><tr><th>${isEN?'Category':'Nature'}</th><th>${isEN?'Condition':'Condition'}</th><th>${isEN?'Examples':'Exemples'}</th></tr></thead>
      <tbody>
        <tr><td style="color:var(--red)">${isEN?'Ionizing':'Ionisant'}</td><td>E &gt; 13.6 eV</td><td>γ, RX, α, β, UV</td></tr>
        <tr><td style="color:var(--green)">${isEN?'Non-ionizing':'Non ionisant'}</td><td>E &lt; 13.6 eV</td><td>${isEN?'Visible, IR, Micro-waves':'Visible, IR, Ondes radio'}</td></tr>
      </tbody>
    </table>
  </div>

  ${C.sectionTitle(isEN?'2. X-Rays — Röntgen Tube (1895)':'2. Rayons X — Tube de Röntgen (1895)', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="card">
    ${C.formula('Pₑ = U · I &nbsp;|&nbsp; Pᵣ = η · Pₑ &nbsp;|&nbsp; PJ = Pₑ − Pᵣ', 'ar-rx1', isEN?'X-ray tube: Pe=UI, Pr=η·Pe, PJ heat':'Tube RX: Pe=UI, Pr=η·Pe, PJ chaleur')}
    ${C.formula('λ_min = h · c / (e · U)', 'ar-rx2', isEN?'Minimum X-ray wavelength':'Longueur d\'onde minimale RX')}
    ${C.alert('danger','⚠️', isEN
      ? '<strong>TRAP:</strong> λ_min depends ONLY on U (voltage). Increasing I increases photon count but NOT max energy! η ≈ 1% → 99% heat.'
      : '<strong>PIÈGE :</strong> λ_min dépend UNIQUEMENT de U (tension). Augmenter I → plus de photons, PAS d\'énergie max supérieure ! η ≈ 1% → 99% chaleur.')}
    <div class="card-label mt-12">Beer-Lambert</div>
    ${C.formula('I(x) = I₀ · e^(−μx) &nbsp;&nbsp; μ_lin = μ_mass × ρ', 'ar-bl', isEN?'Beer-Lambert X-ray attenuation':'Beer-Lambert atténuation RX')}
    ${C.formula('x½ = ln(2) / μ = 0.693 / μ', 'ar-bl2', isEN?'Half-value layer (HVL)':'Couche demi-valeur (CDV)')}
    ${C.alert('warn','💡', isEN
      ? 'μ_linear = μ_mass × ρ. Never forget to multiply by density ρ when μ_mass is given!'
      : 'μ_linéaire = μ_massique × ρ. Ne jamais oublier de multiplier par la densité ρ si μ_massique est donné !')}
  </div>

  ${C.sectionTitle(isEN?'3. Nuclear Structure':'3. Structure Nucléaire')}
  <div class="card">
    ${C.formula('ᴬ𝗭X : A = Z + N', 'ar-nuc', isEN?'Nuclear notation ᴬ𝗭X':'Notation nucléaire ᴬ𝗭X')}
    <div class="grid-2 mt-8">
      <div>
        <div class="card-label">${isEN?'Particle masses':'Masses des particules'}</div>
        <table class="tbl">
          <tr><td>mₚ (${isEN?'proton':'proton'})</td><td><code>1.6742×10⁻²⁷kg</code></td></tr>
          <tr><td>mₙ (${isEN?'neutron':'neutron'})</td><td><code>1.6726×10⁻²⁷kg</code></td></tr>
          <tr><td>mₑ (${isEN?'electron':'électron'})</td><td><code>9.109×10⁻³¹kg</code></td></tr>
          <tr><td>1 u.m.a</td><td><code>1.66×10⁻²⁷kg</code></td></tr>
        </table>
      </div>
      <div>
        <div class="card-label">${isEN?'Nuclear families':'Familles nucléaires'}</div>
        <table class="tbl">
          <thead><tr><th>${isEN?'Name':'Nom'}</th><th>${isEN?'Same':'Même'}</th><th>${isEN?'Example':'Exemple'}</th></tr></thead>
          <tbody>
            <tr><td>${isEN?'Isotopes':'Isotopes'}</td><td>Z</td><td>¹H,²H,³H</td></tr>
            <tr><td>${isEN?'Isobars':'Isobares'}</td><td>A</td><td>¹⁴C,¹⁴N</td></tr>
            <tr><td>${isEN?'Isotones':'Isotones'}</td><td>N</td><td>³H,⁴He</td></tr>
            <tr><td>${isEN?'Isomers':'Isomères'}</td><td>Z+A</td><td>⁸⁰Br</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  ${C.sectionTitle(isEN?'4. Radioactivity':'4. Radioactivité', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="card">
    <table class="tbl">
      <thead><tr><th>${isEN?'Type':'Type'}</th><th>${isEN?'Particle':'Particule'}</th><th>ΔZ</th><th>ΔA</th><th>${isEN?'Condition':'Condition'}</th></tr></thead>
      <tbody>
        <tr><td style="color:var(--amber);font-weight:700">α</td><td><code>⁴₂He</code></td><td style="color:var(--red)">Z−2</td><td style="color:var(--red)">A−4</td><td>Z&gt;82</td></tr>
        <tr><td style="color:var(--cyan);font-weight:700">β⁻</td><td><code>e⁻+ν̄</code></td><td style="color:var(--green)">Z+1</td><td>${isEN?'unchanged':'inchangé'}</td><td>${isEN?'Excess neutrons':'Excès neutrons'}</td></tr>
        <tr><td style="color:var(--green);font-weight:700">β⁺</td><td><code>e⁺+ν</code></td><td style="color:var(--red)">Z−1</td><td>${isEN?'unchanged':'inchangé'}</td><td>${isEN?'Excess protons':'Excès protons'}</td></tr>
        <tr><td style="color:var(--purple);font-weight:700">γ</td><td><code>Photon λ&lt;1Å</code></td><td>∅</td><td>∅</td><td>${isEN?'Nuclear de-excitation':'Désexcitation'}</td></tr>
        <tr><td style="color:var(--teal);font-weight:700">CE</td><td><code>e⁻ capturé</code></td><td style="color:var(--red)">Z−1</td><td>${isEN?'unchanged':'inchangé'}</td><td>${isEN?'Electron capture':'Capture électronique'}</td></tr>
      </tbody>
    </table>
  </div>

  ${C.sectionTitle(isEN?'5. Radioactive Decay':'5. Décroissance Radioactive', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="card card--amber">
    ${C.formula('N(t) = N₀ · e^(−λ · t)', 'ar-dec', isEN?'Radioactive decay law':'Loi décroissance radioactive')}
    ${C.formula('T½ = ln(2)/λ = 0.693/λ', 'ar-t12', isEN?'Half-life period':'Période demi-vie')}
    ${C.formula('N(n · T½) = N₀ / 2ⁿ &nbsp;← méthode rapide !', 'ar-2n', isEN?'N=N₀/2ⁿ after n half-lives (FAST method)':'N=N₀/2ⁿ après n demi-vies (méthode rapide)')}
    ${C.formula('Activité : A(t) = λ · N(t) &nbsp;[Bq = s⁻¹]', 'ar-act', isEN?'Radioactivity in Becquerels':'Activité radioactive en Becquerels')}
    ${C.alert('success','⚡', isEN
      ? '<strong>Tip:</strong> If t is a multiple of T½, use N=N₀/2ⁿ directly. Example: t=3T½ → N=N₀/8.'
      : '<strong>Astuce :</strong> Si t multiple de T½, utiliser N=N₀/2ⁿ directement. Exemple: t=3T½ → N=N₀/8.')}
  </div>

  ${C.sectionTitle(isEN?'6. De Broglie — Wave-Particle Duality':'6. Dualité Onde-Corpuscule — De Broglie', isEN?'🔴 EXAM PRIORITY':'🔴 EXAM PRIORITAIRE')}
  <div class="card card--purple">
    ${C.formula('λ = h / p = h / (m · v)', 'ar-db', isEN?'De Broglie λ=h/p=h/(mv)':'De Broglie λ=h/p=h/(mv)')}
    ${C.formula('Électron sous U : λ = h / √(2 · mₑ · e · U)', 'ar-db2', isEN?'De Broglie for electron under voltage U':'De Broglie électron sous tension U')}
    ${C.formula('Avec Ec : λ = h / √(2 · m · Ec)', 'ar-db3', isEN?'De Broglie with kinetic energy Ec':'De Broglie avec énergie cinétique Ec')}
    <table class="tbl mt-8">
      <thead><tr><th>${isEN?'Object':'Objet'}</th><th>λ</th><th>${isEN?'Domain':'Domaine'}</th><th>${isEN?'Detectable':'Détectable'}</th></tr></thead>
      <tbody>
        <tr><td>${isEN?'Bullet (1g,500m/s)':'Balle (1g,500m/s)'}</td><td><code>≈10⁻³³m</code></td><td>—</td><td><span class="tag-f">${isEN?'No':'Non'}</span></td></tr>
        <tr><td>${isEN?'Dust (10⁻¹⁵kg,1mm/s)':'Poussière (10⁻¹⁵kg,1mm/s)'}</td><td><code>≈6×10⁻¹⁶m</code></td><td>—</td><td><span class="tag-f">${isEN?'No':'Non'}</span></td></tr>
        <tr><td>${isEN?'Electron 100V':'Électron 100V'}</td><td><code>≈1.23Å</code></td><td>${isEN?'X-rays':'Rayons X'}</td><td><span class="tag-v">${isEN?'Yes':'Oui'}</span></td></tr>
        <tr><td>${isEN?'Electron 24.6eV':'Électron 24.6eV'}</td><td><code>≈2.5Å</code></td><td>${isEN?'X-rays':'Rayons X'}</td><td><span class="tag-v">${isEN?'Yes':'Oui'}</span></td></tr>
        <tr><td>${isEN?'α particle 7.7MeV':'Particule α 7.7MeV'}</td><td><code>≈5×10⁻¹⁵m</code></td><td>${isEN?'Nuclear':'Nucléaire'}</td><td><span class="tag-f">${isEN?'Limited':'Limité'}</span></td></tr>
      </tbody>
    </table>
  </div>

  ${C.sectionTitle(isEN?'7. Physical Constants':'7. Constantes Physiques')}
  <div class="card">
    <div class="grid-2">
      <div>
        <div class="card-label">${isEN?'Fundamental constants':'Constantes fondamentales'}</div>
        <table class="tbl">
          <tr><td>h (${isEN?'Planck':'Planck'})</td><td><code>6.62×10⁻³⁴J·s</code></td></tr>
          <tr><td>c (${isEN?'light speed':'vitesse lumière'})</td><td><code>3×10⁸m/s</code></td></tr>
          <tr><td>e (${isEN?'charge':'charge'})</td><td><code>1.6×10⁻¹⁹C</code></td></tr>
          <tr><td>mₑ (${isEN?'electron':'électron'})</td><td><code>9.109×10⁻³¹kg</code></td></tr>
        </table>
      </div>
      <div>
        <div class="card-label">${isEN?'Energy conversions':'Conversions d\'énergie'}</div>
        <table class="tbl">
          <tr><td>1 eV</td><td><code>1.6×10⁻¹⁹J</code></td></tr>
          <tr><td>1 keV</td><td><code>1.6×10⁻¹⁶J</code></td></tr>
          <tr><td>1 MeV</td><td><code>1.6×10⁻¹³J</code></td></tr>
          <tr><td>${isEN?'Ionization threshold':'Seuil ionisation'}</td><td><code>13.6 eV</code></td></tr>
        </table>
      </div>
    </div>
  </div>`;
  initExplainButtons(el);
}

/* ══════════════════════════════════════════
   MÉTHODES CONTENT — 7 complete methods
══════════════════════════════════════════ */
function renderMethodes() {
  const el = document.getElementById('methodes-content');
  const isEN = Lang.get() === 'en';
  const ex = Lang.t('meth.example');

  const methods = isEN ? [
    { title:'Method 1 — Determine n by Descartes', color:'blue', badge:'★★★ Very frequent',
      steps:['Identify i (incidence) and r (refraction) from the NORMAL','Apply n₁·sin(i)=n₂·sin(r). Air→medium: 1·sin(i)=n·sin(r)','Isolate n=sin(i)/sin(r). Verify n≥1!','Calculate in degree mode with calculator'],
      example:'TD4 Ex1: i=45°, r=30° → n=sin(45°)/sin(30°)=√2≈1.41' },
    { title:'Method 2 — Total Internal Reflection', color:'green', badge:'★★★ VERY FREQUENT',
      steps:['Verify n₁>n₂ (dense→less dense, MANDATORY)','Calculate critical angle: sin(l)=n₂/n₁ → l=arcsin(n₂/n₁)','If i>l → total reflection. If i<l → normal refraction'],
      example:'TD4 face AB: sin(l)=1/√2 → l=45°. i\'₁=60° > 45° → TOTAL REFLECTION!' },
    { title:'Method 3 — Prism Exercise (5 steps)', color:'amber', badge:'★★★',
      steps:['Write: sin(i)=nsin(r), nsin(r\')=sin(i\'), A=r+r\', D=i+i\'−A','If minimum deviation: i=i\' therefore r=r\'=A/2','Calculate r face 1: sin(r)=sin(i)/n','r\'=A-r, then i\' face 2: sin(i\')=n·sin(r\')','D=i+i\'−A. Check emergence conditions if requested'],
      example:'A=60°, n=1.5, i=45° → r=28.1°, r\'=31.9°, i\'=49.2° → D=34.2°' },
    { title:'Method 4 — X-Ray Tube', color:'cyan', badge:'',
      steps:['Pₑ=U×I (U in Volts, I in Amperes)','Pᵣ=η×Pₑ (η=efficiency, ex: 1%=0.01)','PJ=Pₑ−Pᵣ (heat power)','λ_min=hc/(eU) → convert to nm if needed. WARNING: λ_min does NOT depend on I!'],
      example:'U=50kV, I=40mA, η=1% → Pₑ=2000W, Pᵣ=20W, PJ=1980W, λ_min=0.025nm' },
    { title:'Method 5 — De Broglie Wavelength', color:'purple', badge:'',
      steps:['Identify particle and kinetic energy in JOULES!','If eV: Ec(J)=Ec(eV)×1.6×10⁻¹⁹ | If MeV: Ec(J)=Ec(MeV)×1.6×10⁻¹³','For electron under U: Ec=eU=1.6×10⁻¹⁹×U','λ=h/√(2mEc) in meters → convert to Å (×10¹⁰)','Compare: 0.01–100Å → X-ray domain'],
      example:'Electron U=100V → Ec=1.6×10⁻¹⁷J → λ≈1.23Å → X-ray domain!' },
    { title:'Method 6 — Radioactive Decay', color:'red', badge:'',
      steps:['λ=0.693/T½ (T½ and t in same units!)','If t=n×T½: fast method → N=N₀/2ⁿ','Activity: A(t)=λ·N(t)','If N₀ given as mass m: N₀=(m×Nₐ)/M_molar'],
      example:'T½=2h, N₀=10⁶, t=6h → n=3 → N=10⁶/8=125,000' },
    { title:'Method 7 — Visible radiation + color', color:'green', badge:'',
      steps:['ν=1/T → calculate frequency','λ₀=c/ν (wavelength in vacuum, in nm)','400nm<λ<800nm → visible. Identify color','In medium n: λ=λ₀/n; v=c/n. FREQUENCY never changes!'],
      example:'T=1.8×10⁻¹⁵s → ν=5.55×10¹⁴Hz → λ₀=540nm → GREEN' },
  ] : [
    { title:'Méthode 1 — Déterminer n par Descartes', color:'blue', badge:'★★★ Très fréquent',
      steps:['Identifier i (incidence) et r (réfraction) par rapport à la NORMALE','Appliquer n₁·sin(i)=n₂·sin(r). Si air→milieu: 1·sin(i)=n·sin(r)','Isoler n=sin(i)/sin(r). Vérifier n≥1 !','Calculer en mode degrés avec calculatrice'],
      example:'TD4 Ex1: i=45°, r=30° → n=sin(45°)/sin(30°)=√2≈1.41' },
    { title:'Méthode 2 — Réflexion Totale', color:'green', badge:'★★★ TRÈS FRÉQUENT',
      steps:['Vérifier n₁>n₂ (milieu dense→moins dense, OBLIGATOIRE)','Calculer angle limite: sin(l)=n₂/n₁ → l=arcsin(n₂/n₁)','Si i>l → réflexion totale. Si i<l → réfraction normale'],
      example:'TD4 face AB: sin(l)=1/√2 → l=45°. i\'₁=60° > 45° → RÉFLEXION TOTALE !' },
    { title:'Méthode 3 — Exercice Prisme (5 étapes)', color:'amber', badge:'★★★',
      steps:['Écrire: sin(i)=nsin(r), nsin(r\')=sin(i\'), A=r+r\', D=i+i\'−A','Si minimum déviation: i=i\' donc r=r\'=A/2','Calculer r face 1: sin(r)=sin(i)/n','r\'=A-r, puis i\' face 2: sin(i\')=n·sin(r\')','D=i+i\'−A. Vérifier conditions émergence si demandé'],
      example:'A=60°, n=1.5, i=45° → r=28.1°, r\'=31.9°, i\'=49.2° → D=34.2°' },
    { title:'Méthode 4 — Tube à Rayons X', color:'cyan', badge:'',
      steps:['Pₑ=U×I (U en Volts, I en Ampères)','Pᵣ=η×Pₑ (η=rendement, ex: 1%=0.01)','PJ=Pₑ−Pᵣ (puissance chaleur)','λ_min=hc/(eU) → convertir en nm si besoin. ATTENTION: λ_min NE dépend PAS de I !'],
      example:'U=50kV, I=40mA, η=1% → Pₑ=2000W, Pᵣ=20W, PJ=1980W, λ_min=0.025nm' },
    { title:'Méthode 5 — Longueur de De Broglie', color:'purple', badge:'',
      steps:['Identifier la particule et son énergie cinétique en JOULES !','Si eV: Ec(J)=Ec(eV)×1.6×10⁻¹⁹ | Si MeV: Ec(J)=Ec(MeV)×1.6×10⁻¹³','Pour électron sous U: Ec=eU=1.6×10⁻¹⁹×U','λ=h/√(2mEc) en mètres → convertir en Å (×10¹⁰)','Comparer: 0.01–100Å → domaine rayons X'],
      example:'Électron U=100V → Ec=1.6×10⁻¹⁷J → λ≈1.23Å → domaine RX !' },
    { title:'Méthode 6 — Décroissance Radioactive', color:'red', badge:'',
      steps:['λ=0.693/T½ (T½ et t dans mêmes unités !)','Si t=n×T½: méthode rapide → N=N₀/2ⁿ','Activité: A(t)=λ·N(t)','Si N₀ en masse m: N₀=(m×Nₐ)/M_molaire'],
      example:'T½=2h, N₀=10⁶, t=6h → n=3 → N=10⁶/8=125 000' },
    { title:'Méthode 7 — Radiation visible + couleur', color:'green', badge:'',
      steps:['ν=1/T → calculer la fréquence','λ₀=c/ν (longueur d\'onde dans le vide, en nm)','400nm<λ<800nm → visible. Identifier la couleur selon λ','Dans milieu n: λ=λ₀/n; v=c/n. La FRÉQUENCE ne change JAMAIS !'],
      example:'T=1.8×10⁻¹⁵s → ν=5.55×10¹⁴Hz → λ₀=540nm → VERT' },
  ];

  el.innerHTML = methods.map(m => `
    <div class="card card--${m.color} mb-16">
      <div class="flex items-center justify-between flex-wrap gap-8 mb-8">
        <div class="card-label" style="margin:0">${m.title}</div>
        ${m.badge?`<span class="badge badge--exam">${m.badge}</span>`:''}
      </div>
      ${m.steps.map((s,i) => C.step(i+1, s)).join('')}
      ${C.alert('success','✅',`<strong>${ex} :</strong> ${m.example}`)}
    </div>`).join('');
}

/* ══════════════════════════════════════════
   PIÈGES CONTENT — 16 complete traps
══════════════════════════════════════════ */
function renderPieges() {
  const el = document.getElementById('pieges-content');
  const isEN = Lang.get() === 'en';

  const pO = isEN ? [
    'Measuring angles from the <strong>SURFACE</strong> instead of the <strong>NORMAL</strong>. Always draw the normal first!',
    'Confusing n₁ and n₂. n₁ = medium the ray comes FROM.',
    'Total reflection in both directions. NO: ONLY dense→less dense.',
    'Forgetting <strong>A=r+r\'</strong> in the prism. System underdetermined without it.',
    'Believing the parallel plate deviates the ray. NO: i\'=i. Only lateral translation d₁.',
    'Flat diopter: OA<0 for real object on the left. Algebraic sign mandatory.',
    'D ≠ refraction angle at 1st face. D = angle between EXTENDED incident ray and emergent ray.',
    'Minimum deviation: forgetting r=r\'=A/2 (perfect symmetry condition).',
  ] : [
    'Mesurer les angles par rapport à la <strong>SURFACE</strong> au lieu de la <strong>NORMALE</strong>. Tracer toujours la normale d\'abord !',
    'Confondre n₁ et n₂. n₁ = milieu D\'OÙ vient le rayon.',
    'Réflexion totale dans les deux sens. NON : DENSE→MOINS DENSE uniquement.',
    'Oublier <strong>A=r+r\'</strong> dans le prisme. Système sous-déterminé sans ça.',
    'Croire que la lame à faces parallèles dévie le rayon. NON : i\'=i. Seulement translation d₁.',
    'Dioptre plan : OA<0 pour objet réel à gauche. Signe algébrique obligatoire.',
    'D ≠ angle de réfraction à la 1ère face. D = angle entre incident PROLONGÉ et rayon émergent.',
    'Minimum déviation : oublier que r=r\'=A/2 (condition de symétrie parfaite).',
  ];

  const pR = isEN ? [
    'λ_min depends ONLY on U. Increasing I → more photons, same max energy. Röntgen 1895, NOT Becquerel!',
    'De Broglie λ ≈ 1Å ≠ X-ray photon (same order but different nature: electron vs photon!).',
    'λ (radioactive decay constant, s⁻¹) ≠ λ (wavelength, m). Same symbol, completely different quantities!',
    'μ_linear = μ_mass × ρ. Always multiply by density ρ if μ_mass is given!',
    'α decay: Z−2 AND A−4. The daughter nucleus also loses 2 neutrons!',
    'γ decay: Z and A UNCHANGED. Only nuclear de-excitation, no change in nucleon count.',
    '1eV=1.6×10⁻¹⁹J, 1keV=10⁻¹⁶J, 1MeV=10⁻¹³J. Common error on powers of 10!',
    'X-rays discovered by <strong>RÖNTGEN</strong> (1895). Becquerel = radioactivity (1896). Curie = polonium/radium.',
  ] : [
    'λ_min dépend UNIQUEMENT de U. Augmenter I → plus de photons, même énergie max. Röntgen 1895, PAS Becquerel !',
    'λ De Broglie ≈ 1Å ≠ photon RX (même ordre mais nature différente : électron vs photon !).',
    'λ (constante radioactive s⁻¹) ≠ λ (longueur d\'onde m). Même symbole, grandeurs totalement différentes !',
    'μ_linéaire = μ_massique × ρ. Toujours multiplier par la densité ρ si μ_massique est donné !',
    'Désintégration α : Z−2 ET A−4. Le noyau fils perd aussi 2 neutrons !',
    'Désintégration γ : Z et A INCHANGÉS. Seulement désexcitation, pas de modification du noyau.',
    '1eV=1.6×10⁻¹⁹J, 1keV=10⁻¹⁶J, 1MeV=10⁻¹³J. Erreur fréquente sur les puissances de 10 !',
    'Rayons X découverts par <strong>RÖNTGEN</strong> (1895). Becquerel = radioactivité (1896). Curie = polonium/radium.',
  ];

  const vf = isEN ? [
    [false,'Magnetic field B is parallel to electric field E in an EM wave','B ⊥ E ⊥ propagation direction'],
    [true,'EM waves carry a quantum of energy called photon','E=hν (Einstein)'],
    [true,'A monochromatic EM wave has a single frequency','Definition of monochromatic radiation'],
    [false,'Speed of EM waves does not depend on medium','v=c/n, depends on index n'],
    [false,'X-rays have λ between 10¹² and 10⁸ m','10⁻¹² to 10⁻⁸ m (NEGATIVE powers!)'],
    [true,'Gamma rays are highly energetic and ionizing','Ionizing, very penetrating, nuclear radioactivity'],
    [false,'X-rays were discovered in 1895 by Becquerel','1895 = Röntgen (X-rays). Becquerel = radioactivity (1896)'],
    [false,'γ decay changes Z and A','Z and A UNCHANGED in γ decay — de-excitation only'],
    [true,'After 3 half-lives N₀/8 remains','N(3T½)=N₀/2³=N₀/8 ✓'],
    [false,'The color of light changes when entering a medium','Frequency (and color) is constant — only λ changes'],
  ] : [
    [false,'Le champ B est parallèle au champ E dans une OEM','B ⊥ E ⊥ direction propagation'],
    [true,'Les OEM transportent un quantum d\'énergie = photon','E=hν (Einstein)'],
    [true,'Une OEM monochromatique présente une seule fréquence','Définition d\'une radiation monochromatique'],
    [false,'La vitesse OEM ne dépend pas du milieu','v=c/n, dépend de n'],
    [false,'Les RX ont λ entre 10¹² et 10⁸ m','10⁻¹² à 10⁻⁸ m (puissances NÉGATIVES !)'],
    [true,'Les rayons γ sont très énergétiques et ionisants','Ionisants, très pénétrants, radioactivité nucléaire'],
    [false,'Les RX découverts par Becquerel en 1895','Röntgen 1895. Becquerel=radioactivité 1896'],
    [false,'La désintégration γ change Z et A','Z et A INCHANGÉS en γ — désexcitation uniquement'],
    [true,'Après 3 T½ il reste N₀/8','N(3T½)=N₀/2³=N₀/8 ✓'],
    [false,'La couleur de la lumière change en entrant dans un milieu','La fréquence (et donc la couleur) est constante — seule λ change'],
  ];

  const T = isEN ? 'TRUE' : 'VRAI';
  const F = isEN ? 'FALSE' : 'FAUX';

  el.innerHTML = `
  <div class="card card--red">
    <div class="section-title" style="color:var(--red);margin-top:0">${isEN?'OPTICS — 8 traps':'OPTIQUE — 8 pièges'}</div>
    ${pO.map((p,i)=>C.alert('danger','⚠️',`<strong>${isEN?'Trap':'Piège'} ${i+1}:</strong> ${p}`)).join('')}
  </div>
  <div class="card card--amber mt-16">
    <div class="section-title" style="color:var(--amber);margin-top:0">${isEN?'RADIATION — 8 traps':'RAYONNEMENT — 8 pièges'}</div>
    ${pR.map((p,i)=>C.alert('warn','⚠️',`<strong>${isEN?'Trap':'Piège'} ${i+1}:</strong> ${p}`)).join('')}
  </div>
  <div class="card card--green mt-16">
    <div class="section-title" style="margin-top:0">${isEN?'True/False MCQ — EMD type':'QCM Vrai/Faux — type EMD'}</div>
    <table class="tbl">
      <thead><tr><th>#</th><th>${isEN?'Statement':'Affirmation'}</th><th>${isEN?'Answer':'Réponse'}</th><th>${isEN?'Justification':'Justification'}</th></tr></thead>
      <tbody>
        ${vf.map(([v,a,e],i)=>`<tr><td>${i+1}</td><td>${a}</td><td><span class="${v?'tag-v':'tag-f'}">${v?T:F}</span></td><td class="text-small">${e}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

/* ══════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════ */
const Dashboard = {
  refresh() {
    const errors    = State.get('errors') || [];
    const qcmCount  = State.get('qcmCount') || 0;
    const lastScore = State.get('lastScore') || 0;
    const T = k => Lang.t(k);

    document.getElementById('db-stats-grid').innerHTML =
      C.stat(qcmCount>0 ? lastScore+'%' : '—', T('dashboard.score'), 'var(--cyan)',
        qcmCount>0 ? (lastScore>=80?T('dashboard.excellent'):lastScore>=60?T('dashboard.good'):T('dashboard.review')) : T('dashboard.no_test')) +
      C.stat(errors.length, T('dashboard.errors'), 'var(--red)', T('dashboard.recorded')) +
      C.stat(qcmCount, T('dashboard.qcm'), 'var(--green)', T('dashboard.session')) +
      C.stat('2', T('dashboard.program'), 'var(--amber)', T('dashboard.optic_ray'));

    const recEl = document.getElementById('db-recommendations');
    if (!errors.length) {
      recEl.innerHTML = `<span class="text-small">${T('dashboard.no_data')}</span>`;
    } else {
      const tc = {};
      errors.forEach(e => tc[e.topic] = (tc[e.topic]||0)+1);
      const top = Object.entries(tc).sort((a,b)=>b[1]-a[1]).slice(0,3);
      recEl.innerHTML = top.map(([t]) =>
        `<span style="display:inline-block;margin:3px;padding:4px 12px;border-radius:20px;font-size:12px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:var(--red)">📌 ${t}</span>`
      ).join('');
    }

    if (errors.length > 0) {
      const tc = {};
      errors.forEach(e => tc[e.topic]=(tc[e.topic]||0)+1);
      const sorted = Object.entries(tc).sort((a,b)=>b[1]-a[1]).slice(0,4);
      const maxC = sorted[0][1];
      const colors = ['var(--red)','var(--amber)','var(--cyan)','var(--teal)'];
      document.getElementById('db-weak-list').innerHTML = sorted.map(([t,c],i)=>`
        <div class="progress-wrap">
          <div class="progress-label"><span>${t}</span><span style="color:${colors[i]};font-weight:600">${c} ${Lang.t('dashboard.errors').toLowerCase()}</span></div>
          <div class="progress-track"><div class="progress-fill" style="width:${Math.round(c/maxC*100)}%;background:${colors[i]}"></div></div>
        </div>`).join('');
      document.getElementById('db-weak-section').classList.remove('hidden');
    } else {
      document.getElementById('db-weak-section').classList.add('hidden');
    }

    const quickItems = [
      { page:'optique',     icon:'🔬', bg:'rgba(0,150,255,.14)',  lk:'quick.optic',  dk:'quick.optic_desc' },
      { page:'rayonnement', icon:'☢️', bg:'rgba(239,68,68,.14)',  lk:'quick.ray',    dk:'quick.ray_desc' },
      { page:'exam',        icon:'🎯', bg:'rgba(34,197,94,.14)',  lk:'quick.exam',   dk:'quick.exam_desc' },
      { page:'ia',          icon:'🤖', bg:'rgba(0,212,255,.14)',  lk:'quick.ia',     dk:'quick.ia_desc' },
      { page:'methodes',    icon:'🧩', bg:'rgba(245,158,11,.14)', lk:'quick.meth',   dk:'quick.meth_desc' },
      { page:'pieges',      icon:'🚨', bg:'rgba(239,68,68,.14)',  lk:'quick.trap',   dk:'quick.trap_desc' },
    ];
    document.getElementById('db-quick-grid').innerHTML = quickItems.map(it=>`
      <button class="quick-btn" data-goto="${it.page}">
        <div class="quick-btn-icon" style="background:${it.bg}">${it.icon}</div>
        <div>
          <div class="quick-btn-label">${Lang.t(it.lk)}</div>
          <div class="quick-btn-desc">${Lang.t(it.dk)}</div>
        </div>
      </button>`).join('');

    document.getElementById('db-quick-grid').querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', () => Router.go(btn.dataset.goto));
    });

    const priorities = Lang.get() === 'en'
      ? ['Snell-Descartes','Total Reflection','Prism','X-Ray Tube','Radioactivity α,β,γ','De Broglie','Decay N(t)','Beer-Lambert']
      : ['Loi de Descartes','Réflexion totale','Prisme','Rayons X','Radioactivité α,β,γ','De Broglie','Décroissance N(t)','Beer-Lambert'];
    document.getElementById('priority-badges').innerHTML = priorities.map(p =>
      `<span class="badge badge--exam" style="margin:3px">🔴 ${p}</span>`).join('');
  }
};

/* ══════════════════════════════════════════
   EXAM — Dynamic generation + Custom timer
══════════════════════════════════════════ */
const Exam = (() => {
  let _questions  = [];
  let _answers    = {};
  let _currentQ   = 0;
  let _timerMode  = 'off';
  let _timerInterval = null;
  let _timerRemaining = 0;
  let _timerTotal     = 0;
  let _globalMins = 40;
  let _perqSecs   = 120;
  let _qCount     = 20;

  // ── Timer ──────────────────────────────
  function _startTimer() {
    if (_timerMode === 'off') return;
    clearInterval(_timerInterval);
    _timerTotal = _timerMode === 'global' ? _globalMins * 60 : _perqSecs;
    _timerRemaining = _timerTotal;
    _updateTimerDisplay();
    document.getElementById('timer-display').classList.remove('hidden');
    _timerInterval = setInterval(_tickTimer, 1000);
  }
  function _resetPerQTimer() {
    if (_timerMode !== 'perq') return;
    clearInterval(_timerInterval);
    _timerRemaining = _timerTotal = _perqSecs;
    _timerInterval = setInterval(_tickTimer, 1000);
    _updateTimerDisplay();
  }
  function _stopTimer() { clearInterval(_timerInterval); _timerInterval = null; }
  function _tickTimer() {
    _timerRemaining = Math.max(0, _timerRemaining - 1);
    _updateTimerDisplay();
    if (_timerRemaining === 0) {
      _stopTimer();
      if (_timerMode === 'global') { _finishExam(); }
      else {
        if (_currentQ < _questions.length - 1) { _currentQ++; _renderCard(); _resetPerQTimer(); }
        else _finishExam();
      }
    }
  }
  function _updateTimerDisplay() {
    const m = Math.floor(_timerRemaining / 60).toString().padStart(2,'0');
    const s = (_timerRemaining % 60).toString().padStart(2,'0');
    document.getElementById('timer-text').textContent = `${m}:${s}`;
    const arc = document.getElementById('timer-arc');
    const ratio = _timerTotal > 0 ? _timerRemaining / _timerTotal : 1;
    arc.style.strokeDashoffset = 276.46 * (1 - ratio);
    arc.classList.remove('warning','danger');
    if (ratio < 0.15) arc.classList.add('danger');
    else if (ratio < 0.35) arc.classList.add('warning');
    const info = document.getElementById('timer-info');
    if (_timerMode === 'perq') info.textContent = `Q${_currentQ+1}/${_questions.length}`;
    else info.textContent = `${Math.ceil(_timerRemaining/60)} ${Lang.t('exam.minutes')}`;
  }

  // ── Card rendering ─────────────────────
  function _renderCard() {
    if (!_questions.length) return;
    const q = _questions[_currentQ];
    const total = _questions.length;
    const letters = ['A','B','C','D'];

    document.getElementById('qcm-progress-fill').style.width = `${((_currentQ+1)/total)*100}%`;
    document.getElementById('qcm-counter').textContent = `Q${_currentQ+1} / ${total}`;

    const answered = _answers[_currentQ] !== undefined;
    const optsHtml = q.opts.map((o,j) => {
      let cls = 'qcm-opt';
      if (answered) {
        if (j === q.ans) cls += ' correct';
        else if (_answers[_currentQ] === j) cls += ' wrong';
      } else if (_answers[_currentQ] === j) cls += ' selected';
      return `<button class="${cls}" data-oi="${j}" ${answered?'disabled':''}>
        <span class="qcm-opt-letter">${letters[j]}</span>
        ${o.replace(/^[A-D]\.\s*/,'').trim()}
      </button>`;
    }).join('');

    const feedbackHtml = answered ? `
      <div class="qcm-feedback">
        <div class="${_answers[_currentQ]===q.ans?'qcm-feedback-correct':'qcm-feedback-wrong'}">
          ${_answers[_currentQ]===q.ans ? Lang.t('exam.correct') : Lang.t('exam.incorrect')}
        </div>
        <div class="qcm-feedback-exp">💡 ${q.exp}</div>
      </div>` : '';

    document.getElementById('qcm-card-area').innerHTML = `
      <div class="qcm-single-card">
        <div class="qcm-single-header">
          <div class="qcm-single-num">Q${_currentQ+1}</div>
          <div class="qcm-single-q">${q.q}</div>
        </div>
        <div class="qcm-single-opts">${optsHtml}</div>
        ${feedbackHtml}
      </div>`;

    if (!answered) {
      document.querySelectorAll('.qcm-opt').forEach(btn => {
        btn.addEventListener('click', () => _selectAnswer(_currentQ, +btn.dataset.oi));
      });
    }

    const prev = document.getElementById('examPrevBtn');
    const next = document.getElementById('examNextBtn');
    const fin  = document.getElementById('examFinishBtn');
    prev.classList.toggle('hidden', _currentQ === 0);
    next.classList.toggle('hidden', _currentQ === total - 1);
    fin.classList.toggle('hidden', _currentQ !== total - 1);
  }

  function _selectAnswer(qi, oi) {
    _answers[qi] = oi;
    _renderCard();
    if (_timerMode === 'perq') _resetPerQTimer();
  }

  function _finishExam() {
    _stopTimer();
    let score = 0;
    const newErrors = [];
    _questions.forEach((q,i) => {
      const sel = _answers[i];
      if (sel === q.ans) { score++; }
      else {
        newErrors.push({
          topic: q.topic,
          question: q.q,
          correct: q.opts[q.ans],
          given: sel !== undefined ? q.opts[sel] : Lang.t('exam.no_answer'),
          source: 'QCM'
        });
      }
    });
    newErrors.forEach(e => State.push('errors', e));
    const pct = Math.round(score / _questions.length * 100);
    State.set('qcmCount', (State.get('qcmCount')||0) + 1);
    State.set('lastScore', pct);
    if (newErrors.length > 0) document.getElementById('badge-exam').style.display='inline-flex';

    document.getElementById('exam-area').classList.add('hidden');
    document.getElementById('timer-display').classList.add('hidden');
    const box = document.getElementById('score-box');
    box.classList.remove('hidden');
    document.getElementById('score-emoji').textContent = pct>=80?'🔥':pct>=60?'👍':'📚';
    document.getElementById('score-num').textContent = `${score}/${_questions.length}`;
    document.getElementById('score-label').textContent = `${pct}% — ${(score*.5).toFixed(1)} / 10 pts`;
    const bar = document.getElementById('score-bar');
    bar.style.width = pct+'%';
    bar.style.background = pct>=80?'var(--green)':pct>=60?'var(--amber)':'var(--red)';
    box.scrollIntoView({ behavior:'smooth' });
  }

  async function _start() {
    _answers = {};
    _currentQ = 0;
    _timerMode   = document.querySelector('input[name="timer-mode"]:checked')?.value || 'off';
    _globalMins  = parseInt(document.getElementById('timer-global-mins')?.value) || 40;
    _perqSecs    = parseInt(document.getElementById('timer-perq-secs')?.value) || 120;
    _qCount      = parseInt(document.getElementById('exam-qcount')?.value) || 20;

    // Show generating state
    document.getElementById('exam-controls').classList.add('hidden');
    document.getElementById('score-box').classList.add('hidden');
    document.getElementById('exam-area').classList.add('hidden');
    document.getElementById('exam-generating').classList.remove('hidden');
    document.getElementById('ai-error-analysis').classList.remove('show');

    // Generate questions dynamically
    try {
      _questions = await AI.generateExamQCM(_qCount, Lang.get());
    } catch {
      _questions = AI.getQCMFallback(_qCount);
    }

    document.getElementById('exam-generating').classList.add('hidden');
    document.getElementById('exam-area').classList.remove('hidden');
    _renderCard();
    _startTimer();
  }

  function _reset() {
    _stopTimer();
    _questions = [];
    _answers = {};
    _currentQ = 0;
    document.getElementById('exam-controls').classList.remove('hidden');
    document.getElementById('score-box').classList.add('hidden');
    document.getElementById('exam-area').classList.add('hidden');
    document.getElementById('timer-display').classList.add('hidden');
    document.getElementById('exam-generating').classList.add('hidden');
    document.getElementById('ai-error-analysis').classList.remove('show');
    document.getElementById('qcm-card-area').innerHTML = '';
  }

  async function _analyzeErrors() {
    const btn = document.getElementById('analyzeBtn');
    const box = document.getElementById('ai-error-analysis');
    const errors = (State.get('errors')||[]).slice(-12);
    if (!errors.length) {
      box.innerHTML = Lang.t('ai.no_errors'); box.classList.add('show'); return;
    }
    btn.disabled = true;
    box.innerHTML = `<span class="ai-response-label">${Lang.t('ai.analyze_label')}</span>${C.loading()}`;
    box.classList.add('show');
    try {
      const res = await AI.analyzeErrors(errors, Lang.get());
      box.innerHTML = `<span class="ai-response-label">${Lang.t('ai.analyze_label')}</span>${res.replace(/\n/g,'<br>')}`;
    } catch {
      box.innerHTML = `<span class="ai-response-label">${Lang.t('ai.analyze_label')}</span>${Lang.get()==='en'?'Connection error.':'Erreur de connexion.'} <button class="ai-retry-btn" id="examRetryBtn">↺</button>`;
      document.getElementById('examRetryBtn')?.addEventListener('click', () => { btn.disabled=false; _analyzeErrors(); });
    }
    btn.disabled = false;
  }

  function _initTimerControls() {
    document.querySelectorAll('input[name="timer-mode"]').forEach(radio => {
      radio.addEventListener('change', () => {
        document.getElementById('timer-duration-global').classList.toggle('hidden', radio.value !== 'global');
        document.getElementById('timer-duration-perq').classList.toggle('hidden', radio.value !== 'perq');
      });
    });
  }

  function init() {
    document.getElementById('examStartBtn').addEventListener('click', _start);
    document.getElementById('examResetBtn').addEventListener('click', _reset);
    document.getElementById('examNextBtn').addEventListener('click', () => {
      if (_currentQ < _questions.length-1) { _currentQ++; _renderCard(); if(_timerMode==='perq') _resetPerQTimer(); }
    });
    document.getElementById('examPrevBtn').addEventListener('click', () => {
      if (_currentQ > 0) { _currentQ--; _renderCard(); }
    });
    document.getElementById('examFinishBtn').addEventListener('click', _finishExam);
    document.getElementById('analyzeBtn').addEventListener('click', _analyzeErrors);
    _initTimerControls();
  }
  return { init };
})();

/* ══════════════════════════════════════════
   DIAGNOSTIC
══════════════════════════════════════════ */
const Diagnostic = (() => {
  const POOL = [
    {q:"La loi de Snell-Descartes s'écrit :",opts:["n₁·sin(r)=n₂·sin(i)","n₁·sin(i)=n₂·sin(r)","sin(i)/sin(r)=n₁+n₂","n₁·cos(i)=n₂·cos(r)"],ans:1,topic:"Loi de Descartes"},
    {q:"La réflexion totale se produit quand :",opts:["i<angle limite","Milieu moins dense","i>l ET n₁>n₂","Air vers eau"],ans:2,topic:"Réflexion totale"},
    {q:"Au minimum de déviation du prisme :",opts:["i≠i'","r=A","i=i' et r=r'=A/2","D=0"],ans:2,topic:"Prisme"},
    {q:"λ_min des RX dépend de :",opts:["Le courant I","La tension U","U et I","La température"],ans:1,topic:"Rayons X"},
    {q:"Désintégration β⁻ provoque :",opts:["Z−1","Z+1, A inchangé","Z−2, A−4","A−1"],ans:1,topic:"Radioactivité β"},
    {q:"Après 3 périodes T½ il reste :",opts:["N₀/3","N₀/6","N₀/8","N₀/9"],ans:2,topic:"Décroissance"},
    {q:"De Broglie : λ = ?",opts:["λ=mv/h","λ=hmv","λ=h/(mv)","λ=h²/(mv)"],ans:2,topic:"De Broglie"},
    {q:"Dans la lame à faces parallèles :",opts:["Rayon dévié d'angle A","Rayon émergent parallèle","Réflexion totale","Fréquence change"],ans:1,topic:"Lame parallèle"},
    {q:"E=hν correspond à :",opts:["Vitesse électron","Énergie photon","Indice réfraction","Longueur d'onde"],ans:1,topic:"Énergie photon"},
    {q:"Nombre de neutrons d'un noyau ᴬ𝗭X :",opts:["Z","A","A−Z","A+Z"],ans:2,topic:"Structure nucléaire"},
    {q:"1 eV en Joules =",opts:["1.6×10⁻³¹J","1.6×10⁻²⁷J","1.6×10⁻¹⁹J","1.6×10⁻¹³J"],ans:2,topic:"Conversions énergie"},
    {q:"μ_linéaire =",opts:["μ_massique","μ_mass+ρ","μ_mass×ρ","μ_mass/ρ"],ans:2,topic:"Beer-Lambert"},
  ];
  let _current = [], _answers = {};

  function build() {
    _current = [...POOL].sort(()=>Math.random()-.5).slice(0,5);
    _answers = {};
    document.getElementById('diag-result').classList.add('hidden');
    document.getElementById('diag-questions').innerHTML = _current.map((q,i) => `
      <div class="diag-q-card">
        <div class="diag-q-text">Q${i+1}. ${q.q}</div>
        ${q.opts.map((o,j)=>`<button class="diag-opt" data-qi="${i}" data-oi="${j}">${o}</button>`).join('')}
      </div>`).join('');
    document.getElementById('diag-questions').querySelectorAll('.diag-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qi = +btn.dataset.qi;
        document.querySelectorAll(`.diag-opt[data-qi="${qi}"]`).forEach(b=>b.classList.remove('selected'));
        _answers[qi] = +btn.dataset.oi;
        btn.classList.add('selected');
      });
    });
  }

  async function submit() {
    if (Object.keys(_answers).length < _current.length) {
      const btn = document.getElementById('diagSubmitBtn');
      const orig = btn.textContent;
      btn.textContent = `⚠️ ${Lang.t('ia.diag_complete')}`;
      setTimeout(() => btn.textContent = orig, 2500);
      return;
    }
    const btn = document.getElementById('diagSubmitBtn');
    btn.disabled = true; btn.textContent = Lang.t('ia.diag_analyzing');
    let ok = 0; const errors = [];
    _current.forEach((q,i) => {
      const s = _answers[i];
      if (s === q.ans) { ok++; }
      else {
        errors.push({ topic:q.topic, correct:q.opts[q.ans], given:q.opts[s] });
        State.push('errors', { topic:q.topic, question:q.q, correct:q.opts[q.ans], given:q.opts[s], source:'Diagnostic' });
      }
    });
    const pct = Math.round(ok/5*100);
    try {
      const res = await AI.analyzeDiagnostic(ok, 5, errors, Lang.get());
      const resultEl = document.getElementById('diag-result');
      document.getElementById('diag-result-content').innerHTML = `
        <div class="grid-2 mb-16">
          ${C.stat(ok+'/5', Lang.t('ia.diag_score'), pct>=80?'var(--green)':pct>=60?'var(--amber)':'var(--red)')}
          ${C.stat(pct+'%', Lang.t('ia.diag_success'), 'var(--cyan)')}
        </div>
        <div style="font-size:13px;line-height:1.8;white-space:pre-wrap">${res}</div>`;
      resultEl.classList.remove('hidden');
      resultEl.scrollIntoView({behavior:'smooth'});
    } catch {
      document.getElementById('diag-result-content').innerHTML = C.alert('danger','❌', Lang.get()==='en'?'Network error. Retry.':'Erreur réseau. Réessaie.');
      document.getElementById('diag-result').classList.remove('hidden');
    }
    btn.textContent = Lang.t('ia.diag_submit'); btn.disabled = false;
  }

  function init() {
    build();
    document.getElementById('diagSubmitBtn').addEventListener('click', submit);
    document.getElementById('diagRefreshBtn').addEventListener('click', build);
  }
  return { init };
})();

/* ══════════════════════════════════════════
   FLASH CARDS — Generated from user errors
══════════════════════════════════════════ */
const FlashCards = (() => {
  let _cards = [], _idx = 0, _know = 0, _dk = 0;

  function _updateErrorStats() {
    const errors = State.get('errors') || [];
    const statsEl = document.getElementById('flash-error-stats');
    if (!statsEl) return;
    if (!errors.length) {
      statsEl.textContent = Lang.t('ia.flash_no_errors');
      statsEl.style.color = 'var(--text3)';
    } else {
      statsEl.textContent = Lang.t('ia.flash_errors_count').replace('{n}', errors.length);
      statsEl.style.color = 'var(--cyan)';
    }
  }

  function _pills() {
    document.getElementById('fc-pills').innerHTML = _cards.map((_,i) => {
      let cls = 'fc-pill';
      if (i < _idx) cls += _cards[i]._know ? ' done-yes' : ' done-no';
      else if (i === _idx) cls += ' current';
      return `<div class="${cls}"></div>`;
    }).join('');
  }

  function _show() {
    if (_idx >= _cards.length) { _summary(); return; }
    const c = _cards[_idx];
    document.getElementById('fc-q').textContent = c.question;
    document.getElementById('fc-a').textContent = c.answer;
    document.getElementById('fc-idx').textContent = _idx + 1;
    document.getElementById('fc-know-n').textContent = _know;
    document.getElementById('fc-dk-n').textContent  = _dk;
    document.getElementById('fc-card').classList.remove('flipped','swipe-right','swipe-left');
    _pills();
  }

  function _vote(know) {
    _cards[_idx]._know = know;
    know ? _know++ : _dk++;
    const card = document.getElementById('fc-card');
    card.classList.add(know ? 'swipe-right' : 'swipe-left');
    setTimeout(() => { _idx++; _show(); }, 380);
  }

  function _summary() {
    document.getElementById('flash-container').classList.add('hidden');
    const total = _know + _dk, pct = total ? Math.round(_know/total*100) : 0;
    document.getElementById('flash-summary').innerHTML = `
      <div class="card card--gradient text-center animate-in" style="padding:28px">
        <div style="font-size:44px;margin-bottom:12px">${pct>=80?'🔥':pct>=60?'👍':'📚'}</div>
        <div style="font-family:var(--font-h);font-size:28px;font-weight:800;margin-bottom:4px">${_know}/${total}</div>
        <div class="text-small mb-16">${pct}% ${Lang.get()==='en'?'mastered':'maîtrisés'}</div>
        <div style="display:flex;gap:18px;justify-content:center;font-size:13px;margin-bottom:16px">
          <span class="fc-know-count">✓ ${Lang.get()==='en'?'Got it':'Je sais'} : ${_know}</span>
          <span class="fc-dk-count">✗ ${Lang.get()==='en'?'Review':'À revoir'} : ${_dk}</span>
        </div>
        <button class="fc-btn fc-btn--gen" id="newSessionBtn">${Lang.t('ia.flash_new_session')}</button>
      </div>`;
    document.getElementById('flash-summary').classList.remove('hidden');
    document.getElementById('newSessionBtn').addEventListener('click', generate);
  }

  async function generate() {
    _updateErrorStats();
    const errors = State.get('errors') || [];

    if (!errors.length) {
      document.getElementById('flash-container').classList.add('hidden');
      document.getElementById('flash-summary').classList.remove('hidden');
      document.getElementById('flash-error').classList.add('hidden');
      document.getElementById('flash-loading').classList.add('hidden');
      document.getElementById('flash-summary').innerHTML = `
        <div class="card card--glass text-center animate-in" style="padding:28px">
          <div style="font-size:44px;margin-bottom:12px">📭</div>
          <div class="text-small mb-8">${Lang.t('ia.flash_no_errors')}</div>
          <div class="text-small" style="color:var(--text3)">${Lang.t('ia.flash_no_errors_hint')}</div>
        </div>`;
      return;
    }

    const btn = document.getElementById('genFlashBtn');
    btn.disabled = true;
    document.getElementById('flash-container').classList.add('hidden');
    document.getElementById('flash-summary').classList.add('hidden');
    document.getElementById('flash-error').classList.add('hidden');
    document.getElementById('flash-loading').classList.remove('hidden');

    try {
      _cards = await AI.generateFlashcardsFromErrors(errors, Lang.get());
      if (!_cards || !_cards.length) throw new Error('No cards');
      _idx = 0; _know = 0; _dk = 0;
      _cards.forEach(c => { c._know = undefined; });
      document.getElementById('flash-loading').classList.add('hidden');
      document.getElementById('flash-container').classList.remove('hidden');
      document.getElementById('fc-card').classList.remove('flipped');
      _show();
    } catch {
      document.getElementById('flash-loading').classList.add('hidden');
      document.getElementById('flash-error').classList.remove('hidden');
    }
    btn.disabled = false;
  }

  function init() {
    _updateErrorStats();
    document.getElementById('genFlashBtn').addEventListener('click', generate);
    document.getElementById('flashRetryBtn')?.addEventListener('click', generate);
    document.getElementById('fc-card').addEventListener('click', () => document.getElementById('fc-card').classList.toggle('flipped'));
    document.getElementById('fcYesBtn').addEventListener('click', () => _vote(true));
    document.getElementById('fcNoBtn').addEventListener('click',  () => _vote(false));
  }
  return { init, refreshStats: _updateErrorStats };
})();

/* ══════════════════════════════════════════
   STATISTICS
══════════════════════════════════════════ */
const Statistics = (() => {
  async function generate() {
    const errors = State.get('errors') || [];
    const el = document.getElementById('stats-content');
    if (!errors.length) {
      el.innerHTML = `<div class="card"><p class="text-small text-center" style="padding:20px">${Lang.t('ia.stats_no_errors')}</p></div>`;
      return;
    }
    const tc = {};
    errors.forEach(e => tc[e.topic] = (tc[e.topic]||0)+1);
    const sorted = Object.entries(tc).sort((a,b)=>b[1]-a[1]);
    const maxC = sorted[0][1];
    const colors = ['#ef4444','#f59e0b','#00d4ff','#22c55e','#a78bfa','#14b8a6'];
    el.innerHTML = `<div class="card">
      <div class="card-label">📋 ${Lang.get()==='en'?'Error distribution':'Répartition des erreurs'} (${errors.length} ${Lang.get()==='en'?'total':'total'})</div>
      ${sorted.map(([t,c],i)=>`
        <div class="progress-wrap">
          <div class="progress-label"><span>${t}</span><span style="color:${colors[i%6]};font-weight:600">${c}</span></div>
          <div class="progress-track"><div class="progress-fill" style="width:${Math.round(c/maxC*100)}%;background:${colors[i%6]}"></div></div>
        </div>`).join('')}
      <div class="ai-response show" id="stats-ai"><span class="ai-response-label">🤖</span>${C.loading(Lang.get()==='en'?'Generating report':'Génération bilan')}</div>
    </div>`;
    const btn = document.getElementById('statsBtn');
    btn.disabled = true; btn.textContent = Lang.get()==='en'?'Generating...':'Génération...';
    try {
      const res = await AI.generateStats(sorted, errors.length, errors.slice(-15), Lang.get());
      document.getElementById('stats-ai').innerHTML = `<span class="ai-response-label">${Lang.t('ai.analyze_label')}</span>${res.replace(/\n/g,'<br>')}`;
    } catch {
      document.getElementById('stats-ai').innerHTML = `<span class="ai-response-label">🤖</span>${Lang.get()==='en'?'Network error.':'Erreur réseau.'} <button class="ai-retry-btn" id="statsRetry">↺</button>`;
      document.getElementById('statsRetry')?.addEventListener('click', generate);
    }
    btn.textContent = Lang.t('ia.stats_gen'); btn.disabled = false;
  }

  function clear() {
    if (!confirm(Lang.t('ia.stats_confirm_clear'))) return;
    State.clear('errors');
    document.getElementById('stats-content').innerHTML = '';
    document.getElementById('badge-exam').style.display = 'none';
    Dashboard.refresh();
    FlashCards.refreshStats();
  }

  function init() {
    document.getElementById('statsBtn').addEventListener('click', generate);
    document.getElementById('statsClearBtn').addEventListener('click', clear);
  }
  return { init };
})();

/* ══════════════════════════════════════════
   AI TABS
══════════════════════════════════════════ */
function initAITabs() {
  document.querySelectorAll('.ai-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ai-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.ai-sub').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('ia-' + btn.dataset.tab).classList.add('active');
      if (btn.dataset.tab === 'flash') FlashCards.refreshStats();
    });
  });
}

/* ══════════════════════════════════════════
   BOOTSTRAP
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  FocusMode.init();
  Sidebar.init();
  Router.init();
  initOnlineStatus();

  // Language init + toggle
  document.getElementById('langBtn').addEventListener('click', () => Lang.toggle());
  Lang.apply();

  // Static pages (will re-render on language change)
  renderOptique();
  renderRayonnement();
  renderMethodes();
  renderPieges();

  // Feature modules
  Exam.init();
  Diagnostic.init();
  FlashCards.init();
  Statistics.init();
  initAITabs();

  // Dashboard
  Dashboard.refresh();
});
