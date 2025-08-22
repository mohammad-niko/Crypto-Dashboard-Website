import { auth, onAuthStateChanged } from "./firebase.js";
import { renderHomeView } from "./pages/home.js";
import { renderLoginSingupView } from "./pages/login-singup.js";
import { logoutBtn, loginBtn } from "./pages/login-singup.js";

export let isHome = true;
export function setIsHomeView(value) {
  isHome = value;
}

let currentUser = null;

const routes = {
  "": { view: renderHomeView, authRequired: false },
  login: { view: renderLoginSingupView, authRequired: false },
};
// "watchList": { view: renderWatchList, authRequired: true },
// "coin/:id": { view: renderCoinInfo, authRequired: false },

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    router();

    if (user) {
      logoutBtn();
    } else {
      loginBtn();
    }
  });
});
window.addEventListener("hashchange", router);

function findMatchingRoute(hash) {
  const pathParts = hash.split("/");
  for (let route in routes) {
    const routeParts = route.split("/");
    if (routeParts.length === pathParts.length) {
      let match = true;
      let params = {};
      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(":")) {
          const paramName = routeParts[i].slice(1);
          params[paramName] = pathParts[i];
        } else if (routeParts[i] !== pathParts[i]) {
          match = false;
          break;
        }
      }
      if (match) {
        return { routeConfig: routes[route], params };
      }
    }
  }
  return null;
}

function router() {
  const hash = location.hash.slice(1) || "";
  const match = findMatchingRoute(hash);

  if (!match) return renderHomeView(); // یا renderNotFound()

  const { routeConfig, params } = match;

  if (routeConfig.authRequired && !currentUser) {
    return navigate("login");
  }

  routeConfig.view(params); // نمایش صفحه با پارامتر (مثلاً coin/:id)
}

export function navigate(path) {
  location.hash = path;
}
