verificaSessao();

function verificaSessao() {
  if (
    localStorage.getItem("autenticado") === "true" &&
    localStorage.getItem("level") === "admin"
  ) {
    console.log("estou logado!");
  } else {
    window.location = "index.html";
  }
}

const logoff = document.querySelector("#logoff-btn");

logoff.addEventListener("click", destroiSessao());

function destroiSessao() {
  localStorage.clear();
}
