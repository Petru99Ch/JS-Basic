const renderProduct = function(){
    for(let i = 0; i< products.length; i++ ){
        catalogDiv.innerHTML +=`
            <div class="product">
                <h2>${products[i].name}</h2>
                <img src="${products[i].image}">
                <p>${products[i].price}</p>
                <button onclick="buy(${i})" ${products[i].available ? '':'disabled' }>Buy</button>
            </div>
        `
    }
}

const buy = function(index){
    cart.push(index)
    renderCart()

    
}

const renderCart = function(){

    //HW 2 : add total cost of all selected items
    let total = 0
    for(let i = 0; i< cart.length; i++){
        let selected_index = cart[i]
        total += products[selected_index].price
    }
    //HW 2 : add total cost of all selected items
    //Hw1 : add contidions so it renders empty if no product un the cart
    cartDiv.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        Items: ${cart.length == 0 ? "empty" :  cart.length} <br>
        <i class="fa-solid fa-dollar-sign"></i>
        Total: ${total== 0 ? "empty" :  total}
    `
}
        

