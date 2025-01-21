<template>
  <div class="flex flex-col bg-gray-100 items-center mt-10 p-8 space-y-6">
    <h1 class="text-2xl font-semibold text-yellow-500"
    style="font-family: 'Finger Paint', cursive"
    >Donation Overview</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <!-- Highest Donations -->
      <div class="p-6 bg-white rounded-md border-2 hover:border-yellow-500">
        <h2 class="text-lg font-semibold mb-4">Highest Donations</h2>
        <canvas id="highestDonationsChart" class="w-full h-64"></canvas>
        <p class="text-sm text-center mt-4 text-gray-600">Categories</p>
      </div>
      
      <!-- Lowest Donations -->
      <div class="p-6 bg-white rounded-md border-2 hover:border-yellow-500">
        <h2 class="text-lg font-semibold mb-4">Lowest Donations</h2>
        <canvas id="lowestDonationsChart" class="w-full h-64"></canvas>
        <p class="text-sm text-center mt-4 text-gray-600">Categories</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'; // Import lifecycle hooks
// import { Chart } from 'chart.js'; // Import Chart.js

export default {
  name: 'PieCharts',

  setup() {
    // Function to initialize the Highest Donations chart
    const initializeHighestDonationsChart = () => {
      const ctx = document
        .getElementById('highestDonationsChart')
        .getContext('2d');

      const highestDonationsData = {
        labels: ['Education', 'Health', 'Environment', 'Animal Welfare'],
        datasets: [
          {
            label: 'Donations',
            data: [500, 300, 200, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      };

      new Chart(ctx, {
        type: 'pie',
        data: highestDonationsData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        },
      });
    };

    // Function to initialize the Lowest Donations chart
    const initializeLowestDonationsChart = () => {
      const ctx = document
        .getElementById('lowestDonationsChart')
        .getContext('2d');

      const lowestDonationsData = {
        labels: ['Sports', 'Art', 'Technology', 'Social Services'],
        datasets: [
          {
            label: 'Donations',
            data: [50, 70, 90, 110],
            backgroundColor: ['#FF9F40', '#9966FF', '#C9CBCF', '#FF6384'],
          },
        ],
      };

      new Chart(ctx, {
        type: 'pie',
        data: lowestDonationsData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        },
      });
    };

    // Initialize the charts when the component is mounted
    onMounted(() => {
      initializeHighestDonationsChart();
      initializeLowestDonationsChart();
    });
  },
};
</script>

<style>
/* Optional styles */
canvas {
  max-width: 100%;
}
</style>
