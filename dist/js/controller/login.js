export class LoginController {
  #username;
  #password;

  constructor() {
    this.#username = document.querySelector("#username");
    this.#password = document.querySelector("#password");
  }
  autenticar(login, senha) {
    const username = login.value;
    const password = senha.value;

    if (username === "admin" && password === "password") {
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
    this.autenticar(this.#username, this.#password);
    this.limparFormulario();
  }
  limparFormulario() {
    this.#username.value = "";
    this.#password.value = "";
    this.#username.focus();
  }
}
