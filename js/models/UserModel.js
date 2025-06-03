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