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
            url: "/admin/products/getproducts",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;

export default productApi;
