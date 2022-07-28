const grid = document.querySelector('.recom-grid')
const buttonL = document.querySelector('.button-left')
const buttonR = document.querySelector('.button-right')
const burger = document.querySelector('.burger')
const navH = document.querySelector('.nav-cont')
let width = 0
let gap = 0
let widthPgap = width + gap
let max = - 0
let value = 0
//rwd grid
const Zgrid = document.querySelector('.recom-grid')
let Ww = window.innerWidth
function resGrid(){
    console.log('res : ' + Ww)
    Ww = window.innerWidth
    if(Ww >= 1290 ){
        width = 34
        gap = 0
        widthPgap = width + gap
        max = - ( 3 * widthPgap)
        console.log('res 1'  + ' gap ' + gap + ' wid ' + width + ' max ' + max)
    }else if(Ww <= 1290 && Ww > 768){
        width = 48
        gap = 4;
        widthPgap = width + gap
        max = - ( 4 * widthPgap)
        console.log('res 2' + ' gap ' + gap + ' wid ' + width + ' max ' + max)
    }else if(Ww <= 768){
        width = 100
        gap = 2
        widthPgap = width + gap
        max = - (5 * widthPgap)
        console.log('res 3'  + ' gap ' + gap + ' wid ' + width + ' max ' + max)
    }
    widthPgap = width + gap
    //fixing
    grid.style.transform = 'translateX( 0 )';
    undim(buttonR)
    dim(buttonL)
    value = 0
}

window.onload = resGrid()
window.addEventListener('resize', (resGrid) , true);


//rwd
const header = document.querySelector('header')
let pScroll = window.scrollY || document.documentElement.scrollTop
let curscroll = pScroll
let direction = 0
let Pdirection
function toogleH(directiony, scroll){
    if(directiony == 2 && scroll > 80 ){
        header.classList.add('hidden')
        navH.classList.remove("solo")
        console.log(scroll + " driection " + directiony)
        Pdirection = direction
    }else if (directiony == 1 && scroll > 80){
        console.log(scroll + " direction  " + directiony)
        header.classList.remove('hidden')
        Pdirection = direction
    }
    if(scroll < 80){
        header.classList.remove('hidden')
    }
   
}
function scrollH(){
    curscroll = window.scrollY || document.documentElement.scrollTop
    
    if( curscroll < pScroll){
        direction = 1
        console.log(curscroll + " driection " + direction)
    }else if(curscroll > pScroll){
        direction = 2
        console.log(curscroll + " driection " + direction)
    }
    if(direction !== Pdirection){
        toogleH(direction, curscroll)
    }
   
    pScroll = curscroll

}
window.onscroll = scrollH
//nav
burger.addEventListener('click', () =>{
    navH.classList.toggle("solo")
    burger.classList.toggle("active")
})
//karuzela

function dim(button){
    button.style.transform =' scale(80%)' 
    let Alen = button.children.length;
    for(i = 0; i < Alen; i++ ){
        button.children[i].style.backgroundColor = 'var(--color-text-green)'
    }
}
function undim(button){
    button.style.transform =' scale(100%)' 
    let Alen = button.children.length;
    for(i = 0; i < Alen; i++ ){
        button.children[i].style.backgroundColor = null
    }
}
function left(){
    if(value == 0 ){
        grid.style.transform = 'translateX( 0 )';
    }else{
        value +=  widthPgap;
        grid.style.transform = 'translateX(' + value + '%)';
    }
}
function right(){
    if(value == max){
        grid.style.transform = 'translateX('  + value +  ')';
    }else{
    value -=  widthPgap
     grid.style.transform = 'translateX(' + value + '%)';
    }
}

window.onload = dim(buttonL)

buttonL.addEventListener('click',  () =>{
    left();
    if( value  == 0 ){
        dim(buttonL)
    }
    undim(buttonR)
})
buttonR.addEventListener('click',  () =>{
    right();
    undim(buttonL);
    if( value  == max ){
        dim(buttonR)
    }
})