<template>
  <div id="app">
    <LandingHeader title="Table Task" subtitle="Specially for" tag="B2C Company" />
    <div class="container">
      <LandingLessThen />
      <LandingTable />
    </div>
  </div>
</template>

<script>
import LandingHeader from "./components/LandingHeader.vue";
import LandingLessThen from "./components/LandingLessThen.vue";
import LandingTable from "./components/LandingTable.vue";

export default {
  name: "app",
  components: {
    LandingHeader,
    LandingLessThen,
    LandingTable
  }
};
</script>

<style lang="scss">
@import "../node_modules/@mdi/font/css/materialdesignicons.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
</style>
