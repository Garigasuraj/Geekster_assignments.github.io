const amount = document.getElementById("bill_input")
const service =  document.getElementById("Service")
const people =  document.getElementById("people_input")
const cal_button = document.getElementById("button")

const result = document.getElementById("result_div")
const para = document.getElementById("result")

cal_button.addEventListener("click",()=>{
    const total = (amount.value*service.value)/people.value

    para.innerHTML = `$${Math.floor(total)}.00`
    para.appendChild(node)
    result.appendChild(para)
})