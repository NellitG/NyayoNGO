<template>
  <div class="p-6 min-h-screen mt-20">
    <div class="max-w-7xl mx-auto">
      <!-- Gallery Heading -->
      <h2 class="text-5xl font-bold text-center mb-6 text-yellow-500" style="font-family: 'Finger Paint', cursive">
        Photo Gallery
      </h2>

      <!-- Responsive Image Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Repeatable Image Card -->
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          @click="openFullScreen(image)"
        >
          <img
            :src="image"
            alt="Gallery Image"
            class="w-full h-64 object-cover"
          />
          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-opacity duration-300 p-4"
          >
            <span class="text-white text-lg font-semibold">View</span>
          </div>
        </div>
      </div>

      <!-- Full-Screen Modal -->
      <div
        v-if="isFullScreen"
        class="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
        @click="closeFullScreen"
      >
        <div class="relative max-w-90vw max-h-90vh p-6 bg-white rounded-lg shadow-2xl">
          <img
            :src="fullScreenImage"
            alt="Full Screen Image"
            class="max-w-full max-h-full rounded-lg"
          />
          <!-- Close Button -->
          <button
            @click.stop="closeFullScreen"
            class="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors duration-300"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504821/women_gke08v.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504819/talk_u37gzk.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/sing_s1s3na.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/relative_rwwn7v.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/show_jmabpv.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/sing_s1s3na.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736929594/Card_yzseiu.avif",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504748/hands_zpyaz2.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504747/dance_gntcwa.jpg",
        "https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504747/child_i5fpdq.jpg",
      ],
      isFullScreen: false,
      fullScreenImage: "",
    };
  },
  methods: {
    openFullScreen(image) {
      this.fullScreenImage = image;
      this.isFullScreen = true;
    },
    closeFullScreen() {
      this.isFullScreen = false;
      this.fullScreenImage = "";
    },
  },
};
</script>

<style scoped>
/* Ensure all images fit properly */
img {
  object-fit: cover; /* Ensures the image covers the area without distortion */
  width: 100%; /* Makes sure the image takes full width of its container */
  height: 100%; /* Makes sure the image takes full height of its container */
}

/* Ensure grid layout is responsive */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on large screens */
  }
}

/* Full-screen modal styling */
.fixed {
  position: fixed;
  inset: 0;
  z-index: 50;
}

.bg-opacity-95 {
  background-color: rgba(0, 0, 0, 0.95);
}

.max-w-90vw {
  max-width: 90vw; /* Limits the width of the modal content */
}

.max-h-90vh {
  max-height: 90vh; /* Limits the height of the modal content */
}

.bg-white {
  background-color: white; /* Adds a white background to the modal content */
}

.p-6 {
  padding: 1.5rem; /* Adds padding inside the modal */
}

.rounded-lg {
  border-radius: 0.5rem; /* Rounded corners for the modal */
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Adds a strong shadow */
}

/* Close button styling */
button {
  outline: none;
}
</style>