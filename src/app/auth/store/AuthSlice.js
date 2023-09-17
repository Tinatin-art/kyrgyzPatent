import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
    instance
} from "../../setup/http-api";


export const signIn = createAsyncThunk(
    "auth/signIn",
    async (userData) => {
        try {
            const response = await instance.post("api/auth/sign-in", userData);

            if (response?.status === 200) {
                Cookies.set("accessToken", response.data.token);
                Cookies.set("role", response.data.role);
            }
            console.log(response)
            return response;
        } catch (error) {
            console.log("error from slice: ", error);
        }
    }
);


export const signUp = createAsyncThunk(
    "auth/signUp",
    async ({ datas, navigate }) => {
      try {
        const response = await instance.post("api/auth/sign-up", datas);
  
        if (response.status === 200) {
            Cookies.set("accessToken", response.data.token);
            Cookies.set("role", response.data.role);
            navigate(`/patent`);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  



const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: "",
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: {
        [signIn.pending]: (state, action) => {
            state.status = "loading";
        },
        [signIn.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.user = action.payload
        },
        [signIn.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [signUp.pending]: (state, action) => {
            state.status = "loading";
        },
        [signUp.fulfilled]: (state, action) => {
          state.status = "succeeded";
          state.user = action.payload
        },
        [signUp.rejected]: (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        },
    },
});

export default authSlice.reducer;