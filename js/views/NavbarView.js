import * as User from '../models/UserModel.js'

function navbarView() {
    User.init()

    // conteúdo da Navbar
    let content = `
    <a class="navbar-brand" href="../index.html">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav">
        <a class="nav-link" href="/html/ways.html">Caminhos</a>
        <a class="nav-link" href="/html/stageInfo.html">Etapas</a>
        <a class="nav-link" href="/html/wayCreate.html">Criar Caminho</a>
      </div>`

  if(User.isLogged()){
    content += `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Perfil
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" id="btnPerfil" href="./html/profile.html">O meu Perfil</a></li>
            <li><a class="dropdown-item" id="btnLogout" href="#">Os meus favoritos</a></li>
            <li><a class="dropdown-item" id="btnLogout" href="#">Terminar Sessão</a></li>
          </ul>`
  } else {
    content += `  
                    
                    <!-- Botão para ativar a janela modal de login -->
                    <div id="authButtons" class="ms-auto m-1">                    
                        <button class="btn m-1" id='btnLogin' data-bs-toggle="modal" data-bs-target="#mdlLogin">
                            Login
                        </button>
                        <button class="btn m-1" id='btnSignUp' data-bs-toggle="modal" data-bs-target="#mdlRegister">
                            Sign Up
                        </button>                
                    </div>          
                      
                `;
  }
  content += `</div>`;

  // INJETAR CONTEÚDO NA NAVBAR
  document.querySelector("nav").innerHTML = content;
}


function displayMessage(modal, message, type) {
  const divMessage = document.getElementById(modal);
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

navbarView()