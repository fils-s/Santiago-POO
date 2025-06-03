class Way {
    constructor(id, title, description, summary, destiny, duration, ways, images){
        this.id = id;
        this.title = title;
        this.description = description;
        this.summary = summary;
        this.destiny = destiny;
        this.duration = duration;
        this.ways = ways || [];
        this.images = images || [];
    }
}

export default Way;