import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
      { id: 1, productName: 'Abstract 3D', stock: 32, price: 45.99, totalSales: 50, image: "https://picsum.photos/200", info: 'Some text info about Product 1' },
      { id: 2, productName: 'Sarphens illustration', stock: 32, price: 45.99, totalSales: 30, image: 'https://picsum.photos/300', info: 'Some text info about Product 2' },
      { id: 3, productName: 'Product 3', stock: 15, price: 120, totalSales: 140, image: 'https://picsum.photos/400', info: 'Some text info about Product 3' },
      { id: 4, productName: 'Product 4', stock: 25, price: 200, totalSales: 20, image: 'https://picsum.photos/500', info: 'Some text info about Product 4' },
  ]
}

const expSlice = createSlice({
  name: 'exp',
  initialState,
  reducers: { 
  
  }
});
export default expSlice.reducer;
