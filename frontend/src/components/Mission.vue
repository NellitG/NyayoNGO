<template>
  <div class="max-w-4xl mx-auto space-y-24 py-16">
    <!-- Our Mission Section with Background Image -->
    <div class="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden" style="background-image: url('https://img.freepik.com/free-photo/medium-shot-smiley-kid-sitting-outdoors_23-2148860402.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid'); min-height: 300px;">
      <div class="bg-black bg-opacity-40 h-full w-full absolute inset-0"></div> <!-- Overlay -->
      <div class="relative z-10 p-8 text-white flex items-center justify-center flex-col text-center">
        <h2 class="text-5xl font-bold mb-4">Our Mission</h2>
        <p class="text-lg max-w-xl">
          
        </p>
      </div>
    </div>

    <!-- Our Vision Section with Background Image -->
    <div class="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden" style="background-image: url('https://img.freepik.com/free-photo/medium-shot-boys-hugging_23-2148860422.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid'); min-height: 300px;">
      <div class="bg-black bg-opacity-40 h-full w-full absolute inset-0"></div> <!-- Overlay -->
      <div class="relative z-10 p-8 text-white flex items-center justify-center flex-col text-center">
        <h2 class="text-5xl font-bold mb-4">Our Vision</h2>
        <p class="text-lg max-w-xl">
          
        </p>
      </div>
    </div>

    <!-- Who We Serve Section with Background Image -->
    <div class="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden" style="background-image: url('https://img.freepik.com/free-photo/medium-shot-kid-with-crossed-arms_23-2148860399.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid'); min-height: 300px;">
      <div class="bg-black bg-opacity-40 h-full w-full absolute inset-0"></div> <!-- Overlay -->
      <div class="relative z-10 p-8 text-white flex items-center justify-center flex-col text-center">
        <h2 class="text-5xl font-bold mb-4">Who We Serve</h2>
        <p class="text-lg max-w-xl">
          Every differently-abled child/individual in our communities, with a focus on marginalized communities and underserved schools.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add some custom styling for hover effects */
div.relative.bg-cover.bg-center.rounded-lg.shadow-lg.overflow-hidden:hover .bg-opacity-40 {
  background-color: rgba(0, 0, 0, 0.6); /* Darken overlay on hover */
}

div.relative.bg-cover.bg-center.rounded-lg.shadow-lg.overflow-hidden:hover .text-white {
  color: #FFD700; /* Change text color on hover */
}
</style>
