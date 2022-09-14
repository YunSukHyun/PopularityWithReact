import { configureStore } from '@reduxjs/toolkit'
import priconneReducer from './components/character/priconneSlice'
import genshinReducer from './components/character/genshinSlice'
const store = configureStore({
  reducer: {
    priconne: priconneReducer,
    genshin: genshinReducer
  }
})

export default store;