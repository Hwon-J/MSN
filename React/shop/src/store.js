// store.js

import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice : useState와 비슷한 기능 { name : 'state이름', initialState : 'state값' }
let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
            state.name = 'park'
        },
        increase(state){
        state.age += 1
        }
    }
}) 

export let { changeName, increase } = user.actions 

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        addCount(state, action){
          let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
          state[번호].count++
        },
        addItem(state, action){
          state.push(action.payload)
          console.log(action.payload)
        }
    }  
  })

export let { addCount, addItem } = cart.actions 

// configureStore : state 등록 { 작명 : createSlice만든거.reducer }
export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 

