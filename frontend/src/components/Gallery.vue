<template>
  <div class="gallery">
    <h1 class="text-3xl font-bold mb-6">Gallery</h1>

    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>

    <div v-else>
      <div
        v-for="item in gallery"
        :key="item._id"
        class="gallery-item mb-6 border-b pb-4"
      >
        <h2 class="text-2xl font-semibold mb-2">{{ item.title }}</h2>
        <p class="text-gray-700 mb-4">{{ item.description }}</p>

        <div
          class="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <img
            v-for="image in item.images"
            :key="image.public_id"
            :src="image.url"
            :alt="item.title"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "../config";

axios.defaults.baseURL = API_BASE_URL;

export default {
  data() {
    return {
      gallery: [],
      loading: true,
    };
  },
  methods: {
    async fetchGallery() {
      try {
        const response = await axios.get("/gallery");
        this.gallery = response.data;
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchGallery();
  },
};
</script>

<style scoped>
.gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.images img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>

