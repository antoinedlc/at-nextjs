import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  characters: []
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, character) => {
      let cartItemFind = _.findKey(state.characters, ['id', character.payload.id])
      if (!cartItemFind) {
        state.characters.push({
          ...character.payload,
          quantity: 1
        })
      } else {
        state.characters[cartItemFind].quantity++
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cart.actions

export default cart.reducer