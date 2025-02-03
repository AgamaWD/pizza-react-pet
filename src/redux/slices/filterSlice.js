import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryId: 0,
  pageCount: 1,
  sortType: 'rating'
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFilterParams(state, action) {
  
      state.categoryId = Number(action.payload.category)
      state.pageCount = Number(action.payload.page)
      state.sortType = action.payload.sort
    }
  }
})

export const { setCategoryId, setSortType, setPageCount, setFilterParams } = filterSlice.actions;
export default filterSlice.reducer