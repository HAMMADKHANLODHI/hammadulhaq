import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import profileReducer from './features/profile/profileSlice';

export const makeAdminStore = () =>{
  
  return configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths if you absolutely must store file objects temporarily
        ignoredActions: ['profile/updateProfileSuccess'],
        ignoredPaths: ['profile.data.Portfolio'],
      },
    }),
});
};

export type AdminStore = ReturnType<typeof makeAdminStore>;
export type AdminState = ReturnType<AdminStore['getState']>;
export type AdminDispatch = AdminStore['dispatch'];