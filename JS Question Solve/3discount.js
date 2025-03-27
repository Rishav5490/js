const MIN_PURCHASE_AMOUNT = 500 
function discount(ispeople, purchaseAmount){
if(ispeople &&  purchaseAmount >  MIN_PURCHASE_AMOUNT ) return true
else return false
}
console.log(discount(true, 1000));


const sales =1000
function discount1(member, sale){
if (member==true && sale > sales )
    return "Eligible for free shipping Around  $75."
else (member==false && sale < sales)
return"Not eligible for free shipping"
}
console.log( discount1( false, 5000));

