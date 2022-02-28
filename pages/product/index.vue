<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" lg="12">
      <v-container class="py-4 d-flex justify-center">
        <v-row
          class="mb-6"
        >
          <v-col
            v-for="product in products"
            :key="product.id"
          >
            <ProductCard :data="product" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: 'IndexProductsPage',
  computed: {
    products() {
      return this.$store.state.product.data
    }
  },
  created() {
    this.$store.dispatch('product/getProductData')
  }
}
</script>

<style scoped>

</style>
