// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;

      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchDataFilter: (state, action) => {
      state.data = action.payload
    
    },
    fetchDataSort:(state,action)=>{
 state.data = action.payload

    }
  },
});

export const fetchUserData = (initialPage) => {
  console.log(initialPage)
  return async (dispatch) => {
    dispatch(fetchDataStart());

    try {
      const response = await fetch(`http://localhost:8080/products?page=${initialPage.page}&limit=${initialPage.limit}`);
      
      const data = await response.json();
  console.log(data)
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
export const filterData = (data) => {
  return async (dispatch) => {
    console.log(data.category, data.option);

    try {
      const d = await fetch(`http://localhost:8080/products?${data.category}=${data.option}`
);
      const res = await d.json();
      console.log(res)
      dispatch(fetchDataFilter(res));
    } catch (error) {
      console.log("something went wrong");
    }
  };
};
export const sortData = (data) => {
  return async (dispatch) => {
    console.log(data);

    try {
      const d = await fetch(`http://localhost:8080/products?_sort=${data.sort}&_order=${data.order}`);
      const res = await d.json();
      console.log(res)
   dispatch(fetchDataSort(res))
    } catch (error) {
      console.log("something went wrong");
    }
  };
};

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataFilter,
  fetchDataSort
} = productSlice.actions;
export default productSlice.reducer;
