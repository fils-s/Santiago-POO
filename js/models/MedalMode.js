class Medal {
    constructor (id, name, description, question, answers, rightAnswer, image, stageID){
        this.id = id;
        this.name = name;
        this.description = description;
        this.question = question;
        this.answers = answers || [];
        this.rightAnswer = rightAnswer;
        this.image = image;
        this.stageID = stageID || null //etapa associada, caso exista
    }
}

export default Medal