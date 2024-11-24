document.addEventListener("alpine:init", () => {
  Alpine.store("app", {
    // Global state can go here
    darkMode: false,
    currentGreeting: greetings[0].text,
  });
  Alpine.data("top-book", () => ({
    items: [
      {
        id: 15423,
        name: "La Maison",
        loc: "Paris, France",
        price: 7000,
        rating: 4.5,
        img: "img/top-book/stock1.jpg",
      },
      {
        id: 15424,
        name: "Sakura Inn",
        loc: "Kyoto, Japan",
        price: 5500,
        rating: 4.8,
        img: "img/top-book/stock2.jpg",
      },
      {
        id: 15425,
        name: "Coastal Villa",
        loc: "Amalfi, Italy",
        price: 8500,
        rating: 4.7,
        img: "img/top-book/stock3.jpg",
      },
      {
        id: 15426,
        name: "Desert Oasis",
        loc: "Dubai, UAE",
        price: 12000,
        rating: 4.9,
        img: "img/top-book/stock4.jpg",
      },
      {
        id: 15427,
        name: "Mountain Lodge",
        loc: "Aspen, USA",
        price: 9500,
        rating: 4.6,
        img: "img/top-book/stock5.jpg",
      },
      {
        id: 15428,
        name: "Tropical Paradise",
        loc: "Bali, Indonesia",
        price: 4500,
        rating: 4.4,
        img: "img/top-book/stock6.jpg",
      },
      {
        id: 15429,
        name: "Nordic Retreat",
        loc: "Oslo, Norway",
        price: 6500,
        rating: 4.7,
        img: "img/top-book/stock7.jpg",
      },
      {
        id: 15430,
        name: "Santorini Suite",
        loc: "Santorini, Greece",
        price: 8000,
        rating: 4.8,
        img: "img/top-book/stock8.jpg",
      },
    ],
  }));
});
