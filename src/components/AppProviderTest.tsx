// import React from 'react';
// import { SnackbarProvider } from 'notistack';
// import { SelectedCurrenciesContextProvider } from '../context/currenciesContext';
// import { BrowserRouter as Router } from 'react-router-dom';
// import '../styles/styles.css';
// import { createStore } from 'redux';
// import reducer from '../reducer/reducer';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';
// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });
// let persistor = persistStore(store);

// /**
//  * creates provider of redux store, router, snackbar, and selectedcurrenciescontext
//  * @param param0 anything renders within this provider
//  * @returns provider
//  */

// const AppProvider: React.FC = ({ children }) => {
//     return (
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <Router basename={process.env.PUBLIC_URL}>
//                     <SelectedCurrenciesContextProvider>
//                         <SnackbarProvider
//                             maxSnack={3}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                         >
//                             {children}
//                         </SnackbarProvider>
//                     </SelectedCurrenciesContextProvider>
//                 </Router>
//             </PersistGate>
//         </Provider>
//     );
// };

// export type RootStateType = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default AppProvider;
