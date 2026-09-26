// Civita web sitesi: dil seçimi (TR/EN) ve komut listesi.
// Sayfanın HTML'i Türkçe yazılır; İngilizce metinler aşağıdaki sözlükten gelir.

const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1135134099061878795";
const SUPPORT_URL = "https://discord.gg/n2ZxqyrqaU"; // destek sunucusu (boşken düğme gizlenir)

const EN = {
  nav_features: "Features",
  nav_commands: "Commands",
  nav_faq: "FAQ",
  tagline: "Turn your Discord server into a living ancient city that your members build together.",
  add: "Add to Discord",
  support: "Support Server",
  hero_alt: "A Civita city with a temple, agora, amphitheatre, bathhouse, a library on the cliff, an aqueduct and a triumphal arch, decorated with bunting",
  hero_caption: "A real Civita city: every building was raised by its members.",
  how_title: "How does it work?",
  how_lead: "Nobody has to do anything extra: the livelier your server, the faster your city grows.",
  step1_title: "Chat and play",
  step1_text: "Messages bring 🪨 Marble, voice channels bring 🫒 Olives and mini games bring 🪙 Coins. It all goes to the city's shared treasury.",
  step2_title: "Let the Council decide",
  step2_text: "Members vote on the next building with buttons. When the treasury is full, construction completes on its own.",
  step3_title: "Watch your city grow",
  step3_text: "Every building gives your server a new power and appears in your city's picture. No two cities look alike.",
  features_title: "What's inside?",
  features_lead: "A city-building game, fun mini games and the server tools you need, in one bot.",
  f_picture_title: "A drawn city",
  f_picture_text: "Type /city to see a picture of your city. The sky follows the time of day: dawn, day, sunset, starry night.",
  f_games_title: "Mini games",
  f_games_text: "Trivia with 200+ questions, Reflex for quick fingers and Timeline, unlocked by the Library. Once you build an Amphitheatre, winners earn Coins for the city.",
  f_vitality_title: "Vitality",
  f_vitality_text: "How many people contribute each day sets your city's vitality. Lively cities produce more, and their streets fill up.",
  f_titles_title: "Titles and roles",
  f_titles_text: "Six titles from Newcomer to Council Member. Link a Discord role to any title and Civita hands it out.",
  f_world_title: "World and sister cities",
  f_world_text: "Cities that want to can compete by prestige. Pair up with other servers as sister cities: lively sisters boost production and you can send each other caravans.",
  f_festivals_title: "Festivals",
  f_festivals_text: "Fireworks at New Year, blossoms in spring: on special days the city is decorated and bonuses arrive.",
  f_welcome_title: "Welcome card",
  f_welcome_text: "New members are greeted with a laurel wreath over your server's own city.",
  f_mod_title: "Moderation and support",
  f_mod_text: "Warn, timeout, kick, ban, purge messages, a moderation log, new member verification and support tickets in private threads. All based on Discord permissions.",
  gallery_title: "Scenes from the city",
  gallery_lead: "Every picture is drawn by Civita itself, based on the city as it is right now.",
  young_alt: "A newly founded city: a small temple and scaffolding over an olive grove",
  young_caption: "The first days: a small temple and the first construction.",
  dusk_alt: "A grown city at sunset",
  dusk_caption: "Sunset: torches are lit and a new monument is rising.",
  night_alt: "A city celebrating with fireworks at night",
  night_caption: "New Year's Eve: fireworks in the sky.",
  welcome_alt: "A welcome card with a profile picture inside a laurel wreath",
  welcome_caption: "A personal welcome card for every new citizen.",
  commands_title: "Commands",
  commands_lead: "Commands appear in each member's own Discord language.",
  faq_title: "Frequently asked questions",
  q1: "Is it free?",
  a1: "Yes. All of Civita's features are free.",
  q2: "Does it read our messages?",
  a2: "No. Civita never reads or stores the content of your messages; it only uses the fact that \"someone sent a message\" to earn resources for the city.",
  q3: "Which languages are supported?",
  a3: "Turkish, English, German and Spanish. Everyone sees Civita in their own Discord language; admins can pick a single language for the server if they prefer.",
  q4: "How do I get started?",
  a4: "Add Civita to your server, choose an announcement channel with /settings announcements and keep chatting. The first Council vote arrives within minutes.",
  q5: "Will it clash with other bots?",
  a5: "No. Welcome messages are off by default, and using the moderation tools is up to you.",
  cta_title: "Ready to found your city?",
  footer_team: "© 2026 The Civita team",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

const COMMANDS = {
  tr: [
    ["Herkes için", [
      ["/şehir", "Şehrin resmi, hazinesi ve aktif proje"],
      ["/binalar", "Binaların etkileri ve maliyetleri"],
      ["/profil", "Şehre katkın ve unvanın"],
      ["/sıralama", "En çok katkı verenler"],
      ["/dünya", "Dünya şehir sıralaması"],
      ["/kardeş-şehir liste", "Kardeş şehirler"],
      ["/festivaller", "Festival takvimi"],
      ["/gazete", "Haftalık şehir gazetesi"],
      ["/emirler", "Günün Meclis Emirleri"],
      ["/oyun bilgi", "Bilgi Yarışması"],
      ["/oyun refleks", "Refleks oyunu"],
      ["/oyun tarih-sırası", "Tarih Sırası (Kütüphane gerekir)"],
    ]],
    ["Yöneticiler için", [
      ["/ayarlar", "Dil, duyuru kanalı, inşa modu, unvan rolleri, hoş geldin, otomatik rol, mod-log, destek talepleri, doğrulama, dünya sıralaması, festivaller, gazete"],
      ["/inşa", "Sıradaki projeyi seç (yönetici modunda)"],
      ["/pazar", "Agora'da Mermer ↔ Zeytin takası"],
      ["/kardeş-şehir davet · katıl · kervan · ayrıl", "Kardeş şehir kur, kervan gönder"],
    ]],
    ["Moderasyon", [
      ["/uyar · /uyarılar · /uyarı-sil", "Uyarı kaydı"],
      ["/sustur", "Geçici susturma"],
      ["/at · /yasakla", "Sunucudan atma ve yasaklama"],
      ["/temizle", "Son mesajları silme"],
      ["/talep ekle · /talep çıkar · /talep kapat", "Destek talepleri"],
    ]],
  ],
  en: [
    ["For everyone", [
      ["/city", "Your city's picture, treasury and current project"],
      ["/buildings", "Building effects and costs"],
      ["/profile", "Your contribution and title"],
      ["/leaderboard", "Top contributors"],
      ["/world", "World city ranking"],
      ["/sister-cities list", "Sister cities"],
      ["/festivals", "Festival calendar"],
      ["/gazette", "Weekly city gazette"],
      ["/orders", "Today's Council Orders"],
      ["/game trivia", "Trivia"],
      ["/game reflex", "Reflex game"],
      ["/game timeline", "Timeline (needs a Library)"],
    ]],
    ["For admins", [
      ["/settings", "Language, announcements, build mode, title roles, welcome, auto role, mod log, support tickets, verification, world ranking, festivals, gazette"],
      ["/build", "Choose the next project (admin mode)"],
      ["/market", "Trade Marble ↔ Olives in the Agora"],
      ["/sister-cities invite · join · caravan · leave", "Pair up with sister cities, send caravans"],
    ]],
    ["Moderation", [
      ["/warn · /warnings · /unwarn", "Warning records"],
      ["/timeout", "Temporary mute"],
      ["/kick · /ban", "Kick and ban"],
      ["/purge", "Delete recent messages"],
      ["/ticket add · /ticket remove · /ticket close", "Support tickets"],
    ]],
  ],
};

// Sayfanın ilk (Türkçe) metinlerini sakla ki Türkçeye geri dönülebilsin.
const TR = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (TR[el.dataset.i18n] = el.textContent));
document.querySelectorAll("[data-i18n-alt]").forEach((el) => (TR[el.dataset.i18nAlt] = el.alt));

function renderCommands(lang) {
  const box = document.getElementById("command-lists");
  box.innerHTML = "";
  for (const [title, items] of COMMANDS[lang]) {
    const column = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = title;
    const list = document.createElement("ul");
    for (const [command, text] of items) {
      const item = document.createElement("li");
      const code = document.createElement("code");
      code.textContent = command;
      item.append(code, " — " + text);
      list.append(item);
    }
    column.append(heading, list);
    box.append(column);
  }
}

function setLanguage(lang) {
  const text = lang === "en" ? EN : TR;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = text[el.dataset.i18n]));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => (el.alt = text[el.dataset.i18nAlt]));
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = lang === "en" ? "TR" : "EN";
  document.getElementById("privacy-link").href = lang === "en" ? "privacy.html" : "gizlilik.html";
  document.getElementById("terms-link").href = lang === "en" ? "terms.html" : "kosullar.html";
  renderCommands(lang);
  try {
    localStorage.setItem("civita-lang", lang);
  } catch (error) {
    // Tarayıcı kayda izin vermiyorsa sorun değil; seçim yalnızca bu sayfada geçerli olur.
  }
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem("civita-lang");
    if (saved === "tr" || saved === "en") return saved;
  } catch (error) {
    // yok say
  }
  return (navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en";
}

document.querySelectorAll(".invite").forEach((el) => (el.href = INVITE_URL));
document.querySelectorAll(".support").forEach((el) => {
  if (SUPPORT_URL) el.href = SUPPORT_URL;
  else el.classList.add("hidden");
});
document.getElementById("lang-toggle").addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "tr" : "en");
});
setLanguage(initialLanguage());
