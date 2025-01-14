<template>
  <div>
    <!-- Admin Navbar -->
    <header
      :class="{
        'fixed top-0 left-0 w-full bg-white shadow-lg z-20 transition-transform duration-300': true,
        '-translate-y-full': !isNavbarVisible,
      }"
    >
      <div class="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-6 h-14 lg:h-16">
        <!-- Logo -->
        <div class="text-xl font-bold text-blue-600">
          Admin Panel
        </div>

        <!-- Navigation Links -->
        <nav>
          <ul class="flex items-center gap-8 text-sm font-semibold text-gray-600">
            <li>
              <a href="#" class="hover:text-blue-600">Dashboard</a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-600">Events</a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-600">Payments</a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-600">Notifications</a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-600">Feedback</a>
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
      isNavbarVisible: true,
      lastScrollY: 0,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isNavbarVisible = currentScrollY < this.lastScrollY || currentScrollY <= 0;
      this.lastScrollY = currentScrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* Optional: Add custom styles here */
</style>
