import { obterCookie, removerCookie } from "./cookies.js";

const cookie = obterCookie("login");
verificaSessao(cookie);

function verificaSessao(cookie) {
  console.log(cookie);
  if (cookie === "admin") {
  } else {
    window.location = "index.html";
  }
}

const logoutBtn = document.querySelector("#logoff-btn");

logoutBtn.addEventListener("click", () => {
  removerCookie("login");
  window.location.href = "index.html";
});
