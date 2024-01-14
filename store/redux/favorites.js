import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      // Remove one item from the ids array
      // Find the action.payload id and it's index of it in ids array, remove it
      state.ids.splice(state.ids.indexOf(action.payload.id, 1));
    }
  }
});
//Exporting the actions for dispatching through out app, in this case (MealDetailScreen.js)
export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;

export default favoriteSlice.reducer;
