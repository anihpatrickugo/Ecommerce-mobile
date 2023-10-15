import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import ProductProps from 'types/products'


// Define a type for the slice state
export interface CartItemProps {
    id: number,
    url: string,
    image: string,
    name: string,
    price: number,
    quantity: number
}


// Define the initial state using that type
const initialState: CartItemProps[] = [

]



export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    // this add a particular item to the cart
    addToCart: (state, action: PayloadAction<ProductProps>) => {

        const newItem = {
            id: action.payload.id,
            url: action.payload.url,
            image: action.payload.image,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
          };

        return [newItem,  ...state]
    },

    // this remove a particular item from cart
    removeFromCart: (state, action: PayloadAction<ProductProps>)=>{
        return state.filter((product) => product.id !== action.payload.id);
    },


    // this increases the quantity of any particular item in cart by 1
    addQuantity: (state, action: PayloadAction<CartItemProps>)=>{
        return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: product.quantity+1 }
          : product
      );
    },


    // this decreases the quantity of any particular item in cart by 1
    removeQuantity: (state, action: PayloadAction<CartItemProps>)=>{
        return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: Math.max(1, product.quantity-1) }
          : product
      );
    },


    // editQuantity: (state, action: PayloadAction<CartItemProps>)=>{
    //     return state.map((product) =>
    //     product.id == action.payload.id
    //       ? { ...product, quantity: action.payload }
    //       : product
    //   );
    // }

    // this empties the whole cart
    emptyCart: (state)=>[]

    



     

  }
})

export const { addToCart, removeFromCart, addQuantity, removeQuantity, emptyCart} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state

export default cartSlice.reducer