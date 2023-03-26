 const images = document.querySelectorAll("#images img")

const left =  document.getElementById("right_arrow")
const right = document.getElementById("left_arrow")

init()
function init(){
    left.addEventListener("click",()=>{
        slide_show(value -= 1)
    })
    right.addEventListener("click", ()=>{
        slide_show(value += 1)
    })
}

let value = 1;

function slide_show(n) {
    if(n>images.length){
        value = 1
    }    
    if (n<1){
        value = images.length
    }
    for(let i=0; i<images.length; i++){
        images[i].style.display = "none";  
    }
    images[value-1].style.display = "block";
}