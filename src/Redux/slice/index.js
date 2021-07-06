import { createSlice } from '@reduxjs/toolkit'

const initialState = { category: 'All' }

const slice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    initialStateCategory: () => initialState,
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
})

export const { initialStateCategory, setCategory } = slice.actions

export default slice.reducer
