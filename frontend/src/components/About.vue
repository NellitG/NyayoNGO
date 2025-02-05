<template>
  <div class="bg-gray-50 py-2 relative overflow-hidden mt-32">
    <!-- Watermark -->
    <div class="absolute inset-0 flex justify-center items-center">
      <p class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-200 opacity-10 tracking-widest text-center">
        NYAYO FOUNDATION
      </p>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 z-10">
      <div class="grid grid-cols-1 gap-12 lg:gap-16">
        <!-- Our Vision Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div class="relative flex justify-center">
            <div class="absolute inset-0 bg-yellow-400 w-11/12 h-11/12 sm:w-5/6 sm:h-5/6 -z-10 transform translate-x-3 translate-y-3 rounded-md"></div>
            <img
              src="https://img.freepik.com/free-photo/full-shot-happy-kids-outdoors_23-2148761594.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid"
              alt="Our Vision Image"
              class="rounded-md shadow-lg w-11/12 sm:w-3/4 h-auto object-cover"
            />
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500"
                style="font-family: 'Finger Paint', cursive">
              Our Vision
            </h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
              Our mission is to provide transformative resources and support that enable individuals of all abilities to thrive, promoting inclusivity, equality, and empowerment in every community we serve.
            </p>
          </div>
        </div>

        <!-- Our Mission Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div class="text-center md:text-left">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500"
                style="font-family: 'Finger Paint', cursive">
              Our Mission
            </h3>
            <p class="mt-4 text-gray-600 leading-relaxed">
              To empower individuals of all abilities, fostering an inclusive society where every life is enriched through equal opportunities, support, and resources.
            </p>
          </div>
          <div class="relative flex justify-center">
            <div class="absolute inset-0 bg-blue-950 w-11/12 h-11/12 sm:w-5/6 sm:h-5/6 -z-10 transform translate-x-3 translate-y-3 rounded-md"></div>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-boys-hugging_23-2148860422.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid/100x50"
              alt="Our Mission Image"
              class="rounded-md shadow-lg w-11/12 sm:w-3/4 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
