import fooodsReducer from './modules/takeaway'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer: {
    foods: fooodsReducer,
  }
})
export default store