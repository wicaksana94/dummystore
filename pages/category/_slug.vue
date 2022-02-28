<template>
  <div>
    <h1 class="text-capitalize mb-7">{{ this.slug }}</h1>
    <v-row>
      <v-col
        v-for="product in categoryProductsData"
        :key="product.id"
      >
        <ProductCard :data="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async middleware({ store, params }) {
    await store.dispatch('category/getCategoryProductsData', params.slug)
  },
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  computed: {
    categoryProductsData() {
      return this.$store.state.category.categoryProductsData
    }
  }
}
</script>
