<template>
  <div class="max-w-4xl mx-auto space-y-24 py-16">
    <div
      class="mt-10 relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
      style="
        background-image: url('https://res.cloudinary.com/dqe69vaz7/image/upload/v1736929594/Card_yzseiu.avif');
        min-height: 300px;
      "
    >
      <!-- Gradient and Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 opacity-70"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>

      <!-- Content on top of the background image and overlays -->
      <div
        class="relative z-10 p-8 text-white flex items-center justify-center flex-col text-center"
      >
        <h2
          class="text-5xl font-bold mb-4 text-yellow-500"
          style="font-family: 'Finger Paint', cursive"
        >
          Join Our Action!
        </h2>
        <h2 class="text-5xl font-semibold mb-6">Everyone Can Help.</h2>

        <!-- Buttons -->
        <div class="flex space-x-4">
          <!-- Donate button (internal link) -->
          <router-link to="/donations">
            <button
              class="bg-yellow-400 text-gray-950 font-semibold px-6 py-3 transition duration-300"
            >
              Donate
            </button>
          </router-link>
          <!-- Volunteer button (external link) -->
          <router-link to="/Volunteer">
            <button
              class="bg-indigo-950 text-white font-semibold px-6 py-3 transition duration-300"
            >
              Become a Volunteer
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
