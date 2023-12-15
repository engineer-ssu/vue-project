import './assets/main.css'

// 모든 Vue 앱은 createApp 함수를 사용하여 새로운 앱 인스턴스를 생성하는 것으로 시작한다.
import { createApp } from 'vue'
import App from './App.vue'

// createApp에 전달하는 객체는 사실 컴퍼넌트이다. 
// 모든 앱에는 다른 컴퍼넌트를 자식으로 포함할 수 있는 "최상위 컴퍼넌트"가 필요하다.

// 루트 컴퍼넌트 "App"을 전달하여 mount한다.
// createApp(App).mount('#app')
const app = createApp(App)
app.mount("#app")

// app 인스턴스는 몇가지 앱 레벨의 옵션을 구성할 수 있는 .config 객체를 가진다.
// 예를 들어 모든 자식 컴퍼넌트에서 에러를 캡처하는 앱 레벨의 에러 핸들러를 정의한다.

/*
app.config.errorHanlder = (err) => {
    //에러 처리
}
*/
