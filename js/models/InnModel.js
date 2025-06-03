class Inn {
    constructor(id, name, location, coordinates, description, stageID) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.coordinates = coordinates || {latitude: 0, longitude: 0};
        this.description = description;
        this.stageID = stageID // etapa associada
    }
}

export default Inn