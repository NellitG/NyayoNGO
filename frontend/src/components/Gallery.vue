<template>
  <div class="p-6 bg-gray-100 min-h-screen mt-20">
    <div class="max-w-7xl mx-auto">
      <!-- Gallery Heading -->
      <h2 class="text-5xl font-bold text-center mb-6"
      style="font-family: 'Finger Paint', cursive"
      >Photo Gallery</h2>

      <!-- Responsive Image Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <!-- Repeatable Image Card -->
        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504819/talk_u37gzk.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />

          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>

        <!-- Add more images -->
        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504747/dance_gntcwa.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>

        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504748/community_ehnckv.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>

        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/relative_rwwn7v.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>

        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504747/girl_tk6iub.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>

        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504748/hands_zpyaz2.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>

        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504747/child_i5fpdq.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>
        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504747/church_nqcu54.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>
        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504818/show_jmabpv.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>
        <div class="relative group">
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504748/hands_zpyaz2.jpg"
            alt="Placeholder Image"
            class="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
          >
            <!-- <p class="text-white text-lg font-semibold">Image Caption</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Ensure all images fit properly */
img {
  object-fit: cover; /* Ensures the image covers the area without distortion */
  width: 100%; /* Makes sure the image takes full width of its container */
  height: 100%; /* Makes sure the image takes full height of its container */
  border-radius: 0.5rem; /* Rounded corners */
}

/* Ensure grid layout is responsive */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on large screens */
  }
}
</style>
