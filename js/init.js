initData()

function initData(){
    //Users
    if(!localStorage.users){
        const users = [
      {
        id: 1,
        username: "user1",
        password: "Pass_987",
        userType: "regular",
        favourites: [],
        medals: [],
        profilePicture: "",
        comments: [],
      },
      {
        id: 2,
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


    // Caminhos
    if(!localStorage.ways){
        const ways = [
      {
        id: 1,
        title: "Caminho Português da Costa",
        description: "  Este itinerário costeiro corre, em primeiro lugar, na direção oeste e avança paralelo ao rio Minho até chegar ao seu amplo estuário. A dominar a paisagem encontra-se o monte de Santa Trega, grande miradouro sobre o Atlântico e Portugal, célebre pelo seu incrível castro, parcialmente escavado, uma grande povoação que alcançou o seu auge durante a romanização. No sopé do monte, o porto d’A Guarda oferece um bom abrigo à sua frota pesqueira.\nO itinerário avança paralelo à linha costeira, escarpada e agreste, em direção ao norte. Passa-se por Oia, localidade portuária célebre pelo seu mosteiro cisterciense; a igreja medieval conserva-se em bom estado e precede a sua entrada com uma nobre fachada barroca. O caminho dobra o Cabo Silleiro para penetrar num território mais resguardado, a bela ria de Vigo. Em primeiro lugar chega-se a Baiona, vila histórica de encantadoras ruas e praças, igreja do século XIII, capela barroca dedicada a santa Liberata e espetacular fortaleza de Monterreal, atualmente parador turístico. Foi a primeira localidade a conhecer o sucesso da primeira viagem de Colombo à América, quando a caravela Pinta chegou ao seu porto no dia 28 de fevereiro de 1493.",
        summary: "Explore a beleza marítima da costa do norte de Portugal e Galiza!",
        destiny: "Santiago de Compostela",
        duration:"",
        stages: [],
        images: [
            "https://www.vagamundos.pt/wp-content/uploads/2018/10/1-8-1-800x478.jpg",
        ]
      },
    ];
    
    localStorage.setItem("ways", JSON.stringify(ways));
    }
}