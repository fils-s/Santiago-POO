let users = [];

// carregar utilizadores do localStorage
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// adicionar um utilizador
export function add(username, password, profilePicture) {
  let userID = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  if(!profilePicture) profilePicture = "../img/profilepic.webp"
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  } else {
    users.push(new User(userID, username, password, "regular", [], [], profilePicture, []));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// login
export function login(username, password) {
    console.log("All users:", users);
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// logout
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// verifica se o utilizador está com o login ativo
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// devolve um utilizador logado
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}


class User {
    constructor (id, username,password, userType, favourites, medals, profilePicture, comments){
        this.id = id;
        this.username = username;
        this.password = password;
        this.userType = userType;
        this.favourites = favourites || [];
        this.medals = medals || [];
        this.profilePicture = profilePicture || '';
        this.comments = comments || [];
    }
}

export default User;