var Amount = document.getElementById("Amount")
var btn = document.getElementById("btnn")
var FromCurrency = document.getElementById("TOx") 
var ToCurrency = document.getElementById("from")
var open = document.getElementById("result")

var api_key = "https://api.exchangerate-api.com/v4/latest/USD"

var sectionONE = ToCurrency.options[ToCurrency.selectedIndex].value
var sectionTwo = FromCurrency.options[FromCurrency.selectedIndex].value

function Results() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
function displayResults(currency) {
    let fromRate = currency.rates[sectionONE];
    let toRate = currency.rates[sectionTwo];
    btn.addEventListener("click",()=>{
        finalValue.innerHTML = 
        ((toRate / fromRate) * searchValue).toFixed(2);
        open.style.display = "block"
    })
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
btn.addEventListener("click",()=>{
    open.style.display = "block"
})
btn.addEventListener("dblclick",()=>{
    open.style.display = "none"
})