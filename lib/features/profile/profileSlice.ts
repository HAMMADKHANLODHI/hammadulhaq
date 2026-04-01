import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Using your form structure as the interface
interface ProfileState {
  data: {
    Name: string;
    Email: string;
    Linkedin: string;
    Github: string;
    GoogleMap: string;
    Whatsapp: string;
    "Home-Summary": string;
    "About-Summary": string;
    Skills: { name: string; level: string }[];
    Education: { school: string; startDate: string; endDate: string; summary: string }[];
    Experience: { company: string; role: string; startDate: string; endDate: string; desc: string }[];
    Services: { icon: string; title: string; desc: string }[];
    Portfolio: { name: string; category: string; image: any; link: string }[];
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProfileState = {
  data: null,
  status: 'idle',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    updateProfileStart: (state) => {
      state.status = 'loading';
    },
    updateProfileSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
  },
});

export const { setProfileData, updateProfileStart, updateProfileSuccess } = profileSlice.actions;
export default profileSlice.reducer;