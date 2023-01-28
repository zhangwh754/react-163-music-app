import { createSlice } from '@reduxjs/toolkit'

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banner: [1, 2, 3, 4, 5]
  },
  reducers: {}
})

// const {} = recommendSlice.actions

export default recommendSlice.reducer
