import { Olum } from "olum";
import Home from "./views/home.js";
import About from "./views/about.js";

const routes = [
  { path: "/", comp: Home },
  { path: "/about", comp: About },
];

export const olum = new Olum({
  mode: "history",
  root: "/",
  el: "#app",
  routes,
});

// if ("serviceWorker" in navigator) { // uncomment to enable service worker when deploying
//   window.on("load", () => navigator.serviceWorker.register("/service-worker.js").catch(console.error));
// }
