// import{planet_outer_div,result_outer_div,result_inner_div} from "./delete.js"
let inner_div
let outer_div
let planet
let planet_outer_div
let result_outer_div
let result_inner_div
let gravity
let res

const text_value = document.getElementById("input_value")
const planet_option = document.getElementById("planet_opt")
const button_press = document.getElementById("cal_but")

button_press.addEventListener("click",()=>{
    if(text_value.value == "" && planet_option.value == "invalid"){
        if(planet == null){
        outer_div = document.createElement("div")
        outer_div.textContent = ""
        document.body.append(outer_div)
        outer_div.style.backgroundColor = "rgba(155, 153, 153,0.5)"
        outer_div.style.height = "90px"
        outer_div.style.width = "80%"
        outer_div.style.margin = "40px auto"
        outer_div.style.position = "relative"
    
        // For inner div
        inner_div = document.createElement("div")
        inner_div.textContent = "Mass is requried."
        document.body.append(inner_div)
        inner_div.style.color ="white"
        inner_div.style.textAlign= 'center'
        inner_div.style.backgroundColor = 'rgba(211, 211, 211,0.4)'
        inner_div.style.padding = "10px 100px"
        inner_div.style.margin = "0px auto"
        inner_div.style.position = "absolute"
        inner_div.style.top = "215px"
        inner_div.style.left = "38%"
        }
        else{
            planet.remove()
            planet_outer_div.remove()
            result_inner_div.remove()
            result_outer_div.remove()
            outer_div = document.createElement("div")
            outer_div.textContent = ""
            document.body.append(outer_div)
            outer_div.style.backgroundColor = "rgba(155, 153, 153,0.5)"
            outer_div.style.height = "90px"
            outer_div.style.width = "80%"
            outer_div.style.margin = "40px auto"
            outer_div.style.position = "relative"
        
            // For inner div
            inner_div = document.createElement("div")
            inner_div.textContent = "Mass is requried."
            document.body.append(inner_div)
            inner_div.style.color ="white"
            inner_div.style.textAlign= 'center'
            inner_div.style.backgroundColor = 'rgba(211, 211, 211,0.4)'
            inner_div.style.padding = "10px 100px"
            inner_div.style.margin = "0px auto"
            inner_div.style.position = "absolute"
            inner_div.style.top = "215px"
            inner_div.style.left = "38%"
        }
    }
    else if(planet_option.value == "Mercury"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on MERCURY`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 3.7
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/mercury.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on`
            document.body.append(result_outer_div)
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "white"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 3.7
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/mercury.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Venus"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on VENUS`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 8.87
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/venus.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on VENUS`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 8.87
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/venus.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Earth"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on EARTH`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 9.81
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/Earth_photo.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on EARTH`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 9.81
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/Earth_photo.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Mars"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on MARS`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 3.71
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/mars.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on MARS`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 3.71
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/mars.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Jupiter"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on JUPITER`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 24.92
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/223952.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on JUPITER`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 24.92
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/223952.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Saturn"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on SATURN`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 10.44
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/580b585b2edbce24c47b270d.png"
            document.body.append(planet)
            planet.style.margin = "0px 15%"
            planet.style.width = "480px"
            planet.style.position = "absolute"
            planet.style.top = "280px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on SATURN`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 10.44
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/580b585b2edbce24c47b270d.png"
            document.body.append(planet)
            planet.style.margin = "0px 15%"
            planet.style.width = "480px"
            planet.style.position = "absolute"
            planet.style.top = "280px"
        }
    }
    else if(planet_option.value == "Uranus"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on URANUS`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 8.87
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/uranus.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on URANUS`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 8.87
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/uranus.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Neptune"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on NEPTUNE`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 11.15
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/neptune.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on NEPTUNE`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 11.5
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/neptune.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
    else if(planet_option.value == "Pluto"){
        if(planet == null && inner_div == null && outer_div == null){
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on PLUTO`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 0.58
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/pluto.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
        else{
            inner_div.remove()
            outer_div.remove()
            // creating outer div for planet
            planet_outer_div = document.createElement("div")
            planet_outer_div.textContent = ""
            document.body.append(planet_outer_div)
            planet_outer_div.style.backgroundColor ="rgba(171,171,171,0.15)"
            planet_outer_div.style.height = "450px"
            planet_outer_div.style.margin = "20px 15%"
            planet_outer_div.style.position = "relative"

            // creating mass result div
            result_outer_div = document.createElement("div")
            result_outer_div.textContent = `The weight of the object on PLUTO`
            document.body.append(result_outer_div)
            result_outer_div.style.fontWeight = "bold"
            result_outer_div.style.textAlign = "center"
            result_outer_div.style.font = "20px Roboto"
            result_outer_div.style.color = "rgb(245, 245, 245)"
            result_outer_div.style.paddingTop = "10px"
            result_outer_div.style.backgroundColor ="rgba(171,171,171,0.4)"
            result_outer_div.style.height = "175px"
            result_outer_div.style.width = "500px"
            result_outer_div.style.margin = "0px 40%"
            result_outer_div.style.position = "absolute"
            result_outer_div.style.top = "300px"
            result_outer_div.style.left = "140px"

            // creating inside result circular div
            result_inner_div = document.createElement("div")
            gravity = 0.58
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
            document.body.append(result_inner_div)
            result_inner_div.style.textAlign = "center"
            result_inner_div.style.display = "flex"
            result_inner_div.style.justifyContent = "center"
            result_inner_div.style.alignItems = "center"
            result_inner_div.style.font = "20px Arial"
            result_inner_div.style.color = "white"
            result_inner_div.style.fontWeight = "bold"
            result_inner_div.style.backgroundColor ="rgba(189,189,189,0.6)"
            result_inner_div.style.position = "absolute"
            result_inner_div.style.top = "350px"
            result_inner_div.style.left = "950px"
            result_inner_div.style.borderRadius = "50%"
            result_inner_div.style.height = "100px"
            result_inner_div.style.width = "100px"

            planet = document.createElement("img")
            planet.src = "images/pluto.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
        }
    }
})
// For removing previous div
button_press.addEventListener("click",()=>{
    if(planet_option.value == "Mercury"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/mercury.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on MERCURY`
            gravity = 3.7
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Venus"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/venus.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on VENUS`
            gravity = 8.87
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Earth"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/Earth_photo.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on EARTH`
            gravity = 9.81
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Mars"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/mars.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on MARS`
            gravity = 3.71
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Jupiter"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/223952.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on JUPITER`
            gravity = 24.92
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Saturn"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/580b585b2edbce24c47b270d.png"
            document.body.append(planet)
            planet.style.margin = "0px 15%"
            planet.style.width = "480px"
            planet.style.position = "absolute"
            planet.style.top = "280px"
            result_outer_div.textContent = `The weight of the object on SATURN`
            gravity = 10.44
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Uranus"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/uranus.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on URANUS`
            gravity = 8.87
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Neptune"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/neptune.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on NEPTUNE`
            gravity = 11.15
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
    else if(planet_option.value == "Pluto"){
        if(planet!==null){
            planet.remove()
            planet = document.createElement("img")
            planet.src = "images/pluto.png"
            document.body.append(planet)
            planet.style.margin = "0px 18%"
            planet.style.width = "370px"
            planet.style.position = "absolute"
            planet.style.top = "220px"
            result_outer_div.textContent = `The weight of the object on PLUTO`
            gravity = 0.58
            result_inner_div.textContent = `${Math.floor(text_value.value*gravity)}.00 N`
        }
    }
})
