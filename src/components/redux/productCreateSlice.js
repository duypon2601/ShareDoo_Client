// src/redux/features/productCreateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemName: '',
  category: '',
  description: '',
  images: [],
  rentalPrice: '',
  deposit: '',
  location: {
    lat: null,
    lng: null,
    address: '',
  },
};

const productCreateSlice = createSlice({
  name: 'productCreate',
  initialState,
  reducers: {
    setItemName: (state, action) => {
      state.itemName = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setDeposit: (state, action) => {
      state.deposit = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  setItemName,
  setCategory,
  setDescription,
  setImages,
  setRentalPrice,
  setDeposit,
  setLocation,
} = productCreateSlice.actions;

export default productCreateSlice.reducer;
