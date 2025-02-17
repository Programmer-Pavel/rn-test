import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  price: number;
  weight: number;
  ingredients: string;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      name: "Филадельфия",
      price: 799,
      weight: 280,
      ingredients:
        "Лосось, сливочный сыр, огурец, авокадо, рис, водоросли нори",
    },
    {
      id: 2,
      name: "Калифорния",
      price: 699,
      weight: 260,
      ingredients: "Снежный краб, авокадо, огурец, масаго, рис, водоросли нори",
    },
    {
      id: 3,
      name: "Дракон",
      price: 899,
      weight: 300,
      ingredients:
        "Угорь, сливочный сыр, огурец, авокадо, кунжут, соус унаги, рис",
    },
    {
      id: 4,
      name: "Радуга",
      price: 849,
      weight: 290,
      ingredients: "Лосось, тунец, окунь, авокадо, огурец, сливочный сыр, рис",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
