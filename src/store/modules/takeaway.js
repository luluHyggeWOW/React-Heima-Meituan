import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodsList (state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex (state, action) {
      state.activeIndex = action.payload
    },
    addCart (state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    },
    changeCount (state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      console.log(222, item);
      if (action.payload.State === 'Plus') item.count++
      else {
        if (item.count === 1) {
          let index = state.cartList.indexOf(item)
          console.log(4444, index);
          state.cartList.splice(index, 1);
        }
        item.count--
      }
    },
    clearCart (state) {
      state.cartList = []
    }
  }
})
const { setFoodsList, changeActiveIndex, addCart, changeCount, clearCart } = foodsStore.actions
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}
export { fetchFoodsList, changeActiveIndex, addCart, changeCount, clearCart }
const reducer = foodsStore.reducer
export default reducer