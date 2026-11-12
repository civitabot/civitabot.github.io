// Civita web sitesi: alt sayfaların (Premium, gizlilik, koşullar) ortak dil motoru.
// Sayfanın HTML'i Türkçe yazılır; diğer dillerin metinleri sayfanın kendi sözlüğünden gelir (window.CIVITA_TEXTS).
// Dil seçimi ana sayfayla aynı yerde saklanır ("civita-lang"): bir sayfada seçilen dil bütün sitede geçerli olur.
//
// İşaretler:
//   data-i18n="anahtar"        → düz yazı (textContent)
//   data-i18n-html="anahtar"   → içinde <code>, <strong> gibi biçimler olan yazı (sözlük bizim, dışarıdan yazı girmez)
//   data-i18n-alt="anahtar"    → resim açıklaması
//   data-lang="tr" / "en"      → yalnızca o dilde görünen blok (uzun hukuki metinler); DE/ES İngilizcesini görür

const LANGUAGES = ["tr", "en", "de", "es"];
const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1135134099061878795&permissions=2534735348886678&integration_type=0&scope=bot+applications.commands&response_type=code&redirect_uri=https%3A%2F%2Fcivita.kenzai.dev%2Fadded.html";

const NAV = {
  en: { nav_features: "Features", nav_premium: "Premium", nav_world: "Ranking", nav_panel: "Dashboard", nav_add: "Add to Discord",
        foot_privacy: "Privacy Policy", foot_terms: "Terms of Service", foot_team: "© 2026 The Civita team" },
  de: { nav_features: "Funktionen", nav_premium: "Premium", nav_world: "Rangliste", nav_panel: "Dashboard", nav_add: "Zu Discord hinzufügen",
        foot_privacy: "Datenschutz", foot_terms: "Nutzungsbedingungen", foot_team: "© 2026 Das Civita-Team" },
  es: { nav_features: "Funciones", nav_premium: "Premium", nav_world: "Clasificación", nav_panel: "Panel", nav_add: "Añadir a Discord",
        foot_privacy: "Privacidad", foot_terms: "Términos", foot_team: "© 2026 El equipo de Civita" },
};

const TR = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (TR[el.dataset.i18n] = el.textContent));
document.querySelectorAll("[data-i18n-html]").forEach((el) => (TR[el.dataset.i18nHtml] = el.innerHTML));
document.querySelectorAll("[data-i18n-alt]").forEach((el) => (TR[el.dataset.i18nAlt] = el.alt));
const TR_TITLE = document.title;
const TR_DESCRIPTION = document.querySelector('meta[name="description"]')?.content;

function dictionary(lang) {
  if (lang === "tr") return TR;
  return { ...(NAV[lang] || {}), ...((window.CIVITA_TEXTS || {})[lang] || {}) };
}

function setLanguage(lang) {
  const text = dictionary(lang);
  const pick = (key) => text[key] ?? TR[key];
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = pick(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = pick(el.dataset.i18nHtml)));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => (el.alt = pick(el.dataset.i18nAlt)));
  // Uzun metinler yalnızca Türkçe ve İngilizce: Almanca ve İspanyolca İngilizcesini görür.
  const block = lang === "tr" ? "tr" : "en";
  document.querySelectorAll("[data-lang]").forEach((el) => el.classList.toggle("hidden", el.dataset.lang !== block));
  document.querySelectorAll("[data-lang-note]").forEach((el) => el.classList.toggle("hidden", lang === "tr" || lang === "en"));
  document.title = text.page_title || TR_TITLE;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = text.page_description || TR_DESCRIPTION;
  document.documentElement.lang = lang;
  const select = document.getElementById("lang-select");
  if (select) select.value = lang;
  try {
    localStorage.setItem("civita-lang", lang);
  } catch (error) {
    // Tarayıcı kayda izin vermiyorsa seçim yalnızca bu sayfada geçerli olur.
  }
}

function initialLanguage() {
  const asked = new URLSearchParams(location.search).get("lang");
  if (LANGUAGES.includes(asked)) return asked;
  try {
    const saved = localStorage.getItem("civita-lang");
    if (LANGUAGES.includes(saved)) return saved;
  } catch (error) {
    // yok say
  }
  const preferred = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  for (const code of preferred) {
    const base = code.toLowerCase().slice(0, 2);
    if (LANGUAGES.includes(base)) return base;
  }
  return "en";
}

document.querySelectorAll(".invite").forEach((el) => (el.href = INVITE_URL));
document.getElementById("lang-select")?.addEventListener("change", (event) => setLanguage(event.target.value));
setLanguage(initialLanguage());
