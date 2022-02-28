export const state = () => ({
  data: [],
  singleProduct: {}
})

export const mutations = {
  setData(state, payload) {
    state.data = payload
  },
  setSingleProduct(state, payload) {
    state.singleProduct = payload
  },
}

export const actions = {
  async getProductData({ commit }) {
    await this.$axios
      .$get(
        `${this.$config.STORE_API}/products`,
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
  async getSingleProduct({ commit }, payload) {
    await this.$axios
      .$get(
        `${this.$config.STORE_API}/products/${payload}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        commit('setSingleProduct', response)
      })
  },
}

export const getters = {}
