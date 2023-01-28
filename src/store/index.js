import { configureStore } from '@reduxjs/toolkit'

import { recommendReducer } from './features'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

export default store
