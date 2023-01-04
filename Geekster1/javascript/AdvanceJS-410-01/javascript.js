const text = document.getElementById("text")
const submit_button = document.getElementById("submit")
const result = document.getElementById("result_container")

init()
function init(){
    submit_button.addEventListener("click",getdata)
}

async function getdata(){
    const data = await fetch(`https://api.github.com/search/users?q=${text.value}&per_page=100`)
    const text_data = await data.text()
    const response_string = JSON.parse(text_data)
    render_data(response_string.items)
}
function render_data(user_data){
    // console.log("hello")
    let html =''
    for(let i=0; i<user_data.length; i++){
        const profile_picture = user_data[i].avatar_url
        const profile_url = user_data[i].html_url
        const user_name = user_data[i].login

        html += ` <div id="result_div">
        <span id="result_image"><img src=${profile_picture}></span>
        <div>
            <span id="result_info">${user_name}</span>
            <p class="mm">${profile_url}</p>
        </div>
    </div>`
    }
    result.innerHTML = html
}