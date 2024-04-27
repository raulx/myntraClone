import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import BASE_URL from "../authapi";
const BASE_URL = "/api";
// const BASE_URL = "http://localhost:3300";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    fetchFn: async (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query({
        query: () => {
          return {
            url: "/admin/products/getAllProducts",
            method: "GET",
          };
        },
      }),
      getSingleProduct: builder.query({
        query: (productId) => {
          return {
            url: `/admin/products/getSingleProduct?product_id=${productId}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetSingleProductQuery,
  useLazyGetSingleProductQuery,
} = productApi;

export default productApi;
