import { navigate } from "../router.js";
import { auth, createUserWithEmailAndPassword } from "../firebase.js";

export function renderSignUp() {
  const containerOfInputs = document.querySelector(".container-of-inputs");
  containerOfInputs.innerHTML = "";

  const logInTitle = document.querySelector(".login-in-titale");
  logInTitle.style.color = "gray";
  logInTitle.style.borderBottom = "3px solid white";

  const singUpTitle = document.querySelector(".sinup-in-titale");
  singUpTitle.style.color = "black";
  singUpTitle.style.borderBottom = "3px solid blue";

  const form = document.createElement("form");
  form.classList.add("signup-form");
  form.id = "signup-form";

  // -------- Email Section --------
  const emailDiv = document.createElement("div");
  emailDiv.className = "form-group";

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "loginEmail";
  emailLabel.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "form-control";
  emailInput.required = true;

  const emailValidFeedback = document.createElement("div");
  emailValidFeedback.className = "valid-feedback";
  emailValidFeedback.textContent = "Looks good!";

  const emailInvalidFeedback = document.createElement("div");
  emailInvalidFeedback.className = "invalid-feedback";
  emailInvalidFeedback.textContent = "Please provide a valid email.";

  emailDiv.append(
    emailLabel,
    emailInput,
    emailValidFeedback,
    emailInvalidFeedback
  );

  // -------- Password Section --------
  const passwordDiv = document.createElement("div");
  passwordDiv.className = "form-group";

  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "loginPassword";
  passwordLabel.textContent = "Password";

  const passwordInputGroup = document.createElement("div");
  passwordInputGroup.classList.add("input-group");

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.classList.add("form-control");
  passwordInput.required = true;

  const togglePassword = document.createElement("i");
  togglePassword.className =
    "bi bi-eye-slash input-group-text toggle-password-eye";
  togglePassword.style.cursor = "pointer";

  const passwordValidFeedback = document.createElement("div");
  passwordValidFeedback.className = "valid-feedback";
  passwordValidFeedback.textContent = "Looks good!";

  const passwordInvalidFeedback = document.createElement("div");
  passwordInvalidFeedback.className = "invalid-feedback";
  passwordInvalidFeedback.textContent = "Please provide a password.";

  // -------- Error Message --------
  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";
  errorDiv.style.marginTop = "5px";

  passwordInputGroup.append(passwordInput, togglePassword);
  passwordDiv.append(
    passwordLabel,
    passwordInputGroup,
    errorDiv,
    passwordValidFeedback,
    passwordInvalidFeedback
  );

  // -------- Submit Button (Sign up with Email/Password) --------
  const submitDiv = document.createElement("div");
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary mt-3 w-100";
  submitButton.value = "Sign up";
  submitDiv.appendChild(submitButton);

  // Append all to form
  form.append(emailDiv, passwordDiv, submitDiv);
  // "OR" separator

  containerOfInputs.appendChild(form);

  emailInput.addEventListener("input", () => {
    const isValid = /^[a-zA-Z0-9._%+-]{6,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      emailInput.value
    );
    if (!isValid) {
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
    } else {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
    }
  });

  passwordInput.addEventListener("input", () => {
    const isPasswordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
        passwordInput.value
      );
    if (!isPasswordValid) {
      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");
    } else {
      passwordInput.classList.add("is-valid");
      passwordInput.classList.remove("is-invalid");
    }
  });

  // Password visibility toggle
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.classList.toggle("bi-eye");
    togglePassword.classList.toggle("bi-eye-slash");
  });

  // Form Submit (Email/Password Sign up)
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.textContent = "";

    console.log("Form submitted"); // 1

    const isEmailValid =
      /^[a-zA-Z0-9._%+-]{6,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        emailInput.value
      );
    const isPasswordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
        passwordInput.value
      );

    if (!isEmailValid || !isPasswordValid) {
      if (!isEmailValid) emailInput.classList.add("is-invalid");
      if (!isPasswordValid) passwordInput.classList.add("is-invalid");
      form.classList.add("was-validated");
      return alert("error");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailInput.value,
        passwordInput.value
      );

      alert("Signup successful! Welcome, " + userCredential.user.email);

      const container = document.querySelector(".container-login-sinup");
      container.remove();
      const overlay = document.querySelector(".login-overlay");
      overlay.remove();
      if (!container && !overlay) navigate("");

      console.log("User created:", userCredential);
    } catch (err) {
      errorDiv.textContent = err.code;
      console.error(err);
    }
  });
}
