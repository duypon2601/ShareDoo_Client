// src/redux/features/productCreateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemName: '',
  category: '',
  description: '',
  imageUrls: [], // Đổi từ images thành imageUrls
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
    setImageUrls: (state, action) => {
      state.imageUrls = action.payload;
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
    // Thêm action setProductCreate để update nhiều field cùng lúc
    setProductCreate: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setItemName,
  setCategory,
  setDescription,
  setImageUrls,
  setRentalPrice,
  setDeposit,
  setLocation,
  setProductCreate,
} = productCreateSlice.actions;

export default productCreateSlice.reducer;
