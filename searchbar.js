const lupa = document.querySelector(".serchlupa");
const searchB = document.querySelector(".searchbox");
const inputSearch = document.querySelector("[data-search]");
const lastSearch = document.querySelector("#lastSearches");
const gamesConsoleandGamename=[];
let gamesForModal=[];
const lastSearches=[];
let timeout = null;

function getGamesHome() {
    const gamesListPrincipal = document.querySelector('#container-div');
    gamesListPrincipal.innerHTML = "";
    getGames();   
}


function OpenSearchbarMobile(){
    if(searchB.style.display==='none') {
        searchB.style.display = 'block';
    }
    else{
        searchB.style.display = 'none';
    } 
}

function closeSearchCards(){
    const userCardContainer = document.querySelector('#cards-container');
    userCardContainer.style.display = 'none';
}

function GetPlatformsIdbyName(value){
    const platform = value.toLowerCase();
    switch (platform) {
        case 'xbox':
            return 3;
        case 'pc':
            return 1;
        case 'playstation':
            return 2;
        default:
            return null;
    }
}

function CreateSearchCardbyGameName(data){
    const gamesSuggested = [];
    const userCardContainer = document.querySelector('#cards-container');
    userCardContainer.style.display='grid';
    userCardContainer.style.gridTemplateRows='repeat(20, 42px) 1fr';
    userCardContainer.innerHTML = "";
        for (let index = 0; index < data.results.length; index++) {
            const game = data.results[index];
            const card = createCard("search-card"+(index+1));
            const header = card.querySelector ('#data-header');
            header.textContent = game.name;
            userCardContainer.append(card);
            gamesSuggested.push(game);  
        }
        const gamesListPrincipal = document.querySelector('#container-div');
        gamesListPrincipal.innerHTML = "";
        gamesSuggested.forEach(game => {   
            let divGame = setGameHTML(game);
            gamesListPrincipal.append(divGame);
        });
}
function CreateSearchCardbyGamePlatform(data){
    const gamesSuggested = [];
    const userCardContainer = document.querySelector('#cards-container');
    userCardContainer.style.display='grid';
    userCardContainer.style.gridTemplateRows='repeat(40, 42px) 1fr'; 
    userCardContainer.innerHTML = "";
        for (let index = 0; index < data[0].results.length; index++) {
            const game = data[0].results[index];
            const card = createCard("search-card"+(index+1));
            const header = card.querySelector ('#data-header');
            header.textContent = game.name;
            userCardContainer.append(card);
            gamesSuggested.push(game);  
        }
        for (let index = 0; index < data[1].results.length; index++) {
            const game = data[1].results[index];
            const card = createCard("search-card"+(index+21));
            const header = card.querySelector ('#data-header');
            header.textContent = game.name;
            userCardContainer.append(card);
            gamesSuggested.push(game);  
        }
        const gamesListPrincipal = document.querySelector('#container-div');
        gamesListPrincipal.innerHTML = "";
        gamesSuggested.forEach(game => {   
            let divGame = setGameHTML(game);
            gamesListPrincipal.append(divGame);
        });
}

function NoResultsCard(data) {
    const userCardContainer = document.querySelector('#cards-container');
    userCardContainer.style.display='grid';
    userCardContainer.style.gridTemplateRows='42px';
    userCardContainer.style.height='42px'; 
    userCardContainer.innerHTML = "";
    const game = data;
    const card = createCard("search-card"+1);
    const header = card.querySelector ('#data-header');
    header.textContent = game;
    userCardContainer.append(card);
}

inputSearch.addEventListener ("keyup", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        const value = e.target.value.toLowerCase();
        gamesForModal=[];
        if (value.length >= 4 || value==='pc'){
            const crossSearch = document.querySelector(".crossSearch");
            crossSearch.style.display = 'block';
            fetch(`https://api.rawg.io/api/games?key=${key}&search=${value}`)
            .then(manageErrors)
            .then(response => response.json())
            .then(data => {
                if (data.results.length==0){
                    NoResults="Any results available";
                    NoResultsCard(NoResults);
                }
                else{
                    gamesConsoleandGamename.length=0;
                    gamesConsoleandGamename.push(data);
                    gamesForModal.push(data.results);
                    if(value==='xbox' || value==='pc'|| value==='playstation' ){
                        fetch(`https://api.rawg.io/api/games?key=${key}&parent_platforms=${GetPlatformsIdbyName(value)}`)
                        .then(manageErrors)
                        .then(response => response.json())
                        .then(data1 => {
                            gamesConsoleandGamename.push(data1);
                            CreateSearchCardbyGamePlatform(gamesConsoleandGamename);
                            gamesForModal.push(data1.results);
                            cargarLastSearches(1,0);
                        }).catch(function(error) { 
                            console.log('Error Code   : ' + error.status );
                            console.log('Error Reason : ' + error.statusText);
                        });     
                    }
                    else {
                        CreateSearchCardbyGameName(data);
                    }
                    cargarLastSearches(0,0);
                }
            }).catch(function(error) { 
                console.log('Error Code   : ' + error.status );
                console.log('Error Reason : ' + error.statusText);
            });
        }

        else {
            const gamesListPrincipal = document.querySelector('#container-div');
            gamesListPrincipal.innerHTML = "";
            const userCardContainer = document.querySelector('#cards-container');
            userCardContainer.style.display='none';
            userCardContainer.innerHTML = "";
            getGames();
        }
    },900);
});
  
function cargarLastSearches(index,subindex){
    lastSearches [index] = gamesForModal[index][subindex];
}

const createCard = (classname) => {
const firstDiv = document.createElement("div");
firstDiv.classList = classname;
firstDiv.id = "searchcards-container";
const secondDiv = document.createElement("div");
secondDiv.classList = "card-name";
secondDiv.id = "data-header";
firstDiv.append(secondDiv);
return firstDiv;
}

lastSearch.addEventListener('click', () => {
    const gamesListPrincipal = document.querySelector('#container-div');
    gamesListPrincipal.innerHTML = "";
    lastSearches.forEach(element => {
        const divGame = setGameHTML(element);
        gamesListPrincipal.append(divGame);
    });
})
  






