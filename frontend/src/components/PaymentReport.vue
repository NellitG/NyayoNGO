<template>
  <div class="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
    <!-- Page Title -->
    <h1
      class="text-2xl font-bold text-center text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      User Payments
    </h1>

    <!-- Payments List -->
    <div class="bg-white shadow rounded-lg p-4">
      <!-- Table Wrapper for Horizontal Scrolling -->
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto border-collapse border border-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                #
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                User Name
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                Email
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                Payment Amount
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                Payment Method
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(payment, index) in payments"
              :key="index"
              class="hover:bg-gray-50"
            >
              <td class="px-4 py-3 text-sm border border-gray-200">
                {{ index + 1 }}
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                {{ payment.name }}
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                {{ payment.email }}
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                {{ payment.amount }}
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                {{ payment.method }}
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                {{ payment.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPayments",
  data() {
    return {
      // Example data
      payments: [
        {
          name: "John Doe",
          email: "john@example.com",
          amount: "$200",
          method: "Mpesa",
          date: "2025-01-10",
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          amount: "$150",
          method: "Mpesa",
          date: "2025-01-09",
        },
        {
          name: "Chris Lee",
          email: "chris@example.com",
          amount: "$300",
          method: "Mpesa",
          date: "2025-01-08",
        },
      ],
    };
  },
};
</script>

<style>
/* Optional custom styles */
</style>
