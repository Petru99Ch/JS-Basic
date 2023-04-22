let menu = `
#######################
MENU
#######################
`
let deliveryAdres
let foodNames = ["Pizza", "Salad", "Soup"]
let foodPrices = [ 100.00, 75.00, 50.00]

for(let i = 0; i < foodNames.length; i++){
    menu += `${i+1} . ${foodNames[i]} \n`
}

menu += `choose`

let option = parseInt(prompt(menu))-1

let optionDescription = `
    You've chosen
    "${foodNames[option]}"
    1 portion - ${foodPrices[option]}
    how many do you want
`

let portions = parseInt(prompt(optionDescription))


//HW:
// add a confirm() that asks if the client wants delivery
// if the client denies then print a message tha he has to pick up
// if the client acceptsm then show delivery free if
// he ordered for more than 500, else show delivery + 50 

let delivery = confirm(" Do you want delivery? \n Delivery is free from 500")
let deliveryCost

if(delivery){
    if(cost >= 500) {
        deliveryAdres = prompt("Write the delivery address  \n Delivery cost = 0")
        deliveryCost = 0
       
    } else {
       
       deliveryAdres = prompt("Write the delivery address \n  Delivery cost = 50")
       deliveryCost = 50
    }
}

let cost = foodPrices[option] * portions + deliveryCost

let orderDescription = `
You order:
"${foodNames[option]}" : ${portions} x ${foodPrices[option]} + ${deliveryCost} = ${cost} \n
Delivery adress: ${deliveryAdres}
`

alert(orderDescription)