function verificaSessao() {
  if (
    sessionStorage.getItem("autenticado") === "true" &&
    sessionStorage.getItem("level") === "admin"
  ) {
    return true;
  } else {
    return false;
  }
}

const logado = verificaSessao();

if (logado) {
} else {
  const logoff = document.querySelector("#logoff-btn");

  logoff.addEventListener("click", destroiSessao());

  function destroiSessao() {
    sessionStorage.clear();
  }
}
