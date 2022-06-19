const userCardTemplate = document.querySelector("[data-user-template]");
const name = document.querySelector("[data-search]")
let games = [];

// name.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase();
//     games.forEach(game => {
//         const isVisible = game.game.toLowerCase().includes(value);
//         game.element.classList.toggle("hide", !isVisible);
//         console.log(game)
//     })
//   })

    fetch(`https://api.rawg.io/api/games?key=${key}&search=${name}`)
    .then(response => response.json())
    .then(data => {
        const userCardContainer = userCardTemplate.content.querySelector('#cards-container');
        games = data.results.forEach(game => {
            const card = userCardTemplate.content.cloneNode(true).children[0].children[0];
            const header = card.querySelector('[data-header]');
            header.textContent = game.name;
            userCardContainer.append(card);
            console.log(card);
            return { game: game.name , element: card }
            

        })
    })