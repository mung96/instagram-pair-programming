let storyCheck=[false,false,false];
const storyProfiles = document.quarySelectorAll(".storyfeed_item_profile");


function storyClickHandler(i){
    
    if(!storyCheck){
      storyProfiles[i].style.border = "2px solid rainbow";
    }
    else{
      storyProfiles[i].style.border = "2px solid gray";
    }
    Clicks.forEach((profile) => {
        button.addEventListener('click', clicked);
    })
}

/*
function init () {
    storyClick.addEventListener("click", buttonClickHandler);
   
}
*/

function clickLike(){
    if(!check){
      heart.src="img/icon_Heart.svg";
    }
    else{
      heart.src="img/icon_RedHeart.png";
    }
}




init();

