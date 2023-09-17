import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../../setup/http-api";

export const getCategories = createAsyncThunk(
    "getCategories",
    async () => {
      try {
        const response = await instance.get("api/categories");
    

        console.log(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        category: []
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.status = "loading";
        },
        [getCategories.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.category = action.payload.data
        },
        [getCategories.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
  });
  
  export default categorySlice.reducer;
  