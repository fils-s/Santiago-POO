let stages

// carregar etapas do localStorage
export function init() {
    stages = localStorage.stages ? JSON.parse(localStorage.stages) : [];
}


// definir a etapa atual (para ver detalhes)
export function setCurrentStage(id) {
  localStorage.setItem("stage", id);
}

// obter a etapa atual
export function getCurrentStage() {
  return ways.find((stage) => stage.id === parseInt(localStorage.getItem("stage")));
}

// obter todos os caminhos
export function getStages() {
    return stages;
}



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