function addToCart(groceryItem, price) {
  var itemAdd = document.getElementsByClassName("btn-success");
  var groceryList = document.getElementById("grocerybox");
  groceryList.innerHTML += groceryItem + " $" + price + "<br>"
}

var groceryArr = [];
var priceArr = [];
function addToArray(groceryItem, price) {
groceryArr.push(groceryItem);
priceArr.push(price);
console.log(groceryArr);
console.log(priceArr);
}
console.log(priceArr);

function sumArray2(priceArr){
    var groceryList = document.getElementById("groceryboxtotal");
var sum = priceArr.reduce(function(a,b){
  return a+b;})
console.log(sum);
groceryList.innerHTML = "Total = $" + sum.toFixed(2)
}
