import { renderSignUp } from "../ui/singupUi.js";
import { renderLogin } from "../ui/loginUi.js";
import { navigate } from "../router.js";
import { auth, signOut } from "../firebase.js";

const body = document.querySelector("body");

export function loginBtn() {
  const parent = document.querySelector(".login-logout-btn");
  const logout = document.querySelector(".logout-btn");

  if (logout) logout.remove();

  const element = document.createElement("div");
  element.classList.add("login-btn");
  element.textContent = "Login";
  parent.appendChild(element);

  //styles in Login.scss
  element.addEventListener("click", () => {
    navigate("login");
  });
}

export function renderLoginSingupView() {
  const notAg = document.querySelector(".login-overlay");
  const notAg2 = document.querySelector(".container-login-sinup");

  if (notAg && notAg2) return;

  const overlay = document.createElement("div");
  overlay.classList.add("login-overlay");
  body.appendChild(overlay);

  const container = document.createElement("div");
  container.classList.add("container-login-sinup");
  body.appendChild(container);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("delete-login-singup-page", "bi", "bi-x");
  container.appendChild(deleteIcon);

  deleteIcon.addEventListener("click", () => {
    container.classList.add("fade-out");
    overlay.classList.add("fade-out");

    setTimeout(() => {
      container.remove();
      overlay.remove();
    }, 1000);
    navigate("");
  });

  const logOrSin = document.createElement("div");
  logOrSin.classList.add("log-or-sin");
  container.appendChild(logOrSin);

  const login = document.createElement("div");
  login.classList.add("login-in-titale");
  login.innerText = "Login";
  login.style.color = "black";
  login.style.borderBottom = "3px solid blue";
  login.style.cursor = "pointer";
  logOrSin.appendChild(login);
  login.addEventListener("click", () => {
    renderLogin();
  });

  const singup = document.createElement("div");
  singup.innerText = "Signup";
  singup.classList.add("sinup-in-titale");
  singup.style.cursor = "pointer";
  logOrSin.appendChild(singup);

  singup.addEventListener("click", () => {
    renderSignUp();
  });

  const containerOfInputs = document.createElement("div");
  containerOfInputs.classList.add("container-of-inputs");
  container.appendChild(containerOfInputs);
  renderLogin();
}

export function logoutBtn() {
  const parent = document.querySelector(".login-logout-btn");
  const login = document.querySelector(".login-btn");

  if (login) login.remove();

  const element = document.createElement("div");
  element.classList.add("logout-btn");
  element.textContent = "Logout";
  parent.appendChild(element);

  element.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("You Log Out💔");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  });
}
