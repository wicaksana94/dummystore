<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="$store.state.pageConfig.appBar.show"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="$store.state.pageConfig.appBar.show" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
<!--      <v-btn icon @click.stop="miniVariant = !miniVariant">-->
<!--        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn icon @click.stop="clipped = !clipped">-->
<!--        <v-icon>mdi-application</v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn icon @click.stop="fixed = !fixed">-->
<!--        <v-icon>mdi-minus</v-icon>-->
<!--      </v-btn>-->
<!--      <v-toolbar-title v-text="title" />-->
<!--      <v-spacer />-->
<!--      <v-btn icon @click.stop="rightDrawer = !rightDrawer">-->
<!--        <v-icon>mdi-menu</v-icon>-->
<!--      </v-btn>-->
      <v-row>
        <v-col class="d-flex align-center justify-space-around">
          <NuxtLink to="/" class="text-decoration-none grey--text text--darken-2">
            <v-toolbar-title
              class="page-title"
              v-text="pageTitle"
            />
          </NuxtLink>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
<!--    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>-->
<!--      <v-list>-->
<!--        <v-list-item @click.native="right = !right">-->
<!--          <v-list-item-action>-->
<!--            <v-icon light> mdi-repeat </v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-title>Switch drawer (click me)</v-list-item-title>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
    <v-footer :absolute="!fixed" app>
      <span class="mx-auto">Arya Store &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-face-man',
          title: "Men's clothing",
          to: `/category/men's clothing`,
        },
        {
          icon: 'mdi-face-woman',
          title: "Women's clothing",
          to: `/category/women's clothing`,
        },
        {
          icon: 'mdi-diamond-stone',
          title: "Jewelery",
          to: `/category/jewelery`,
        },
        {
          icon: 'mdi-laptop',
          title: "Electronics",
          to: `/category/electronics`,
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    pageTitle() {
      return this.$store.state.pageConfig.pageTitle
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Poppins', sans-serif;
}

.page-title {
  text-decoration: none;
}
</style>
