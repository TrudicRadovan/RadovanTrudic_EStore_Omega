/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface FavoritesState {
  value: Array<number>;
}

const initialState: FavoritesState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    deleteFromFavorites: (state, action: PayloadAction<number>) => {
      state.value = state.value?.filter(value => value != action.payload);
      console.log(state.value);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.value;

export default favoritesSlice.reducer;
