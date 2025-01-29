// import { APIResponse } from "@/shared/types";
// import {
//   DeleteProductType,
//   GetAllProductType,
//   UpdateProductInputType,
// } from "./types";
// import axios from "axios";

// const baseUrL = "Product";

// const getAllProduct = async (): Promise<APIResponse<GetAllProductType[]>> => {
//   const response = await axios.get<APIResponse<GetAllProductType[]>>(
//     `${baseUrL}/GetAllProduct`
//   );

//   return response.data;
// };

// const addProduct = async (
//   data: any
// ): Promise<APIResponse<GetAllProductType>> => {
//   const response = await axios.post<APIResponse<GetAllProductType>>(
//     `${baseUrL}/AddProduct`,
//     data
//   );

//   return response.data;
// };

// const updateProduct = async (
//   data: any
// ): Promise<APIResponse<UpdateProductInputType>> => {
//   const response = await axios.post<APIResponse<UpdateProductInputType>>(
//     `${baseUrL}/UpdateProduct`,
//     data
//   );

//   return response.data;
// };

// const deleteProduct = async (payload: DeleteProductType): Promise<any> => {
//   const response = await axios.delete(`${baseUrL}/DeleteProduct`, {
//     data: payload,
//   });
//   return response.data;
// };

// export default { getAllProduct, addProduct, updateProduct, deleteProduct };
