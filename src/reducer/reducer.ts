import { createAction, createReducer } from "@reduxjs/toolkit";
import { CurrencyCryptoArray } from "types";
export const setListOfAllCryptos = createAction<CurrencyCryptoArray>("LIST_OF_ALL_CRYPTOS_SET");

interface InitialStateType {
  listOfAllCryptos: null | CurrencyCryptoArray;
}
const initialState: InitialStateType = {
  listOfAllCryptos: null,
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(setListOfAllCryptos, (state, action) => {
      state.listOfAllCryptos = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
