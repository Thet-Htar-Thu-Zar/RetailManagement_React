// import axiosInstance, { APIResponse } from "../config";
// import { AddSaleType, GetAllSaleType, GetSaleSummary } from "./types";

// const baseUrl = "/Sale";
// const createSale = async (
//   sale: AddSaleType
// ): Promise<APIResponse<AddSaleType>> => {
//   const response = await axiosInstance.post<APIResponse<AddSaleType>>(
//     `${baseUrl}/AddSale`,
//     sale
//   );

//   return response.data;
// };

// const getAllSale = async (): Promise<APIResponse<GetAllSaleType[]>> => {
//   const response = await axiosInstance.get<APIResponse<GetAllSaleType[]>>(
//     `${baseUrl}/GetSaleReport`
//   );

//   return response.data;
// };

// const getSaleSummary = async (): Promise<APIResponse<GetSaleSummary>> => {
//   const response = await axiosInstance.get<APIResponse<GetSaleSummary>>(
//     `${baseUrl}/GetSaleSummary`
//   );

//   return response.data;
// };
// export default { createSale, getAllSale, getSaleSummary };
