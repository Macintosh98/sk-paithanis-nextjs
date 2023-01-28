import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType, ProductStoreType } from "types";
import { server } from "../../utils/server";
import axios from "axios";
// import goalService from "./goals/goalService";

interface CartTypes {
  cartItems: ProductStoreType[];
  products: ProductType[];
  status: string;
}

const initialState = {
  cartItems: [],
  products: [],
  status: "idle",
} as CartTypes;

// export const getProduct = createAsyncThunk(
//   "cart/getProduct",
//   async (_, thunkAPI: any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       console.log("callllleeeeed 2");
//       return await goalService.getGoals(token);
//     } catch (error: any) {
//       console.log("callllleeeeed 3");
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const getProduct = createAsyncThunk("cart/getProduct", async () => {
  const response = await axios({
    url: `${server}/api/product/`,
    method: "GET",
    responseType: "json",
    headers: {
      // Authorization: this.authString,
      "Content-Type": "application/json",
    },
  });
  return response.data;
});

const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
  const sameProduct = (product: ProductStoreType) => product.id === action.id;
  // &&
  // product.color === action.color &&
  // product.size === action.size

  return state.cartItems.findIndex(sameProduct);
};

type AddProductType = {
  product: ProductStoreType;
  count: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: CartTypes, action: PayloadAction<AddProductType>) => {
      const cartItems = state.cartItems;

      // find index of product
      const index = indexSameProduct(state, action.payload.product);

      if (index !== -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],
      };
    },
    removeProduct(state: CartTypes, action: PayloadAction<ProductStoreType>) {
      // find index of product
      state.cartItems.splice(indexSameProduct(state, action.payload), 1);
    },
    addProductLocal: (state: CartTypes, action: PayloadAction<any>) => {
      // find index of product
      const index = state.products.findIndex(
        (product: any) => product._id === action.payload._id
      );

      if (index !== -1) {
        return;
      }

      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
    removeProductLocal(state: CartTypes, action: PayloadAction<string>) {
      // find index of product
      const newproducts = state.products.filter(
        (product: any) => product._id != action.payload
      );
      return {
        ...state,
        products: newproducts,
      };
    },
    setCount(state: CartTypes, action: PayloadAction<AddProductType>) {
      // find index and add new count on product count
      const indexItem = indexSameProduct(state, action.payload.product);
      state.cartItems[indexItem].count = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state: CartTypes) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state: CartTypes, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state: CartTypes) => {
        state.status = "fail";
        state.products = [];
      });
  },
});

export const {
  addProduct,
  removeProduct,
  setCount,
  addProductLocal,
  removeProductLocal,
} = cartSlice.actions;
export default cartSlice.reducer;
