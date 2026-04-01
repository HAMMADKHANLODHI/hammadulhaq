import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
    user:any | null;
    accessToken:string | null;
    isAuthenticated: boolean;
    loading:boolean
};

const initialState: AuthState={
    user:null,
    accessToken:null,
    isAuthenticated: false,
    loading:false,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action:PayloadAction<{user:any; token:string}>)=>{
            state.user = action.payload.user;
            state.accessToken = action.payload.token;
            state.isAuthenticated = true;
            if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token);
      }
        },
        logout:(state)=>{
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
        },
        // Add this hydration action
    hydrateAuth: (state) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          state.accessToken = token;
          state.isAuthenticated = true;
        }
      }
    }

    }
});
export const{setCredentials,logout,hydrateAuth}=authSlice.actions;
export default authSlice.reducer;