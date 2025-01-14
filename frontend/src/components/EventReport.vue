<template>
    <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
  <h1 class="text-2xl font-semibold mb-6 text-center text-yellow-500"
  style="font-family: 'Finger Paint', cursive"
  >Create New Event</h1>
  <form class="space-y-6">
    <!-- Event Title -->
    <div>
      <label for="eventTitle" class="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
      <input 
        type="text" 
        id="eventTitle" 
        name="eventTitle" 
        class="w-full border border-black rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
        placeholder="Enter event title" 
        required
      />
    </div>

    <!-- Event Description -->
    <div>
      <label for="eventDescription" class="block text-sm font-medium text-gray-700 mb-2">Event Description</label>
      <textarea 
        id="eventDescription" 
        name="eventDescription" 
        rows="4" 
        class="w-full border border-black rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" 
        placeholder="Provide a brief description of the event" 
        required
      ></textarea>
    </div>

    <!-- Poster Upload -->
    <div>
      <label for="posterUpload" class="block text-sm font-medium text-gray-700 mb-2">Upload Event Poster</label>
      <input 
        type="file" 
        id="posterUpload" 
        name="posterUpload" 
        accept="image/*" 
        class="w-full border border-black rounded-md shadow-sm p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        required
      />
    </div>

    <!-- Submit Button -->
    <div class="text-center">
      <button 
        type="submit" 
        class="w-full md:w-auto px-6 py-2 bg-blue-900 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Event
      </button>
    </div>
  </form>
</div>
</template>