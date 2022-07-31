//key variable
const key = '03273adfd4364d209da21c5b28b7d88a';
//variable to store the number of pages
let n = 1;
//create an observer
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            n++;
            getGames();
        }
    });
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

function manageErrors(response) {  
    if(!response.ok){ 
        const responseError = {
            statusText: response.statusText,
            status: response.status
        };
        throw(responseError); 
    }
    return response;
}


const detailGames=[];
const detailGames2=[];
let closeBtn = null;
const  getGames = async () => {
    fetch(`https://api.rawg.io/api/games?key=${key}&page=${n}`)
        .then(manageErrors)
        .then(response => response.json())
        .then(result => {
            const gamesListPrincipal = document.querySelector('#container-div');
            result.results.forEach((res,index) => {
                detailGames.push(res);
                const id = res.id;
                fetch(`https://api.rawg.io/api/games/${id}?key=${key}`)
                    .then(response => response.json())
                    .then(game => {   
                        detailGames2.push(game);
                        let divGame = setGameHTML(game);
                        gamesListPrincipal.append(divGame);
                        if (index==result.results.length-1){
                            const gamesinDisplay = document.querySelectorAll('.parent .div1');
                            let lastGame = gamesinDisplay[gamesinDisplay.length-1];
                            observer.observe(lastGame);
                        }
                    });        
            });
        }).catch(function(error) { 
            console.log('Error Code   : ' + error.status );
            console.log('Error Reason : ' + error.statusText);
        });
};

//arrow function with one parameter
const mostrarGeneros = genres => {
    let generstoShow = [];
    genres.forEach((item) => {generstoShow.push(item.name)});
    return generstoShow.join(", ");
} 

const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DIC"];
const showDate = released => {
   const datetoShow = new Date(released);
   const monthtoShow = months[datetoShow.getMonth()];
   const daytoShow = datetoShow.getDate();
   const yeartoShow = datetoShow.getFullYear();
   return monthtoShow+" "+daytoShow+","+yeartoShow;
   
}

const showPlatforms = platforms =>{
    let platformstoShow = '';
    const platformstoShowOrderer = [];
    platforms.forEach((item)=> {
        switch (item.platform.name) {
            case "PlayStation": 
            platformstoShowOrderer[0]= `<svg class="playstation" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="platform-icons" d="M9.55176 -0.000112534L9.55176 18.2773L13.3605 19.5884L13.3605 4.26306C13.3605 3.54091 13.6568 3.06143 14.1321 3.22633C14.7535 3.4136 14.8743 4.07883 14.8743 4.79295L14.8743 10.9136C17.245 12.1605 19.1115 10.913 19.1115 7.62333C19.1115 4.26176 18.0172 2.76423 14.7973 1.56021C13.5273 1.10072 11.1735 0.325334 9.55176 -0.000112534" fill="white"/>
                <path class="platform-icons" d="M14.3503 16.9131L20.1076 14.3204C20.7589 14.015 20.8585 13.6 20.3314 13.3819C19.796 13.1597 18.8404 13.2233 18.1821 13.5223L14.3503 15.2326V12.5038L14.5698 12.4121C14.5698 12.4121 15.6789 11.915 17.239 11.7009C18.796 11.485 20.7055 11.729 22.2063 12.4447C23.8969 13.1242 24.0864 14.1154 23.6587 14.8052C23.2247 15.4878 22.1726 15.9816 22.1726 15.9816L14.3503 19.5369" fill="white"/>
                <path class="platform-icons" d="M1.7099 17.2146C-0.0868735 16.6444 -0.386498 15.4395 0.433179 14.7435C1.18926 14.1079 2.47691 13.6295 2.47691 13.6295L7.79974 11.4675V13.9281L3.97289 15.4908C3.29503 15.767 3.1934 16.1557 3.73939 16.359C4.29514 16.5706 5.28141 16.5137 5.95966 16.2286L7.79974 15.4728V17.6695C7.68114 17.6921 7.54927 17.715 7.42891 17.7384C5.5943 18.0852 3.63971 17.9428 1.7099 17.2146" fill="white"/>
                <path class="platform-icons" fill-rule="evenodd" clip-rule="evenodd" d="M23.7661 19.4589C23.6149 19.6145 23.4164 19.7024 23.2027 19.7024C22.989 19.7024 22.784 19.6145 22.6326 19.4589C22.4831 19.3005 22.4004 19.0936 22.4004 18.8706C22.4004 18.4089 22.7591 18.0357 23.2027 18.0357C23.4164 18.0357 23.6149 18.1208 23.7661 18.2798C23.9156 18.4352 24 18.6456 24 18.8706C24 19.0936 23.9156 19.3005 23.7661 19.4589ZM22.5352 18.8707C22.5352 18.6808 22.6033 18.5067 22.7279 18.3776C22.8555 18.2458 23.0258 18.1747 23.2027 18.1747C23.3798 18.1747 23.5458 18.2458 23.6703 18.3776C23.7959 18.5067 23.8638 18.6808 23.8638 18.8707C23.8638 19.2511 23.567 19.5599 23.2027 19.5599C23.0258 19.5599 22.8555 19.4896 22.7279 19.3594C22.6033 19.2281 22.5352 19.0558 22.5352 18.8707ZM23.5677 19.2169C23.5748 19.2384 23.5835 19.2511 23.5958 19.2548L23.607 19.2614V19.3143H23.4334L23.4302 19.3036L23.4184 19.2717C23.4164 19.2548 23.4141 19.2328 23.4117 19.1957L23.404 19.0508C23.402 18.9993 23.3859 18.9694 23.3561 18.9496C23.334 18.9419 23.3039 18.9359 23.259 18.9359H23.018V19.3143H22.8599V18.3849H23.2745C23.3421 18.3849 23.399 18.3975 23.4426 18.4167C23.53 18.4596 23.5748 18.5368 23.5748 18.6455C23.5748 18.6988 23.5621 18.7487 23.5402 18.7856C23.5212 18.8116 23.4988 18.8353 23.4744 18.8585L23.4809 18.8633C23.4974 18.8754 23.5138 18.8874 23.5235 18.9051C23.5456 18.9305 23.5556 18.9731 23.5574 19.028L23.5614 19.1463C23.5621 19.1766 23.5644 19.2002 23.5677 19.2169ZM23.3807 18.7599C23.4063 18.7427 23.4184 18.7085 23.4184 18.6561C23.4184 18.6009 23.4001 18.5641 23.3642 18.5458C23.3421 18.5368 23.3146 18.5303 23.2779 18.5303H23.018V18.7914H23.2635C23.3123 18.7914 23.3511 18.7809 23.3807 18.7599Z" fill="white"/>
                </svg>`
                break;
            case "Xbox": 
            platformstoShowOrderer[1]= `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="platform-icons" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C11.9286 0 13.5238 0.616246 14.9762 1.65266C15 1.65266 15 1.68067 15 1.70868C15 1.73669 14.9762 1.73669 14.9524 1.73669C13.0952 1.2605 10.2857 3.13725 10.0238 3.33333H10H9.97619C9.71429 3.13725 6.90476 1.2605 5.04762 1.73669C5.02381 1.73669 5 1.73669 5 1.70868C5 1.68067 5 1.65266 5.02381 1.65266C6.47619 0.616246 8.07143 0 10 0ZM16.3903 17.5988C17.8903 16.0464 12.9308 10.5648 10.0035 8.33333C10.0035 8.33333 9.97935 8.33333 9.97935 8.35759C7.07626 10.5648 2.09261 16.0464 3.61674 17.5988C5.31021 19.1026 7.56011 20 10.0035 20C12.447 20 14.6727 19.1026 16.3903 17.5988ZM2.73973 3.38078C2.72831 3.38078 2.7226 3.38705 2.7169 3.39332C2.71119 3.39959 2.70548 3.40585 2.69406 3.40585C1.0274 5.2358 0 7.76763 0 10.5501C0 12.8313 0.707763 14.9621 1.87215 16.6416C1.87215 16.6667 1.89498 16.6667 1.91781 16.6667C1.94064 16.6667 1.94064 16.6416 1.91781 16.6165C1.21005 14.2351 4.79452 8.4946 6.64384 6.0881L6.66667 6.06303C6.66667 6.03796 6.66667 6.03796 6.64384 6.03796C3.83562 2.9797 2.89954 3.30558 2.73973 3.38078ZM13.3333 6.05268L13.3562 6.02759C16.1644 2.99144 17.1005 3.31764 17.2374 3.36782C17.2469 3.36782 17.2525 3.36782 17.2574 3.36962C17.2642 3.37215 17.2698 3.37825 17.2831 3.39291C18.9726 5.22464 20 7.75895 20 10.5442C20 12.8276 19.2922 14.9604 18.1279 16.6416C18.1279 16.6667 18.105 16.6667 18.0822 16.6667V16.6165C18.7671 14.2327 15.2055 8.48662 13.3562 6.07777C13.3333 6.07777 13.3333 6.05268 13.3333 6.05268Z" fill="white"/>
                </svg>`
                break;
            case "PC": 
            platformstoShowOrderer[2]= `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="platform-icons" fill-rule="evenodd" clip-rule="evenodd" d="M20 9.16667H9.16667V1.53647L20 0V9.16667ZM8.33333 1.66667V9.16667H0V2.77865L8.33333 1.66667ZM8.33333 10H0V17.0992L8.33333 18.3333V10ZM9.16667 18.3262V10H20V20L9.16667 18.3262Z" fill="white"/>
                </svg>`
                break;
            default:
                break;
        }
    })
    platformstoShowOrderer.forEach((item)=> {
        platformstoShow+=item;
    })
    return platformstoShow
}

function checkEmptyPhotoCard(cardImg){
    let contentcardImg='';
    if(!cardImg){
        contentcardImg = "No photo available"
      }
      else{
        contentcardImg = `<img src="${cardImg}" loading="lazy" width="363px" height="181.47px"> `
      }
    return contentcardImg;
}

//set the information that comes from the API to the DOM
const setGameHTML = (game) => {
    let div = document.createElement('div');
    div.dataset.gameName = game.slug
    const cardImg = game.background_image;
    div.className = 'item';
    div.innerHTML = `
        <div class="div1" id="modal-btn">
            <div class="div4-image">
                ${checkEmptyPhotoCard(cardImg)}
                <a onclick='GiveLike(${game.id})' class="heart" id="heart">
                    <svg class="heartNotFill" id="heart${game.id}" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33301 3.33342C4.47967 3.33342 2.99967 4.81742 2.99967 6.62275C2.99967 8.65475 4.17567 10.8228 5.99434 12.9468C7.52234 14.7294 9.37834 16.3374 10.9997 17.6348C12.621 16.3374 14.477 14.7281 16.005 12.9468C17.8237 10.8228 18.9997 8.65342 18.9997 6.62275C18.9997 4.81742 17.5197 3.33342 15.6663 3.33342C13.813 3.33342 12.333 4.81742 12.333 6.62275C12.333 6.97638 12.1925 7.31552 11.9425 7.56556C11.6924 7.81561 11.3533 7.95609 10.9997 7.95609C10.6461 7.95609 10.3069 7.81561 10.0569 7.56556C9.80682 7.31552 9.66634 6.97638 9.66634 6.62275C9.66634 4.81742 8.18634 3.33342 6.33301 3.33342ZM10.9997 2.87875C10.4351 2.18642 9.72327 1.62865 8.91602 1.24601C8.10876 0.863371 7.22636 0.665487 6.33301 0.666754C3.03167 0.666754 0.333008 3.32009 0.333008 6.62275C0.333008 9.62409 2.02234 12.4094 3.96901 14.6814C5.94367 16.9868 8.36501 18.9721 10.181 20.3854C10.4151 20.5675 10.7031 20.6663 10.9997 20.6663C11.2962 20.6663 11.5843 20.5675 11.8183 20.3854C13.6343 18.9721 16.0557 16.9854 18.0303 14.6814C19.977 12.4094 21.6663 9.62409 21.6663 6.62275C21.6663 3.32009 18.9677 0.666754 15.6663 0.666754C13.7863 0.666754 12.101 1.52809 10.9997 2.87875Z" fill="white"/>
                    </svg>
                    <svg id="heartFill" class="heart2${game.id}" width="37" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_8000_1601)">
                        <mask id="path-1-outside-1_8000_1601" maskUnits="userSpaceOnUse" x="6" y="6.49927" width="18" height="17" fill="black">
                        <rect fill="white" x="6" y="6.49927" width="18" height="17"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4373 7.93372C14.0427 8.2207 14.5766 8.63902 15 9.15827C15.826 8.14527 17.09 7.49927 18.5 7.49927C20.976 7.49927 23 9.48927 23 11.9663C23 14.2173 21.733 16.3063 20.273 18.0103C18.792 19.7383 16.976 21.2283 15.614 22.2883C15.4385 22.4248 15.2224 22.499 15 22.499C14.7776 22.499 14.5615 22.4248 14.386 22.2883C13.024 21.2283 11.208 19.7393 9.727 18.0103C8.267 16.3063 7 14.2173 7 11.9663C7 9.48927 9.024 7.49927 11.5 7.49927C12.17 7.49832 12.8318 7.64674 13.4373 7.93372Z"/>
                        </mask>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4373 7.93372C14.0427 8.2207 14.5766 8.63902 15 9.15827C15.826 8.14527 17.09 7.49927 18.5 7.49927C20.976 7.49927 23 9.48927 23 11.9663C23 14.2173 21.733 16.3063 20.273 18.0103C18.792 19.7383 16.976 21.2283 15.614 22.2883C15.4385 22.4248 15.2224 22.499 15 22.499C14.7776 22.499 14.5615 22.4248 14.386 22.2883C13.024 21.2283 11.208 19.7393 9.727 18.0103C8.267 16.3063 7 14.2173 7 11.9663C7 9.48927 9.024 7.49927 11.5 7.49927C12.17 7.49832 12.8318 7.64674 13.4373 7.93372Z" fill="white"/>
                        <path d="M15 9.15827L14.225 9.79026L15 10.7406L15.775 9.79022L15 9.15827ZM13.4373 7.93372L13.8656 7.03009L13.4373 7.93372ZM20.273 18.0103L21.0323 18.661L21.0324 18.6609L20.273 18.0103ZM15.614 22.2883L16.228 23.0776L16.2282 23.0774L15.614 22.2883ZM14.386 22.2883L13.7718 23.0774L13.772 23.0776L14.386 22.2883ZM9.727 18.0103L10.4865 17.3597L10.4864 17.3596L9.727 18.0103ZM11.5 7.49927V8.49927L11.5014 8.49927L11.5 7.49927ZM15.775 8.52629C15.2576 7.89185 14.6053 7.38073 13.8656 7.03009L13.0089 8.83734C13.4801 9.06066 13.8955 9.3862 14.225 9.79026L15.775 8.52629ZM18.5 6.49927C16.7788 6.49927 15.2341 7.2888 14.225 8.52633L15.775 9.79022C16.4179 9.00175 17.4012 8.49927 18.5 8.49927V6.49927ZM24 11.9663C24 8.92728 21.5185 6.49927 18.5 6.49927V8.49927C20.4335 8.49927 22 10.0513 22 11.9663H24ZM21.0324 18.6609C22.5402 16.9012 24 14.581 24 11.9663H22C22 13.8536 20.9258 15.7114 19.5136 17.3596L21.0324 18.6609ZM16.2282 23.0774C17.601 22.0091 19.483 20.4687 21.0323 18.661L19.5137 17.3595C18.101 19.0078 16.351 20.4475 14.9998 21.4991L16.2282 23.0774ZM15 23.499C15.4448 23.499 15.8769 23.3507 16.228 23.0776L15 21.499L15 21.499V23.499ZM13.772 23.0776C14.1231 23.3507 14.5552 23.499 15 23.499V21.499V21.499L13.772 23.0776ZM8.96753 18.6608C10.517 20.4697 12.3993 22.0092 13.7718 23.0774L15.0002 21.4991C13.6487 20.4473 11.899 19.0088 10.4865 17.3597L8.96753 18.6608ZM6 11.9663C6 14.581 7.45985 16.9012 8.96762 18.6609L10.4864 17.3596C9.07415 15.7114 8 13.8536 8 11.9663H6ZM11.5 6.49927C8.48147 6.49927 6 8.92728 6 11.9663H8C8 10.0513 9.56653 8.49927 11.5 8.49927V6.49927ZM13.8656 7.03009C13.1258 6.67945 12.3172 6.49811 11.4986 6.49927L11.5014 8.49927C12.0228 8.49853 12.5378 8.61402 13.0089 8.83734L13.8656 7.03009Z" fill="white" mask="url(#path-1-outside-1_8000_1601)"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_8000_1601" x="-3" y="-2.50073" width="36" height="34.9998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8000_1601"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8000_1601" result="shape"/>
                        </filter>
                        </defs>
                    </svg>    
                </a>
            </div> 
            <div class="card-content" onclick='openModal(${game.id})'>
                <div class="card-body">
                    <a class="card-title">${game.name}</a>
                    <a class="Number">#${game.rating_top}</a>
                </div>
                <div class="Description-content">
                    <div class="Description">
                            <div class="release">
                            <a class="card-text">Release date:</a>
                        </div>
                        <div class="realeaseText">
                            <a class="info">${showDate(game.released)}</a>
                        </div>
                        <div class="logos">${showPlatforms(game.parent_platforms)}</div>
                    </div>
                    <div class="Description2">
                        <div class="release2">
                            <a class="card-text1">Genres:</a>
                        </div>
                        <div class="genresText">
                            <a class="info2">${mostrarGeneros(game.genres)}</a>
                        </div>
                    </div>
                </div>
                <div class="DescriptionText" id="div-description">
                    <a class="textD" id="div-description-text">${(game.description_raw)}</a>
                </div>
            </div>
        </div> 
        `;
    return div;
}



    
const initGames = async (gamename) => {
    const gamesListPrincipal = document.querySelector('#container-div');
    getGames(gamename).then((results)=> {
    }); 
}
    initGames();