let inputs = document.querySelectorAll("input")
let calculate = document.querySelector("#calculate")
let tipA = document.getElementById("tipA")
let total = document.getElementById("total")
tipA.disabled = true;
total.disabled = true;

let titel = ["Bill Amount","Tip Percentage","Tip Amount","Total Bill"]

for (let index = 0; index < inputs.length; index++) {
    inputs[index].outerHTML = '<p>'+titel[index]+'</p>'+ inputs[index].outerHTML;
}

let procent = 0;
calculate.addEventListener("click",function(){
    let bill = document.getElementById("bill")
    let tipP = document.getElementById("tipP")
    tipA = document.getElementById("tipA")
    total = document.getElementById("total")
    procent = tipP.value/100
    tipA.value = parseFloat(bill.value)*parseFloat(procent).toFixed(2);
    total.value = parseInt(bill.value)+parseInt(tipA.value)
})