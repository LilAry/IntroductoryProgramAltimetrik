function GiveLike(gameid) {
    const like = document.querySelector('#heart'+(gameid));
    const like2 = document.querySelector('.heart2'+(gameid));
    if(like.style.display=='none'){
        like.style.display = 'block';
        like2.style.display = 'none';
    }
    else{
        like.style.display='none';
        like2.style.display='block';
    }
    
};

