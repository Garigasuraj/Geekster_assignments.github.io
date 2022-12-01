const print = document.createElement("input")
document.body.append(print)


// print1.style.height ="25px"
print.placeholder = "Enter the text"
print.style.margin = "225px 625px"
print.style.marginBottom = "25px"
print.style.border = "2px solid green"
print.style.height = "30px"
print.style.fontFamily = "Arial"
print.style.fontSize = "15px"
print.style.width = "250px"
print.style.paddingLeft = "10px"

const copy = document.createElement("div")
document.body.append(copy)

copy.style.marginLeft = "635px"
copy.style.fontFamily = "Arial"
copy.style.color = "Black"
copy.style.height = "30px"
copy.style.width = "250px"


function output(){
    copy.innerHTML = print.value
}
setInterval(()=>{
    console.log(output())
},10)
