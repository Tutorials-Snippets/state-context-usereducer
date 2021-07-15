export const DEDUCT_INVENTORY = 'DEDUCT-INVENTORY'

export var initialState = {
    inventory: 5
}

// export const deductInventory = () => ({
//     type: DEDUCT_INVENTORY,
// })

export const deductInventory = {
    type: DEDUCT_INVENTORY
}

export const inventoryReducer = (state = initialState, action) => {
    if (action === DEDUCT_INVENTORY) {
       initialState.inventory -=1;
       
    }
}





// console.log("Previous ",  initialState)
// inventoryReducer(initialState, deductInventory)
// console.log("After ", initialState) 
// inventoryReducer(initialState, deductInventory)
// console.log("After that ", initialState) 
// inventoryReducer(initialState, deductInventory)
// console.log("After that ", initialState) 

