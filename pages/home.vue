<template>
  <v-row no-gutters>
    <v-text-field
      solo
      label="Search..."
      prepend-inner-icon="mdi-magnify"
    />
    <v-carousel
      cycle
      height="480"
      hide-delimiters
      show-arrows-on-hover
      class="rounded-xl mt-3 mb-7"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-container
          fill-height
          fluid
          pa-0 ma-0 pb-3

        >
          <v-layout fill-height align-end pb-4 mb-4>
            <v-flex xs12>
              <v-card color="grey lighten-5" class="pa-2 rounded-0">
                <span class="headline grey--text" v-text="item.title"></span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-row
      class="mb-6"
      no-gutters
    >
        <v-col>
          <NuxtLink to="/category/men's clothing" class="text-decoration-none">
          <div class="text-center d-flex flex-column">
            <div>
              <v-icon
                large
                color="white"
                class="green lighten-4 pa-5 rounded-circle"
              >
                mdi-face-man
              </v-icon>
            </div>
            <p class="mt-3 grey--text">Men's Fashion</p>
          </div>
          </NuxtLink>
        </v-col>

        <v-col>
          <NuxtLink to="/category/women's clothing" class="text-decoration-none">
        <div class="text-center d-flex flex-column">
          <div>
            <v-icon
              large
              color="white"
              class="green lighten-4 pa-5 rounded-circle"
            >
              mdi-face-woman
            </v-icon>
          </div>
          <p class="mt-3 grey--text">Women's Fashion</p>
        </div>
          </NuxtLink>
      </v-col>


        <v-col>
          <NuxtLink to="/category/jewelery" class="text-decoration-none">
        <div class="text-center d-flex flex-column">
          <div>
            <v-icon
              large
              color="white"
              class="green lighten-4 pa-5 rounded-circle"
            >
              mdi-diamond-stone
            </v-icon>
          </div>
          <p class="mt-3 grey--text">Jewelery</p>
        </div>
          </NuxtLink>
      </v-col>

      <v-col>
        <NuxtLink to="/category/electronics" class="text-decoration-none">
        <div class="text-center d-flex flex-column">
          <div>
            <v-icon
              large
              color="white"
              class="green lighten-4 pa-5 rounded-circle"
            >
              mdi-laptop
            </v-icon>
          </div>
          <p class="mt-3 grey--text">Electronics</p>
        </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'HomePage',
  transition: 'fade',
  data () {
    return {
      items: [
        {
          src: '/mens_fashion_2.jpg',
          title: "Men's Fashion"
        },
        {
          src: '/womens_fashion.jpg',
          title: "Women's Fashion"
        },
        {
          src: '/jewelery.jpg',
          title: 'Jeweleries'
        },
        {
          src: '/laptop.jpg',
          title: 'Electronics'
        },
      ],
    }
  },
  computed: {
    products() {
      return this.$store.state.product.data
    },
    categories() {
      return this.$store.state.category.data
    }
  },
  created() {
    this.$store.dispatch('product/getProductData')
    this.$store.dispatch('category/getCategoryData')
    // this.$store.commit('pageConfig/setAppBar', false)
  }
}
</script>
