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
      editProductDetails: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "getSingleProduct" }];
        },
        query: (data) => {
          return {
            url: "/product/edit",
            method: "PATCH",
            body: { ...data },
          };
        },
      }),
      getProducts: builder.query({
        query: () => {
          return {
            url: "/admin/products/getAllProducts",
            method: "GET",
          };
        },
      }),
      getSingleProduct: builder.query({
        providesTags: () => {
          return [{ type: "getSingleProduct" }];
        },
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
  useEditProductDetailsMutation,
} = productApi;

export default productApi;
