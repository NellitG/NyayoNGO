<template>
  <div class="max-w-7xl bg-gray-100 mx-auto p-4 sm:p-6 mt-8 space-y-6">
    <!-- Page Title -->
    <h1
      class="text-2xl font-bold text-center text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
    >
      User Comments and Feedback
    </h1>

    <!-- Comments List -->
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
                Feedback
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm border border-gray-200">1</td>
              <td class="px-4 py-3 text-sm border border-gray-200">John Doe</td>
              <td class="px-4 py-3 text-sm border border-gray-200">john@example.com</td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                The event was amazing, I loved it!
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">2025-01-12</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm border border-gray-200">2</td>
              <td class="px-4 py-3 text-sm border border-gray-200">Jane Smith</td>
              <td class="px-4 py-3 text-sm border border-gray-200">jane@example.com</td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                Good organization but the schedule could be better.
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">2025-01-12</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm border border-gray-200">3</td>
              <td class="px-4 py-3 text-sm border border-gray-200">Chris Lee</td>
              <td class="px-4 py-3 text-sm border border-gray-200">chris@example.com</td>
              <td class="px-4 py-3 text-sm border border-gray-200">
                Great speakers! Keep up the good work.
              </td>
              <td class="px-4 py-3 text-sm border border-gray-200">2025-01-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminFeedback",
};
</script>

<style>
/* Optional custom styles */
</style>
