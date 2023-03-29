const first_name =  document.getElementById("name_1")
const gender =  document.getElementById("name_2")
const submit_button =  document.getElementById("sub_button")

const error_div =  document.getElementById("error_info") 

const Male = document.getElementById("male") 
const Female = document.getElementById("female")

init()
function init(){
    render_data()
}
let html = "";
function render_data(){
    submit_button.addEventListener("click",()=>{
        if(!first_name.value && !gender.value ){
            error_div.style.visibility = "visible"
        }
        else{
            html += `<div id="result_div">
            Name:<div class="name">${first_name.value.toUpperCase()}</div>
            Gender:<div class="gender">${gender.value}</div>
            <button id="delete"><i class="fa-regular fa-trash-can"></i></button></div>`
            document.getElementById("output").innerHTML = html
            specific_data()
            delete_element()
        }
    })
}
// For filtering gender data
function specific_data(){
    const ele = document.querySelectorAll("#output #result_div")
    for(let i=0; i<ele.length; i++){
        Male.addEventListener('click',()=>{
            if(ele[i].style.display == "none"){
                ele[i].style.display = "flex"
            }
           else if(Female.value == ele[i].children[1].innerHTML){
            ele[i].style.display = "none"
           }
        })
        Female.addEventListener('click',()=>{
            console.log(ele)
            if(Male.value == ele[i].children[1].innerHTML){
                ele[i].style.display = "none"
            }
            else if(ele[i].style.display == "none"){
                ele[i].style.display = "flex"
            }
        })
    }
}
// for Deleting the parentnode
function delete_element(){
    const ele = document.querySelectorAll("#output #result_div")
    const del_button =  document.querySelectorAll("#delete")
    ele.forEach((elem,index)=>{
        del_button[index].addEventListener("click",()=>{
            ele[index].remove()
            // for making HTML empty string if all parent nodes deleted
            console.log(document.querySelectorAll("#output #result_div").length)
            if(document.querySelectorAll("#output #result_div").length === 0){
                html = ""
            }
        })
    })
}
