import { LoginController } from "./controller/LoginController.js";

const loginController = new LoginController();

const form = document.querySelector(".form-signin");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  loginController.validaLogin();
});
