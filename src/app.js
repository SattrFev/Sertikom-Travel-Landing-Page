document.addEventListener("alpine:init", () => {
  Alpine.data("bookPlaces", () => ({
    formatNumber(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    items: [
      {
        id: 15423,
        name: "La Maison",
        loc: "Paris, France",
        price: 7000,
        rating: 4.5,
        img: "stock1.jpg",
      },
      {
        id: 15424,
        name: "Sakura Inn",
        loc: "Kyoto, Japan",
        price: 5500,
        rating: 4.8,
        img: "stock2.jpg",
      },
      {
        id: 15425,
        name: "Coastal Villa",
        loc: "Amalfi, Italy",
        price: 8500,
        rating: 4.7,
        img: "stock3.jpg",
      },
      {
        id: 15426,
        name: "Desert Oasis",
        loc: "Dubai, UAE",
        price: 12000,
        rating: 4.9,
        img: "stock4.jpg",
      },
      {
        id: 15427,
        name: "Mountain Lodge",
        loc: "Aspen, USA",
        price: 9500,
        rating: 4.6,
        img: "stock5.jpg",
      },
      {
        id: 15428,
        name: "Tropical Paradise",
        loc: "Bali, Indonesia",
        price: 4500,
        rating: 4.4,
        img: "stock6.jpg",
      },
      {
        id: 15429,
        name: "Nordic Retreat",
        loc: "Oslo, Norway",
        price: 6500,
        rating: 4.7,
        img: "stock7.jpg",
      },
      {
        id: 15430,
        name: "Santorini Suite",
        loc: "Santorini, Greece",
        price: 8000,
        rating: 4.8,
        img: "stock8.jpg",
      },
    ],
  }));
  Alpine.data("news", () => ({
    news: [
      {
        id: 1,
        img: "stock1.jpg",
        title: "Delicous resort at Hanelei",
        date: "February 14, 2024",
        desc: "Experience the breathtaking beauty of Hanalei Bay at our luxurious beachfront resort featuring world-class amenities and stunning ocean views.",
      },
      {
        id: 2,
        img: "stock2.jpg",
        title: "New Luxury Villa Opens in Maldives",
        date: "February 12, 2024",
        desc: "Experience ultimate luxury at our newest overwater villa featuring private pools and stunning ocean views.",
      },
      {
        id: 3,
        img: "stock3.jpg",
        title: "Sustainable Tourism Initiative Launched",
        date: "February 10, 2024",
        desc: "Our new eco-friendly program aims to preserve natural beauty while providing unforgettable experiences.",
      },
      {
        id: 4,
        img: "stock1.jpg",
        title: "Cultural Immersion Tours in Kyoto",
        date: "February 8, 2024",
        desc: "Discover authentic Japanese traditions with our new guided tours through historic temples and traditional tea ceremonies.",
      },
      {
        id: 5,
        img: "stock3.jpg",
        title: "Adventure Sports Package in New Zealand",
        date: "February 6, 2024",
        desc: "Get your adrenaline pumping with our comprehensive adventure package including bungee jumping, skydiving, and white water rafting.",
      },
      {
        id: 6,
        img: "stock4.jpg",
        title: "Wellness Retreat Opens in Bali",
        date: "February 4, 2024",
        desc: "Rejuvenate your mind and body at our new wellness sanctuary offering yoga, meditation, and holistic healing treatments.",
      },
    ],
  }));
});
