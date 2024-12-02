const greetings = [
  { text: "Good Morning", lang: "English" },
  { text: "Selamat Pagi", lang: "Indonesian" },
  { text: "Доброе утро!", lang: "Russian" },
  { text: "¡Buenos días", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
];

let currentIndex = 0;
const greetingElement = document.querySelector(".greeting");
const brandSpan = document.querySelector("#hero .container .desc h2 span");
const nav = document.querySelector("#nav");
const heroSection = document.querySelector("#hero");
const partnersContainer = document.querySelector(".partners-container");
const navxx = document.querySelector(".navbarx");

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

const heroBgSwiper = new Swiper(".bg-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 5555,
    disableOnInteraction: false,
  },
  speed: 1000,
});

const topBookSwiper = new Swiper(".top-book-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  if (window.scrollY >= heroBottom - 30 - nav.offsetHeight) {
    nav.classList.add("scrolled");
    document.querySelectorAll("#nav a, #nav button").forEach((item) => {
      item.classList.add("nav-dark");
    });
  } else {
    nav.classList.remove("scrolled");
    document.querySelectorAll("#nav a, #nav button").forEach((item) => {
      item.classList.remove("nav-dark");
    });
  }
});

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

document.addEventListener("click", (e) => {
  if (!document.querySelector(".hamburger").contains(e.target)) {
    if (navxx.classList.contains("active")) {
      const hamb = document.querySelector(".hamburgex");
      if (!hamb.contains(e.target)) {
        navxx.classList.remove("active");
      }
    }
  }
});

function Hellw() {
  alert("Helo World");
}

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

function toggleTopBookSlider(disabled = false) {
  const swiperContainer = document.querySelector(".top-book-container");
  const swiper = swiperContainer.swiper;

  if (disabled) {
    swiper.disable();
    swiper.el.classList.add("swiper-no-scroll");
  } else {
    swiper.enable();
    swiper.el.classList.remove("swiper-no-scroll");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#checkinPick", {
    dateFormat: "m/d/Y",
    minDate: "today",
  });

  flatpickr("#checkoutPick", {
    dateFormat: "m/d/Y",
    minDate: "today",
  });
});

document.addEventListener("click", (e) => {
  console.log(e.target);
});

function toggleHamburger() {
  navxx.classList.toggle("active");
}

function tugelpaket(id) {
  console.log(id);
  const paketco = document.querySelector(".places-cont");
  const bdgt = document.querySelector(".budget-places");
  const std = document.querySelector(".standard-places");
  const prm = document.querySelector(".premium-places");
  if (!paketco.classList.contains("active")) {
    paketco.classList.add("active");
  }

  if (id === 1) {
    bdgt.style.display = "flex";
    std.style.display = "none";
    prm.style.display = "none";
  } else if (id === 2) {
    bdgt.style.display = "none";
    std.style.display = "flex";
    prm.style.display = "none";
  } else if (id === 3) {
    bdgt.style.display = "none";
    std.style.display = "none";
    prm.style.display = "flex";
  }
}
