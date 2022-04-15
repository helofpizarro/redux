export function addToCartRequest(id){
   
    return {
        type: 'ADD_TO_CART_REQUEST', 
        product: id,
    }
}
export function addToCartSuccess(product){
   
    return {
        type: 'ADD_TO_CART_SUCCESS', 
        product: product,
    }
}

export function removeFromCart(id){
  
    return {
        type: 'REMOVE_FROM_CART', 
        id: id,
    }
}

export function updateAmount(id, amount){
   
    return {
        type: 'UPDATE_AMOUNT',
        id: id,
        amount: amount,
    }
}