// Bu dosya scripts/build_site_pages.py tarafından üretilir; elle düzenlemeyin.
window.CIVITA_TEXTS = {
 "en": {
  "title_privacy": "Privacy Policy — Civita",
  "title_terms": "Terms of Service — Civita"
 },
 "de": {
  "title_privacy": "Datenschutz — Civita",
  "title_terms": "Nutzungsbedingungen — Civita",
  "legal_note_de": "Diese Seite gibt es auf Türkisch und Englisch; unten steht die englische Fassung."
 },
 "es": {
  "title_privacy": "Privacidad — Civita",
  "title_terms": "Términos — Civita",
  "legal_note_es": "Esta página existe en turco e inglés; abajo está la versión en inglés."
 }
};
// Sayfa başlığı: hangi hukuki sayfadaysak onun adı.
(() => {
  const key = location.pathname.includes('terms') ? 'terms' : 'privacy';
  for (const lang of Object.keys(window.CIVITA_TEXTS)) window.CIVITA_TEXTS[lang].page_title = window.CIVITA_TEXTS[lang]['title_' + key];
})();
