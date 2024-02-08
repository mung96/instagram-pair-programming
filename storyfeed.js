// var storyColorChange = document.querySelector("storyfeed_item_profile");
// storyColorChange.onlick = function(){
//     text.style.color = 'gray';
// }

const storyProfile = document.quarySelector("storyfeed_item_profile");

function storyColorChange() {
  console.log(storyProfile.style.color);
  storyProfile.style.color = "gray";
  console.log(storyProfile.style.color);
}

storyProfile.addEventListener("click", storyColorChange);




// const Clicks = getAll('storyfeed_item_profile')


// function clickStory(){
//     const selectedStoryElement = storycolor[0];

//     if(!check){
//       storycolor.style.border = "2px solid rainbow";
//     }
//     else{
//       storycolor.style.border = "2px solid gray";
//     }
//     // Clicks.forEach((profile) => {
//     //     button.addEventListener('click', clicked);
//     // })
//



/*story 사진 클릭시 무지개색에서 회색으로 바뀌게끔*/