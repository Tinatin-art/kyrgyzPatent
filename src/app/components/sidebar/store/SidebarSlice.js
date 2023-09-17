import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import {
  instance
} from "../../../setup/http-api";

export const getCategories = createAsyncThunk(
  "getCategories",
  async () => {
    try {
      const response = await instance.get("api/categories");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  "getCategoryById",
  async (id) => {
    try {
      const response = await instance.get(`api/categories/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);


const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    category: [],
    categoryData: [],

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
    [getCategoryById.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.categoryData = action.payload.data
    },
  },
});

export default categorySlice.reducer;