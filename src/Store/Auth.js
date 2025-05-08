import { createSlice } from "@reduxjs/toolkit";

// Define the Auth slice
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        role: "user",
    },
    reducers: {
        // Action to log in
        Login(state) {
            state.isLoggedIn = true;
        },
        // Action to log out
        Logout(state) {
            state.isLoggedIn = false;
        },
        // Action to change the role
        ChangeRole(state, action) {
            const role = action.payload || "user"; 
            state.role = role;
        },
    },
});

// Export actions
export const AuthActions = AuthSlice.actions;

// Export reducer
export default AuthSlice.reducer;
