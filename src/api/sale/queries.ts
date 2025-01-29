import { SaleType } from "@/shared/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

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
