// 1. Interactive Language Switcher (FR / EN)
let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll("[data-lang-en]");
  elements.forEach((el) => {
    const text = el.getAttribute(`data-lang-${lang}`);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Synchronize Bio Tabs if switched
  setBioLang(lang);
}

function setBioLang(lang) {
  const enBox = document.getElementById("bio-content-en");
  const frBox = document.getElementById("bio-content-fr");
  const btnEn = document.getElementById("bio-btn-en");
  const btnFr = document.getElementById("bio-btn-fr");

  if (!enBox || !frBox) return;

  if (lang === "en") {
    enBox.classList.remove("hidden");
    frBox.classList.add("hidden");
    btnEn.classList.add(
      "bg-surface-container-lowest",
      "text-on-surface",
      "font-semibold",
      "shadow-sm",
    );
    btnEn.classList.remove("text-on-surface-variant");
    btnFr.classList.remove(
      "bg-surface-container-lowest",
      "text-on-surface",
      "font-semibold",
      "shadow-sm",
    );
    btnFr.classList.add("text-on-surface-variant");
  } else {
    frBox.classList.remove("hidden");
    enBox.classList.add("hidden");
    btnFr.classList.add(
      "bg-surface-container-lowest",
      "text-on-surface",
      "font-semibold",
      "shadow-sm",
    );
    btnFr.classList.remove("text-on-surface-variant");
    btnEn.classList.remove(
      "bg-surface-container-lowest",
      "text-on-surface",
      "font-semibold",
      "shadow-sm",
    );
    btnEn.classList.add("text-on-surface-variant");
  }
}

// Attach listeners to global shell language buttons if available
window.addEventListener("DOMContentLoaded", () => {
  const shellLangBtns = document.querySelectorAll(
    "header button, footer button",
  );
  shellLangBtns.forEach((btn) => {
    const txt = btn.textContent.trim().toUpperCase();
    if (txt === "EN") {
      btn.addEventListener("click", () => setLanguage("en"));
    } else if (txt === "FR") {
      btn.addEventListener("click", () => setLanguage("fr"));
    }
  });
  
  // Initialize navigation functionality
  setupSmoothScroll();
  updateActiveNavLink();
});

window.addEventListener("scroll", updateActiveNavLink);

// 2. Skill Category Filter
function filterSkills(category) {
  const cards = document.querySelectorAll(".skill-card");
  const tabs = document.querySelectorAll(".skill-tab");

  tabs.forEach((tab) => {
    if (tab.getAttribute("data-cat") === category) {
      tab.classList.add(
        "bg-primary-container",
        "text-on-primary",
        "shadow-sm",
      );
      tab.classList.remove(
        "bg-surface-container-lowest",
        "text-on-surface",
      );
    } else {
      tab.classList.remove(
        "bg-primary-container",
        "text-on-primary",
        "shadow-sm",
      );
      tab.classList.add(
        "bg-surface-container-lowest",
        "text-on-surface",
      );
    }
  });

  cards.forEach((card) => {
    const cat = card.getAttribute("data-category");
    if (category === "all" || cat === category) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// 3. Contact Form Submission State Machine
function handleContactSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById("contact-name");
  const submitBtn = document.getElementById("submit-btn");

  if (!nameInput) return;
  const userName = nameInput.value.trim() || "Colleague";

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
        <span class="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
        <span>Sending securely...</span>
      `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
          <span>Send Message</span>
          <span class="material-symbols-outlined text-[18px]">send</span>
        `;
    document.getElementById("sent-user-name").textContent =
      userName;
    document.getElementById("contact-form").reset();
    document
      .getElementById("success-modal")
      .classList.remove("hidden");
  }, 750);
}

// Modal toggles
function openCaseStudyModal() {
  document
    .getElementById("case-study-modal")
    .classList.remove("hidden");
}
function closeCaseStudyModal() {
  document
    .getElementById("case-study-modal")
    .classList.add("hidden");
}
function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}
function openAdminModal() {
  document.getElementById("admin-modal").classList.remove("hidden");
}
function closeAdminModal() {
  document.getElementById("admin-modal").classList.add("hidden");
}

// 4. Navigation Active State Management
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[data-path]");
  
  let currentSection = "hero"; // Default to hero/home
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });
  
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("data-path");
    const activeClasses = ["bg-surface-container", "text-primary", "font-semibold"];
    const inactiveClasses = ["text-on-surface-variant"];
    
    // Check if this link corresponds to the current section
    let isActive = false;
    if (currentSection === "hero" && linkPath === "home") {
      isActive = true;
    } else if (linkPath === currentSection) {
      isActive = true;
    }
    
    if (isActive) {
      link.classList.add(...activeClasses);
      link.classList.remove(...inactiveClasses);
    } else {
      link.classList.remove(...activeClasses);
      link.classList.add(...inactiveClasses);
    }
  });
}

// 5. Smooth Scroll for Navigation Links
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll("nav a[data-path], a[data-path='contact'], a[data-path='home']");
  
  navLinks.forEach((link) => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const headerOffset = 80;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Update active state immediately
          const linkPath = this.getAttribute("data-path");
          const navLinks = document.querySelectorAll("nav a[data-path]");
          const activeClasses = ["bg-surface-container", "text-primary", "font-semibold"];
          const inactiveClasses = ["text-on-surface-variant"];
          
          navLinks.forEach((navLink) => {
            const navLinkPath = navLink.getAttribute("data-path");
            if (navLinkPath === linkPath) {
              navLink.classList.add(...activeClasses);
              navLink.classList.remove(...inactiveClasses);
            } else {
              navLink.classList.remove(...activeClasses);
              navLink.classList.add(...inactiveClasses);
            }
          });
        }
      }
    });
  });
}

// Initialize navigation functionality
window.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll();
  updateActiveNavLink();
});

