import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "nprogress/nprogress.css";

const GStore = reactive({ flashMessage: "" });

const app = createApp(App);

app.use(router);

app.provide("GStore", GStore);

app.mount("#app");
