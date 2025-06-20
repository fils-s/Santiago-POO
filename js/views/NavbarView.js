import * as User from '../models/UserModel.js'

function navbarView() {
    User.init()

    // conteúdo da Navbar
    let content = `
    <a class="navbar-brand" href="../index.html">
    <img src="../img/santiago!.png" alt="SantiaGO!" width="60" height="45">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav me-auto">
        <a class="nav-link" href="/html/ways.html">Caminhos</a>
        <a class="nav-link" href="/html/stageInfo.html">Etapas</a>
        <a class="nav-link" href="/html/wayCreate.html">Criar Caminho</a>
    </div>
`

  if(User.isLogged()){
    content += `
    <ul class="navbar-nav ms-auto">
      <li class="nav-item dropdown">
        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../img/profilepic.webp" alt="profilepic" id="profilepic" width="60" height="45">
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/html/profile.html">O seu Perfil</a></li>
          <li><a class="dropdown-item" href="#">Os seus Favoritos</a></li>
          <li><a class="dropdown-item" id="btnLogout" href="#">Terminar Sessão</a></li>
        </ul>
      </li>
    </ul>`
  } else {
    content += `  
        <div class="ms-auto d-flex">
        <button class="btn m-1" id="btnLogin" data-bs-toggle="modal" data-bs-target="#mdlLogin">
            Iniciar Sessão
        </button>
        <button class="btn m-1" id="btnSignUp" data-bs-toggle="modal" data-bs-target="#mdlRegister">
            Criar Conta
        </button>
        </div>`;
  }
  content += `</div>`;

  // injetar o conteudo na navbar
  document.querySelector("nav").innerHTML = content;

  // Criar Conta
  document.querySelector("#frmRegister")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameRegister = document.querySelector("#txtUsernameRegister").value;
    const passwordRegister = document.querySelector("#txtPasswordRegister").value;
    const passwordRegister2 = document.querySelector("#txtPasswordRegister2").value;
    const profilePicRegister = document.querySelector("#profilePictureRegister").value;

    try {
        if(passwordRegister!== passwordRegister2){
            throw Error("As passwords não coincidem!");
        }
        User.add(usernameRegister, passwordRegister, profilePicRegister)
        displayMessage("messageRegister", "Utilizador criado com sucesso!", "success");
        // timeout para o utilizador ver a mensagem de sucesso
        setTimeout(()=>{
            location.reload()
        }, 1000)
    } catch (error) {
      displayMessage("messageRegister", error.message, "danger");
    }
   })


   // Login
   document.querySelector("#frmLogin")?.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
       User.login(
        document.querySelector("#txtUsername").value, 
        document.querySelector("#txtPassword").value
       ) 
       console.log("Login efetuado com sucesso!");
       
       displayMessage("messageLogin", "Bem-vindo!", "success");

        // timeout para o utilizador ver a mensagem de sucesso
        setTimeout(()=>{
            location.reload()
        }, 1000)
    } catch (error) {
       console.log('error');
      displayMessage("messageLogin", error.message, "danger");
    }
   })

   // logout
  document.querySelector("#btnLogout")?.addEventListener("click", () => {
    User.logout();
    location.reload();
  });

}


function displayMessage(modal, message, type) {
  const divMessage = document.getElementById(modal);
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

navbarView()