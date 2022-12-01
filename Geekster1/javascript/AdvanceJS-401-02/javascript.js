const child = document.querySelector("main")

let num_child = 17
let a =""
let copy=null;
// print the div-containers
for(let n=1; n<=num_child; n++){
    copy = a+= `<div>${n}th child</div>`
    child.innerHTML = copy
}
child.style.textAlign="center"
child.style.marginTop ="60px"

const ele = document.querySelectorAll("div")

for(let i=0; i<=num_child; i++){
    ele[i].style.border ="1px solid black"
    ele[i].style.maxWidth ="100px"
    ele[i].style.padding ="4px"
    ele[i].style.borderRadius ="4px"
    ele[i].style.margin ="5px auto"
    ele[i].style.fontFamily ="Arial"

    if(i==0){
        ele[i].style.backgroundColor ="blue"
        ele[i].style.color ="white"
    }
    else if(i%2!=0){
        ele[i].style.backgroundColor ="rgb(34,139,34)"
        ele[i].style.color ="white"
    }
    else if(i==num_child-1){
        ele[i].style.backgroundColor ="palevioletred "
        ele[i].style.color ="white"
    }
    else{
        for(let i=7; i<=num_child; i=i+8){
            ele[i+1].style.backgroundColor ="darkgreen"
            ele[i+1].style.color ="white"
        }
    }
}
