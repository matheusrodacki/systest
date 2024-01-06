export class LoginController {
  #username;
  #password;

  constructor() {
    this.#username = document.querySelector('#username');
    this.#password = document.querySelector('#password');
  }
  autenticar(login, senha) {
    const username = login.value;
    const password = senha.value;

    if (username === 'admin' && password === 'password') {
      window.location = 'main.html';
    } else {
      alert('Usuário ou senha errado.');
    }
  }
  validaLogin() {
    this.autenticar(this.#username, this.#password);
  }
}
