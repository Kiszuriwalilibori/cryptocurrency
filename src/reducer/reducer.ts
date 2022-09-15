/**
 * reducer
 */
import { createAction, createReducer } from "@reduxjs/toolkit";
import { currencyCryptoArrayType } from "types/types";
export const setListOfAllCryptos = createAction<currencyCryptoArrayType>("LIST_OF_ALL_CRYPTOS_SET");

interface InitialStateType {
  listOfAllCryptos: null | currencyCryptoArrayType;
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
