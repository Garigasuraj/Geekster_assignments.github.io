const button = document.getElementById("button")

button.addEventListener("click",()=>{
    const a = document.createElement("div")
    a.innerHTML = "Image Element Added"
    document.body.append(a)
    a.style.color = "green"
    a.style.textAlign = "center"
    a.style.paddingTop = "20px"
    a.style.fontFamily = "bold"
    a.style.fontSize = "25px"

    const b = document.createElement("img")
    b.src = "https://mybigplunge.com/wp-content/uploads/2021/12/Geekster_logo.jpg"
    document.body.append(b)
    b.style.width = "300px"
    b.style.marginTop = "10px"
    b.style.marginLeft = "600px"
})