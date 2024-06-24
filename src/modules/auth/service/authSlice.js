import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        auth: true,
        profile: "",
        darkMode: true,
    },
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setLogout: (state) => {
            state.token = "";
            state.auth = false;
            state.profile = "";
        },
        setAuthKey: (state, action) => {
            state.profile.AuthKey = action.payload
        },
        toggleDarkTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    },
})

export const { setAuth, setProfile, setToken, setLogout, setAuthKey, setmode, toggleDarkTheme } =
    authSlice.actions;

export default authSlice.reducer;