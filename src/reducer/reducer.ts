/**
 *
 */
import { createAction, createReducer } from '@reduxjs/toolkit';
import { optionsArrayType } from '../types';
export const setListOfAllCryptos = createAction<optionsArrayType>('LIST_OF_ALL_CRYPTOS_SET');

interface InitialStateType {
    listOfAllCryptos: null | optionsArrayType;
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
