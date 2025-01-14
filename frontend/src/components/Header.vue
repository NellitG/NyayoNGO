<template>
  <div>
    <!-- Header section -->
    <header
      v-if="$route.path !== '/Dashboard'"
      :class="{
        'h-14 lg:h-20 fixed w-full top-0 inset-0 z-20 bg-gradient-to-r from-blue-500 to-yellow-500 transition-transform duration-300': true,
        '-translate-y-full': !isHeaderVisible,
      }"
    >
      <div
        class="flex items-center justify-between mx-auto max-w-7xl h-full px-4 lg:px-0"
      >
        <!-- Logo and menu toggle button -->
        <div class="flex items-center gap-6">
          <button
            class="text-2xl p-1 text-black hover:text-blue-900 lg:hidden"
            @click="toggleMenu2"
          >
            {{ close2 ? "☰" : "✘" }}
          </button>
          <router-link
            to="/"
            class="flex items-center"
            @click.native="closeMenu"
          >
            <img
              src="../assets/logos.png"
              alt="Logo"
              class="h-10 lg:h-12 object-contain"
            />
          </router-link>
        </div>

        <!-- Navigation menu -->
        <nav
          :class="{ hidden: close2, flex: !close2 }"
          class="bg-black xl:bg-transparent lg:static lg:flex lg:items-center flex-1 justify-center absolute top-14 lg:top-0 left-0 w-full lg:w-auto z-30"
        >
          <!-- Navigation items -->
          <ul
            class="flex flex-col lg:flex-row gap-6 lg:gap-8 text-white lg:text-black mt-4 lg:mt-0 lg:items-center px-4 lg:px-0 font-semibold"
            style="font-family: 'Finger Paint', cursive"
          >
            <li>
              <router-link
                to="/"
                class="hover:text-blue-900"
                active-class="hover:text-blue-900"
                @click.native="closeMenu"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/aboutus"
                class="hover:text-blue-900"
                active-class="hover:text-blue-900"
                @click.native="closeMenu"
                >About Us</router-link
              >
            </li>
            <li class="relative group">
              <router-link
                to="/programs"
                class="hover:text-blue-900 flex items-center"
                active-class="hover:text-blue-900"
                @click.native="closeMenu"
              >
                <span>Programs</span>
                <span class="ml-1"></span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/gallery"
                class="hover:text-blue-900 relative"
                active-class="hover:text-blue-900"
                @click.native="closeMenu"
              >
                Gallery
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-blue-900"
                active-class="hover:text-blue-900"
                @click.native="closeMenu"
                >Contact Us</router-link
              >
            </li>
            <li class="lg:ml-auto justify-end hidden lg:block">
              <router-link
                to="/Donations"
                class="bg-blue-900 text-white font-semibold py-1.5 px-4 rounded-md hover:bg-blue-900 text-sm"
                @click="closeMenu"
              >
                Donate
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close2: true,
      isHeaderVisible: true,
      lastScrollY: 0,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        this.close2 = true;
      }
    },
  },
  methods: {
    toggleMenu2() {
      this.close2 = !this.close2;
    },
    closeMenu() {
      this.close2 = true;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isHeaderVisible = currentScrollY < this.lastScrollY || currentScrollY <= 0;
      this.lastScrollY = currentScrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.isHomePage) {
      this.close2 = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
button {
  font-size: 1rem;
}

/* Ensure nav covers hero section when opened on mobile */
nav {
  transition: all 0.3s ease-in-out;
}

/* Adjust visibility for donation button */
@media (max-width: 1024px) {
  .donate-button {
    display: none;
  }
}
</style>
