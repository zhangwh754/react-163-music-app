import { configureStore } from '@reduxjs/toolkit'

import { recommendReducer, loginReducer } from './features'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    login: loginReducer
  }
})

export default store
