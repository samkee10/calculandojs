function Calcular( ){ 
    let amount = document.querySelector("#cantidad")
    let  colors = document.querySelector("#color")
    let price = document.querySelector("precio") 
    let totally = document.querySelector("#total")
    let boxcolors = document.querySelector("#box-color")
    let totallyamount= document.querySelector("#cantidad-total")
    let amountusers = Number(amount.value)
    let multiplicacion = amountusers*400000
    totally.innerHTML = multiplicacion
    totallyamount.innerHTML= amountusers
    boxcolors.style.backgroundColor=colors.value
    }



