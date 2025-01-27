import productServices from "./services";
import {
  DeleteProductType,
  GetAllProductType,
  UpdateProductInputType,
} from "./types";
import { APIResponse } from "../config";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/vue-query";

export const fetchStocks = {
  useQuery: (opt?: UseQueryOptions<GetAllProductType[], Error>) =>
    useQuery<GetAllProductType[], Error>({
      queryKey: ["getallproduct"],
      queryFn: async () => {
        const response: APIResponse<GetAllProductType[]> =
          await productServices.getAllProduct();

        return response.data;
      },
      ...opt,
    }),
};

export const addProduct = {
  useMutation: (
    opt?: UseMutationOptions<any, Error, GetAllProductType, any>
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: ["addProduct"],
      mutationFn: (payload: GetAllProductType) =>
        productServices.addProduct(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getallproduct"] });
      },
      ...opt,
    });
  },
};

export const updateProduct = {
  useMutation: (
    opt?: UseMutationOptions<any, Error, UpdateProductInputType, any>
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: ["updateProduct"],
      mutationFn: (payload: UpdateProductInputType) =>
        productServices.updateProduct(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getallproduct"] });
      },
      ...opt,
    });
  },
};

export const deleteProduct = {
  useMutation: (
    opt?: UseMutationOptions<any, Error, DeleteProductType, any>
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: ["deleteProduct"],
      mutationFn: async (payload: DeleteProductType) =>
        await productServices.deleteProduct(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getallproduct"] });
      },
      ...opt,
    });
  },
};
