/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Currencies, Providers } from '@/shared/types';

type filtersState = {
  provider: Providers;
  currency: Currencies;
};

const initialState: filtersState = {
  provider: '',
  currency: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setProviderFilter(state, action: PayloadAction<Providers>) {
      state.provider = action.payload;
    },
    setCurrencyFilter(state, action: PayloadAction<Currencies>) {
      state.currency = action.payload;
    },
  },
});

export const { setProviderFilter, setCurrencyFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
