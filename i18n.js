// Minimal i18n for one-page portfolio (CA/ES/EN/FR).
// Switch via buttons, persists in localStorage.
// Supports deep-linking via ?lang=en|fr|es|ca

const T = {
  ca: {
    meta_title: "Laura Graells · Portfolio",
    tagline: "ServiceNow Developer (CSA, ITIL4) · Program Manager (PMP, Scrum Master) · ITSM Automation · Applied AI & Automation",
    cta_contact: "Contacte",

    hero_title: "Perfil",
    hero_body:
      "ServiceNow Developer & Program Manager amb 20 anys d’experiència en delivery IT i transformació de negoci. Certificada CSA i ITIL 4, enfocada a IT Service Management (ITSM) i automatització (Flow Designer, Business Rules, UI Policies, Service Catalog). Actualment aprofundint en Reporting, Predictive Intelligence i explorant Now Assist i AI Agents per ampliar automatitzacions. En paral·lel, estic cursant un Màster d’IA aplicada i automatitzacions (amb focus en Machine Learning, Deep Learning i Responsible & Ethical AI).",
    link_linkedin: "LinkedIn",
    link_cv: "Descarrega CV",
    link_work: "Veure automatitzacions",
    conf_note:
      "Nota: els exemples estan redactats de forma genèrica per protegir informació sensible (sense dades internes ni detalls identificables).",

    focus_title: "Focus actual",
    focus_1: "ServiceNow: desenvolupament, configuració i optimització d’ITSM",
    focus_2: "Automatització: fluxos end-to-end, validacions, controls i UX",
    focus_3: "Dades i analítica: reporting, KPIs i iniciatives amb Predictive Intelligence",

    strengths_title: "Punts forts",
    str_1: "Traducció negoci ↔ tècnic i alineació amb ITIL 4",
    str_2: "Entrega fiable: stakeholders globals, risc, planificació i execució",
    str_3: "Orientació a valor: menys tasques manuals, millor traçabilitat i experiència d’usuari",

    work_title: "Automatitzacions i millores (selecció)",
    meta_tech: "Tech",
    meta_impact: "Impacte",

    w1_title: "ITSM workflow optimization (Incident/Request/Change)",
    w1_body: "Millora de fluxos i formularis, regles de negoci i polítiques UI per reduir fricció, errors i reassignacions.",
    w1_impact: "millor consistència i velocitat operativa",

    w2_title: "Catàleg de serveis i automatització de sol·licituds",
    w2_body: "Disseny d’items de catàleg amb validacions, aprovacions i tasques automàtiques per estandarditzar el lliurament.",
    w2_impact: "menys manualitat i més traçabilitat",

    w3_title: "Reporting & dashboards per decisions",
    w3_body: "Construcció de reports i dashboards per visibilitat d’operació, adopció i qualitat de servei; suport a KPIs.",
    w3_impact: "insights accionables i millor governança",

    w4_title: "Categorització i analítica amb Predictive Intelligence",
    w4_body: "Aprenentatge i aplicació de capacitats de classificació per millorar categorització d’incidents i analítica operativa.",
    w4_impact: "millor triatge i dades més netes",

    w5_title: "Experimentació amb Now Assist i AI Agents",
    w5_body: "Exploració de Skill Kit i Context Menu per ampliar automatització i assistència en processos ITSM (en entorn controlat).",
    w5_impact: "base per casos d’ús d’assistència i automatització",

    work_hint:
      "Tip: si vols que això “vengui” millor sense risc, afegeix per cada cas 1 mètrica aproximada (rang) o “abans/després”.",

    background_title: "Experiència (resum)",
    bg_1: "ServiceNow Developer & Program Manager (2023–avui) · desenvolupament i automatització ITSM",
    bg_2: "Global IT Program Manager (2021–2023) · rollout global de ServiceNow, migració i estandardització",
    bg_3: "Project/Program Management en manufacturing (MES Siemens SIMATIC IT), transport i healthcare",

    training_title: "Formació i certificacions",
    tr_1: "ServiceNow Certified System Administrator (CSA)",
    tr_2: "ITIL 4 Foundation · Scrum Master · PMP",
    tr_3: "Màster d’IA aplicada i automatitzacions (en curs) · ML, DL i Responsible & Ethical AI",

    contact_title: "Contacte",
    contact_body: "Per networking, col·laboracions o intercanvi d’idees sobre automatització i IA aplicada:",
    contact_email: "Enviar email",
    contact_linkedin: "LinkedIn",
    back_top: "Tornar a dalt",
  },

  es: {
    meta_title: "Laura Graells · Portfolio",
    tagline: "ServiceNow Developer (CSA, ITIL4) · Program Manager (PMP, Scrum Master) · Automatización ITSM · IA aplicada y automatización",
    cta_contact: "Contacto",

    hero_title: "Perfil",
    hero_body:
      "ServiceNow Developer & Program Manager con 20 años de experiencia en delivery IT y transformación de negocio. Certificada CSA e ITIL 4, enfocada a IT Service Management (ITSM) y automatización (Flow Designer, Business Rules, UI Policies, Service Catalog). Actualmente profundizando en Reporting, Predictive Intelligence y explorando Now Assist y AI Agents para ampliar automatizaciones. En paralelo, estoy cursando un Máster en IA aplicada y automatizaciones (con foco en Machine Learning, Deep Learning y Responsible & Ethical AI).",
    link_linkedin: "LinkedIn",
    link_cv: "Descargar CV",
    link_work: "Ver automatizaciones",
    conf_note:
      "Nota: los ejemplos están redactados de forma genérica para proteger información sensible (sin datos internos ni detalles identificables).",

    focus_title: "Enfoque actual",
    focus_1: "ServiceNow: desarrollo, configuración y optimización de ITSM",
    focus_2: "Automatización: flujos end-to-end, validaciones, controles y UX",
    focus_3: "Datos y analítica: reporting, KPIs e iniciativas con Predictive Intelligence",

    strengths_title: "Fortalezas",
    str_1: "Traducción negocio ↔ técnico y alineación con ITIL 4",
    str_2: "Entrega fiable: stakeholders globales, riesgo, planificación y ejecución",
    str_3: "Orientación a valor: menos tareas manuales, mejor trazabilidad y experiencia de usuario",

    work_title: "Automatizaciones y mejoras (selección)",
    meta_tech: "Tech",
    meta_impact: "Impacto",

    w1_title: "Optimización de workflows ITSM (Incident/Request/Change)",
    w1_body: "Mejora de flujos y formularios, reglas de negocio y políticas UI para reducir fricción, errores y reasignaciones.",
    w1_impact: "mayor consistencia y velocidad operativa",

    w2_title: "Catálogo de servicios y automatización de solicitudes",
    w2_body: "Diseño de ítems de catálogo con validaciones, aprobaciones y tareas automáticas para estandarizar la entrega.",
    w2_impact: "menos manualidad y mayor trazabilidad",

    w3_title: "Reporting & dashboards para decisiones",
    w3_body: "Construcción de reports y dashboards para visibilidad de operación, adopción y calidad de servicio; soporte a KPIs.",
    w3_impact: "insights accionables y mejor gobernanza",

    w4_title: "Categorización y analítica con Predictive Intelligence",
    w4_body: "Aprendizaje y aplicación de capacidades de clasificación para mejorar la categorización de incidentes y la analítica operativa.",
    w4_impact: "mejor triaje y datos más limpios",

    w5_title: "Experimentación con Now Assist y AI Agents",
    w5_body: "Exploración de Skill Kit y Context Menu para ampliar automatización y asistencia en procesos ITSM (en entorno controlado).",
    w5_impact: "base para casos de uso de asistencia y automatización",

    work_hint:
      "Tip: para que esto “venda” mejor sin riesgo, añade por cada caso 1 métrica aproximada (rango) o un antes/después.",

    background_title: "Experiencia (resumen)",
    bg_1: "ServiceNow Developer & Program Manager (2023–hoy) · desarrollo y automatización ITSM",
    bg_2: "Global IT Program Manager (2021–2023) · rollout global de ServiceNow, migración y estandarización",
    bg_3: "Project/Program Management en manufacturing (MES Siemens SIMATIC IT), transporte y healthcare",

    training_title: "Formación y certificaciones",
    tr_1: "ServiceNow Certified System Administrator (CSA)",
    tr_2: "ITIL 4 Foundation · Scrum Master · PMP",
    tr_3: "Máster en IA aplicada y automatizaciones (en curso) · ML, DL y Responsible & Ethical AI",

    contact_title: "Contacto",
    contact_body: "Para networking, colaboraciones o intercambio de ideas sobre automatización e IA aplicada:",
    contact_email: "Enviar email",
    contact_linkedin: "LinkedIn",
    back_top: "Volver arriba",
  },

  en: {
    meta_title: "Laura Graells · Portfolio",
    tagline: "ServiceNow Developer (CSA, ITIL4) · Program Manager (PMP, Scrum Master) · ITSM Automation · Applied AI & Automation",
    cta_contact: "Contact",

    hero_title: "Profile",
    hero_body:
      "ServiceNow Developer & Program Manager with 20 years of experience in IT delivery and business transformation. CSA and ITIL 4 certified, focused on IT Service Management (ITSM) and automation (Flow Designer, Business Rules, UI Policies, Service Catalog). Currently diving deeper into Reporting, Predictive Intelligence, and exploring Now Assist and AI Agents to expand automation. In parallel, I’m completing a Master’s in Applied AI & Automation (focus on Machine Learning, Deep Learning, and Responsible & Ethical AI).",
    link_linkedin: "LinkedIn",
    link_cv: "Download CV",
    link_work: "View automations",
    conf_note:
      "Note: examples are written generically to protect sensitive information (no internal data or identifiable details).",

    focus_title: "Current focus",
    focus_1: "ServiceNow: ITSM development, configuration and optimization",
    focus_2: "Automation: end-to-end flows, validations, controls and UX",
    focus_3: "Data & analytics: reporting, KPIs and Predictive Intelligence initiatives",

    strengths_title: "Strengths",
    str_1: "Business ↔ technical translation aligned with ITIL 4",
    str_2: "Reliable delivery: global stakeholders, risk, planning and execution",
    str_3: "Value-driven: fewer manual tasks, better traceability and user experience",

    work_title: "Automations & improvements (selected)",
    meta_tech: "Tech",
    meta_impact: "Impact",

    w1_title: "ITSM workflow optimization (Incident/Request/Change)",
    w1_body: "Improved flows and forms, business rules and UI policies to reduce friction, errors and reassignments.",
    w1_impact: "better consistency and operational speed",

    w2_title: "Service Catalog request automation",
    w2_body: "Designed catalog items with validations, approvals and automated tasks to standardize delivery.",
    w2_impact: "less manual work and better traceability",

    w3_title: "Reporting & dashboards for decision-making",
    w3_body: "Built reports and dashboards for operations visibility, adoption and service quality; KPI support.",
    w3_impact: "actionable insights and stronger governance",

    w4_title: "Incident categorization & analytics with Predictive Intelligence",
    w4_body: "Learning and applying classification capabilities to improve incident categorization and operational analytics.",
    w4_impact: "better triage and cleaner data",

    w5_title: "Now Assist & AI Agents experimentation",
    w5_body: "Exploring Skill Kit and Context Menu to extend assistance and automation in ITSM workflows (controlled environment).",
    w5_impact: "foundation for assistant and automation use cases",

    work_hint:
      "Tip: to make this stronger without risk, add 1 approximate metric per case (range) or a before/after statement.",

    background_title: "Experience (summary)",
    bg_1: "ServiceNow Developer & Program Manager (2023–now) · ITSM development and automation",
    bg_2: "Global IT Program Manager (2021–2023) · global ServiceNow rollout, migration and standardization",
    bg_3: "Project/Program Management in manufacturing (Siemens SIMATIC IT MES), transport and healthcare",

    training_title: "Training & certifications",
    tr_1: "ServiceNow Certified System Administrator (CSA)",
    tr_2: "ITIL 4 Foundation · Scrum Master · PMP",
    tr_3: "Master’s in Applied AI & Automation (in progress) · ML, DL & Responsible & Ethical AI",

    contact_title: "Contact",
    contact_body: "For networking, collaborations, or exchanging ideas about automation and applied AI:",
    contact_email: "Email me",
    contact_linkedin: "LinkedIn",
    back_top: "Back to top",
  },

  fr: {
    meta_title: "Laura Graells · Portfolio",
    tagline: "Développeuse ServiceNow (CSA, ITIL4) · Program Manager (PMP, Scrum Master) · Automatisation ITSM · IA appliquée & automatisation",
    cta_contact: "Contact",

    hero_title: "Profil",
    hero_body:
      "Développeuse ServiceNow & Program Manager avec 20 ans d’expérience en delivery IT et transformation des organisations. Certifiée CSA et ITIL 4, spécialisée en IT Service Management (ITSM) et automatisation (Flow Designer, Business Rules, UI Policies, Service Catalog). Actuellement, j’approfondis le reporting, Predictive Intelligence et j’explore Now Assist et les AI Agents pour étendre l’automatisation. En parallèle, je suis un Master en IA appliquée & automatisations (focus Machine Learning, Deep Learning et Responsible & Ethical AI).",
    link_linkedin: "LinkedIn",
    link_cv: "Télécharger le CV",
    link_work: "Voir les automatisations",
    conf_note:
      "Note : les exemples sont volontairement génériques afin de protéger les informations sensibles (pas de données internes ni de détails identifiables).",

    focus_title: "Priorités actuelles",
    focus_1: "ServiceNow : développement, configuration et optimisation ITSM",
    focus_2: "Automatisation : flux de bout en bout, validations, contrôles et UX",
    focus_3: "Données & analytique : reporting, KPIs et initiatives Predictive Intelligence",

    strengths_title: "Points forts",
    str_1: "Traduction business ↔ technique, alignée avec ITIL 4",
    str_2: "Delivery fiable : parties prenantes globales, risques, planification et exécution",
    str_3: "Orientée valeur : moins de tâches manuelles, meilleure traçabilité et meilleure expérience utilisateur",

    work_title: "Automatisations & améliorations (sélection)",
    meta_tech: "Tech",
    meta_impact: "Impact",

    w1_title: "Optimisation des workflows ITSM (Incident/Request/Change)",
    w1_body: "Amélioration des flux et formulaires, business rules et UI policies pour réduire la friction, les erreurs et les réaffectations.",
    w1_impact: "meilleure cohérence et vitesse opérationnelle",

    w2_title: "Automatisation des demandes via Service Catalog",
    w2_body: "Conception d’items de catalogue avec validations, approbations et tâches automatisées pour standardiser la livraison.",
    w2_impact: "moins de travail manuel et meilleure traçabilité",

    w3_title: "Reporting & dashboards pour la décision",
    w3_body: "Création de rapports et tableaux de bord pour la visibilité opérationnelle, l’adoption et la qualité de service ; support KPIs.",
    w3_impact: "insights actionnables et meilleure gouvernance",

    w4_title: "Catégorisation & analytique avec Predictive Intelligence",
    w4_body: "Apprentissage et mise en œuvre de capacités de classification pour améliorer la catégorisation des incidents et l’analytique opérationnelle.",
    w4_impact: "meilleur triage et données plus propres",

    w5_title: "Exploration de Now Assist & AI Agents",
    w5_body: "Exploration de Skill Kit et Context Menu pour étendre l’assistance et l’automatisation des processus ITSM (en environnement contrôlé).",
    w5_impact: "base pour des cas d’usage d’assistance et d’automatisation",

    work_hint:
      "Conseil : pour renforcer le message sans risque, ajoute 1 métrique approximative par cas (fourchette) ou un avant/après.",

    background_title: "Expérience (résumé)",
    bg_1: "ServiceNow Developer & Program Manager (2023–aujourd’hui) · développement et automatisation ITSM",
    bg_2: "Global IT Program Manager (2021–2023) · déploiement global ServiceNow, migration et standardisation",
    bg_3: "Project/Program Management en manufacturing (MES Siemens SIMATIC IT), transport et santé",

    training_title: "Formation & certifications",
    tr_1: "ServiceNow Certified System Administrator (CSA)",
    tr_2: "ITIL 4 Foundation · Scrum Master · PMP",
    tr_3: "Master en IA appliquée & automatisations (en cours) · ML, DL & Responsible & Ethical AI",

    contact_title: "Contact",
    contact_body: "Pour networking, collaborations ou échanges autour de l’automatisation et de l’IA appliquée :",
    contact_email: "M’écrire",
    contact_linkedin: "LinkedIn",
    back_top: "Retour en haut",
  }
};

function applyLang(lang) {
  const dict = T[lang] || T.ca;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k]) el.textContent = dict[k];
  });

  document.querySelectorAll(".chip").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

function initLang() {
  const params = new URLSearchParams(window.location.search);
  const q = (params.get("lang") || "").slice(0, 2).toLowerCase();

  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "ca").slice(0, 2).toLowerCase();
  const defaultLang = T[browser] ? browser : "ca";

  // Priority: ?lang=  > localStorage > browser language > ca
  const initial =
    (q && T[q]) ? q :
    (saved && T[saved]) ? saved :
    defaultLang;

  applyLang(initial);

  document.querySelectorAll(".chip").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });
}

initLang();
