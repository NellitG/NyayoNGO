<template>
    <div class="bg-gray-100 max-w-6xl mx-auto p-8 space-y-6">
      <!-- Title -->
      <h1 class="text-2xl font-bold text-center text-yellow-500"
      style="font-family: 'Finger Paint', cursive"
      >Donation Reports</h1>
  
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Completed Donations -->
        <div class="p-6 bg-white shadow rounded-md flex flex-col items-center space-y-2">
          <h2 class="text-lg font-medium text-gray-700">Completed Donations</h2>
          <p class="text-3xl font-bold">250</p>
          <p class="text-sm text-green-600">+10%</p>
        </div>
  
        <!-- Pending Donations -->
        <div class="p-6 bg-white shadow rounded-md flex flex-col items-center space-y-2">
          <h2 class="text-lg font-medium text-gray-700">Pending Donations</h2>
          <p class="text-3xl font-bold">50</p>
          <p class="text-sm text-red-600">-5%</p>
        </div>
      </div>
  
      <!-- Donation Trends Chart -->
      <div class="p-6 bg-white shadow rounded-md">
        <h2 class="text-lg font-medium text-gray-700 mb-4">Donation Trends</h2>
        <canvas id="donationTrendsChart" class="w-full h-64"></canvas>
        <p class="text-sm text-center text-gray-600 mt-2">Months</p>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from "vue"; // Import lifecycle hooks
//   import { Chart } from "chart.js"; // Import Chart.js
  
  export default {
    name: "DonationReport",
    setup() {
      // Initialize the donation trends chart
      const initializeDonationTrendsChart = () => {
        const ctx = document
          .getElementById("donationTrendsChart")
          .getContext("2d");
  
        // Data for the line chart
        const data = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          datasets: [
            {
              label: "Donations",
              data: [50, 100, 150, 200, 250, 200, 300, 400, 350],
              borderColor: "#4B5563",
              backgroundColor: "rgba(75, 85, 99, 0.2)", // Gradient effect
              fill: true,
              tension: 0.4, // Curve effect
            },
          ],
        };
  
        // Chart options
        const options = {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hides legend
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Removes grid lines
              },
              title: {
                display: true,
                text: "Months",
                color: "#6B7280",
              },
            },
            y: {
              grid: {
                color: "#E5E7EB",
              },
              title: {
                display: true,
                text: "Amount",
                color: "#6B7280",
              },
            },
          },
        };
  
        // Create the chart
        new Chart(ctx, {
          type: "line",
          data: data,
          options: options,
        });
      };
  
      // Mount lifecycle hook to initialize the chart
      onMounted(() => {
        initializeDonationTrendsChart();
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
  