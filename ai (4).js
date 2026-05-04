// ═══════════════════════════════════════════
// ai.js — Centralized AI System v3.0
// Biophysique S2 · 1ère Année Médecine
// ═══════════════════════════════════════════
'use strict';

const AI = (() => {
  const WORKER_URL = 'https://dawn-surf-0a6cbiophys-api.milouyoghmilouyogh2.workers.dev';
  const STORAGE_KEY_TOPICS = 'bp_ai_used_topics';
  const STORAGE_KEY_SEED   = 'bp_ai_seed';
  const STORAGE_KEY_QCM    = 'bp_ai_used_qcm';

  // ── Session anti-repetition ──────────────
  const _usedFlashTopics = new Set();
  const _usedQCMKeys     = new Set();
  let   _sessionSeed     = Date.now().toString(36);

  (() => {
    try {
      const t = JSON.parse(localStorage.getItem(STORAGE_KEY_TOPICS) || '[]');
      t.forEach(x => _usedFlashTopics.add(x));
      const q = JSON.parse(localStorage.getItem(STORAGE_KEY_QCM) || '[]');
      q.forEach(x => _usedQCMKeys.add(x));
      _sessionSeed = localStorage.getItem(STORAGE_KEY_SEED) || _sessionSeed;
    } catch {}
  })();

  function _saveSession() {
    try {
      localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify([..._usedFlashTopics].slice(-40)));
      localStorage.setItem(STORAGE_KEY_QCM,    JSON.stringify([..._usedQCMKeys].slice(-60)));
      localStorage.setItem(STORAGE_KEY_SEED,   _sessionSeed);
    } catch {}
  }

  // ── Course knowledge base ────────────────
  const COURSE_OPTIQUE = `OPTIQUE GÉOMÉTRIQUE — COURS COMPLET:
Indice réfraction: n=c/v (n≥1). n_vide=1, n_air≈1, n_eau≈1.33, n_verre≈1.5, n_diamant≈2.42. Formule: n=c/v.
Loi Snell-Descartes: n₁·sin(i)=n₂·sin(r). Angles TOUJOURS par rapport à la NORMALE. Si n₁<n₂: r<i. Si n₁>n₂: r>i.
Réflexion totale: UNIQUEMENT si n₁>n₂ (dense→moins dense). Angle limite: sin(l)=n₂/n₁. Si i>l → RT complète.
Principe retour inverse: si direction inversée, les supports des rayons sont identiques.
Dioptre plan: OA/n₁=OA'/n₂. OA<0 pour objet réel à gauche. Image virtuelle côté incident.
Lame à faces parallèles: d₁=e·sin(i-r)/cos(r) (déplacement latéral). d=e(1-n'/n) (rapprochement apparent). Rayon émergent PARALLÈLE à l'incident (i'=i). Zéro déviation angulaire.
Prisme: sin(i)=n·sin(r), n·sin(r')=sin(i'), A=r+r', D=(i+i')-A. Minimum déviation Dₘ: n=sin((Dₘ+A)/2)/sin(A/2). Au minimum: i=i', r=r'=A/2, rayon interne parallèle à la base.
Conditions d'émergence prisme: A≤2·arcsin(1/n) (1ère), i≥arcsin(n·sin(A-arcsin(1/n))) (2ème, angle min).
Lentilles minces (Gauss): 1/OA'-1/OA=1/f'=V. γ=OA'/OA. f'>0→convergente (image réelle à F' si objet à l'infini), f'<0→divergente (image virtuelle à F').`;

  const COURSE_RAYONNEMENT = `RAYONNEMENT & BIOPHYSIQUE — COURS COMPLET:
Photon: E=hν=hc/λ. c=λ·ν. T=1/ν. v=c/n dans milieu. Fréquence INVARIANTE dans tout milieu (la couleur ne change pas).
Spectre visible: 400nm(violet)→800nm(rouge). Ordre: Violet-Indigo-Bleu-Vert-Jaune-Orange-Rouge.
Seuil ionisation biologique: 13.6 eV (énergie ionisation H). E>13.6eV→ionisant (RX,γ,UV). E<13.6eV→non ionisant (visible,IR).
Spectre: γ(<0.01Å), RX(0.01-100Å=10⁻¹²-10⁻⁸m), UV(10-400nm), Visible(400-800nm), IR(0.8-1000μm), Micro-ondes(mm-cm).
Tube RX Röntgen 1895: Pₑ=U·I. Pᵣ=η·Pₑ (η≈1%). PJ=Pₑ-Pᵣ (chaleur, 99%). λ_min=hc/(eU). λ_min dépend UNIQUEMENT de U, pas de I.
Beer-Lambert: I(x)=I₀·e^(-μx). μ_linéaire=μ_massique×ρ (ρ=densité). CDV x½=0.693/μ.
Notation nucléaire: ᴬ𝗭X. A=Z+N. A=nombre masse, Z=numéro atomique(protons), N=neutrons.
Familles: Isotopes=même Z, Isobares=même A, Isotones=même N, Isomères=même Z+A énergie différente.
Radioactivité α: émission ⁴₂He, Z-2, A-4. Condition: Z>82.
Radioactivité β⁻: émission e⁻+ν̄, Z+1, A inchangé. Excès neutrons. Transformation n→p.
Radioactivité β⁺: émission e⁺+ν, Z-1, A inchangé. Excès protons. Transformation p→n.
Radioactivité γ: photon λ<1Å, Z et A INCHANGÉS. Désexcitation nucléaire uniquement.
Capture électronique (CE): e⁻ capturé, Z-1, A inchangé. Analogue β⁺.
Décroissance: N(t)=N₀·e^(-λt). T½=0.693/λ. Après n périodes: N=N₀/2ⁿ. Activité A(t)=λ·N(t) en Becquerels.
De Broglie: λ=h/p=h/(mv). Électron sous U: λ=h/√(2mₑeU). Avec Ec: λ=h/√(2mEc). p=mv (quantité mouvement).
Constantes: h=6.62×10⁻³⁴J·s, c=3×10⁸m/s, e=1.6×10⁻¹⁹C, mₑ=9.109×10⁻³¹kg, mₚ=1.6742×10⁻²⁷kg, mₙ=1.6726×10⁻²⁷kg.
1eV=1.6×10⁻¹⁹J, 1keV=1.6×10⁻¹⁶J, 1MeV=1.6×10⁻¹³J. 1u.m.a=1.66×10⁻²⁷kg.`;

  const FULL_COURSE = COURSE_OPTIQUE + '\n' + COURSE_RAYONNEMENT;

  // ── Local fallback flash cards ────────────
  const LOCAL_FLASH = {
    optique: [
      {question:"Énonce la loi de Snell-Descartes.", answer:"n₁·sin(i) = n₂·sin(r). Angles mesurés par rapport à la NORMALE. n₁<n₂ → r<i; n₁>n₂ → r>i.", topic:"Snell-Descartes"},
      {question:"Condition nécessaire à la réflexion totale interne ?", answer:"n₁ > n₂ (milieu dense → moins dense) ET i > angle limite. sin(l) = n₂/n₁.", topic:"Réflexion totale"},
      {question:"Verre n=1.5 — quel est l'angle limite ?", answer:"sin(l) = 1/1.5 = 0.667 → l ≈ 41.8°. Si i > 41.8° : réflexion totale.", topic:"Angle limite"},
      {question:"Formule n au minimum de déviation du prisme.", answer:"n = sin((Dₘ+A)/2) / sin(A/2). Au minimum : i=i' et r=r'=A/2 (symétrie).", topic:"Prisme Dₘ"},
      {question:"Rayon traversant une lame à faces parallèles — que se passe-t-il ?", answer:"Rayon émergent PARALLÈLE à l'incident (i'=i). Déplacement latéral d₁=e·sin(i-r)/cos(r). Zéro déviation angulaire.", topic:"Lame parallèle"},
    ],
    rayonnement: [
      {question:"Formule de l'énergie d'un photon.", answer:"E = hν = hc/λ. h=6.62×10⁻³⁴J·s, c=3×10⁸m/s. En eV: E(eV)=E(J)/1.6×10⁻¹⁹.", topic:"Énergie photon"},
      {question:"Loi Beer-Lambert — que mesure x½ ?", answer:"x½ = 0.693/μ est la couche demi-valeur: épaisseur réduisant l'intensité de moitié. I = I₀·e^(-μx).", topic:"Beer-Lambert"},
      {question:"Effet d'une désintégration α sur Z et A.", answer:"Z diminue de 2, A diminue de 4. Émission d'un noyau d'hélium ⁴₂He. Condition: Z>82.", topic:"Radioactivité α"},
      {question:"De Broglie pour un électron sous tension U.", answer:"λ = h/√(2mₑeU). Pour U=100V: λ ≈ 1.23 Å (domaine des rayons X).", topic:"De Broglie"},
      {question:"Pourquoi λ_min des RX dépend uniquement de U ?", answer:"λ_min = hc/(eU). Énergie max d'un photon = eU (toute Ec en un photon). Augmenter I → plus de photons, pas d'énergie max supérieure.", topic:"RX λ_min"},
    ],
  };

  // ── Static fallback QCM pool (extended) ──
  const QCM_FALLBACK = [
    {q:"Un rayon passe de l'air (n=1) dans le verre (n=1.5) avec i=30°. Angle de réfraction ?",opts:["A. 30°","B. 19.5°","C. 45°","D. 20°"],ans:1,topic:"Loi de Descartes",exp:"1×sin30°=1.5×sinr → sinr=0.333 → r≈19.5°"},
    {q:"Condition nécessaire pour la réflexion totale interne ?",opts:["A. n₁<n₂","B. i<l","C. n₁>n₂ ET i>l","D. λ<400nm"],ans:2,topic:"Réflexion totale",exp:"n₁>n₂ (dense→moins dense) ET i>l (angle limite)"},
    {q:"Pour un prisme n=1.5. L'angle limite est :",opts:["A. 30°","B. 41.8°","C. 45°","D. 60°"],ans:1,topic:"Prisme",exp:"sin(l)=1/1.5=0.667 → l≈41.8°"},
    {q:"Formule de λ_min des rayons X ?",opts:["A. hc/eU","B. eU/hc","C. h/(mv)","D. hν"],ans:0,topic:"Rayons X",exp:"λ_min=hc/(eU): énergie max=eU → 1 photon"},
    {q:"Tube RX: U=50kV, I=40mA, η=1%. Pᵣ=?",opts:["A. 2000W","B. 20W","C. 0.02W","D. 200W"],ans:1,topic:"Tube RX",exp:"Pₑ=50000×0.04=2000W. Pᵣ=0.01×2000=20W"},
    {q:"Loi de Beer-Lambert ?",opts:["A. I=I₀+μx","B. I=I₀e^(+μx)","C. I=I₀e^(−μx)","D. I=I₀/(μx)"],ans:2,topic:"Beer-Lambert",exp:"I=I₀·e^(-μx). μ>0 donc atténuation exponentielle."},
    {q:"Désintégration α d'un noyau ᴬ𝗭X produit :",opts:["A. ᴬ⁻²_{Z−1}+e⁻","B. ᴬ⁻⁴_{Z−2}+⁴₂He","C. ᴬ_{Z+1}+e⁻","D. ᴬ_Z+γ"],ans:1,topic:"Radioactivité α",exp:"α: émission ⁴₂He → Z−2, A−4"},
    {q:"T½ et λ (constante radioactive) ?",opts:["A. T½=λ/ln2","B. T½=ln2·λ","C. T½=ln2/λ","D. T½=e^λ"],ans:2,topic:"Décroissance",exp:"T½=0.693/λ"},
    {q:"De Broglie: électron sous 100V ?",opts:["A. 1.2nm","B. 0.12nm","C. 1.23Å","D. 12Å"],ans:2,topic:"De Broglie",exp:"λ=h/√(2mₑeU)≈1.23×10⁻¹⁰m=1.23Å (domaine RX)"},
    {q:"Lame à faces parallèles — rayon émergent :",opts:["A. Parallèle à l'incident","B. Perpendiculaire","C. Dévié d'angle A","D. Réfléchi"],ans:0,topic:"Lame parallèle",exp:"i'=i. Pas de déviation angulaire. Seulement translation d₁."},
    {q:"Spectre visible ?",opts:["A. 200–400nm","B. 400–800nm","C. 800–1200nm","D. 10–400nm"],ans:1,topic:"Spectre EM",exp:"λ_violet=400nm, λ_rouge=800nm"},
    {q:"Fréquence dans milieu n=1.5 ?",opts:["A. ×1.5","B. ÷1.5","C. Inchangée","D. Nulle"],ans:2,topic:"Propagation",exp:"Fréquence = propriété de la source. Seule λ change (λ=λ₀/n)."},
    {q:"Noyau ¹²₆C possède :",opts:["A. 6p,12n","B. 12p,6n","C. 6p,6n","D. 6p,3n"],ans:2,topic:"Structure nucléaire",exp:"Z=6 protons, N=12−6=6 neutrons"},
    {q:"Désintégration β⁻ produit :",opts:["A. Z−1","B. Z+1,A inchangé","C. Z−2,A−4","D. Z∅,A∅"],ans:1,topic:"Radioactivité β",exp:"β⁻: n→p+e⁻+ν̄. Z+1, A inchangé"},
    {q:"Formule n au minimum de déviation Dₘ ?",opts:["A. sin(Dₘ/2)/sin(A/2)","B. sin((Dₘ+A)/2)/sin(A/2)","C. cos(Dₘ/2)/sin(A)","D. sin(A)/sin(Dₘ)"],ans:1,topic:"Prisme Dₘ",exp:"Symétrie: i=i', r=r'=A/2"},
    {q:"Seuil d'ionisation biologique ?",opts:["A. 1eV","B. 6.6eV","C. 13.6eV","D. 100eV"],ans:2,topic:"Ionisation",exp:"Énergie ionisation H=13.6eV"},
    {q:"Les rayons γ sont :",opts:["A. Particules α","B. Neutrons","C. OEM λ<1Å (désexcitation)","D. Identiques β⁺"],ans:2,topic:"Rayonnement γ",exp:"OEM très courtes, émises lors désexcitation nucléaire"},
    {q:"Vitesse dans milieu d'indice n ?",opts:["A. c×n","B. c/n","C. c²/n","D. c+n"],ans:1,topic:"Propagation",exp:"v=c/n"},
    {q:"Isotopes = noyaux ayant :",opts:["A. Même A","B. Même N","C. Même Z,A différent","D. Même Z et A"],ans:2,topic:"Familles nucléaires",exp:"Même Z (élément), A différent. Ex: ¹H,²H,³H"},
    {q:"Après 3 T½ il reste :",opts:["A. N₀/4","B. N₀/6","C. N₀/8","D. N₀/9"],ans:2,topic:"Décroissance",exp:"N(3T½)=N₀/2³=N₀/8. Méthode rapide: n périodes → N₀/2ⁿ."},
    {q:"Désintégration γ provoque :",opts:["A. Z−1","B. Z+1","C. Z et A inchangés","D. A−1"],ans:2,topic:"Radioactivité γ",exp:"γ: désexcitation nucléaire. Z et A restent identiques."},
    {q:"Flux RX: P=7mW, photons 20keV ?",opts:["A. 2.19×10¹²ph/s","B. 2.19×10⁹ph/s","C. 7×10⁹ph/s","D. 1.4×10¹²ph/s"],ans:0,topic:"Flux RX",exp:"Φ=7×10⁻³/(20×10³×1.6×10⁻¹⁹)≈2.19×10¹²"},
    {q:"Le champ B d'une OEM est par rapport au champ E :",opts:["A. Parallèle","B. Perpendiculaire ET ⊥ propagation","C. Antiparallèle","D. Indéfini"],ans:1,topic:"OEM",exp:"E⊥B⊥direction de propagation. Tous trois mutuellement perpendiculaires."},
    {q:"Couche demi-valeur si μ=0.5 cm⁻¹ ?",opts:["A. 2 cm","B. 0.5 cm","C. 1.386 cm","D. 0.693 cm"],ans:2,topic:"Beer-Lambert",exp:"x½=0.693/μ=0.693/0.5=1.386 cm."},
    {q:"Un proton p=mv, m=1.673×10⁻²⁷kg, v=3×10⁶m/s. λ De Broglie =",opts:["A. 1.32×10⁻¹³m","B. 1.32×10⁻¹⁰m","C. 6.62×10⁻³⁴m","D. 4.97×10⁻²¹m"],ans:0,topic:"De Broglie",exp:"λ=h/(mv)=6.62×10⁻³⁴/(1.673×10⁻²⁷×3×10⁶)≈1.32×10⁻¹³m"},
  ];

  // ── Prompt builders ──────────────────────
  function _buildPrompt(type, data = {}) {
    const seed = `[uid:${_sessionSeed}-${Date.now().toString(36)}]`;
    const isEN = (data.lang || 'fr') === 'en';
    const langInstr = isEN
      ? 'IMPORTANT: Respond ONLY in English. All text must be in English.'
      : 'IMPORTANT: Réponds UNIQUEMENT en français. Tout le texte doit être en français.';
    const base = `Tu es professeur expert en biophysique médicale pour 1ère année médecine. ${langInstr} Basé UNIQUEMENT sur le cours ci-dessous. ${seed}`;

    switch (type) {
      case 'explain': {
        const { formula, context } = data;
        return `${base}
COURS: ${FULL_COURSE}
${isEN ? 'Explain this formula/concept' : 'Explique cette formule/concept'} : "${formula}" (${isEN ? 'context' : 'contexte'}: ${context || ''})
${isEN ? 'Format (max 180 words)' : 'Format OBLIGATOIRE (max 180 mots)'} :
📖 ${isEN ? 'EXPLANATION' : 'EXPLICATION'} : [2-3 ${isEN ? 'clear sentences' : 'phrases claires'}]
🔢 ${isEN ? 'NUMERICAL EXAMPLE' : 'EXEMPLE NUMÉRIQUE'} : [${isEN ? 'concrete calculation' : 'calcul concret'}]
⚠️ ${isEN ? 'COMMON TRAP' : 'PIÈGE FRÉQUENT'} : [${isEN ? 'typical exam error' : 'erreur typique à l\'examen'}]`;
      }

      case 'flashcards_from_errors': {
        const { errors, lang } = data;
        const errStr = errors.map((e, i) => `${i+1}. Topic: ${e.topic} | Given: "${e.given}" | Correct: "${e.correct}" | Q: "${e.question}"`).join('\n');
        return `${base}
COURS: ${FULL_COURSE}
${isEN ? 'These are the student\'s MISTAKES:' : 'Voici les ERREURS de l\'étudiant :'}
${errStr}
${isEN ? 'Generate EXACTLY 5 flashcards targeting these specific weaknesses. Each card must address a real mistake.' : 'Génère EXACTEMENT 5 flashcards ciblant ces faiblesses spécifiques. Chaque carte doit adresser une vraie erreur.'}
JSON UNIQUEMENT (aucun texte avant/après):
[{"question":"...","answer":"...","topic":"..."},{"question":"...","answer":"...","topic":"..."},{"question":"...","answer":"...","topic":"..."},{"question":"...","answer":"...","topic":"..."},{"question":"...","answer":"...","topic":"..."}]`;
      }

      case 'exam_qcm': {
        const { count, usedKeys, lang } = data;
        const avoidStr = usedKeys && usedKeys.length
          ? `${isEN ? 'AVOID these exact topics already asked' : 'ÉVITER ces sujets déjà posés'}: ${usedKeys.join(', ')}` : '';
        return `${base}
COURS: ${FULL_COURSE}
${avoidStr}
${isEN
  ? `Generate EXACTLY ${count} NEW multiple-choice questions (QCS) matching the real EMD exam standard (1st year medicine, biophysics). Each question must have DIFFERENT numerical values than typical examples. Vary topics across: Snell-Descartes, total reflection, prism, parallel plate, X-ray tube, Beer-Lambert, radioactivity α/β/γ, radioactive decay, De Broglie, EM spectrum, nuclear structure.`
  : `Génère EXACTEMENT ${count} NOUVELLES questions QCS niveau examen EMD réel (1ère année médecine biophysique). Chaque question doit avoir des valeurs numériques DIFFÉRENTES. Varie les sujets : Snell-Descartes, réflexion totale, prisme, lame parallèle, tube RX, Beer-Lambert, radioactivité α/β/γ, décroissance, De Broglie, spectre EM, structure nucléaire.`}
${isEN ? 'JSON ONLY (no text before/after)' : 'JSON UNIQUEMENT (aucun texte avant/après)'} :
[{"q":"...","opts":["A. ...","B. ...","C. ...","D. ..."],"ans":0,"topic":"...","exp":"..."}]
ans = index 0-3 de la bonne réponse.`;
      }

      case 'diagnostic': {
        const { score, total, errors, lang } = data;
        const pct = Math.round(score / total * 100);
        const errStr = errors.map(e => `• ${e.topic}: "${e.given}" → correct: "${e.correct}"`).join('\n');
        return `${base}
${isEN ? `Score: ${score}/${total} (${pct}%)\nErrors:` : `Score: ${score}/${total} (${pct}%)\nErreurs:`}
${errStr || (isEN ? 'No errors.' : 'Aucune erreur.')}
${isEN ? 'Personalized analysis (max 220 words)' : 'Analyse personnalisée (max 220 mots)'} :
📊 ${isEN ? 'CURRENT LEVEL' : 'NIVEAU ACTUEL'} : ${isEN ? 'honest evaluation' : 'évaluation honnête'}
🎯 ${isEN ? 'TOP PRIORITIES' : 'TOP PRIORITÉS'} : ${isEN ? '2-3 urgent topics based on errors' : '2-3 sujets urgents basés sur les erreurs'}
💡 ${isEN ? 'ADVICE' : 'CONSEILS'} : ${isEN ? 'concrete tip per weak point' : 'astuce concrète par point faible'}
⏰ ${isEN ? 'PLAN' : 'PLAN'} : ${isEN ? 'next steps' : 'actions prochaines heures'}
💪 ${isEN ? 'ENCOURAGEMENT' : 'ENCOURAGEMENT'} : ${isEN ? 'motivating sentence' : 'phrase motivante'}`;
      }

      case 'stats': {
        const { topicErrors, totalErrors, recentErrors, lang } = data;
        const summary = topicErrors.map(([t,c]) => `${t}:${c}`).join(', ');
        return `${base}
${isEN ? `Errors: ${summary}. Total: ${totalErrors}.` : `Erreurs: ${summary}. Total: ${totalErrors}.`}
${isEN ? 'Personalized report (max 280 words)' : 'Bilan personnalisé (max 280 mots)'} :
📉 ${isEN ? 'ANALYSIS' : 'ANALYSE'} : ${isEN ? 'recurring patterns' : 'patterns récurrents'}
🎯 ${isEN ? 'TOP 3' : 'TOP 3'} : ${isEN ? 'topics to rework' : 'sujets à retravailler'}
📝 ${isEN ? 'ADVICE' : 'CONSEILS'} : ${isEN ? 'tip per weak point' : 'astuce par point faible'}
💡 ${isEN ? 'STRATEGY' : 'STRATÉGIE'} : ${isEN ? 'revision organization' : 'organisation révisions'}
🚀 ${isEN ? 'GOAL' : 'OBJECTIF'} : ${isEN ? 'achievable level' : 'niveau atteignable'}`;
      }

      case 'error_analysis': {
        const { errors, lang } = data;
        const str = errors.map(e => `• ${e.topic}: "${e.given}"→"${e.correct}"`).join('\n');
        return `${base}
${isEN ? 'QCM errors:' : 'Erreurs QCM:'}
${str}
${isEN ? 'Report (max 200 words)' : 'Bilan (max 200 mots)'} :
🔴 ${isEN ? 'WEAK POINTS' : 'POINTS FAIBLES'} : ${isEN ? '2-3 problematic topics' : '2-3 sujets problématiques'}
📚 ${isEN ? 'URGENT REVIEW' : 'RÉVISION URGENTE'} : ${isEN ? 'to review now' : 'à revoir maintenant'}
💡 ${isEN ? 'TIP' : 'ASTUCE'} : ${isEN ? 'anti-error advice' : 'conseil anti-erreur'}
⏰ ${isEN ? 'ESTIMATED TIME' : 'TEMPS ESTIMÉ'} : ${isEN ? 'revision hours' : 'heures de révision'}`;
      }

      default:
        return `${base}\nCOURS: ${FULL_COURSE}\n${isEN ? 'Question' : 'Question'}: ${data.query || ''}`;
    }
  }

  // ── API call with retry & timeout ────────
  async function _call(prompt, type, maxTokens = 600, retries = 2) {
    let lastErr;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 20000);
        const res = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, type, max_tokens: maxTokens }),
          signal: controller.signal,
        });
        clearTimeout(timer);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        return data.answer || '';
      } catch (e) {
        lastErr = e;
        if (attempt < retries) await new Promise(r => setTimeout(r, 1400 * (attempt + 1)));
      }
    }
    throw lastErr;
  }

  // ── Local fallback generators ────────────
  function _localDiagnostic(score, total, errors, lang) {
    const isEN = lang === 'en';
    const pct = Math.round(score / total * 100);
    const emoji = pct >= 80 ? '🔥' : pct >= 60 ? '👍' : '📚';
    const priority = errors.length ? errors.slice(0,2).map(e => e.topic).join(', ') : (isEN ? 'None' : 'Aucune');
    if (isEN) {
      return `📊 CURRENT LEVEL: ${pct}% — ${pct>=80?'Excellent, keep it up!':pct>=60?'Good, a few points to consolidate.':'Basics need reinforcement.'}\n\n🎯 TOP PRIORITIES: Review ${priority}.\n\n💡 ADVICE: Redo key formulas aloud. Use flashcards to reinforce.\n\n⏰ PLAN: 30 min on weak points, then a verification QCM.\n\n💪 ENCOURAGEMENT: ${emoji} You improve every session. Consistency is key!`;
    }
    return `📊 NIVEAU ACTUEL: ${pct}% — ${pct>=80?'Excellent, continue ainsi !':pct>=60?'Bien, quelques points à consolider.':'Des bases à renforcer.'}\n\n🎯 TOP PRIORITÉS: Revoir ${priority}.\n\n💡 CONSEILS: Refais les formules clés à voix haute. Utilise les flashcards.\n\n⏰ PLAN: 30 min sur les points faibles, puis un QCM de vérification.\n\n💪 ENCOURAGEMENT: ${emoji} Tu progresses à chaque session. La régularité est la clé !`;
  }

  function _localErrorAnalysis(errors, lang) {
    const isEN = lang === 'en';
    const topics = [...new Set(errors.map(e => e.topic))].slice(0,3).join(', ');
    if (isEN) {
      return `🔴 WEAK POINTS: ${topics}.\n\n📚 URGENT REVIEW: Review the corresponding formulas in the course.\n\n💡 TIP: Create memo cards for each key formula.\n\n⏰ ESTIMATED TIME: 1-2 hours of targeted revision.`;
    }
    return `🔴 POINTS FAIBLES: ${topics}.\n\n📚 RÉVISION URGENTE: Revoir les formules correspondantes dans le cours.\n\n💡 ASTUCE: Faire des fiches mémo pour chaque formule clé.\n\n⏰ TEMPS ESTIMÉ: 1-2 heures de révision ciblée.`;
  }

  // ── Public API ───────────────────────────
  return {

    async explain(formula, context, lang = 'fr') {
      const prompt = _buildPrompt('explain', { formula, context, lang });
      try {
        return await _call(prompt, 'explain', 500);
      } catch {
        const isEN = lang === 'en';
        return `📖 ${isEN?'EXPLANATION':'EXPLICATION'}: ${isEN?'This formula is central in the biophysics course. Check your connection for a detailed explanation.':'Cette formule est centrale dans le cours de biophysique. Vérifiez votre connexion pour une explication détaillée.'}\n🔢 ${isEN?'EXAMPLE':'EXEMPLE'}: ${isEN?'See course exercises.':'Voir les exercices du cours.'}\n⚠️ ${isEN?'TRAP':'PIÈGE'}: ${isEN?'Always check units.':'Vérifiez toujours les unités.'}`;
      }
    },

    async generateFlashcardsFromErrors(errors, lang = 'fr') {
      if (!errors || !errors.length) return [];
      // Deduplicate and prioritize by frequency
      const topicMap = {};
      errors.forEach(e => {
        const key = e.topic + '|' + e.correct;
        if (!topicMap[key]) topicMap[key] = { ...e, count: 0 };
        topicMap[key].count++;
      });
      const sortedErrors = Object.values(topicMap).sort((a, b) => b.count - a.count);
      const topErrors = sortedErrors.slice(0, 10);

      const prompt = _buildPrompt('flashcards_from_errors', { errors: topErrors, lang });
      try {
        const raw = await _call(prompt, 'flashcards', 900);
        const match = raw.match(/\[[\s\S]*\]/);
        if (!match) throw new Error('No JSON');
        const cards = JSON.parse(match[0]);
        if (!Array.isArray(cards) || cards.length === 0) throw new Error('Empty');
        cards.forEach(c => { if (c.topic) _usedFlashTopics.add(c.topic); });
        _saveSession();
        return cards;
      } catch {
        // Build cards directly from errors
        return topErrors.slice(0, 5).map(e => ({
          question: e.question || `${lang === 'en' ? 'What is the correct answer for' : 'Quelle est la bonne réponse pour'} : ${e.topic} ?`,
          answer: e.correct,
          topic: e.topic,
        }));
      }
    },

    async generateExamQCM(count = 20, lang = 'fr') {
      const usedKeys = [..._usedQCMKeys].slice(-30);
      const prompt = _buildPrompt('exam_qcm', { count, usedKeys, lang });
      try {
        const raw = await _call(prompt, 'qcm', 1200);
        const match = raw.match(/\[[\s\S]*\]/);
        if (!match) throw new Error('No JSON');
        const parsed = JSON.parse(match[0]);
        if (!Array.isArray(parsed) || parsed.length < Math.floor(count * 0.6)) throw new Error('Too few');
        // Register used topics
        parsed.forEach(q => { if (q.topic) _usedQCMKeys.add(q.topic + ':' + q.q.slice(0, 30)); });
        _sessionSeed = Date.now().toString(36);
        _saveSession();
        return parsed.slice(0, count);
      } catch {
        // Fallback: shuffle static pool
        const pool = [...QCM_FALLBACK].sort(() => Math.random() - .5);
        return pool.slice(0, Math.min(count, pool.length));
      }
    },

    async analyzeDiagnostic(score, total, errors, lang = 'fr') {
      const prompt = _buildPrompt('diagnostic', { score, total, errors, lang });
      try { return await _call(prompt, 'diagnostic', 700); }
      catch { return _localDiagnostic(score, total, errors, lang); }
    },

    async generateStats(topicErrors, totalErrors, recentErrors, lang = 'fr') {
      const prompt = _buildPrompt('stats', { topicErrors, totalErrors, recentErrors, lang });
      try { return await _call(prompt, 'stats', 700); }
      catch {
        const isEN = lang === 'en';
        const top = topicErrors.slice(0,3).map(([t]) => t).join(', ');
        return isEN
          ? `📉 ANALYSIS: Errors concentrated on: ${top}.\n\n🎯 TOP 3: ${top}.\n\n📝 ADVICE: Redo formulas, then targeted exercises.\n\n💡 STRATEGY: 20 min per weak topic, then a validation QCM.\n\n🚀 GOAL: Aim for 80% on next QCMs.`
          : `📉 ANALYSE: Les erreurs se concentrent sur: ${top}.\n\n🎯 TOP 3: ${top}.\n\n📝 CONSEILS: Refais les formules, puis exercices ciblés.\n\n💡 STRATÉGIE: 20 min par sujet faible, puis QCM de validation.\n\n🚀 OBJECTIF: Viser 80% aux prochains QCM.`;
      }
    },

    async analyzeErrors(errors, lang = 'fr') {
      const prompt = _buildPrompt('error_analysis', { errors, lang });
      try { return await _call(prompt, 'diagnostic', 600); }
      catch { return _localErrorAnalysis(errors, lang); }
    },

    getQCMFallback(count = 20) {
      return [...QCM_FALLBACK].sort(() => Math.random() - .5).slice(0, Math.min(count, QCM_FALLBACK.length));
    },

    resetSession() {
      _usedFlashTopics.clear();
      _usedQCMKeys.clear();
      _sessionSeed = Date.now().toString(36);
      _saveSession();
    },

    isOnline: () => navigator.onLine,
  };
})();
