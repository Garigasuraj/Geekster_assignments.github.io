const text_input =  document.getElementById("input")
const button = document.getElementById("button")
const list =  document.getElementById("shopping_list")

const del_button = document.getElementById("del_button")

let new_list
let text_node
let new_button 

let a = []

button.addEventListener("click",()=>{
    new_list = document.createElement("li")
    text_node = document.createTextNode(text_input.value)
   
    a.push(new_list)
    new_list.append(text_node)
    list.append(new_list)
    new_list.style.marginTop = "10px"

    new_button = document.createElement("button")
    new_button.textContent = "delete"
    document.body.append(new_button)
    new_list.append(new_button)
    new_button.style.cursor = "pointer"
    new_button.style.marginLeft = "20px"
    new_button.style.boxShadow = "0px 5px 12px rgba(0,0,0,0.3)"
    new_button.style.width = "70px"
    new_button.style.border = "none"
})
console.log(a)

new_button.addEventListener("click",()=>{
        list.removeChild(list.children[2])
    })
// can be done using arrays - we can push the element into an array and loop over it

// and button should have an id so if id matches we can delete it easily



