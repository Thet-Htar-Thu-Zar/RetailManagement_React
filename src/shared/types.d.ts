export type APIResponse<T> = {
  message: string;
  status: number;
  data: T;
};

export type ProductType = {
  productID: string;
  productName: string;
  remainingStock: number;
  productPrice: number;
  productProfit: number;
  createdDate: string;
  updatedDate: string;
  createdBy: string;
  updatedBy: string;
  activeFlag: boolean;
};

export type SaleType = {
  saleID: string;
  productID: string;
  quantitySold: string;
  totalPrice: number;
  totalProfit: number;
  createdDate: string;
  updatedDate: string;
  createdBy: string;
  updatedBy: string;
  activeFlag: boolean;
};

export type APIResponse<T> = {
  message: string;
  status: number;
  data: T;
};
