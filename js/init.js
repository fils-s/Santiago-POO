initData()

function initData(){
    //Users

    if(!localStorage.users){
        const users = [
      {
        id: 1,
        username: "user1",
        password: "pass1",
        userType: "regular",
        favourites: [],
        medals: [],
        profilePicture: "",
        comments: [],
      },
      {
        id: 1,
        username: "user2",
        password: "pass2",
        userType: "regular",
        favourites: [],
        medals: [],
        profilePicture: "https://i.pinimg.com/564x/bb/19/2d/bb192d00960abc2efa068122e8fd44d8.jpg",
        comments: [],
      },
    ];
    
    localStorage.setItem("users", JSON.stringify(users));
    }
}