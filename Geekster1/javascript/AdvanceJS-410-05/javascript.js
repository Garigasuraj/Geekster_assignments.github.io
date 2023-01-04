const button = document.getElementById("sub_button")
const quote =  document.getElementById("quote")
const author = document.getElementById("author")

init()
function init(){
    button.addEventListener("click",get_data)
}
async function get_data(){
    const data = await fetch(`https://api.quotable.io/random`)
    const stream_data = await data.text()
    const text_convert = JSON.parse(stream_data)
    quote.innerHTML = ` <i id="c_1" class="fa-solid fa-quote-left"></i>${text_convert.content}<i id="c_2" class="fa-solid fa-quote-right"></i>`
    author.innerHTML = `~${text_convert.author}`
}