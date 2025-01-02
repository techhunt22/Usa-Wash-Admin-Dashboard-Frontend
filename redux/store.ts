import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import jobTableReducer from './features/jobTableSlice';
import customerReducer from './features/customerTableSlice';
import vendorReducer from './features/vendorTableSlice';
import analyticsReducer from './features/analyticsSlice';
import jobDetailsReducer from './features/jobDetailsSlice'
import userDetailsReducer from './features/userDetailSlice'
import vendorDetailsReducer from './features/vendorDetailsSlice'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'] 
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedAnalyticsReducer=persistReducer(persistConfig,analyticsReducer)


export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        jobTable:jobTableReducer,
        customer: customerReducer,
        vendor:vendorReducer,
        analytics:persistedAnalyticsReducer,
        jobDetails:jobDetailsReducer,
        userDetails:userDetailsReducer,
        vendorDetails:vendorDetailsReducer
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