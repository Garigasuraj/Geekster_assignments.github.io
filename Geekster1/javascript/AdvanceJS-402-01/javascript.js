const container_1 = document.getElementById("outer")
const container_2 = document.getElementById("inner")

init()
function init(){
    let html = ''
    window.addEventListener("keyup",(event)=>{x
        document.getElementById("ll").style.display = "none"
        html = `  <div id="div_1"><h1>You pressed <span style="color: rgb(26, 185, 26);">${event.key}</span></h1></div>`
        container_1.innerHTML = html
        container_2.innerHTML = `<div id="div_2">${event.keyCode}</div>`
    })
}
