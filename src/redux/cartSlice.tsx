import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import ProductProps from 'types/products'

// Define a type for the slice state
export interface CartItemState {
    id: number,
    url: string,
    image: string,
    name: string,
    price: number,
    quantity: number
}


// Define the initial state using that type
const initialState: CartItemState[] = [

]



export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
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

    removeFromCart: (state, action: PayloadAction<ProductProps>)=>{
        return state.filter((product) => product.id !== action.payload.id);
    },

    addQuantity: (state, action: PayloadAction<ProductProps>)=>{
        return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: product.quantity++ }
          : product
      );
    },

    removeQuantity: (state, action: PayloadAction<ProductProps>)=>{
        return state.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: Math.max(1, product.quantity--) }
          : product
      );
    },

    // editQuantity: (state, action: PayloadAction<CartItemState>)=>{
    //     return state.map((product) =>
    //     product.id == action.payload.id
    //       ? { ...product, quantity: action.value }
    //       : product
    //   );
    // }



     

  }
})

export const { addToCart, removeFromCart, addQuantity, removeQuantity} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state

export default cartSlice.reducer