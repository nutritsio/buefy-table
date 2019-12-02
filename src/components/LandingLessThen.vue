<template>
  <div class="landing-less-then">
        <div class="field">
            <b-checkbox v-model="lessThen">Less then 100$</b-checkbox>
        </div>
  </div>
</template>

<script>
export default {
  name: "LandingLessThen",
  data() {
    return {
        lessThen: false,
    }
  },
  watch: {
      lessThen() {
          this.$store.dispatch('actionFilterLess', this.lessThen)
      }
  }
};
</script>

<style lang="scss">
.landing-less-then {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>
