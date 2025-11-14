// Webtoon series data
const recommendedSeries = [
  {
    title: "Mystic Guardian",
    author: "ArtMaster",
    genre: "Fantasy",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    badge: "UP",
  },
  {
    title: "Urban Legends",
    author: "StoryTeller",
    genre: "Drama",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    badge: "NEW",
  },
  {
    title: "High School Hearts",
    author: "RomanceQueen",
    genre: "Romance",
    image: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
    badge: "HOT",
  },
  {
    title: "Dark Chronicles",
    author: "MidnightWriter",
    genre: "Thriller",
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    badge: "UP",
  },
  {
    title: "Comedy Central",
    author: "LaughMaker",
    genre: "Comedy",
    image: "linear-gradient(135deg, #fdeb71 0%, #f8d800 100%)",
    badge: "NEW",
  },
  {
    title: "Space Odyssey",
    author: "CosmicArtist",
    genre: "Sci-Fi",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    badge: "HOT",
  },
];

const weeklySeries = [
  {
    title: "Lost in Paradise",
    author: "DreamWeaver",
    genre: "Comedy",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    rank: "142K",
  },
  {
    title: "Blue Moon Rising",
    author: "MoonArtist",
    genre: "Comedy",
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    rank: "130K",
  },
  {
    title: "Midnight Cafe",
    author: "CoffeeWriter",
    genre: "Romance",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    rank: "108K",
  },
  {
    title: "Garden of Eden",
    author: "NatureLover",
    genre: "Slice of life",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    rank: "657K",
  },
  {
    title: "School Days",
    author: "YouthWriter",
    genre: "Slice of life",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    rank: "283K",
  },
  {
    title: "Sweet Moments",
    author: "HeartArtist",
    genre: "Romance",
    image: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
    rank: "950K",
  },
];

// Load Recommended Series
function loadRecommendedSeries() {
  const carousel = document.getElementById("webtoonCarousel");
  if (!carousel) return;

  carousel.innerHTML = "";

  recommendedSeries.forEach((series) => {
    const card = document.createElement("div");
    card.className = "webtoon-card";
    card.innerHTML = `
            <div class="card-image" style="background: ${series.image}">
                <span class="genre-badge">${series.badge}</span>
            </div>
            <div class="card-info">
                <div class="card-genre">${series.genre}</div>
                <div class="card-title">${series.title}</div>
                <div class="card-author">${series.author}</div>
            </div>
        `;
    carousel.appendChild(card);
  });
}

// Load Weekly HOT
function loadWeeklySeries() {
  const grid = document.getElementById("hotGrid");
  if (!grid) return;

  grid.innerHTML = "";

  weeklySeries.forEach((series) => {
    const card = document.createElement("div");
    card.className = "hot-card";
    card.innerHTML = `
            <div class="card-image" style="background: ${series.image}">
                <span class="rank-badge">${series.rank}</span>
            </div>
            <div class="card-info">
                <div class="card-genre">${series.genre}</div>
                <div class="card-title">${series.title}</div>
                <div class="card-author">${series.author}</div>
            </div>
        `;
    grid.appendChild(card);
  });
}

// Carousel Navigation for Recommended
const recPrev = document.getElementById("recPrev");
const recNext = document.getElementById("recNext");
const carousel = document.getElementById("webtoonCarousel");

if (recPrev && recNext && carousel) {
  recPrev.addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
  });

  recNext.addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  });
}

// Hero Carousel
let currentSlide = 0;
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll("#heroDots .dot");

function showSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  heroDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");

if (heroPrev && heroNext) {
  heroPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
  });

  heroNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
  });
}

// Auto-advance hero carousel
setInterval(() => {
  if (heroSlides.length > 0) {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
  }
}, 5000);

// Dot navigation
heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Smooth scroll for genre buttons
document.querySelectorAll(".genre-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".genre-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Add hover effects to cards
function addCardEffects() {
  document.querySelectorAll(".webtoon-card, .hot-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadRecommendedSeries();
  loadWeeklySeries();
  addCardEffects();

  // Smooth scrolling for all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
