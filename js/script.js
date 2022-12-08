
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".contenedor-bArriba")
        .classList.add('mostrar');
    } else {
        document.querySelector(".contenedor-bArriba")
        .classList.remove("mostrar")
    }
}

document.querySelector(".contenedor-bArriba")
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});