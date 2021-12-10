import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services';
import { todoAPI } from '../services';
import userReducer from './reducers/UserSlice';


const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [todoAPI.reducerPath]: todoAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware, todoAPI.middleware),
 
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']