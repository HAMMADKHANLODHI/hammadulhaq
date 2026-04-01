import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './features/profile/profileSlice';
export const makePublicStore = () => configureStore({
  reducer: {
    profile: profileReducer
  },
});

export type PublicStore = ReturnType<typeof makePublicStore>;
export type PublicState = ReturnType<PublicStore['getState']>;
export type PublicDispatch = PublicStore['dispatch'];