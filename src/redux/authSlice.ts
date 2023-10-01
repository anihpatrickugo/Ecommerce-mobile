import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// export interface UserType {
//   email: string,
//   username: string
// }


export interface AuthType {
  token: string | null,
}

const initialState: AuthType = {
  token: null,
 
}

export const authSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    seAuthInfo: (state, action) => {
          state.token = action.payload
    },
    removeAuthInfo: (state) => {
      state.token = null
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state. += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { seAuthInfo, removeAuthInfo} = authSlice.actions

export default authSlice.reducer