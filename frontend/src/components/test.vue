<script>
import axios from "axios";

export default {
  data() {
    return {
      donation: {
        name: "",
        email: "",
        amount: null,
        phone: "",
      },
      loading: false,
      successMessage: "",
    };
  },
  methods: {
    async submitDonation() {
      this.loading = true;
      this.successMessage = "";

      try {
        const response = await axios.post("/donate", this.donation);

        if (response.data.success) {
          this.successMessage = "Thank you for your donation!";
          this.donation = { name: "", email: "", amount: null, phone: "" };
        } else {
          this.successMessage = "Something went wrong. Please try again.";
        }
      } catch (error) {
        console.error("Donation submission failed:", error);
        this.successMessage = "An error occurred. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>