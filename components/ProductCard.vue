<template>
  <NuxtLink :to="`/product/${data.id}`" class="text-decoration-none">
    <v-card
      class="mx-auto"
      max-width="344"
      :id="data.id"
    >
      <v-img
        :src="data.image"
        height="200px"
      ></v-img>

      <v-card-title>
        {{data.title}}
      </v-card-title>

      <v-card-actions class="px-4 align-end">
        <p class="orange--text text--darken-2 mb-0">
          ${{data.price}}
        </p>
        <v-spacer></v-spacer>
        <span class="rating-border">
          <v-icon
            color="yellow darken-2"
            class="mb-1"
          >
             mdi-star
            </v-icon>
          <v-text class="font-weight-bold">
            {{data.rating.rate}}
          </v-text>
        </span>
      </v-card-actions>
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
.rating-border {
  border: 1px solid #727272;
  padding: 0.5em;
  border-radius: 10px;
}
</style>

