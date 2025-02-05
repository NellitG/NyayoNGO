<template>
  <div class="py-24 mt-30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="mt-2 text-3xl font-semibold text-yellow-500" style="font-family: 'Finger Paint', cursive">
          Make a Donation
        </h1>
        <p class="mt-4 text-gray-950">
          Your contribution can make a big difference.<br />
          Please fill in the details below.
        </p>
      </div>

      <div class="mt-4 bg-white border-2 border-yellow-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <img
          src="https://img.freepik.com/free-photo/african-kid-enjoying-life_23-2151447572.jpg?ga=GA1.1.487577296.1727511220&semt=ais_tags_boosted"
          alt="Donation"
          class="w-full rounded-lg shadow-md mb-6"
        />
        <form @submit.prevent="submitDonation" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              v-model="donation.donorName"
              required
              pattern="^[a-zA-Z\s]+$"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter name"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="donation.donorEmail"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter email"
            />
          </div>

          <!-- Amount -->
          <div>
            <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              v-model.number="donation.amount"
              required
              min="1"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter amount"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="donation.phoneNumber"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter phone number"
            />
            <p class="text-gray-500 text-xs mt-1">Enter a valid phone number.</p>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
            >
            <span v-if="isLoading">Donating...</span>
            <span v-else>Donate</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      donation: { donorName: "", donorEmail: "", amount: "", phoneNumber: "" },
      isLoading: false, // For button loading state
    };
  },
  methods: {
    async submitDonation() {
      this.isLoading = true;
      try {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const payload = { donation: this.donation };
        const response = await axios.post(`${baseURL}/donate`, payload);
        alert("Thank you for your donation!");
        this.resetForm();
      } catch (error) {
        // console.error("Error making donation:", error.response?.data || error.message);
        alert("Submission failed. Please try again later.");
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.donation = { donorName: "", donorEmail: "", amount: "", phoneNumber: "" };
    },
  },
};
</script>




// <!-- <style scoped>
// .loader {
//   border: 3px solid #fff;
//   border-top: 3px solid #ffba08;
//   border-radius: 50%;
//   width: 16px;
//   height: 16px;
//   animation: spin 0.6s linear infinite;
// }

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
// </style> -->
