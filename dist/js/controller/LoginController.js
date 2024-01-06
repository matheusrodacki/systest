import { definirCookie } from "./cookies.js";
export class LoginController {
  #usernameElement;
  #passwordElement;

  constructor() {
    this.#usernameElement = document.querySelector("#username");
    this.#passwordElement = document.querySelector("#password");
  }
  autenticar(usernameInput, passwordInput) {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "admin" && password === "password") {
      definirCookie("login", "admin");
      window.location = "main.html";
    } else {
      if (document.getElementById("login-fail-alert")) {
        const divToRemove = document.querySelector(".alert-danger");
        divToRemove.parentNode.removeChild(divToRemove);

        const alertDiv = document.createElement("div");

        // Define o conteúdo da nova div
        alertDiv.innerHTML =
          '<div class="alert alert-danger" id="login-fail-alert" role="alert">Login ou Senha incorretos!</div>';

        const form = document.getElementById("form-login");

        // Adiciona a nova div ao final do body
        form.appendChild(alertDiv);
      } else {
        const alertDiv = document.createElement("div");

        // Define o conteúdo da nova div
        alertDiv.innerHTML =
          '<div class="alert alert-danger" id="login-fail-alert" role="alert">Login ou Senha incorretos!</div>';

        const form = document.getElementById("form-login");

        // Adiciona a nova div ao final do body
        form.appendChild(alertDiv);
      }
    }
  }
  validaLogin() {
    this.autenticar(this.#usernameElement, this.#passwordElement);
    this.limparFormulario();
  }
  limparFormulario() {
    this.#usernameElement.value = "";
    this.#passwordElement.value = "";
    this.#passwordElement.focus();
  }
}
