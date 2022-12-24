const text_input =  document.getElementById("input")
const button = document.getElementById("button")
const list =  document.getElementById("list")

const del_button = document.getElementById("del_button")

let new_button
let new_list
let text_node

// button.addEventListener("click",()=>{
//     new_list = document.createElement("li")
//     text_node = document.createTextNode(text_input.value)
//     new_list.append(text_node)
//     list.append(new_list)
//     new_list.style.marginTop = "10px"

//     new_button = document.createElement("button")
//     new_button.textContent = "delete"
//     document.body.append(new_button)
//     new_list.append(new_button)
//     new_button.style.cursor = "pointer"
//     new_button.style.marginLeft = "20px"
//     new_button.style.boxShadow = "0px 5px 12px rgba(0,0,0,0.3)"
//     new_button.style.width = "70px"
//     new_button.style.border = "none"
// })
function create_list(n){
    new_list = document.createElement("li")
    text_node = document.createTextNode(`new list${n}`)
    new_list.append(text_node)
    list.append(new_list)
    new_list.style.marginTop = "10px"

    new_button = document.createElement("button")
    new_button.textContent = "Delete"
    document.body.append(new_button)
    new_button.append(del_button)
    new_list.append(new_button)
    new_button.style.cursor = "pointer"
    new_button.style.marginLeft = "20px"
    new_button.style.boxShadow = "0px 5px 12px rgba(0,0,0,0.3)"
    new_button.style.width = "70px"
    new_button.style.border = "none"
}
const a = create_list(1)
const b = create_list(2)
const c = create_list(3)
const d = create_list(4)

// list.removeChild(list.children[2])

console.log(list.children.length)
// console.log(del_button.length)
// const no_name = list.children[1]
//     list.removeChild(no_name)


new_button.addEventListener("click",()=>{
    const no_name = list.children[2]
    list.removeChild()
})

const no_name = list.children[list.children.length-1]
new_button.addEventListener("click",()=>{
    list.removeChild(no_name)
})

