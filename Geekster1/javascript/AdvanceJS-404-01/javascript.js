const error_message = document.getElementById("error_message_outer")
const error_msg_planet = document.getElementById("error_msg_for_outer_planet")

const text_value = document.getElementById("input_value")
const planet_option = document.getElementById("planet_opt")
const button_press = document.getElementById("cal_but")

const planet_image = document.getElementById("image")
const outer_div = document.getElementById("outer_container")
const inner_div = document.getElementById("inner_container")

function init(){
    document.getElementById("error_message_inner").textContent = "Enter the mass kg/m3"
    document.getElementById("error_msg_inner_planet").textContent = "Please! select the planet"
    planet_option.addEventListener("change",change_planet)
    button_press.addEventListener("click",mass_cal)
}
// calling the function
init()

function change_planet(){
    const select_opt = planet_option.value
    const value_opt = text_value.value
    if(!select_opt  && !value_opt){
        error_message.style.display = "flex"
        outer_div.style.visibility = "hidden"
        inner_div.style.visibility = "hidden"
    }
    else if(!value_opt){
        // add select mass div
        error_message.style.display = "none"
        outer_div.style.visibility = "visible"
        planet_image.setAttribute("src",`https://raw.githubusercontent.com/Garigasuraj/Geekster_assignments.github.io/master/Geekster1/javascript/AdvanceJS-404-01/images/${select_opt}.png`)
    }
}
let planet_gravity = new Map([
    // using map can access with key and the values
    ["moon" ,1.625],
    ["mercury", 3.7],
    ["venus", 8.87],
    ["Earth_photo", 9.81],
    ["mars", 3.71],
    ["223952", 24.92],
    ["580b585b2edbce24c47b270d", 10.44],
    ["uranus", 8.87],
    ["neptune", 11.15],
    ["pluto", 0.58],
])
function mass_cal(){
    const mass_value = text_value.value
    const select_opt = planet_option.value
    if(!mass_value){
        error_message.style.display = "flex"
        error_msg_planet.style.display = "none"
        outer_div.style.visibility = "hidden"
        inner_div.style.visibility = "hidden"
        document.getElementById("result").style.visibility = "hidden"
    }
    else if(!select_opt){
        error_msg_planet.style.display = "flex"
        error_message.style.display = "none"
        outer_div.style.visibility = "hidden"
        inner_div.style.visibility = "hidden"
        document.getElementById("result").style.visibility = "hidden"
    }
    else{
        const select_opt = planet_option.value
        const gravity = planet_gravity.get(planet_option.value)
        error_message.style.display = "none"
        error_msg_planet.style.display = "none"
        planet_image.setAttribute("src",`https://raw.githubusercontent.com/Garigasuraj/Geekster_assignments.github.io/master/Geekster1/javascript/AdvanceJS-404-01/images/${select_opt}.png`)

        outer_div.style.visibility = "visible"
        inner_div.style.visibility = "visible"

        planet_image.style.position = "absolute"
        planet_image.style.left = "40px"

        document.getElementById("result").style.visibility = "visible"

        inner_div.textContent = `The weight of the object on ${planet_option.value.toUpperCase()}`
        document.getElementById("result").innerHTML = `${Math.floor(mass_value*gravity)}.00 N`

        // moon, jupiter , earth, saturn
    }
}