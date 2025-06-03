class Stage {
    constructor (id, location, coordinates, description, interestPoints, inns, ways, comments, images){
        this.id = id;
        this.location = location;
        this.coordinates = coordinates|| {latitude: 0, longitude: 0}
        this.description = description || '';
        this.interestPoints = interestPoints || [];
        this.inns = inns || [];
        this.ways = ways || []; // caminhos associados
        this.comments = comments || [];
        this.images = images || [];
    }
}

export default Stage