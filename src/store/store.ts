import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { menuReducer } from './menu/menu.reducer';
import { themeReducer } from './theme/theme.reducer';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

const rootReducer = combineReducers({
    menu: menuReducer,
    theme: themeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersitConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersitConfig = {
    key: 'theme',
    storage,
    whitelist: [
        'theme'
    ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: false
        });

        return middlewares;
    },
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
