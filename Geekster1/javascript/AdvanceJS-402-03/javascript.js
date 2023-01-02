const text_input =  document.getElementById("input")
const button = document.getElementById("button")
const list =  document.getElementById("shopping_list")

button.addEventListener("click",()=>{
    const new_list = document.createElement("li")
    const text_node = document.createTextNode(text_input.value)
    new_list.append(text_node)
    list.append(new_list)
    new_list.style.marginTop = "10px"

    const new_button = document.createElement("button")
    new_button.setAttribute("id","M_M")
    new_button.textContent = "delete"
    document.body.append(new_button)
    new_list.append(new_button)
    new_button.style.cursor = "pointer"
    new_button.style.marginLeft = "20px"
    new_button.style.boxShadow = "0px 5px 12px rgba(0,0,0,0.3)"
    new_button.style.width = "70px"
    new_button.style.border = "none"

    new_button.addEventListener("click",()=>{
        new_button.remove()
        new_list.style.display = "none"
    })
})



