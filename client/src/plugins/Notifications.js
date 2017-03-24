import Toasted from 'vue-toasted';

function initializeExternalLib(Vue) {
  Vue.use(Toasted, {
    position: 'top-center',
    duration: 1000
  })
}

export default {
  install(Vue) {
    initializeExternalLib(Vue);

    Vue.prototype.$notify = {
      success(message) {
        Vue.prototype.$toasted.success(`<span class="fa fa-fw fa-check-circle"></span> ${message}`)
      },
      error(message) {
        Vue.prototype.$toasted.error(`<span class="fa fa-fw fa-frown-o"></span> ${message}`)
      }
    }
  }
}

