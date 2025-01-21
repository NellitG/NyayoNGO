<template>
  <div class="bg-gray-50 py-0 mt-24 border-rounded">
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
    >
      <!-- Left Section -->
      <div>
        <div class="relative">
          <span
            class="absolute text-5xl sm:text-6xl lg:text-7xl text-gray-200 top-0 -left-8"
            >“</span
          >
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mt-10"
          >
            FAQ
          </h2>
        </div>
        <p class="mt-4 text-sm sm:text-base text-gray-600">
          Explore the common questions and answers
        </p>
        <p class="mt-4 text-sm sm:text-base text-gray-600">
          Explore some of the most commonly asked questions below. If you don't
          find what you're looking for, feel free to reach out—we're here to
          help!"
        </p>
      </div>

      <!-- Right Section -->
      <div class="space-y-6 mt-10">
        <!-- FAQ Items -->
        <div class="space-y-4">
          <!-- FAQ Items with interactivity -->
          <div v-for="(faq, index) in faqs" :key="index">
            <div
              @click="toggleFAQ(index)"
              class="flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer"
            >
              <h4 class="font-medium text-base sm:text-lg text-gray-800">
                {{ faq.question }}
              </h4>
              <span class="text-gray-500 text-base">
                {{ faq.expanded ? "-" : "+" }}
              </span>
            </div>
            <p
              v-if="faq.expanded"
              class="mt-2 text-sm sm:text-base text-gray-600"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>

        <!-- Footer Text and Button -->
        <div>
          <p class="text-yellow-500 font-medium text-lg text-center md:text-left mt-4"
          style="font-family: 'Finger Paint', cursive">
            Didn't find the answer you are looking for?
          </p>
          <a
            href="/contact"
            class="mt-4 inline-block px-6 py-3 bg-yellow-400 rounded-full text-black font-medium hover:bg-blue-900 w-full md:w-auto text-center"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "How Can I be part of the organization?",
          answer:
            "You can be part of our organization by making a donation, volunteering, or supporting our cause. We welcome all individuals who are interested in making a difference in the lives of children with disabilities.",
          expanded: true,
        },
        {
          question: "How can I make payment?.",
          answer:
            "Payments are made through mpesa paybill number 600000. For more information, please contact us at 254-798-620-045 or email us at kamaunelson2000@gmail.com",
          expanded: false,
        },
        {
          question: "Is my donation tax deductible?",
          answer:
            "No, your donation is not tax deductible. However, we are committed to making our organization as tax-exempt as possible.",
          expanded: false,
        },
        {
          question: "How do I volunteer to save children?",
          answer:
            "You can volunteer by joining our volunteer program. We welcome volunteers who are passionate about making a difference in the lives of children with disabilities.",
          expanded: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      // Toggle the expanded state of the selected FAQ
      this.faqs[index].expanded = !this.faqs[index].expanded;
    },
  },
};
</script>

<style>
/* Add any additional custom styles here if needed */
</style>
