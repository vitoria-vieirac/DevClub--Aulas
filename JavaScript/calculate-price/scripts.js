const shoppingCart = [2, 15, 45, 72, 210, 341, 90, 13]
let finalValue = 0

function discount( price, discount) {
    let result = (price * discount)/100
    return result

}



shoppingCart.forEach(value => {
   
    if(value > 30) {
        const discount = discount( value, 10)
        finalValue += (value - discount)

    } else {
        finalValue += value
    }

    
});