let storyCheck=[false,false,false];
const storyProfiles = document.querySelectorAll(".storyfeed_item_profile");


function storyClickHandler(i){
    
    if(!storyCheck[i]){
      storyProfiles[i].style.border = "3px solid grey";
      storyCheck[i]=true;
      
    }
    else{
      storyProfiles[i].style.border = "3px solid transparent";
      storyCheck[i]=false;
    }
    
}


function init () {
  for(let i=0;i<3;i++){
    storyProfiles[i].addEventListener("click", ()=>storyClickHandler(i));
  }
    
   
}

init();

