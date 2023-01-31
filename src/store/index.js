import { configureStore } from '@reduxjs/toolkit'

import { recommendReducer, loginReducer, songReducer } from './features'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    login: loginReducer,
    song: songReducer
  }
})

export default store
