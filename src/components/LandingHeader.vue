<template>
  <div class="landing-header">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
            <span class="tag is-info">
              {{ tag }}
            </span>
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingHeader",
  props: ['title', 'subtitle', 'tag'],
  data() {
    return {}
  }
};
</script>

<style lang="scss">
.landing-table {

}
</style>
