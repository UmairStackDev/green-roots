import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";
import amazingHealth from "../amazingHealth";
import essentialOils from "../essentialOils";
import naturalOil from "../naturalOil";
import herbsProduct from "../herbsProduct";
import healthProduct from "../healthProduct";
import homeBestSelling from "../homeBestSelling";
import healthProductMain from "../healthProductMain";
import hearbsMain from "../hearbsMain";
import essentailOilsMain from "../essentailOilsMain";
import naturalOilMain from "../naturalOilMain";
import customRecomendation from "../customRecomendation";
import topRated from "../topRated";
import medicineProduct from "../medicineProduct";
import medicineProductMain from "../medicineProductMain";
import Allproductsmanage from "../Allproductsmanage";
const initialState = {
  cart: [],
  productItems: productData,
  amazingHealthItems: amazingHealth,
  essentialOilsItems:essentialOils,
  naturalOilItems:naturalOil,
  herbsProductItems:herbsProduct,
  healthProductItems:healthProduct,
  homeBestSellingItems:homeBestSelling,
  healthProductMainItems:healthProductMain,
  hearbsMainItems:hearbsMain,
  essentailOilsMainItems:essentailOilsMain,
  naturalOilMainItems:naturalOilMain,
  customRecomendationItems:customRecomendation,
  topRatedItems:topRated,
  medicineProductItems:medicineProduct,
  medicineProductMainItems:medicineProductMain,
  AllproductsmanageItems:Allproductsmanage,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
      
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          // Decrease the quantity by 1
          const updatedQuantity = item.quantity - 1;
    
          // Check if the updated quantity is 0, then remove the item
          if (updatedQuantity === 0) {
            // Filter out the item with quantity 0
            return null;
          }
    
          // Return the updated item with the decreased quantity
          return { ...item, quantity: updatedQuantity };
        }
    
        // If the item's ID doesn't match the action payload, return it unchanged
        return item;
      });
    
      // Remove items with quantity 0 from the cart
      state.cart = state.cart.filter((item) => item !== null);
    },
    
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
