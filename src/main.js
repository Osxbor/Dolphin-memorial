import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import "./assets/css/variables.css"
import "./assets/css/main.css"

// Import pages
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Gallery from "./views/Gallery.vue"
import Conservation from "./views/Conservation.vue"
import Timeline from "./views/Timeline.vue"
import Resources from "./views/Resources.vue"

// Create router
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/gallery", component: Gallery },
  { path: "/conservation", component: Conservation },
  { path: "/timeline", component: Timeline },
  { path: "/resources", component: Resources },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Create and mount the app
const app = createApp(App)
app.use(router)
app.mount("#app")

