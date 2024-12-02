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
  spaceBetween: 20,
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

document.addEventListener("click", function (event) {
  const nav = document.querySelector("#nav");
  const navUl = document.querySelector("#nav ul");
  const hamburger = document.querySelector(".hamburger");

  if (nav.classList.contains("active")) {
    if (!navUl.contains(event.target) && !hamburger.contains(event.target)) {
      nav.classList.remove("active");
    }
  }
});

function toggleHamburger() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}

function datepicker() {
  return {
    selectedDate: "12/01/2024", // Default date shown in the <p> tag
    flatpickrInstance: null, // Initialize flatpickr instance
    init() {
      // Initialize Flatpickr instance
      const dateInput = document.querySelector("#datepicker");
      this.flatpickrInstance = flatpickr(dateInput, {
        dateFormat: "m/d/Y", // Set desired date format
        defaultDate: this.selectedDate, // Set default date from Alpine data
        onChange: (selectedDates) => {
          // Update the Alpine data with the selected date
          this.selectedDate = flatpickr.formatDate(selectedDates[0], "m/d/Y");
        },
      });
    },
    openCalendar() {
      // Open the Flatpickr calendar when the chevron icon is clicked
      alert(123);
      this.flatpickrInstance.open();
    },
  };
}
