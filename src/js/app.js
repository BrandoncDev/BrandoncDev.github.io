const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            console.log(index);
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .4}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

   
}

navSlide();