import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gCharSelected: []
}

const genshinSlice = createSlice({
  name: 'genshin',
  initialState,
  reducers: {
    gSelect: (state, action) => {
      state.gCharSelected.push(action.payload);
    },
    gUnselect: (state, action) => {
      state.gCharSelected.filter(user => user !== action.payload)
    }
  }
})

export const {gSelect, gUnselect} = genshinSlice.actions
export default genshinSlice.reducer;