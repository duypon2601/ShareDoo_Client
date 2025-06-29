import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer'; // Đảm bảo file tồn tại

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore ({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
