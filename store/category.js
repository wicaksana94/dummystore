export const state = () => ({
  data: [],
  categoryProductsData: []
})

export const mutations = {
  setData(state, payload) {
    state.data = payload
  },
  setCategoryProductsData(state, payload) {
    state.categoryProductsData = payload
  },
}

export const actions = {
  async getCategoryData({ commit }) {
    await this.$axios
      .$get(
        `${this.$config.STORE_API}/products/categories`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        commit('setData', response)
      })
  },
  async getCategoryProductsData({ commit }, payload) {
    await this.$axios
      .$get(
        `${this.$config.STORE_API}/products/category/${payload}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        commit('setCategoryProductsData', response)
      })
  },
}

export const getters = {}
