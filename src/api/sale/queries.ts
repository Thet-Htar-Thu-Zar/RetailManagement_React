import { SaleType } from "@/shared/types";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import axios from "axios";
import { AddSaleType, GetSaleSummary } from "./types";

export const getallsale = {
  useQuery: (
    opt?: Partial<UseQueryOptions<unknown, Error, Array<SaleType>>>,
    onError?: () => void
  ) => {
    return useQuery({
      queryKey: ["getAllSales"],
      queryFn: async () => {
        try {
          const response = await axios.get("Sale/GetSaleReport");
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

export const getsalesummary = {
  useQuery: (
    opt?: Partial<UseQueryOptions<unknown, Error, GetSaleSummary>>,
    onError?: () => void
  ) => {
    return useQuery({
      queryKey: ["getSaleSummary"],
      queryFn: async () => {
        try {
          const response = await axios.get("Sale/GetSaleSummary");
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

export const addSale = {
  useMutation: (
    opt?: UseMutationOptions<unknown, Error, AddSaleType, unknown>
  ) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: ["addSale"],
      mutationFn: (payload: AddSaleType) => {
        return axios.post("Sale/AddSale", payload);
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getSaleSummary"],
        });
      },
      ...opt,
    });
  },
};
