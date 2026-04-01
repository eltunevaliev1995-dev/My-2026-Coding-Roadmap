// ════════════════════════════════════════════════════
// 1. MENYU MƏLUMATları (The Menu Data - das Menü)
// ════════════════════════════════════════════════════

const menuItems = [
  {
    id: 1, category: "starter", emoji: "🥗",
    name: "Burrata Bağçası",
    desc: "Təzə burrata, heirloom pomidor, əsil Siciliya zeytun yağı, tünd balzamik",
    tags: ["Vegetarian", "Gluten-free"], price: 28, aiPick: true
  },
  {
    id: 2, category: "starter", emoji: "🦞",
    name: "Bisque Supu",
    desc: "Kremalı xərçəng supu, saffron köpüyü, brioche kruton, tərxun yağı",
    tags: ["Seafood", "Creamy"], price: 34, aiPick: false
  },
  {
    id: 3, category: "starter", emoji: "🥩",
    name: "Wagyu Tataki",
    desc: "A5 Wagyu sığır, truffle emülsiyonu, nori toz, caviar garnisi",
    tags: ["Premium", "Japanese"], price: 65, aiPick: true
  },
  {
    id: 4, category: "main", emoji: "🍝",
    name: "Lobster Risotto",
    desc: "Carnaroli düyü, Atlantik xərçəngi, parmesan, şampan suyu, dill yağı",
    tags: ["Seafood", "Italian"], price: 89, aiPick: true
  },
  {
    id: 5, category: "main", emoji: "🥩",
    name: "Wagyu Tenderloin",
    desc: "240q A5 Wagyu, truffle kartof püresi, red wine jus, seasonal greens",
    tags: ["Premium", "Beef"], price: 145, aiPick: false
  },
  {
    id: 6, category: "main", emoji: "🐟",
    name: "Miso Glazed Sea Bass",
    desc: "Chilean sea bass, shiro miso, bok choy, dashi köpüyü, sesame",
    tags: ["Fish", "Japanese"], price: 76, aiPick: true
  },
  {
    id: 7, category: "dessert", emoji: "🍫",
    name: "Valrhona Soufflé",
    desc: "İsti şokolad soufflé, 72% Valrhona kakao, kirəc dondurma, gold leaf",
    tags: ["Chocolate", "Hot"], price: 32, aiPick: true
  },
  {
    id: 8, category: "dessert", emoji: "🍋",
    name: "Yuzu Panna Cotta",
    desc: "Ipək yuzu krem, mango kaviar, jasmine gel, candied citrus",
    tags: ["Citrus", "Light"], price: 28, aiPick: false
  },
  {
    id: 9, category: "dessert", emoji: "🍓",
    name: "Strawberry Pavlova",
    desc: "Xırtıldayan merenq, diplomat krem, seasonal strawberry, elderflower syrup",
    tags: ["Fruity", "Classic"], price: 26, aiPick: false
  }
];

// ════════════════════════════════════════════════════
// 2. MENYU RENDER (The Render - das Rendern)
// ════════════════════════════════════════════════════

function renderMenu(filter) {
  filter = filter || "all";
  const grid = document.getElementById("menu-grid");

  const filtered = filter === "all"
    ? menuItems
    : menuItems.filter(function(item) { return item.category === filter; });

  grid.innerHTML = filtered.map(function(item) {
    return `
      <div class="menu-card">
        <div class="menu-card-img">
          ${item.emoji}
          ${item.aiPick ? '<div class="menu-ai-badge">✦ AI SEÇİMİ</div>' : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-cat">${getCatLabel(item.category)}</div>
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="menu-card-footer">
            <div class="menu-card-tags">
              ${item.tags.map(function(t) { return '<span class="menu-tag">' + t + '</span>'; }).join('')}
            </div>
            <div class="menu-card-price">${item.price} <span>₼</span></div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function getCatLabel(cat) {
  const labels = { starter: "Başlanğıc", main: "Əsas Yemək", dessert: "Desert" };
  return labels[cat] || cat;
}

function filterMenu(btn, cat) {
  // Aktiv düyməni (the button - der Knopf) dəyiş
  document.querySelectorAll(".mf-btn").forEach(function(b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");
  renderMenu(cat);
}


// ════════════════════════════════════════════════════
// 3. ƏHVAL SEÇİCİ (The Selector - der Selektor)
// ════════════════════════════════════════════════════

const moodData = {
  energetic: {
    title: "Güc Yığmaq Üçün Seçim",
    text: "Yüksək protein, kompleks karbohidrat. Bədəninizi gücləndirir, enerjinizi artırır.",
    dishes: ["💪 Wagyu Tenderloin", "🥗 Quinoa Bowl", "🥩 Protein Platter", "⚡ Energy Smoothie"]
  },
  romantic: {
    title: "Romantik Axşam Yemeyi",
    text: "Zərif təqdim, mürəkkəb dadlar. Xüsusi anları daha xüsusi edən seçimlər.",
    dishes: ["🦞 Lobster Bisque", "🍷 Wagyu Tataki", "🍫 Valrhona Soufflé", "🌹 Champagne Mousse"]
  },
  comfort: {
    title: "Rahatladıcı Yemək Terapiyası",
    text: "İsti, doyurucu, əziz ürəkdə. Hər loqma sizi evdə hissettirən yeməklər.",
    dishes: ["🍝 Lobster Risotto", "🥘 Slow-Braised Beef", "🍲 Truffle Mac & Cheese", "☕ Hot Chocolate Fondant"]
  },
  adventurous: {
    title: "Ekzotik Dünya Gəzintisi",
    text: "5 qitənin dadları bir tabaqda. Dadmadığınız mətbəxləri kəşf etmək vaxtı.",
    dishes: ["🇯🇵 Miso Sea Bass", "🌏 Thai Red Curry", "🇲🇦 Lamb Tagine", "🌶️ Korean BBQ"]
  },
  healthy: {
    title: "Sağlıqlı Zövq",
    text: "Dadlı olmaq sağlıqlı olmaqla ziddiyyət deyil. Bədəniniz üçün ən yaxşı seçimlər.",
    dishes: ["🥗 Burrata Bağçası", "🐟 Grilled Sea Bass", "🥦 Roasted Vegetables", "🫐 Acai Bowl"]
  },
  celebratory: {
    title: "Bayram Sofrası",
    text: "Xüsusi anlar xüsusi yeməklər tələb edir. Premium seçimlərimizin ən zirvəsi.",
    dishes: ["🥂 Caviar Amuse-Bouche", "🦞 Whole Lobster", "🥩 A5 Wagyu", "✨ Gold Leaf Soufflé"]
  }
};

function selectMood(card) {
  // Əvvəlki seçimi (the selection - die Auswahl) sıfırla
  document.querySelectorAll(".mood-card").forEach(function(c) {
    c.classList.remove("selected");
  });
  card.classList.add("selected");

  const mood = card.dataset.mood;
  const data = moodData[mood];

  // Nəticə (the result - das Ergebnis) bölməsini göstər
  const resultEl = document.getElementById("mood-result");
  resultEl.classList.add("show");

  // Loading (the loading - das Laden) göstər
  document.getElementById("mr-loading").style.display = "block";
  document.getElementById("mr-content").style.display  = "none";

  // Süni gecikdirmə — AI analiz effekti (the effect - der Effekt)
  setTimeout(function() {
    document.getElementById("mr-loading").style.display = "none";
    document.getElementById("mr-content").style.display  = "block";

    document.getElementById("mr-title").innerText = data.title;
    document.getElementById("mr-text").innerText  = data.text;

    document.getElementById("mr-dishes").innerHTML = data.dishes.map(function(d) {
      return '<span class="dish-tag">' + d + '</span>';
    }).join("");
  }, 1800);

  resultEl.scrollIntoView({ behavior: "smooth", block: "center" });
}


// ════════════════════════════════════════════════════
// 4. AI SÖHBƏT — Claude API (The Chat - der Chat)
// ════════════════════════════════════════════════════

const chatHistory = [];
// Söhbət tarixi (the history - die Geschichte)

const SYSTEM_PROMPT = `Sən SOFRA restoranının AI aşpazısan. Adın SOFRA AI-dır.

Vəzifələrin:
- İstifadəçinin materiallarına görə resept təklif et
- Azərbaycan, dünya mətbəxlərindən reseptlər ver
- Diyet tələblərinə (vegan, keto, glutensiz və s.) uyğun tövsiyə et
- Vaxt məhdudiyyətinə görə asan/çətin reseptlər söylə
- Qısa, aydın, praktik cavablar ver
- Emoji istifadə et ki cavablar daha canlı görünsün
- Azərbaycan dilində cavab ver

Format: Resept verəndə belə yaz:
🍽️ Resept adı
⏱️ Hazırlanma vaxtı
👥 Neçə nəfərlik

**Materiallar:**
- material 1
- material 2

**Hazırlanma:**
1. Birinci addım
2. İkinci addım

💡 Tövsiyə: Xüsusi ipucu`;

async function sendMessage() {
  const input    = document.getElementById("chat-input");
  const sendBtn  = document.getElementById("send-btn");
  const message  = input.value.trim();

  if (!message) return;

  // Düyməni (the button - der Knopf) deaktiv et
  sendBtn.disabled  = true;
  input.value       = "";

  // İstifadəçi mesajını (the message - die Nachricht) göstər
  addUserMessage(message);

  // Tarixi (the history - die Geschichte) yenilə
  chatHistory.push({ role: "user", content: message });

  // Typing animasiyası (the animation - die Animation) göstər
  const typingId = showTyping();

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model:      "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system:     SYSTEM_PROMPT,
        messages:   chatHistory
      })
    });

    const data = await response.json();
    removeTyping(typingId);

    // AI cavabını (the answer - die Antwort) tap
    const aiText = data.content
      .filter(function(block) { return block.type === "text"; })
      .map(function(block) { return block.text; })
      .join("");

    // Cavabı (the answer - die Antwort) göstər
    addAIMessage(aiText);

    // Tarixi (the history - die Geschichte) yenilə
    chatHistory.push({ role: "assistant", content: aiText });

  } catch (err) {
    removeTyping(typingId);
    addAIMessage("Bağışlayın, bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin. 🙏");
    console.error("API xətası:", err);
  }

  sendBtn.disabled = false;
  input.focus();
}

function quickAsk(text) {
  // Sürətli sual düymələri (the buttons - die Knöpfe)
  document.getElementById("chat-input").value = text;
  sendMessage();
}

function addUserMessage(text) {
  const messages = document.getElementById("chat-messages");

  const div = document.createElement("div");
  div.className = "msg user-msg";
  div.innerHTML = `
    <div class="msg-bubble">${escapeHtml(text)}</div>
  `;
  messages.appendChild(div);
  scrollToBottom();
}

function addAIMessage(text) {
  const messages = document.getElementById("chat-messages");

  const div = document.createElement("div");
  div.className = "msg ai-msg";
  div.innerHTML = `
    <div class="msg-avatar">✦</div>
    <div class="msg-bubble">${formatAIText(text)}</div>
  `;
  messages.appendChild(div);
  scrollToBottom();
}

function showTyping() {
  // Typing göstəricisi (the indicator - der Indikator) əlavə et
  const messages = document.getElementById("chat-messages");
  const id = "typing-" + Date.now();

  const div = document.createElement("div");
  div.className = "msg ai-msg";
  div.id         = id;
  div.innerHTML = `
    <div class="msg-avatar">✦</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  messages.appendChild(div);
  scrollToBottom();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollToBottom() {
  const messages = document.getElementById("chat-messages");
  messages.scrollTop = messages.scrollHeight;
}

function formatAIText(text) {
  // Markdown-u HTML-ə çevir
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "<br><br>")
    .replace(/\n/g, "<br>")
    .replace(/^(\d+)\. /gm, "$1. ");
}

function escapeHtml(text) {
  // XSS qarşısı (the protection - der Schutz)
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


// ════════════════════════════════════════════════════
// 5. NAVİQASİYA SCROLL EFFEKTİ (The Effect - der Effekt)
// ════════════════════════════════════════════════════

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ════════════════════════════════════════════════════
// 6. TOAST BİLDİRİŞİ (The Notification - die Benachrichtigung)
// ════════════════════════════════════════════════════

let toastTimer;

function showToast(msg) {
  clearTimeout(toastTimer);
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.add("show");

  toastTimer = setTimeout(function() {
    t.classList.remove("show");
  }, 2500);
}


// ════════════════════════════════════════════════════
// 7. SCROLL HELPERLƏRİ (The Helpers - die Helfer)
// ════════════════════════════════════════════════════

function scrollToAI() {
  document.getElementById("ai-chef").scrollIntoView({ behavior: "smooth" });
  setTimeout(function() {
    document.getElementById("chat-input").focus();
  }, 800);
}


// ════════════════════════════════════════════════════
// 8. BAŞLANĞIC (The Start - der Start)
// ════════════════════════════════════════════════════

renderMenu("all");