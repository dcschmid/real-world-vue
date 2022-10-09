import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store";
import "./assets/main.css";
import "nprogress/nprogress.css";

const app = createApp(App);

app.use(router);

app.provide("GStore", GStore);

app.mount("#app");
