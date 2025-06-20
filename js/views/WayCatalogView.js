import * as User from "../models/UserModel.js";
import * as Way from "../models/WayModel.js"

function wayCatalogView() {
    Way.init()

    renderWaysCatalog(Way.getWays())
}

function renderWaysCatalog(ways=[]) {
    let content = ""
    for (const way of ways) {
        content += generateWayCard(way);
    }
    // Atribuição de todos os cards gerados ao elemento com id "waysCatalog"
    document.querySelector("#waysCatalog").innerHTML = content;

    // ver mais
    const btnsSeeMore = document.getElementsByClassName("view")
    for (const button of btnsSeeMore) {
        button.addEventListener("click", () => {
            sessionStorage.setCurrentWay(button.id);
            location.href = "./wayInfo.html";
        });
        
    }

    // editar
    const btnsEdit = document.getElementsByClassName("edit")
    for (const button of btnsEdit) {
        button.addEventListener("click", () => {
            sessionStorage.setCurrentWay(button.id);
            location.href = "./admin.html";
        });
    }

    // remover
    const btnsRemove = document.getElementsByClassName("remove")
    for (const button of btnsRemove) {
        button.addEventListener("click", () => {
            Way.remove(button.id);
            location.reload();
        });
    }
}


// GERAR CARTÃO COM A BANDA
function generateWayCard(way) {
  let card = `
    <div class="col">
        <div class="card">
            <a href="./wayInfo.html" class="card-link view">
                <img src=${way.images[0]} class="card-img-top" alt=${way.title}>
            </a>
            <div class="card-body">
                <p class="card-title" style="font-weight:bolder;">${way.title}</p>
                <p class="card-text">${way.summary}</p>
        `;
  // Adição dos botões de editar e remover para administradores
  if (User.isLogged() && User.getUserLogged().userType == "admin") {
    card += `<a href="#" id=${way.id} class="btn btn-primary edit">Editar</a>
                <a href="#" id=${way.id} class="btn btn-primary remove">Remover</a>`
  }
  card += ` 
                </div>
            </div>
        </div> `;
  return card;
}

wayCatalogView();