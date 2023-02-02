import { configureStore } from '@reduxjs/toolkit'

import { recommendReducer, accountReducer, songReducer } from './features'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    account: accountReducer,
    song: songReducer
  }
})

export default store
