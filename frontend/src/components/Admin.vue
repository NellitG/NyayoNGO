<template>
  <body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2
        class="text-2xl font-semibold text-center text-yellow-500"
        style="font-family: 'Finger Paint', cursive"
      >
        Login
      </h2>
      <form class="mt-4">
        <!-- Email Input -->
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-950"
            style="font-family: 'Finger Paint', cursive"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white"
            placeholder="Enter your email"
            required
          />
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-950"
            style="font-family: 'Finger Paint', cursive"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white"
            placeholder="Enter your password"
            required
          />
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Log In
        </button>
      </form>
    </div>
  </body>
</template>
