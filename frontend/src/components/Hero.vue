<template>
  <div class="bg-gray-50 py-4 mt-24">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Images -->
        <div class="flex flex-col space-y-4 md:w-1/4">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/smile_gfi32v.avif"
            alt="Nature Image 1"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504820/water_tnsmov.avif"
            alt="Nature Image 2"
            class="rounded-lg shadow-md"
          />
        </div>
        <!-- Hero Content -->
        <div class="text-center md:text-left md:w-1/2 md:px-8 ">
          <h1
            class="text-6xl text-center font-bold text-yellow-500"
            style="font-family: 'Finger Paint', cursive"
          >
            Nyayo's<br /><span class="text-blue-900 font-semibold"
              >Foundation</span
            >
          </h1>

          <h1
            class="text-4xl mt-2 text-center text-white bg-gradient-to-r from-blue-500 to-yellow-500 p-4 rounded-lg"
            style="font-family: 'Finger Paint', cursive"
          >
            <marquee behavior="scroll"></marquee>
              Empowering Every Ability.<br />
              Enriching Every Life.<br />
              Building Futures
            
          </h1>

          <div
            class="mt-6 flex xl:justify-center md:justify-start space-x-4 justify-center"
          >
            <router-link
              to="/aboutus"
              class="bg-blue-900 border border-gray-300 text-white px-6 py-2 rounded"
            >
              Join us
            </router-link>
            <router-link
              to="/Donations"
              class="bg-blue-900 text-white px-6 py-2 rounded"
            >
              Donate
            </router-link>
          </div>
        </div>
        <!-- Right Images -->
        <div class="flex flex-col space-y-4 md:w-1/4 mt-4">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504817/playing_vxx3s8.avif"
            alt="Nature Image 3"
            class="rounded-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504748/healthcare_enrn5m.jpg"
            alt="Nature Image 4"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
      <!-- Additional Pictures -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 hidden md:grid xl:ml-24"
      >
        <img
          src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504817/running_yvjlyc.jpg"
          alt="Extra Image 1"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504817/playing_vxx3s8.avif"
          alt="Extra Image 2"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/smiling_dn7n3w.avif"
          alt="Extra Image 3"
          class="rounded-lg shadow-md"
        />
        <!-- <img src="../assets/community.jpg" alt="Extra Image 4" class="rounded-lg shadow-md"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap");
</style>
