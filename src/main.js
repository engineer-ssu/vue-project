import './assets/main.css'

// 모든 Vue 앱은 createApp 함수를 사용하여 새로운 앱 인스턴스를 생성하는 것으로 시작한다.
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
