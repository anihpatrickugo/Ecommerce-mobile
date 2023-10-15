import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import * as SecureStore from 'expo-secure-store';



// Define a type for the slice state
export interface AuthType {
    token: string|null,
    
}


// Define the initial state using that type
const initialState: AuthType = {
  token: null
}



export const authSlice = createSlice({
  name: 'authToken',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    addAuthToken: (state, action: PayloadAction<string>) => {
        return {token: action.payload}
    },

    removeAuthToken: (state)=>{
        return {token: null}
    },

  }
})

export const { addAuthToken, removeAuthToken} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuthToken = (state: RootState) => state

export default authSlice.reducer