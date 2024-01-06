import { obterCookie, removerCookie } from "./cookies.js";

const cookie = obterCookie("admin");
verificaSessao();

function verificaSessao() {
  if (cookie) {
    console.log("verificou que está logado!");
  } else {
    console.log("verificou que está deslogado!");
    window.location = "index.html";
  }
}

const logoutBtn = document.querySelector("#logoff-btn");

logoutBtn.addEventListener("click", () => {
  removerCookie("tokenJWT");
  window.location.href = "/login/index.html";
});
