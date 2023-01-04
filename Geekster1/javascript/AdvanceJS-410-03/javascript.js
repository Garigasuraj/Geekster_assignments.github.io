const text = document.getElementById("text")

init()
function init(){
    text.addEventListener("keyup",(event)=>{
        if(event.key === "Enter"){
            get_data()
        }
    })
}
async function get_data(){
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text.value}`)
    const response = await data.text()
    const response_string = JSON.parse(response)
    console.log(response_string)
    render_data(response_string.meals)
}

function render_data(api_data){
    let html = ''
    for(let i=0; i<api_data.length; i++){
        html += `<div style="margin-left: 20px; margin-top: 15px;"><img id="image" src="${api_data[i].strMealThumb}"></div>`
    }
    document.getElementById("result_div").innerHTML = html
}