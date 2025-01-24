<template>
  <div
    class="flex flex-col mt-12 lg:flex-row items-center justify-between bg-white px-6 lg:px-20 py-12 lg:py-10 mr-4"
  >
    <!-- Left Section -->
    <div class="grid grid-cols-2 gap-4 lg:w-1/2">
      <!-- Image 1 -->
      <img
        src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736922076/children_sqvjyn.avif"
        alt="Kids in class"
        class="rounded-lg shadow-md"
      />
      <!-- Image 2 -->
      <img
        src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736922077/smiles_xv96xv.avif"
      />
      <!-- Image 3 -->
      <img
        src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736922077/children-of-uganda-2245270_640_zbefpa.jpg"
        alt="Child writing"
        class="rounded-lg shadow-md"
      />
      <!-- Image 4 -->
      <img
        src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736922077/childrens_gs07fd.jpg"
      />
    </div>

    <div class="lg:w-1/2 mt-4 lg:mt-0 lg:ml-12 text-center lg:text-left">
      <h1
        class="text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500"
        style="font-family: 'Finger Paint', cursive"
      >
        How We Make an Impact
      </h1>
      <p class="mt-6 text-gray-600 leading-relaxed">
        We engage stakeholders through a blend of traditional and digital
        platforms, including informative brochures, a dynamic website, active
        social media presence, and impactful newsletters. By sharing inspiring
        personal stories from beneficiaries, parents, and educators, we foster
        trust, raise awareness, and highlight the transformative impact of our
        work. Our commitment lies in forging enduring partnerships and ensuring
        sustainable support through grants, generous donations, and creative
        fundraising initiatives.
      </p>
      <div class="mt-8 flex justify-center lg:justify-center gap-4">
        <router-link
          to="/volunteer"
          class="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-900 hover:text-black"
        >
          Volunteer
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap");
</style>
