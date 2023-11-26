

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();


const animateBackground = () => {
  const body = document.querySelector('body');
  let hue = 0;
  setInterval(() => {
    hue = (hue + 1) % 360;
    body.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
  }, 50);
};

const slideInAwards = () => {
  const awards = document.querySelectorAll('.award');
  awards.forEach((award, index) => {
    award.style.opacity = '0';
    award.style.transform = 'translateX(-50px)';
    award.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
  });

  awards.forEach((award) => {
    award.style.opacity = '1';
    award.style.transform = 'translateX(0)';
  });
};

window.onload = () => {
  animateBackground();
  slideInAwards();
};