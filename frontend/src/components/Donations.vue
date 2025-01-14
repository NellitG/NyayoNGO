<template>
  <div class="py-24 mt-30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1
          class="mt-2 text-3xl font-semibold text-yellow-500"
          style="font-family: 'Finger Paint', cursive"
        >
          Make a Donation
        </h1>
        <p class="mt-4 text-gray-950">
          Your contribution can make a big difference.<br />
          Please fill in the details below.
        </p>
      </div>

      <div
        class="mt-4 bg-white border-2 border-yellow-200 p-6 rounded-lg shadow-md max-w-md mx-auto"
      >
        <form @submit.prevent="submitDonation" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              v-model="donationForm.name"
              @input="validateName"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter name"
            />
            <p class="text-gray-500 text-xs mt-1">You cannot type numbers in the name field.</p>
          </div>

          <!-- Amount -->
          <div>
            <label
              for="amount"
              class="block text-sm font-medium text-gray-700"
              >Amount</label
            >
            <input
              type="number"
              id="amount"
              v-model="donationForm.amount"
              required
              min="1"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter amount"
            />
            <p v-if="formErrors.amount" class="text-red-500 text-sm mt-1">
              {{ formErrors.amount }}
            </p>
          </div>

          <!-- Phone Number -->
          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone"
              v-model="donationForm.phone"
              @input="validatePhone"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter phone number"
            />
            <p class="text-gray-500 text-xs mt-1">You cannot type letters in the phone number field.</p>
            <p v-if="formErrors.phone" class="text-red-500 text-sm mt-1">
              {{ formErrors.phone }}
            </p>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              class="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-md"
            >
              Donate
            </button>
          </div>

          <!-- Notifications -->
          <div v-if="successMessage" class="mt-4 text-green-500 text-sm">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="mt-4 text-red-500 text-sm">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donationForm: {
        name: "",
        amount: "",
        phone: "",
      },
      successMessage: "",
      errorMessage: "",
      formErrors: {},
    };
  },
  methods: {
    validateName(event) {
      // Remove numbers from the name field
      this.donationForm.name = event.target.value.replace(/[0-9]/g, "");
    },
    validatePhone(event) {
      // Remove letters from the phone number field
      this.donationForm.phone = event.target.value.replace(/[^0-9]/g, "");
    },
    validateForm() {
      this.formErrors = {};

      if (!this.donationForm.amount || this.donationForm.amount <= 0) {
        this.formErrors.amount = "Please enter a valid amount.";
      }

      if (this.donationForm.phone.length !== 10) {
        this.formErrors.phone = "Please enter a valid 10-digit phone number.";
      }

      return Object.keys(this.formErrors).length === 0;
    },
    async submitDonation() {
      if (!this.validateForm()) return;

      // Format phone number to start with 254
      const formattedPhone = this.donationForm.phone.startsWith("254")
        ? this.donationForm.phone
        : "254" + this.donationForm.phone.slice(1);

      try {
        const response = await fetch("http://localhost/stkpush.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            amount: this.donationForm.amount,
            phone: formattedPhone,
          }),
        });

        if (response.ok) {
          this.successMessage = "Donation successful!";
          this.donationForm = { name: "", amount: "", phone: "" };
        } else {
          const errorData = await response.json();
          this.errorMessage =
            errorData.error || "Failed to send donation request.";
        }
      } catch (error) {
        this.errorMessage = "An error occurred. Please try again.";
      }
    },
  },
};
</script>
