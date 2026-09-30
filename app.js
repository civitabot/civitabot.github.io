// Civita web sitesi: dil seçimi (TR/EN/DE/ES) ve komut listesi.
// Sayfanın HTML'i Türkçe yazılır; diğer dillerin metinleri aşağıdaki sözlüklerden gelir.

const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1135134099061878795";
const SUPPORT_URL = "https://discord.gg/n2ZxqyrqaU"; // destek sunucusu (boşken düğme gizlenir)
const LANGUAGES = ["tr", "en", "de", "es"];

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
  f_events_title: "City events",
  f_events_text: "A merchant ship docks, a storm approaches, the people ask for a festival. Citizens decide by vote; some choices pay off, others come down to luck.",
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
  a4: "Add Civita to your server and keep chatting: it picks a suitable channel for announcements by itself, and the first Council vote arrives within minutes. Admins can change everything with /setup.",
  q5: "Will it clash with other bots?",
  a5: "No. Welcome messages are off by default, and using the moderation tools is up to you.",
  cta_title: "Ready to found your city?",
  footer_team: "© 2026 The Civita team",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

const DE = {
  nav_features: "Funktionen",
  nav_commands: "Befehle",
  nav_faq: "FAQ",
  tagline: "Verwandle deinen Discord-Server in eine lebendige antike Stadt, die eure Mitglieder gemeinsam bauen.",
  add: "Zu Discord hinzufügen",
  support: "Support-Server",
  hero_alt: "Eine Civita-Stadt mit Tempel, Agora, Amphitheater, Badehaus, einer Bibliothek auf der Klippe, einem Aquädukt und einem Triumphbogen, mit Wimpeln geschmückt",
  hero_caption: "Eine echte Civita-Stadt: Jedes Gebäude haben die Mitglieder errichtet.",
  how_title: "Wie funktioniert es?",
  how_lead: "Niemand muss etwas extra tun: Je lebendiger euer Server, desto schneller wächst eure Stadt.",
  step1_title: "Chatten und spielen",
  step1_text: "Nachrichten bringen 🪨 Marmor, Sprachkanäle bringen 🫒 Oliven und Minispiele bringen 🪙 Münzen. Alles fließt in die gemeinsame Stadtkasse.",
  step2_title: "Der Rat entscheidet",
  step2_text: "Die Mitglieder stimmen per Knopfdruck über das nächste Gebäude ab. Ist die Kasse voll, wird der Bau von selbst fertig.",
  step3_title: "Seht eure Stadt wachsen",
  step3_text: "Jedes Gebäude verleiht eurem Server eine neue Fähigkeit und erscheint im Bild eurer Stadt. Keine Stadt gleicht der anderen.",
  features_title: "Was steckt drin?",
  features_lead: "Ein Städtebauspiel, unterhaltsame Minispiele und die Server-Werkzeuge, die ihr braucht – in einem Bot.",
  f_picture_title: "Eine gezeichnete Stadt",
  f_picture_text: "Gib /stadt ein und sieh dir das Bild deiner Stadt an. Der Himmel folgt der Tageszeit: Morgendämmerung, Tag, Sonnenuntergang, Sternennacht.",
  f_games_title: "Minispiele",
  f_games_text: "Ein Quiz mit über 200 Fragen, Reflex für schnelle Finger und die Zeitleiste, die mit der Bibliothek freigeschaltet wird. Sobald ihr ein Amphitheater baut, verdienen Gewinner Münzen für die Stadt.",
  f_vitality_title: "Lebendigkeit",
  f_vitality_text: "Wie viele Leute jeden Tag beitragen, bestimmt die Lebendigkeit eurer Stadt. Lebendige Städte produzieren mehr, und ihre Straßen füllen sich.",
  f_titles_title: "Titel und Rollen",
  f_titles_text: "Sechs Titel vom Gast bis zum Ratsmitglied. Verknüpfe eine Discord-Rolle mit einem Titel, und Civita vergibt sie.",
  f_world_title: "Welt und Partnerstädte",
  f_world_text: "Städte, die möchten, messen sich im Prestige. Werdet Partnerstädte mit anderen Servern: Lebendige Partner steigern die Produktion, und ihr könnt euch Karawanen schicken.",
  f_festivals_title: "Feste",
  f_festivals_text: "Feuerwerk zu Neujahr, Blüten im Frühling: An besonderen Tagen wird die Stadt geschmückt und es gibt Boni.",
  f_events_title: "Stadtereignisse",
  f_events_text: "Ein Handelsschiff legt an, ein Sturm zieht auf, das Volk will ein Fest. Die Bürger entscheiden per Abstimmung; manche Wahl zahlt sich aus, manche hängt vom Glück ab.",
  f_welcome_title: "Willkommenskarte",
  f_welcome_text: "Neue Mitglieder werden mit einem Lorbeerkranz über eurer eigenen Stadt begrüßt.",
  f_mod_title: "Moderation und Support",
  f_mod_text: "Verwarnen, Timeout, Kicken, Bannen, Nachrichten aufräumen, ein Moderationsprotokoll, Verifizierung neuer Mitglieder und Support-Tickets in privaten Threads. Alles auf Basis der Discord-Berechtigungen.",
  gallery_title: "Szenen aus der Stadt",
  gallery_lead: "Jedes Bild zeichnet Civita selbst, so wie die Stadt gerade aussieht.",
  young_alt: "Eine neu gegründete Stadt: ein kleiner Tempel und ein Baugerüst über einem Olivenhain",
  young_caption: "Die ersten Tage: ein kleiner Tempel und die erste Baustelle.",
  dusk_alt: "Eine gewachsene Stadt bei Sonnenuntergang",
  dusk_caption: "Sonnenuntergang: Fackeln brennen, ein neues Denkmal entsteht.",
  night_alt: "Eine Stadt, die nachts mit Feuerwerk feiert",
  night_caption: "Silvester: Feuerwerk am Himmel.",
  welcome_alt: "Eine Willkommenskarte mit einem Profilbild in einem Lorbeerkranz",
  welcome_caption: "Eine persönliche Willkommenskarte für jeden neuen Bürger.",
  commands_title: "Befehle",
  commands_lead: "Die Befehle erscheinen in der Discord-Sprache jedes Mitglieds.",
  faq_title: "Häufige Fragen",
  q1: "Ist es kostenlos?",
  a1: "Ja. Alle Funktionen von Civita sind kostenlos.",
  q2: "Liest es unsere Nachrichten?",
  a2: "Nein. Civita liest und speichert den Inhalt eurer Nachrichten nie; es nutzt nur die Tatsache, dass „jemand eine Nachricht geschrieben hat“, um Ressourcen für die Stadt zu verdienen.",
  q3: "Welche Sprachen werden unterstützt?",
  a3: "Türkisch, Englisch, Deutsch und Spanisch. Jeder sieht Civita in seiner eigenen Discord-Sprache; Admins können auch eine einzige Sprache für den Server festlegen.",
  q4: "Wie fange ich an?",
  a4: "Füge Civita zu deinem Server hinzu und chattet weiter: Es sucht sich selbst einen passenden Kanal für Ankündigungen, und die erste Ratsabstimmung kommt innerhalb weniger Minuten. Admins können mit /einrichtung alles anpassen.",
  q5: "Gibt es Konflikte mit anderen Bots?",
  a5: "Nein. Willkommensnachrichten sind standardmäßig aus, und ob ihr die Moderationswerkzeuge nutzt, entscheidet ihr.",
  cta_title: "Bereit, eure Stadt zu gründen?",
  footer_team: "© 2026 Das Civita-Team",
  privacy: "Datenschutzerklärung (EN)",
  terms: "Nutzungsbedingungen (EN)",
};

const ES = {
  nav_features: "Funciones",
  nav_commands: "Comandos",
  nav_faq: "Preguntas",
  tagline: "Convierte tu servidor de Discord en una ciudad antigua viva que sus miembros construyen juntos.",
  add: "Añadir a Discord",
  support: "Servidor de soporte",
  hero_alt: "Una ciudad de Civita con templo, ágora, anfiteatro, termas, una biblioteca en el acantilado, un acueducto y un arco de triunfo, decorada con banderines",
  hero_caption: "Una ciudad real de Civita: cada edificio lo levantaron sus miembros.",
  how_title: "¿Cómo funciona?",
  how_lead: "Nadie tiene que hacer nada extra: cuanto más activo esté vuestro servidor, más rápido crece la ciudad.",
  step1_title: "Chatead y jugad",
  step1_text: "Los mensajes traen 🪨 Mármol, los canales de voz traen 🫒 Aceitunas y los minijuegos traen 🪙 Monedas. Todo va al tesoro común de la ciudad.",
  step2_title: "Que decida el Consejo",
  step2_text: "Los miembros votan el próximo edificio con botones. Cuando el tesoro se llena, la obra se completa sola.",
  step3_title: "Ved crecer vuestra ciudad",
  step3_text: "Cada edificio da a vuestro servidor un nuevo poder y aparece en la imagen de la ciudad. No hay dos ciudades iguales.",
  features_title: "¿Qué incluye?",
  features_lead: "Un juego de construir ciudades, minijuegos divertidos y las herramientas de servidor que necesitáis, en un solo bot.",
  f_picture_title: "Una ciudad dibujada",
  f_picture_text: "Escribe /ciudad para ver la imagen de tu ciudad. El cielo sigue la hora del día: amanecer, día, atardecer, noche estrellada.",
  f_games_title: "Minijuegos",
  f_games_text: "Trivia con más de 200 preguntas, Reflejos para dedos rápidos y Cronología, que se desbloquea con la Biblioteca. Cuando construyáis un Anfiteatro, los ganadores consiguen Monedas para la ciudad.",
  f_vitality_title: "Vitalidad",
  f_vitality_text: "Cuántas personas aportan cada día marca la vitalidad de la ciudad. Las ciudades vivas producen más y sus calles se llenan.",
  f_titles_title: "Títulos y roles",
  f_titles_text: "Seis títulos, de Visitante a Miembro del Consejo. Vincula un rol de Discord a cualquier título y Civita lo reparte.",
  f_world_title: "Mundo y ciudades hermanas",
  f_world_text: "Las ciudades que quieran compiten por prestigio. Hermanaos con otros servidores: las hermanas activas aumentan la producción y podéis enviaros caravanas.",
  f_festivals_title: "Festivales",
  f_festivals_text: "Fuegos artificiales en Año Nuevo, flores en primavera: en días especiales la ciudad se decora y llegan bonificaciones.",
  f_events_title: "Eventos de la ciudad",
  f_events_text: "Atraca un barco mercante, se acerca una tormenta, el pueblo pide una fiesta. Los ciudadanos deciden por votación; algunas decisiones salen bien y otras dependen de la suerte.",
  f_welcome_title: "Tarjeta de bienvenida",
  f_welcome_text: "Los nuevos miembros reciben una corona de laurel sobre la propia ciudad de vuestro servidor.",
  f_mod_title: "Moderación y soporte",
  f_mod_text: "Advertir, aislar, expulsar, banear, purgar mensajes, un registro de moderación, verificación de nuevos miembros y tickets de soporte en hilos privados. Todo según los permisos de Discord.",
  gallery_title: "Escenas de la ciudad",
  gallery_lead: "Cada imagen la dibuja Civita, según cómo está la ciudad en ese momento.",
  young_alt: "Una ciudad recién fundada: un pequeño templo y un andamio sobre un olivar",
  young_caption: "Los primeros días: un pequeño templo y la primera obra.",
  dusk_alt: "Una ciudad crecida al atardecer",
  dusk_caption: "Atardecer: se encienden las antorchas y se alza un nuevo monumento.",
  night_alt: "Una ciudad celebrando con fuegos artificiales de noche",
  night_caption: "Nochevieja: fuegos artificiales en el cielo.",
  welcome_alt: "Una tarjeta de bienvenida con una foto de perfil dentro de una corona de laurel",
  welcome_caption: "Una tarjeta de bienvenida personal para cada nuevo ciudadano.",
  commands_title: "Comandos",
  commands_lead: "Los comandos aparecen en el idioma de Discord de cada miembro.",
  faq_title: "Preguntas frecuentes",
  q1: "¿Es gratis?",
  a1: "Sí. Todas las funciones de Civita son gratuitas.",
  q2: "¿Lee nuestros mensajes?",
  a2: "No. Civita nunca lee ni guarda el contenido de vuestros mensajes; solo usa el hecho de que «alguien escribió un mensaje» para conseguir recursos para la ciudad.",
  q3: "¿Qué idiomas admite?",
  a3: "Turco, inglés, alemán y español. Cada persona ve Civita en su propio idioma de Discord; si lo prefieren, los admins pueden elegir un único idioma para el servidor.",
  q4: "¿Cómo empiezo?",
  a4: "Añade Civita a tu servidor y seguid chateando: elige por sí mismo un canal adecuado para los anuncios y la primera votación del Consejo llega en pocos minutos. Los admins pueden cambiarlo todo con /configurar.",
  q5: "¿Choca con otros bots?",
  a5: "No. Los mensajes de bienvenida están desactivados por defecto, y usar las herramientas de moderación depende de vosotros.",
  cta_title: "¿Listos para fundar vuestra ciudad?",
  footer_team: "© 2026 El equipo de Civita",
  privacy: "Política de privacidad (EN)",
  terms: "Términos del servicio (EN)",
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
      ["/davet", "Civita'yı kendi sunucuna ekle"],
    ]],
    ["Yöneticiler için", [
      ["/kurulum", "Bütün ayarları menülerle, adım adım yap"],
      ["/ayarlar", "Dil, duyuru kanalı, inşa modu, unvan rolleri, hoş geldin, otomatik rol, mod-log, destek talepleri, doğrulama, dünya sıralaması, festivaller, gazete"],
      ["/inşa", "Sıradaki projeyi seç (yönetici modunda)"],
      ["/pazar", "Mermer ↔ Zeytin takası (Agora kurulunca kur iyileşir)"],
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
      ["/invite", "Add Civita to your own server"],
    ]],
    ["For admins", [
      ["/setup", "Set everything up step by step with menus"],
      ["/settings", "Language, announcements, build mode, title roles, welcome, auto role, mod log, support tickets, verification, world ranking, festivals, gazette"],
      ["/build", "Choose the next project (admin mode)"],
      ["/market", "Trade Marble ↔ Olives (better rates with an Agora)"],
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
  de: [
    ["Für alle", [
      ["/stadt", "Bild, Kasse und aktuelles Projekt deiner Stadt"],
      ["/gebäude", "Wirkungen und Kosten der Gebäude"],
      ["/profil", "Dein Beitrag und dein Titel"],
      ["/rangliste", "Die größten Beitragenden"],
      ["/welt", "Weltrangliste der Städte"],
      ["/partnerstädte liste", "Partnerstädte"],
      ["/feste", "Festkalender"],
      ["/zeitung", "Wöchentliche Stadtzeitung"],
      ["/aufträge", "Die heutigen Ratsaufträge"],
      ["/spiel quiz", "Quiz"],
      ["/spiel reflex", "Reaktionsspiel"],
      ["/spiel zeitleiste", "Zeitleiste (braucht eine Bibliothek)"],
      ["/einladen", "Civita zu deinem eigenen Server hinzufügen"],
    ]],
    ["Für Admins", [
      ["/einrichtung", "Alles Schritt für Schritt mit Menüs einrichten"],
      ["/einstellungen", "Sprache, Ankündigungen, Baumodus, Titelrollen, Willkommen, Auto-Rolle, Mod-Log, Support-Tickets, Verifizierung, Weltrangliste, Feste, Zeitung"],
      ["/bauen", "Das nächste Projekt wählen (Admin-Modus)"],
      ["/markt", "Marmor ↔ Oliven tauschen (bessere Kurse mit einer Agora)"],
      ["/partnerstädte einladen · beitreten · karawane · verlassen", "Partnerstädte gründen, Karawanen schicken"],
    ]],
    ["Moderation", [
      ["/verwarnen · /verwarnungen · /verwarnung-löschen", "Verwarnungen"],
      ["/timeout", "Vorübergehend stummschalten"],
      ["/kicken · /bannen", "Kicken und bannen"],
      ["/aufräumen", "Letzte Nachrichten löschen"],
      ["/ticket hinzufügen · /ticket entfernen · /ticket schließen", "Support-Tickets"],
    ]],
  ],
  es: [
    ["Para todos", [
      ["/ciudad", "La imagen, el tesoro y la obra actual de tu ciudad"],
      ["/edificios", "Efectos y costes de los edificios"],
      ["/perfil", "Tu aportación y tu título"],
      ["/clasificación", "Quienes más aportan"],
      ["/mundo", "Ranking mundial de ciudades"],
      ["/ciudades-hermanas lista", "Ciudades hermanas"],
      ["/festivales", "Calendario de festivales"],
      ["/gaceta", "Gaceta semanal de la ciudad"],
      ["/órdenes", "Las órdenes del Consejo de hoy"],
      ["/juego trivia", "Trivia"],
      ["/juego reflejos", "Juego de reflejos"],
      ["/juego cronología", "Cronología (requiere una Biblioteca)"],
      ["/invitar", "Añade Civita a tu propio servidor"],
    ]],
    ["Para admins", [
      ["/configurar", "Configúralo todo paso a paso con menús"],
      ["/ajustes", "Idioma, anuncios, modo de construcción, roles de títulos, bienvenida, rol automático, registro de moderación, tickets de soporte, verificación, ranking mundial, festivales, gaceta"],
      ["/construir", "Elige el próximo proyecto (modo admin)"],
      ["/mercado", "Cambia Mármol ↔ Aceitunas (mejor cambio con un Ágora)"],
      ["/ciudades-hermanas invitar · unirse · caravana · salir", "Hermanaos con otras ciudades, enviad caravanas"],
    ]],
    ["Moderación", [
      ["/advertir · /advertencias · /quitar-advertencia", "Registro de advertencias"],
      ["/aislar", "Silenciar temporalmente"],
      ["/expulsar · /banear", "Expulsar y banear"],
      ["/purgar", "Borrar mensajes recientes"],
      ["/ticket añadir · /ticket quitar · /ticket cerrar", "Tickets de soporte"],
    ]],
  ],
};

// Sayfanın ilk (Türkçe) metinlerini sakla ki Türkçeye geri dönülebilsin.
const TR = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (TR[el.dataset.i18n] = el.textContent));
document.querySelectorAll("[data-i18n-alt]").forEach((el) => (TR[el.dataset.i18nAlt] = el.alt));
const TEXTS = { tr: TR, en: EN, de: DE, es: ES };

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
  const text = TEXTS[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = text[el.dataset.i18n]));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => (el.alt = text[el.dataset.i18nAlt]));
  document.documentElement.lang = lang;
  document.getElementById("lang-select").value = lang;
  // Hukuki sayfalar Türkçe ve İngilizce; diğer diller İngilizcesine gider.
  document.getElementById("privacy-link").href = lang === "tr" ? "gizlilik.html" : "privacy.html";
  document.getElementById("terms-link").href = lang === "tr" ? "kosullar.html" : "terms.html";
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
    if (LANGUAGES.includes(saved)) return saved;
  } catch (error) {
    // yok say
  }
  // Tarayıcının dil listesinden desteklenen ilk dil; hiçbiri yoksa İngilizce.
  const preferred = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  for (const code of preferred) {
    const base = code.toLowerCase().slice(0, 2);
    if (LANGUAGES.includes(base)) return base;
  }
  return "en";
}

document.querySelectorAll(".invite").forEach((el) => (el.href = INVITE_URL));
document.querySelectorAll(".support").forEach((el) => {
  if (SUPPORT_URL) el.href = SUPPORT_URL;
  else el.classList.add("hidden");
});
document.getElementById("lang-select").addEventListener("change", (event) => setLanguage(event.target.value));
setLanguage(initialLanguage());
