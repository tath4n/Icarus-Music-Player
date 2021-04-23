import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBackward, faPlay, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBackward, faPlay, faForward)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

