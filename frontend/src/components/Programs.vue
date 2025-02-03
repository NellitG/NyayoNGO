<template>
  <div class="py-12 bg-gray-50 relative mr-4">
    <!-- Decorative Background Shapes -->
    <div
      class="absolute top-0 left-0 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply opacity-30 blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply opacity-20 blur-3xl"
    ></div>
    <div class="relative z-10 container mx-auto px-6 lg:px-16 space-y-32">
      <!-- Inclusive Education -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <!-- Image -->
        <div class="lg:col-span-5 relative">
          <div
            class="absolute -top-8 -left-8 w-full h-full bg-yellow-100 rounded-lg -z-10 transform rotate-3"
          ></div>
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504819/student_vjs8du.avif"
            alt="Inclusive Education"
            class="w-full rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
        <!-- Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left pt-12">
          <h3
            class="text-transparent text-5xl font-semibold text-gray-950 bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500"
            style="font-family: 'Finger Paint', cursive"
          >
            Inclusive Education
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            To ensure that every differently-abled child/individual has access
            to quality digital education, has access to the same opportunities
            as any other child/individual, despite their background differences.
            We envision a future whereby every differently-abled
            child/individual thrives emotionally, professionally and physically,
            and whereby diversity is a stepping stone to greatness rather than
            an obstacle.
            <br />
            We aim to create a learning environment that caters to their needs
            and empowers them with the skills to succeed.
          </p>
          <!-- Centered Button -->
          <div class="flex justify-center">
            <!-- <button class="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition duration-300">
              Learn More
            </button> -->
          </div>
        </div>
      </div>

      <!-- Workshops & Seminars -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <!-- Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left pt-12">
          <h3
            class="text-5xl font-semibold text-gray-950 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500"
            style="font-family: 'Finger Paint', cursive"
          >
            Workshops & Seminars
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            We facilitate impactful educational sessions tailored for parents,
            caregivers, and educators, highlighting the importance of disability
            rights, fostering inclusion, and championing personalized education
            for children with diverse abilities. These workshops serve as
            catalysts for change, cultivating a profound understanding within
            the community and empowering participants to advocate for a more
            inclusive and equitable society.
          </p>
          <!-- Centered Button -->
          <div class="flex justify-center">
            <router-link to="/Event">
              <button
                class="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-600 transition duration-300"
              >
                View Events
              </button>
            </router-link>
          </div>
        </div>
        <!-- Image -->
        <div class="lg:col-span-5 relative">
          <div
            class="absolute -top-8 -right-8 w-full h-full bg-indigo-100 rounded-lg -z-10 transform -rotate-3"
          ></div>
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504821/workshop_qd0eyx.jpg"
            alt="Workshops & Seminars"
            class="w-full rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <!-- Partnerships -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <!-- Image -->
        <div class="lg:col-span-5 relative">
          <div
            class="absolute -top-8 -left-8 w-full h-full bg-purple-100 rounded-lg -z-10 transform rotate-3"
          ></div>
          <img
            src="https://res.cloudinary.com/dqe69vaz7/image/upload/v1736504817/partnerships_aevplu.avif"
            alt="Partnerships"
            class="w-full rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
        <!-- Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left pt-12">
          <h3
            class="text-5xl font-semibold text-gray-950 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500"
            style="font-family: finger-paint, cursive"
          >
            Partnerships
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            Our collaboration goes beyond mere support—it drives systemic
            change, ensuring inclusive education is not just available but
            accessible and impactful for every child. We work alongside schools,
            healthcare providers, and community organizations to establish a
            robust network of care and opportunity. Your support as a donor
            empowers us to turn this vision into reality, breaking down barriers
            and building pathways for children with disabilities to thrive,
            excel, and realize their full potential.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
