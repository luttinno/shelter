function burgerMenu(){
    const clickMenu = document.getElementsByClassName("menu-container");
    clickMenu[0].style.display = "block";
   
}









function btnOurFriends(e){
    window.location.hash="ourFriends";
    console.log("rame")
}
function buttonToOurFreinds(e){
    window.location.hash="../pets/index.html"
}
const cardWrap = document.querySelector(".card-wrap");
const card = document.getElementsByClassName("card");

let counter = 0;

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

leftArrow.addEventListener("click", ()=>{
    if(counter == 0) {
        counter=card.length-2
    }if(counter !== 0){
        counter--;
    }
    cardWrap.style.transform= 'translate('+(counter) *  -16.5 +'%)';
});

rightArrow.addEventListener('click',()=>{
    if(counter == card.length-3){
      counter=-1;
  }if(counter <= card.length-4){
      counter++
  }
  cardWrap.style.transform= 'translate('+(counter) *  -16.5 +'%)';
})
