<template>
  <div class="container">
    <div class="mt-5">
      <div class="main-header">
        <h1 class="header-title">Survive, Explore, Thrive</h1>
        <p class="header-description">
          In Survival Odyssey, your ultimate quest is to endure against all
          odds. Navigate through a challenging world teeming with dangers and
          adversaries. Confront the hostile environment, outsmart other
          survivors, and employ every resource at your disposal to embark on an
          epic journey of survival
        </p>
      </div>
      <div class="mt-5 mb-5">
        <button
          class="btn btn-primary fw-bold download-btn"
          @click="downloadGame"
        >
          Download Now
        </button>
      </div>
      <hr />

      <div class="main-container mt-5">
        <h3 class="fw-bold fs-1 text-center">Game Overview</h3>
        <div
          class="d-flex gap-5 align-items-center justify-content-center main-about mt-5"
        >
          <img src="../assets/Download/gap1.jpg" alt="Game Overview Image" />
          <div class="overview-text">
            <h3>This captivating project is more than just a game</h3>
            <p>
              It's a tale of survival, a journey through dangerous yet
              captivating lands filled with mysteries and opportunities. We
              aspire to create something unique - a world where your survival
              depends on your wit, skills, and strategy
            </p>
          </div>
        </div>
        <div
          class="d-flex gap-5 align-items-center justify-content-center main-about mt-5"
        >
          <div class="overview-text">
            <h3>We've implemented numerous new mechanics, such as:</h3>
            <ul>
              <li>Character control 🕹</li>
              <li>Inventory and crafting system 🔧</li>
              <li>Character dressing 👕</li>
              <li>Health, hunger, and thirst indicators ❤️🍔💧</li>
              <li>Basic AI for animals 🐾</li>
              <li>Building system 🏗</li>
              <li>Resource gathering (wood and stone) 🌳🪵</li>
              <li>Item picking up mechanics 🛠</li>
              <li>Multiplayer functionality! 🌐</li>
            </ul>
          </div>
          <img src="../assets/Download/gap2.jpg" alt="Game Overview Image" />
        </div>
      </div>
      <div class="main-media mt-5">
        <h3 class="fw-bold fs-1 text-center">Media</h3>

        <div class="gallery mt-5">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <img
              :src="image.src"
              :alt="'Survival Odyssey Screenshot ' + (index + 1)"
            />
          </div>
        </div>

        <!-- Lightbox container -->
        <div
          v-if="lightboxOpen"
          class="lightbox-container"
          @click="closeLightbox"
        >
          <div class="lightbox-content">
            <img
              :src="galleryImages[lightboxIndex].src"
              :alt="'Survival Odyssey Screenshot ' + (lightboxIndex + 1)"
            />
          </div>
        </div>
      </div>
      <div class="main-about-specs mt-5">
        <h3 class="fw-bold">Survival Odyssey</h3>
        <p>
          A mobile survival game where the main goal of the player is to survive
        </p>
        <div class="d-flex spec">
          <p class="me-3"><strong>Release Date:</strong> January 31, 2024</p>
          <p class="me-3"><strong>Genre:</strong> Survival</p>
          <p class="me-3"><strong>Platform:</strong> Android</p>
          <div>
            <p><strong>Specifications:</strong></p>
            <ul>
              <li><strong>RAM:</strong> 2 GB</li>
              <li><strong>Storage:</strong> 2 GB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryImages: [
        { src: "img/gap2.7fafc017.jpg" },
        { src: "img/gap2.7fafc017.jpg" },
        { src: "img/gap2.7fafc017.jpg" },
        { src: "img/gap2.7fafc017.jpg" },
        { src: "img/gap2.7fafc017.jpg" },
        { src: "img/gap2.7fafc017.jpg" },
      ],
      lightboxOpen: false,
      lightboxIndex: 0,
    };
  },
  methods: {
    openLightbox(index) {
      this.lightboxOpen = true;
      this.lightboxIndex = index;
    },
    closeLightbox() {
      this.lightboxOpen = false;
      this.lightboxIndex = 0;
    },
    downloadGame() {
      console.log("Download");
    },
  },
};
</script>

<style scoped>
@import url(../assets/scss/main.scss);

.header-title {
  width: 100px;
  font-size: 10rem;
  line-height: 9rem;
  font-weight: bolder;
  word-spacing: 100vw;
}

.header-description {
  color: #cccccc;
  max-width: 700px;
}

.download-btn {
  background-color: #cd412b !important;
  border: none;
  border-radius: 0;
  font-size: 1.75rem;
}

.overview-text h3 {
  font-size: 24px;
}

.overview-text p {
  font-size: 18px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

.gallery-item:hover {
  transform: scale(1.01);
}

.gallery-item img {
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}

/* Lightbox styles */
.lightbox-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}
@media (max-width: 768px) {
  .gallery {
    gap: 40px; /* Adjusted gap for larger screens */
  }
  .main-about img {
    max-width: 100%;
  }
  .header-title {
    font-size: 6rem; /* Adjusted font size for larger screens */
    line-height: 5rem;
  }

  .header-description {
    max-width: 800px; /* A6justed max-width for larger screens */
  }
}
</style>
