const greetings = [
  { text: "Good Morning", lang: "English" },
  { text: "Selamat Pagi", lang: "Indonesian" },
  { text: "Доброе утро!", lang: "Russian" },
  { text: "¡Buenos días", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
];

let currentIndex = 0;
const greetingElement = document.querySelector(".greeting");
const brandSpan = document.querySelector(".cta-text span");
const nav = document.querySelector("#nav");
const heroSection = document.querySelector("#hero");
const partnersContainer = document.querySelector(".partners-container");

// Remove the old partners scroll code and add this:
const partnersSwiper = new Swiper(".partners-container", {
  slidesPerView: "auto",
  spaceBetween: 64,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
});

// Add scroll handler for navbar darkening
window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  if (window.scrollY >= heroBottom - 80 - nav.offsetHeight) {
    nav.classList.add("scrolled");
    // Add dark mode to nav items
    document.querySelectorAll("#nav a, #nav button").forEach((item) => {
      item.classList.add("nav-dark");
    });
  } else {
    nav.classList.remove("scrolled");
    // Remove dark mode from nav items
    document.querySelectorAll("#nav a, #nav button").forEach((item) => {
      item.classList.remove("nav-dark");
    });
  }
});

// Gradient rotation handler
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const angle =
    Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
  const adjustedAngle = (angle + 360) % 360;

  brandSpan.style.background = `linear-gradient(${adjustedAngle}deg, var(--secondary-color), #62b3c8)`;
  brandSpan.style.webkitBackgroundClip = "text";
  brandSpan.style.backgroundClip = "text";
  brandSpan.style.color = "transparent";
});

// Greeting text morphing
async function morphText(element, oldText, newText) {
  const maxLength = Math.max(oldText.length, newText.length);
  const paddedOld = oldText.padEnd(maxLength, " ");
  const paddedNew = newText.padEnd(maxLength, " ");

  for (let i = 0; i < maxLength; i++) {
    if (paddedOld[i] !== paddedNew[i]) {
      const currentText = [...element.textContent];
      currentText[i] = paddedNew[i];
      element.textContent = currentText.join("").trimEnd();
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
  }
}

async function updateGreeting() {
  const currentText = greetings[currentIndex].text;
  const nextIndex = (currentIndex + 1) % greetings.length;
  const nextText = greetings[nextIndex].text;

  await morphText(greetingElement, currentText, nextText);
  currentIndex = nextIndex;
}

greetingElement.textContent = greetings[0].text;
setInterval(updateGreeting, 7000);

const newsSwiper = new Swiper(".news-swiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 82,
  loop: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var topBookSwiper = new Swiper(".top-book-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function toggleTopBookSlider(disabled = false) {
  const swiperContainer = document.querySelector(".top-book-container");
  const swiper = swiperContainer.swiper;

  if (disabled) {
    swiper.disable(); // Disable swiping functionality
    swiper.el.classList.add("swiper-no-scroll");
  } else {
    swiper.enable(); // Re-enable swiping functionality
    swiper.el.classList.remove("swiper-no-scroll");
  }
}
