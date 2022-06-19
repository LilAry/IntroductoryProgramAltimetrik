let number = 1;
const key1 = 'a9201915ea2b446f99b5f204238fccb8';
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modal1 = document.querySelector('#my-modal1');
const modalBtn = document.querySelector('#modal-btn');
let closeBtn = null;


const  getModal = async () => {
    fetch(`https://api.rawg.io/api/games?key=${key1}&page=${number}`)
        .then(response => response.json())
        .then(result => {
          result.results.forEach(game => {
            let divGameModal = setModalHTML(game);
            modal1.append(divGameModal);
          });

          closeBtn = document.querySelector('.close');
          closeBtn.addEventListener('click', closeModal);
          closeBtn.addEventListener('click', closeModal1);
          window.addEventListener('click', outsideClick);
        })};


const showPlatformsModal = platforms =>{
  let platformstoShow = '';
  platforms.forEach((item)=> {
      switch (item.platform.name) {
          case "PC": 
          platformstoShow+= `<svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="platform-icons" fill-rule="evenodd" clip-rule="evenodd" d="M20 9.16667H9.16667V1.53647L20 0V9.16667ZM8.33333 1.66667V9.16667H0V2.77865L8.33333 1.66667ZM8.33333 10H0V17.0992L8.33333 18.3333V10ZM9.16667 18.3262V10H20V20L9.16667 18.3262Z" fill="white"/>
              </svg>`
              break;
          case "PlayStation": 
          platformstoShow+= `<svg width="32" height="26.27" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="platform-icons" d="M9.55176 -0.000112534L9.55176 18.2773L13.3605 19.5884L13.3605 4.26306C13.3605 3.54091 13.6568 3.06143 14.1321 3.22633C14.7535 3.4136 14.8743 4.07883 14.8743 4.79295L14.8743 10.9136C17.245 12.1605 19.1115 10.913 19.1115 7.62333C19.1115 4.26176 18.0172 2.76423 14.7973 1.56021C13.5273 1.10072 11.1735 0.325334 9.55176 -0.000112534" fill="white"/>
              <path class="platform-icons" d="M14.3503 16.9131L20.1076 14.3204C20.7589 14.015 20.8585 13.6 20.3314 13.3819C19.796 13.1597 18.8404 13.2233 18.1821 13.5223L14.3503 15.2326V12.5038L14.5698 12.4121C14.5698 12.4121 15.6789 11.915 17.239 11.7009C18.796 11.485 20.7055 11.729 22.2063 12.4447C23.8969 13.1242 24.0864 14.1154 23.6587 14.8052C23.2247 15.4878 22.1726 15.9816 22.1726 15.9816L14.3503 19.5369" fill="white"/>
              <path class="platform-icons" d="M1.7099 17.2146C-0.0868735 16.6444 -0.386498 15.4395 0.433179 14.7435C1.18926 14.1079 2.47691 13.6295 2.47691 13.6295L7.79974 11.4675V13.9281L3.97289 15.4908C3.29503 15.767 3.1934 16.1557 3.73939 16.359C4.29514 16.5706 5.28141 16.5137 5.95966 16.2286L7.79974 15.4728V17.6695C7.68114 17.6921 7.54927 17.715 7.42891 17.7384C5.5943 18.0852 3.63971 17.9428 1.7099 17.2146" fill="white"/>
              <path class="platform-icons" fill-rule="evenodd" clip-rule="evenodd" d="M23.7661 19.4589C23.6149 19.6145 23.4164 19.7024 23.2027 19.7024C22.989 19.7024 22.784 19.6145 22.6326 19.4589C22.4831 19.3005 22.4004 19.0936 22.4004 18.8706C22.4004 18.4089 22.7591 18.0357 23.2027 18.0357C23.4164 18.0357 23.6149 18.1208 23.7661 18.2798C23.9156 18.4352 24 18.6456 24 18.8706C24 19.0936 23.9156 19.3005 23.7661 19.4589ZM22.5352 18.8707C22.5352 18.6808 22.6033 18.5067 22.7279 18.3776C22.8555 18.2458 23.0258 18.1747 23.2027 18.1747C23.3798 18.1747 23.5458 18.2458 23.6703 18.3776C23.7959 18.5067 23.8638 18.6808 23.8638 18.8707C23.8638 19.2511 23.567 19.5599 23.2027 19.5599C23.0258 19.5599 22.8555 19.4896 22.7279 19.3594C22.6033 19.2281 22.5352 19.0558 22.5352 18.8707ZM23.5677 19.2169C23.5748 19.2384 23.5835 19.2511 23.5958 19.2548L23.607 19.2614V19.3143H23.4334L23.4302 19.3036L23.4184 19.2717C23.4164 19.2548 23.4141 19.2328 23.4117 19.1957L23.404 19.0508C23.402 18.9993 23.3859 18.9694 23.3561 18.9496C23.334 18.9419 23.3039 18.9359 23.259 18.9359H23.018V19.3143H22.8599V18.3849H23.2745C23.3421 18.3849 23.399 18.3975 23.4426 18.4167C23.53 18.4596 23.5748 18.5368 23.5748 18.6455C23.5748 18.6988 23.5621 18.7487 23.5402 18.7856C23.5212 18.8116 23.4988 18.8353 23.4744 18.8585L23.4809 18.8633C23.4974 18.8754 23.5138 18.8874 23.5235 18.9051C23.5456 18.9305 23.5556 18.9731 23.5574 19.028L23.5614 19.1463C23.5621 19.1766 23.5644 19.2002 23.5677 19.2169ZM23.3807 18.7599C23.4063 18.7427 23.4184 18.7085 23.4184 18.6561C23.4184 18.6009 23.4001 18.5641 23.3642 18.5458C23.3421 18.5368 23.3146 18.5303 23.2779 18.5303H23.018V18.7914H23.2635C23.3123 18.7914 23.3511 18.7809 23.3807 18.7599Z" fill="white"/>
              </svg>`
              break;
          case "Xbox": 
          platformstoShow+= `<svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="platform-icons" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C11.9286 0 13.5238 0.616246 14.9762 1.65266C15 1.65266 15 1.68067 15 1.70868C15 1.73669 14.9762 1.73669 14.9524 1.73669C13.0952 1.2605 10.2857 3.13725 10.0238 3.33333H10H9.97619C9.71429 3.13725 6.90476 1.2605 5.04762 1.73669C5.02381 1.73669 5 1.73669 5 1.70868C5 1.68067 5 1.65266 5.02381 1.65266C6.47619 0.616246 8.07143 0 10 0ZM16.3903 17.5988C17.8903 16.0464 12.9308 10.5648 10.0035 8.33333C10.0035 8.33333 9.97935 8.33333 9.97935 8.35759C7.07626 10.5648 2.09261 16.0464 3.61674 17.5988C5.31021 19.1026 7.56011 20 10.0035 20C12.447 20 14.6727 19.1026 16.3903 17.5988ZM2.73973 3.38078C2.72831 3.38078 2.7226 3.38705 2.7169 3.39332C2.71119 3.39959 2.70548 3.40585 2.69406 3.40585C1.0274 5.2358 0 7.76763 0 10.5501C0 12.8313 0.707763 14.9621 1.87215 16.6416C1.87215 16.6667 1.89498 16.6667 1.91781 16.6667C1.94064 16.6667 1.94064 16.6416 1.91781 16.6165C1.21005 14.2351 4.79452 8.4946 6.64384 6.0881L6.66667 6.06303C6.66667 6.03796 6.66667 6.03796 6.64384 6.03796C3.83562 2.9797 2.89954 3.30558 2.73973 3.38078ZM13.3333 6.05268L13.3562 6.02759C16.1644 2.99144 17.1005 3.31764 17.2374 3.36782C17.2469 3.36782 17.2525 3.36782 17.2574 3.36962C17.2642 3.37215 17.2698 3.37825 17.2831 3.39291C18.9726 5.22464 20 7.75895 20 10.5442C20 12.8276 19.2922 14.9604 18.1279 16.6416C18.1279 16.6667 18.105 16.6667 18.0822 16.6667V16.6165C18.7671 14.2327 15.2055 8.48662 13.3562 6.07777C13.3333 6.07777 13.3333 6.05268 13.3333 6.05268Z" fill="white"/>
              </svg>`
              break;
          default:
              break;
      }
  })
  return platformstoShow
}

const monthsModal = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DIC"];
const showDateModal = released => {
   const datetoShow = new Date(released);
   const monthtoShow = monthsModal[datetoShow.getMonth()];
   const daytoShow = datetoShow.getDate();
   const yeartoShow = datetoShow.getFullYear();
   return monthtoShow+" "+daytoShow+","+yeartoShow;
   
}

const mostrarGenerosModal = genres => {
  let generstoShow = [];
  genres.forEach((item) => {generstoShow.push(item.name)});
  return generstoShow.join(", ");
} 

const setModalHTML = (game) => {
  let div = document.createElement('div');
  div.dataset.gameName = game.slug
  div.className = 'item';
  div.innerHTML = `
        <div id="modalGame_${game.id}" class="modal-content ocultarModal" style="background-image: url(${game.background_image})" onclick="closeModal1()">
            <div class="grid1">
                <div class="cross">

                </div>
                
                <div class="logosmodal">
                 ${showPlatformsModal(game.parent_platforms)}
                </div>
                <div class="titulomodal">
                    <a>${game.name}</a>
                </div>
                <div class="rectanglesmodal">
                    <div class="rectangle1">
                        <a>${showDateModal(game.released)}</a>
                    </div>
                </div>
            </div>
            <div class="grid2">
                <p>${game.description ? game.description : ""}</p>
            </div>
            <div class="grid3">
                <div class="buttonmodal1">
                    <a>Add to wishlist</a>
                    <img src="img/Heart.svg">
                </div>
            </div>
            <div class="grid4">
                <div class="buttonmodal2">
                    <a>Purchase</a>
                </div>
            </div>
            <div class="grid5">
                <div class="desca">
                    <div class="desc-titles">
                        <a>Platforms</a>
                    </div>
                    <div class="desc">
                        <a>${showPlatformsModal(game.parent_platforms)}</a>
                    </div>
                </div>
                <div class="desca">
                    <div class="desc-titles">
                        <a>Release date</a>
                    </div>
                    <div class="desc2">
                        <a>${showDateModal(game.released)}</a>
                    </div>
                </div>
                <div class="desca">
                    <div class="desc-titles">
                        <a>Publisher</a>
                    </div>
                    <div class="desc">
                        <a>${game.publishers ? game.publishers : ""}</a>
                    </div>
                </div>
                <div class="desca">
                    <div class="desc-titles">
                        <a>Website</a>
                    </div>
                    <div class="desc">
                        <a>${game.metacritic_url ? game.metacritic_url : ""}</a>
                    </div>
                </div>
            </div>
    
            <div class="grid6">
                <div class="desca">
                    <div class="desc-titles">
                        <a>Genre</a>
                    </div>
                    <div class="desc">
                        <a>${mostrarGenerosModal(game.genres)}</a>
                    </div>
                </div>
                <div class="desca">
                    <div class="desc-titles">
                        <a>Developer</a>
                    </div>
                    <div class="desc">
                        <a>${game.developers ? game.developers : ""}</a>
                    </div>
                </div>
                <div class="desca">
                    <div class="desc-titles">
                        <a>Age rating</a>
                    </div>
                    <div class="desc2">
                        <a>${game.rating}</a>
                    </div>
                </div>
                <div class="actionsmodal">
                    <img src="img/Chat Bubbles.svg">
                    <img src="img/Thumbs Up.svg">
                    <img src="img/Action.svg">
                </div>
            </div> 
            <div class="grid7">
                <div class="pic1">
                    <div class="pic1a">
                      <img src="${game.parent_platforms}" width='392px' height=217px' >
                        <div class="YouTubeicon">
                            <img src="/img/YouTube.svg">
                        </div>
                    </div>
    
                </div>
                <div class="pic2">
                  <img src="${game.parent_platforms}" width='184px' height='104px' >
                </div>
                <div class="pic3">
                  <img src="${game.parent_platforms}" width='184px' height='104px' >
                </div>
                <div class="pic4">
                  <img src="${game.parent_platforms}" width='184px' height='104px' >
                </div>
                <div class="pic5">
                <img src="${game.parent_platforms}" width='184px' height='104px' >
            </div>
        </div>
          `;
          return div;
}

const initGamesModal = async (gamename) => {
  getModal(gamename).then((results)=> {
      // console.log(results);
  }); 
}

initGamesModal();


// Events
//modalBtn.addEventListener('click', openModal);

// Open
function openModal(gameId) {
  //modal.style.display = 'block';
  modal1.style.display = 'block';

  // Desoculto contenido de juego a mostrar
  const contenidoModalAmostrar =  document.querySelector(`#modalGame_${gameId}`);
  contenidoModalAmostrar.classList = "modal-content";
}

function openModal1() {
  modal1.style.display = 'block';
}
// Close
function closeModal() {
  //modal.style.display = 'none';
  modal1.style.display = 'none';
}

function closeModal1() {
  modal1.style.display = 'none';
}
// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


