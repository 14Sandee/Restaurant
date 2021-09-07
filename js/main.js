// var nav = document.querySelector(".navmenu");

// window.addEventListener("scroll", function(){
//     nav.style.backgroundColor= "white";
// });
window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    const white = document.querySelector(".white-none");
    const black  = document.querySelector(".black-none");
    if(this.scrollY <= 10) 
        {
            nav.className = '';
            white.className = "white-show";
            black.className= "";
        } 
        else{
            nav.className = 'scroll';
            white.className="";
            black.className="black-show"
        } 
  };