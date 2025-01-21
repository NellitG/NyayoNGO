<template>
  <!-- Page Heading -->
  <div class="text-center mt-8 px-4">
    <h1
      class="text-3xl font-semibold text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      Events
    </h1>
    <p class="mt-2 text-gray-700">
      Explore our upcoming and past events to stay informed and get involved.
    </p>
  </div>

  <!-- Cards Section -->
  <div class="flex justify-center mt-8 px-4">
    <div
      class="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3 max-w-6xl"
    >
      <!-- Card 1 -->
      <div
        class="relative rounded-xl overflow-hidden hover:shadow-lg flex flex-col border border-gray-300 bg-white mx-auto w-full max-w-sm"
      >
        <img
          src="https://img.freepik.com/premium-photo/happy-new-yar-background-friends-new-years-eve-party-with-confetti_612827-98341.jpg?ga=GA1.1.487577296.1727511220&semt=ais_tags_boosted"
          alt="Vuka Mwaka Party"
          class="w-full h-48 object-cover"
        />
        <div class="p-4 flex flex-col justify-between flex-grow">
          <h2
            class="text-lg font-semibold text-yellow-500 mb-2"
            style="font-family: 'Finger Paint', cursive"
          >
            Vuka Mwaka Party
          </h2>
          <p class="text-sm text-gray-700 mb-4">
            This is where we will display the details of the event.
          </p>
          <button
            class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            View Details
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="relative rounded-xl overflow-hidden hover:shadow-lg flex flex-col border border-gray-300 bg-white mx-auto w-full max-w-sm"
      >
        <img
          src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504748/healthcare_enrn5m.jpg"
          alt="Regional Activities"
          class="w-full h-48 object-cover"
        />
        <div class="p-4 flex flex-col justify-between flex-grow">
          <h2
            class="text-lg font-semibold text-yellow-500 mb-2"
            style="font-family: 'Finger Paint', cursive"
          >
            Regional Activities
          </h2>
          <p class="text-sm text-gray-700 mb-4">
            This is where we will display the details of the event.
          </p>
          <button
            class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Create Event Button -->
  <div class="flex justify-center mt-8 px-4">
    <router-link
      to="/Event"
      class="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Create Event
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CreateEventPage",
};
</script>

<style>
body {
  margin: 0;
}
</style>
