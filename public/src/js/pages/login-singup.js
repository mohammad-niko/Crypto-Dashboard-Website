import { renderSignUp } from "../ui/singupUi.js";
import { renderLogin } from "../ui/loginUi.js";

const body = document.querySelector("body");

//event Listener for Login btn in header:
//styles in Login.scss.
const loginBtn = document
  .querySelector(".login-btn")
  .addEventListener("click", renderLoginView);

export function renderLoginView() {
  const notAg = document.querySelector(".login-overlay");
  if (notAg) notAg.remove();

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
    container.remove();
    overlay.remove();
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


