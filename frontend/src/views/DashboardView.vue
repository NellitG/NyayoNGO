<template>
  <div class="px-4 sm:px-8">
    <Pie />
    <EventReport />
    <DonationReport />
    <PaymentReport />
    <Comments />
  </div>
</template>

<script setup>
import  Comments  from "../components/Comments.vue";
import DonationReport from "../components/DonationReport.vue";
import EventReport from "../components/EventReport.vue";
import PaymentReport from "../components/PaymentReport.vue";
import Pie from "../components/Pie.vue";
</script>
<style lang="scss" scoped></style>
