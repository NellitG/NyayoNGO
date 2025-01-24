<template>
    <div class="py-18 mt-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <div class="text-center">
          <h1
            class="mt-2 text-3xl font-semibold text-yellow-500"
            style="font-family: 'Finger Paint', cursive"
          >
            Create a New Event
          </h1>
          <p class="mt-4 text-gray-950">
            Plan your next event with ease.<br />
            Fill in the details below to get started.
          </p>
        </div>
  
        <!-- Form Section -->
        <div
          class="mt-6 bg-white border-2 border-yellow-200 p-6 rounded-lg shadow-md max-w-md mx-auto"
        >
          <img
            src="https://img.freepik.com/free-photo/people-raising-their-hands-concert_53876-64968.jpg"
            alt="Create Event"
            class="w-full rounded-lg shadow-md mb-6"
          />
          <!-- Form Submission -->
          <form
            action="/event"
            method="POST"
            enctype="multipart/form-data"
            class="space-y-6"
          >
            <!-- Event Title -->
            <div>
              <label
                for="eventTitle"
                class="block text-sm font-medium text-gray-700"
              >
                Event Title
              </label>
              <input
                type="text"
                id="eventTitle"
                name="eventTitle"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter the event title"
              />
            </div>
  
            <!-- Event Description -->
            <div>
              <label
                for="eventDescription"
                class="block text-sm font-medium text-gray-700"
              >
                Event Description
              </label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                rows="4"
                required
                maxlength="100"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Describe the event (max 100 words)"
              ></textarea>
            </div>
  
            <!-- Event Date -->
            <div>
              <label
                for="eventDate"
                class="block text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
  
            <!-- Event Location -->
            <div>
              <label
                for="eventLocation"
                class="block text-sm font-medium text-gray-700"
              >
                Event Location
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter the event location"
              />
            </div>
  
            <!-- Event Poster Upload -->
            <div>
              <label
                for="posterUpload"
                class="block text-sm font-medium text-gray-700"
              >
                Upload Event Posters
              </label>
              <input
                type="file"
                id="posterUpload"
                name="posterUpload"
                multiple
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              />
            </div>
  
            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-600"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  