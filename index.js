var Amount = document.getElementById("Amount")
var btn = document.getElementById("btnn")
var FromCurrency = document.getElementById("TOx") 
var ToCurrency = document.getElementById("from")
var open = document.getElementById("result")

var api_key = "https://api.exchangerate-api.com/v4/latest/USD"

var sectionONE = ToCurrency.options[ToCurrency.selectedIndex].value
var sectionTwo = FromCurrency.options[FromCurrency.selectedIndex].value



btn.addEventListener("click",()=>{
    displayResults()
    open.style.display = "block"
})
btn.addEventListener("dblclick",()=>{
    open.style.display = "none"
})