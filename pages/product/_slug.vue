<template>
  <div :id="singleProduct.id">
    <img :src="singleProduct.image" :alt="singleProduct.title" width="250" class="ma-auto d-flex">
    <h1 class="my-3">{{ singleProduct.title }}</h1>
    <span class="rating-border">
      <v-icon
        color="yellow darken-2"
        class="mb-1"
      >
         mdi-star
        </v-icon>
        {{singleProduct.rating.rate}}
    </span>
    <p class="ml-3 d-inline">
      ( {{singleProduct.rating.count}} ratings )
    </p>
    <h2 class="mt-5">${{singleProduct.price}}</h2>
    <h3>Description</h3>
    <p>
      {{singleProduct.description}}
    </p>
    <v-btn
      block
      x-large
      color="deep-orange lighten-1"
      class="white--text"
    >
      <v-icon class="white--text mr-2">mdi-cart-plus</v-icon>
      Add to cart
    </v-btn>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  async middleware({ store, params }) {
    await store.dispatch('product/getSingleProduct', params.slug)
  },
  computed: {
    singleProduct() {
      return this.$store.state.product.singleProduct
    }
  }
}
</script>

<style scoped>
.rating-border {
  border: 1px solid #727272;
  padding: 0.5em;
  border-radius: 10px;
}
</style>
