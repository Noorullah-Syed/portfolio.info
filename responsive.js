burger=document.querySelector('.burger');
navbar=document.querySelector('.nav-bar');
nav_item=document.querySelector('.nav-items');


burger.addEventListener('click',()=>{
    // navbar.classList.toggle('h-nav');
    navbar.classList.toggle('v-class');
    nav_item.classList.toggle('h-nav');


});

