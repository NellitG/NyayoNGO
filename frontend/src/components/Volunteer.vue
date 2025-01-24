<template>
  <div class="py-0 mt-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1
          class="mt-2 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-yellow-500"
          style="font-family: 'Finger Paint', cursive"
        >
          Volunteer with Nyayo Foundation
        </h1>
        <p class="text-gray-600 mt-4">
          Join us in making a difference. Fill out the form below to volunteer.
        </p>
      </div>
      <div class="mt-10 flex flex-col lg:flex-row gap-10">
        <!-- Left Section -->
        <div class="lg:w-1/2">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/free-photo/african-boys-with-football-ball_23-2148917976.jpg?ga=GA1.1.487577296.1727511220&semt=ais_tags_boosted"
              alt="Volunteer"
              class="w-full rounded-md mb-6"
            />
          </div>
        </div>
        <!-- Right Section -->
        <div class="lg:w-1/2 hover:border-yellow-400 border-2 border-black-400 p-4">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <form @submit.prevent="submitForm" class="space-y-4">
              <!-- Inputs (with bindings and placeholders) -->
              <!-- Name -->
  <div>
    <label
      for="name"
      class="block text-sm font-medium text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      Name
    </label>
    <input
      type="text"
      id="name"
      v-model="formData.volunteer.fullName"
      required
      class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      placeholder="Your Name"
    />
  </div>

  <!-- Email -->
  <div>
    <label
      for="email"
      class="block text-sm font-medium text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      Email
    </label>
    <input
      type="email"
      id="email"
      v-model="formData.volunteer.email"
      required
      class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      placeholder="Your Email"
    />
  </div>

  <!-- Phone -->
  <div>
    <label
      for="phone"
      class="block text-sm font-medium text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      Phone
    </label>
    <input
      type="tel"
      id="phone"
      v-model="formData.volunteer.phoneNumber"
      required
      class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      placeholder="Your Phone"
    />
  </div>

  <!-- Why Volunteer -->
  <div>
    <label
      for="volunteerMotivation"
      class="block text-sm font-medium text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      Why do you want to volunteer with Nyayo?
    </label>
    <textarea
      id="volunteerMotivation"
      v-model="formData.volunteer.motivation"
      rows="4"
      maxlength="150"
      required
      class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      placeholder="Tell us in 150 words or less"
    ></textarea>
  </div>
              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-md"
                >
                  <span v-if="isLoading">Submitting...</span>
                  <span v-else>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        volunteer: { fullName: '', email: '', phoneNumber: '', motivation: '' },
      },
      isLoading: false, // For submit button loading state
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
      try {
        const baseURL = 'http://localhost:3000';
        const payload = {volunteer: this.formData.volunteer,}
        console.log(payload)
        const response = await axios.post(`${baseURL}/volunteer`, payload);
        console.log('Form submitted successfully:', response.data);
        alert('Thank you for signing up as a volunteer!');
        this.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error.response?.data || error.message);
        alert('Submission failed. Please try again later.');
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.formData.volunteer = { fullName: '', email: '', phoneNumber: '', motivation: '' };
    },
  },
};

</script>