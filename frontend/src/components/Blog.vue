<template>
  <div class="bg-gray-50 mt-0">
    <!-- Newsletter Section -->
    <div class="text-center py-10 bg-gray-50">
      <h2
        class="text-3xl font-semibold mb-6 text-yellow-500"
        style="font-family: 'Finger Paint', cursive"
      >
        Subscribe to our newsletter today!
      </h2>
      <form class="flex justify-center items-center max-w-md mx-auto space-x-2">
        <input
          type="email"
          placeholder="Your email"
          class="px-4 py-2 border border-yellow-500 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          class="px-6 py-2 bg-blue-900 text-white font-semibold rounded-r-md transition"
         >
          Submit
        </button>
      </form>
    </div>

    <!-- Blog Section -->
    <div class="max-w-4xl mx-auto py-4 space-y-6">
      <!-- Blog Card -->
      <div class="relative flex items-center bg-white rounded-lg shadow-md p-6">
        <div class="w-1/4 flex justify-center relative mt-6 py-10">
          <img
            src="https://img.freepik.com/free-photo/portrait-smiley-young-african-boy-doing-silent-sign_23-2148852719.jpg?ga=GA1.1.487577296.1727511220"
            alt="Blog image 1"
            class="absolute -left-6 -bottom-8 w-full h-56 object-cover shadow-lg"
          />
        </div>
        <div class="w-3/4 pl-6">
          <h3 class="text-2xl font-bold text-gray-950">
           Smiles
          </h3>
          <p class="text-gray-950 text-sm mb-4">
           Putting a smile on a child's face is a powerful way to show love and support.
          </p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-yellow-500">18/06/2025</span>
            <!-- <button
              class="px-4 py-2 text-blue-900 border-2 rounded-md text-sm hover:bg-blue-900 hover:text-white transition"
            >
              Read more
            </button> -->
          </div>
        </div>
      </div>

      <!-- Repeat Blog Cards -->
      <div class="flex items-center bg-white rounded-lg shadow-md p-6">
        <div class="w-1/4 flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/close-up-portrait-boy_1048944-25425205.jpg?ga=GA1.1.487577296.1727511220"
            alt="Blog image 2"
            class="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="w-3/4 pl-6">
          <h3 class="text-2xl font-bold text-gray-950">
            Support
          </h3>
          <p class="text-gray-950 text-sm mb-4">
            Ad do pariatur culpa tempor consequat nulla exercitation veniam
            tempor officia ipsum.
          </p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-yellow-500">24/06/2023</span>
            <!-- <button
              class="px-4 py-2 text-blue-900 border-2 rounded-md text-sm hover:bg-blue-900 hover:text-white transition"
            >
              Read more
            </button> -->
          </div>
        </div>
      </div>

      <div class="relative flex items-center bg-white rounded-lg shadow-md p-6">
        <div class="w-1/4 flex justify-center relative mt-6 py-10">
          <img
            src="https://img.freepik.com/premium-photo/closeup-portrait-cheerful-african-american-cute-boy-smiling-looking-camera_13339-338417.jpg?ga=GA1.1.487577296.1727511220"
            alt="Blog image 1"
            class="absolute -left-6 -top-14 w-full h-56 object-cover shadow-lg"
          />
        </div>
        <div class="w-3/4 pl-6">
          <h3 class="text-2xl font-bold text-gray-950">
            Love
          </h3>
          <p class="text-gray-500 text-sm mb-4">
            Nisi dui sunt veniam esse quis ex labore Lorem et. Exceptur labore
            minima ea officia labore
          </p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-yellow-500">18/06/2025</span>
            <!-- <button
              class="px-4 py-2 text-blue-900 border-2 rounded-md text-sm hover:bg-blue-900 hover:text-white transition"
            >
              Read more
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
