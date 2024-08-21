import { createSlice } from "@reduxjs/toolkit";
import product1Img from "../../../../public/assets/images/product1.png";
import product2Img from "../../../../public/assets/images/product2.png";
import product3Img from "../../../../public/assets/images/product3.png";
import product4Img from "../../../../public/assets/images/product4.png";
import product5Img from "../../../../public/assets/images/product5.png";
import product6Img from "../../../../public/assets/images/product6.png";
import product7Img from "../../../../public/assets/images/product7.png";
import product8Img from "../../../../public/assets/images/product8.png";
import toy1 from "../../../../public/assets/images/toy2.jpg";
import toy2 from "../../../../public/assets/images/toy3.jpg";
import toy3 from "../../../../public/assets/images/toy4.png";
import toy4 from "../../../../public/assets/images/toy6.jpg";
import toy5 from "../../../../public/assets/images/toy5.jpg";
import { initialStateType } from "@/type";

const initialState: initialStateType = {
  products: [
    {
      id: "7",
      name: "Electric Toothbrush",
      description:
        "High-performance electric toothbrush with multiple brushing modes.",
      price: 39,
      category: "Health & Personal Care",
      stock: 45,
      imageUrl: product7Img,
      createdAt: "2024-06-25T11:00:00Z", // 56 days ago
      ratings: 3,
      idealFor: ["Men"],
      isLiked: true,
    },
    {
      id: "1",
      name: "Smartphone XYZ",
      description:
        "Latest model with high-resolution camera and long battery life.",
      price: 799,
      category: "Electronics",
      stock: 25,
      imageUrl: product1Img,
      createdAt: "2024-08-19T10:00:00Z", // 1 day ago
      ratings: 4.4,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "2",
      name: "Wireless Headphones",
      description:
        "Noise-cancelling headphones with Bluetooth connectivity and 30-hour battery life.",
      price: 149,
      category: "Accessories",
      stock: 50,
      imageUrl: product2Img,
      createdAt: "2024-08-12T14:30:00Z", // 8 days ago
      ratings: 4,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "3",
      name: "Laptop Pro 15",
      description:
        "Powerful laptop with high-speed SSD, 16GB RAM, and a high-definition screen.",
      price: 1299,
      category: "Computers",
      stock: 15,
      imageUrl: product3Img,
      createdAt: "2024-08-05T09:15:00Z", // 15 days ago
      ratings: 3.5,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "4",
      name: "4K Ultra HD TV",
      description: "55-inch TV with 4K resolution and smart features.",
      price: 499,
      category: "Electronics",
      stock: 10,
      imageUrl: product4Img,
      createdAt: "2024-07-29T18:45:00Z", // 22 days ago
      ratings: 4.3,
      idealFor: ["Men", "Women"],
      isLiked: true,
    },
    {
      id: "5",
      name: "Coffee Maker",
      description:
        "Programmable coffee maker with a built-in grinder and multiple brew settings.",
      price: 89,
      category: "Home Appliances",
      stock: 35,
      imageUrl: product5Img,
      createdAt: "2024-07-23T12:00:00Z", // 28 days ago
      ratings: 4.4,
      idealFor: ["Women"],
      isLiked: false,
    },
    {
      id: "6",
      name: "Fitness Tracker Band",
      description:
        "Wearable fitness tracker with heart rate monitoring and step tracking.",
      price: 59,
      category: "Wearables",
      stock: 60,
      imageUrl: product6Img,
      createdAt: "2024-07-15T07:30:00Z", // 36 days ago
      ratings: 2,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "8",
      name: "Gaming Console",
      description:
        "Latest generation gaming console with enhanced graphics and exclusive games.",
      price: 399,
      category: "Gaming",
      stock: 20,
      imageUrl: product8Img,
      createdAt: "2024-05-15T13:45:00Z", // 97 days ago
      ratings: 1,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "9",
      name: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with excellent sound quality and long battery life.",
      price: 79,
      category: "Accessories",
      stock: 40,
      imageUrl: product4Img,
      createdAt: "2024-04-10T08:20:00Z", // 132 days ago
      ratings: 4.9,
      idealFor: ["Men"],
      isLiked: false,
    },
    {
      id: "10",
      name: "Smartwatch X1",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 199,
      category: "Wearables",
      stock: 30,
      imageUrl: product1Img,
      createdAt: "2024-03-01T15:30:00Z", // 172 days ago
      ratings: 4.1,
      idealFor: ["Men", "Women"],
      isLiked: false,
    },
    {
      id: "11",
      name: "Toy1",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: toy1,
      createdAt: "2024-03-01T15:30:00Z", // 172 days ago
      ratings: 4.5,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "12",
      name: "Toy2",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: toy2,
      createdAt: "2024-03-01T15:30:00Z", // 172 days ago
      ratings: 3.1,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "13",
      name: "Toy3",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: toy3,
      createdAt: "2024-03-01T15:30:00Z", // 172 days ago
      ratings: 4.0,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "14",
      name: "Toy4",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: toy4,
      createdAt: "2024-03-01T15:30:00Z", // 172 days ago
      ratings: 4.7,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
    {
      id: "15",
      name: "Toy5",
      description:
        "Smartwatch with fitness tracking, notifications, and customizable watch faces.",
      price: 300,
      category: "toys",
      stock: 30,
      imageUrl: toy5,
      createdAt: "2024-03-01T15:30:00Z", // 172 days ago
      ratings: 1.0,
      idealFor: ["Baby & Kids"],
      isLiked: false,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    likeDislikeProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            isLiked: !product.isLiked,
          };
        }
        return product;
      });
    },
  },
});

export const { likeDislikeProduct } = productSlice.actions;

export default productSlice.reducer;
