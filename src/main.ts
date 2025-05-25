import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "@/router"; // Use alias
import { createPinia } from "pinia";

const app = createApp(App); // Simpler declaration

app.use(createPinia());
app.use(router);

app.mount("#app");
