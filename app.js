function productUpdate(product, price, isInc) {
    const productNumber = document.getElementById(product + '-number');
    let productNumberInt = parseInt(productNumber.value);
    if (isInc) {
        productNumber.value = productNumberInt + 1;
    } else if (productNumber.value > 0) {
        productNumber.value = productNumberInt - 1;
    }
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber.value * price;
    calculateTotal();
}
function calculateTotal(){
    const phonePrice=document.getElementById('phone-total').innerText;
    const casePrice=document.getElementById('case-total').innerText;
    const subTotal=parseFloat(phonePrice)+parseFloat(casePrice);
    const tax=subTotal*0.1;
    const total=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax').innerText=tax;
    document.getElementById('total').innerText=total;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    productUpdate('phone', 1219, true);


});
document.getElementById('phone-minus').addEventListener('click', function () {
    productUpdate('phone', 1219, false);

});
document.getElementById('case-plus').addEventListener('click', function () {
    productUpdate('case', 59, true);


});
document.getElementById('case-minus').addEventListener('click', function () {
    productUpdate('case', 59, false);

});