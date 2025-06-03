class Comment {
    constructor(id, author, stageID, comment, date){
        this.id = id;
        this.author = author; // ID do utilizador que esscreveu o comentário
        this.stageID = stageID; // etapa associada
        this.comment = comment; // Texto do comentário
        this.date = date || new Date(); // Data do comentário, padrão é a data atual
    }
}

export default Comment