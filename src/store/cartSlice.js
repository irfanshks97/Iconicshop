import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(cart);
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity, price } = action.payload;
            const existingItemIndex = state.carts.findIndex(item => item.id === id);
        
            if (existingItemIndex !== -1) {
                const updatedCarts = [...state.carts];
                const existingItem = updatedCarts[existingItemIndex];
                updatedCarts[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + quantity,
                    totalPrice: (existingItem.quantity + quantity) * price
                };
                state.carts = updatedCarts;
            } else {
                state.carts.push(action.payload);
            }
            storeInLocalStorage(state.carts);
        },

        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            storeInLocalStorage(state.carts);
        },

        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },

        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.totalPrice
            }, 0);

            state.itemsCount = state.carts.length;
        },

        toggleCartQty: (state, action) => {
            state.carts = state.carts.map(item => {
                if(item.id === action.payload.id){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;

                    if(action.payload.type === "INC"){
                        tempQty++;
                        if(tempQty === item.stock) tempQty = item.stock;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    if(action.payload.type === "DEC"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
                } else {
                    return item;
                }
            });
            storeInLocalStorage(state.carts);
        },

        setCartMessageOn: (state) => {
            state.isCartMessageOn = true;
        },

        setCartMessageOff: (state) => {
            state.isCartMessageOn = false;
        }
    }
});

export const { addToCart, setCartMessageOff, setCartMessageOn, getCartTotal, toggleCartQty, clearCart, removeFromCart } = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;

export default cartSlice.reducer;
