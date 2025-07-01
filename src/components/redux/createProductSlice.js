import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  images: [],
  location: null,
};

const createProductSlice = createSlice({
  name: "createProduct",
  initialState,
  reducers: {
    setProductInfo: (state, action) => {
      state.info = action.payload;
    },
    setProductImages: (state, action) => {
      state.images = action.payload;
    },
    setProductLocation: (state, action) => {
      state.location = action.payload;
    },
    resetProductForm: () => initialState,
  },
});

export const {
  setProductInfo,
  setProductImages,
  setProductLocation,
  resetProductForm,
} = createProductSlice.actions;

export default createProductSlice.reducer;
