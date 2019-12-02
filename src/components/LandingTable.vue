<template>
  <div class="landing-table">
    <b-table
      :data="readyData"
      ref="table"
      paginated
      per-page="5"
      :opened-detailed="defaultOpenedDetails"
      :loading="isLoading"
      detailed
      detail-key="id"
      @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.productName}`)"
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>

        <b-table-column field="productName" label="Product Name" sortable>
          <template v-if="showDetailIcon">{{ props.row.productName }}</template>
          <template v-else>
            <a @click="toggle(props.row)">{{ props.row.productName }}</a>
          </template>
        </b-table-column>

        <b-table-column field="sale" label="Sale" sortable centered>
          <span class="tag is-success">{{ props.row.sale }}</span>
        </b-table-column>

        <b-table-column field="title" label="Title" sortable centered>{{ props.row.title }}</b-table-column>

        <b-table-column field="price" label="Price" sortable>{{ props.row.price }} $</b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="props.row.thumbnailUrl" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.productName }}</strong>
                <small>@ 31m</small>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LandingTable",
  data() {
    return {
      defaultOpenedDetails: [1],
      showDetailIcon: true
    };
  },
  created() {
    this.$store.dispatch("actionTableData");
  },
  computed: {
    ...mapGetters({
      isLoading: "getIsLoading",
      data: "getDataTable",
      isLess: "getIsLessThen"
    }),
    readyData() {
      if (this.isLess) {
        return this.data.filter(x => x.price < 100);
      } else {
        return this.data;
      }
    }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    }
  }
};
</script>

<style lang="scss">
.landing-table {
  margin: 50px;
}
</style>
