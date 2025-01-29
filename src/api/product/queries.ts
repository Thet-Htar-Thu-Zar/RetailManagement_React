// import productServices from "./services";
// import {
//   DeleteProductType,
//   GetAllProductType,
//   UpdateProductInputType,
// } from "./types";
// import { APIResponse } from "@/shared/types";
// import {
//   useMutation,
//   UseMutationOptions,
//   useQuery,
//   useQueryClient,
//   UseQueryOptions,
// } from "@tanstack/react-query";

// export const fetchStocks = {
//   useQuery: (opt?: UseQueryOptions<GetAllProductType[], Error>) =>
//     useQuery<GetAllProductType[], Error>({
//       queryKey: ["getallproduct"],
//       queryFn: async () => {
//         const response: APIResponse<GetAllProductType[]> =
//           await productServices.getAllProduct();

//         return response.data;
//       },
//       ...opt,
//     }),
// };

// export const addProduct = {
//   useMutation: (
//     opt?: UseMutationOptions<any, Error, GetAllProductType, any>
//   ) => {
//     const queryClient = useQueryClient();
//     return useMutation({
//       mutationKey: ["addProduct"],
//       mutationFn: (payload: GetAllProductType) =>
//         productServices.addProduct(payload),
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["getallproduct"] });
//       },
//       ...opt,
//     });
//   },
// };

// export const updateProduct = {
//   useMutation: (
//     opt?: UseMutationOptions<any, Error, UpdateProductInputType, any>
//   ) => {
//     const queryClient = useQueryClient();
//     return useMutation({
//       mutationKey: ["updateProduct"],
//       mutationFn: (payload: UpdateProductInputType) =>
//         productServices.updateProduct(payload),
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["getallproduct"] });
//       },
//       ...opt,
//     });
//   },
// };

// export const deleteProduct = {
//   useMutation: (
//     opt?: UseMutationOptions<any, Error, DeleteProductType, any>
//   ) => {
//     const queryClient = useQueryClient();
//     return useMutation({
//       mutationKey: ["deleteProduct"],
//       mutationFn: async (payload: DeleteProductType) =>
//         await productServices.deleteProduct(payload),
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["getallproduct"] });
//       },
//       ...opt,
//     });
//   },
// };

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "./types";

export const fetchStocks = {
  useQuery: (
    opt?: Partial<UseQueryOptions<unknown, Error, Array<ProductType>>>,
    onError?: () => void
  ) => {
    return useQuery({
      queryKey: ["getAllProducts"],
      queryFn: async () => {
        try {
          const response = await axios.get("Product/GetAllProduct");
          const { data, status } = response.data;

          if (status !== 0) {
            onError?.();
            return new Error("Error While Fetching");
          }
          return data;
        } catch {
          throw new Error("Error While Fetching");
        }
      },
      ...opt,
    });
  },
};
