/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type filtersState = {
  provider: string;
  currency: string;
};

const initialState: filtersState = {
  provider: '',
  currency: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setProviderFilter(state, action: PayloadAction<string>) {
      state.provider = action.payload;
    },
    setCurrencyFilter(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { setProviderFilter, setCurrencyFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
