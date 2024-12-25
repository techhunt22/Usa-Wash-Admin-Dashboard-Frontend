import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import jobTableReducer from './features/jobTableSlice';
import customerReducer from './features/customerTableSlice';
import vendorReducer from './features/vendorTableSlice';


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'] 
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        jobTable:jobTableReducer,
        customer: customerReducer,
        vendor:vendorReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;