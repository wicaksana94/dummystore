<template>
  <NuxtLink :to="`/product/${data.id}`" class="text-decoration-none">
    <v-card
      class="mx-auto"
      max-width="344"
      :id="data.id"
    >
      <v-container class="d-flex flex-column align-center">
        <img
            :src="data.image"
            class="product-image"
       />

        <p class="font-weight-bold my-3">{{data.title}}</p>

        <div class="product-footer">
          <p class="orange--text text--darken-2 mb-0 align-self-center">
            ${{data.price}}
          </p>
          <v-spacer></v-spacer>
          <span class="rating-border">
          <v-icon
              color="yellow darken-2"
              class="align-self-center mb-1"
          >
             mdi-star
            </v-icon>
          <v-text class="font-weight-bold">
            {{data.rating.rate}}
          </v-text>
        </span>
        </div>
      </v-container>
    </v-card>
  </NuxtLink>
</template>
<script>
export default {
  name: "Product.vue",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.product-image{
  display: block;
  max-width:250px;
  max-height:100px;
  width: auto;
  height: auto;
}

.product-footer{
  width: 100%;
  display: flex;
}

.rating-border {
  border: 1px solid #727272;
  padding: 0.25em;
  border-radius: 10px;
}
</style>

