let ways

// carregar caminhos do localStorage
export function init() {
    ways = localStorage.ways ? JSON.parse(localStorage.ways) : [];
}

// adicionar um caminho
export function add(title, description, summary, destiny, duration, stages, images) {
    let wayID = ways.length > 0 ? ways[ways.length - 1].id + 1 : 1;
    if (ways.some((way) => way.title === title)) {
        throw Error(`"${title}" já existe!`);
    } else {
        ways.push(new Way(wayID, title, description, summary, destiny, duration, stages, images));
        localStorage.setItem("ways", JSON.stringify(ways));
    }
}

// remover um caminho
export function remove(id) {
    const index = ways.findIndex((way) => way.id === parseInt(id));
    if (index !== -1) {
        ways.splice(index, 1);
        localStorage.setItem("ways", JSON.stringify(ways));
    } else {
        throw Error(`Caminho com ID ${id} não foi encontrado!`);
    }
}

// definir o caminho atual (para ver detalhes)
export function setCurrentWay(id) {
  localStorage.setItem("way", id);
}

// obter o caminho atual
export function getCurrentWay() {
  return ways.find((way) => way.id === parseInt(localStorage.getItem("way")));
}

// obter todos os caminhos
export function getWays() {
    return ways;
}


class Way {
    constructor(id, title, description, summary, destiny, duration, stages, images){
        this.id = id;
        this.title = title;
        this.description = description;
        this.summary = summary;
        this.destiny = destiny;
        this.duration = duration;
        this.stages = stages || [];
        this.images = images || [];
    }
}

export default Way;