const priceOfIceCream = 15
const paymentRecieved = prompt("Please Pay 15$")

if (paymentRecieved >= priceOfIceCream) {
    print("Thanks! Enjoy the Ice Cream!")
    if (paymentRecieved % priceOfIceCream != 0){
    print("Your change is " + (paymentRecieved - priceOfIceCream));
}
} else {
    print("Not enough cash!")
}

