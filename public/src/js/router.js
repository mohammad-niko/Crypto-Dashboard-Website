import { renderHomeView } from "./pages/home.js";

document.addEventListener("DOMContentLoaded",router);
window.addEventListener("hashchange", router);


export let isHome = true;
export function setIsHomeView(value) {
  isHome = value;
}

const routes = {
  "": renderHomeView,
};
// "/coin-id": renderDitaleCoin,
// "/about": renderAbout,
// "/watchList": renderWatchList,

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
        return () => routes[route](params.id); 
      }
    }
  }
  return renderHomeView;
}


function router() {
  const hash = location.hash.slice(1) || "/"; // این خط مهمه!
  const matchedRoute = findMatchingRoute(hash);
  if (matchedRoute) matchedRoute();
  else renderNotFound(); // اگه روتی پیدا نشد یه تابع not found صدا بزن
}


export function navigate(hash) {
  location.hash = hash;
}
