import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pCharSelected: []
}

const priconneSlice = createSlice({
  name: 'priconne',
  initialState,
  reducers: {
    pSelect: (state, action) => {
      state.pCharSelected.push(action.payload);
    },
    pUnSelect: (state, action) => {
      state.pCharSelected.filter(user => user !== action.payload)
    }
  }
})

export const {pSelect, pUnselect} = priconneSlice.actions
export default priconneSlice.reducer;