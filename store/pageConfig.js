export const state = () => ({
  token: '',
  tokenAt: null,
  freshToken: false,
  pageType: 'default',
  pageTitle: 'Arya Store',
  footer: true,
  backButton: {
    show: false,
    redirect: '',
  },
  showActionToolbar: false,
  appBar: {
    show: true,
  },
  notification: {
    show: false,
    text: ''
  },
  spinnerLoader: {
    show: false
  },
  errorInfo: {
    code: "",
    message: "",
    status: ""
  },
  lastVisitPage: '/home'
})

export const actions = {
  handleSplashChange ({commit, getters, rootState}) {
    const { tokenAt } = rootState.pageConfig
    if ( tokenAt && getters.showSplash) {
      commit('setTokenAt', new Date())
    }
  },
  setLastVisitPage ({commit}, page) {
    commit('setLastVisitPage', page)
  },
  resetFooter({commit, rootState}) {
    commit('setFooter', rootState.client.data[0]?.footer)
  }
}

export const getters = {
  showSplash: state => {
    const halfHour = 30*60*1000
    if (state.freshToken) return true
    return state.tokenAt ? new Date() - new Date(state.tokenAt) > halfHour : true

  }
}

export const mutations = {
  setToken(state, payload) {
    state.token = payload
  },
  setTokenAt (state, payload) {
    state.tokenAt = payload
  },
  setFreshToken (state, payload) {
    state.freshToken = payload
  },
  setPageType(state, payload) {
    state.pageType = payload
  },
  setPageTitle(state, payload) {
    state.pageTitle = payload
  },
  setBackButton(state, payload) {
    state.backButton.show = payload.show
    state.backButton.redirect = payload.redirect
  },
  setShowActionToolbar(state, payload) {
    state.showActionToolbar = payload
  },
  setAppBar(state, payload) {
    state.appBar = payload
  },
  setNotification(state, payload) {
    state.notification = payload
  },
  setSpinnerLoader(state, payload) {
    state.spinnerLoader = payload
  },
  clearPageTitle(state) {
    state.pageTitle = ''
  },
  clearBackButton(state) {
    state.backButton.show = false
    state.backButton.redirect = ''
  },
  setFooter(state, payload) {
    state.footer = payload
  },
  clearFooter(state) {
    state.footer = false
  },
  setErrorInfo(state, payload) {
    state.errorInfo.code = payload.code
    state.errorInfo.message = payload.message
    state.errorInfo.status = payload.status
  },
  clearErrorInfo(state) {
    state.errorInfo.code = ''
    state.errorInfo.message = ''
    state.errorInfo.status = ''
  },
  setLastVisitPage(state, payload) {
    state.lastVisitPage = payload
  }
}
