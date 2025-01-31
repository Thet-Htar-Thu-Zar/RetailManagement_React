export type GetAllProductType = {
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

export type ProductType = {
  productID: string;
  productName: string;
  remainingStock: number;
  productPrice: number;
  productProfit: number;
  createdDate: string;
  updatedDate: string;
};

export type UpdateProductInputType = {
  productName: string;
  remainingStock: number;
  productPrice: number;
  productProfit: number;
};

export type DeleteProductType = {
  productID: string;
};

export type CartType = {
  productID: string;
  productName: string;
  quantity: number;
  remainingStock: number;
  productPrice: number;
  productProfit: number;
};

export type CartType = {
  // productID: string;
  productName: string;
  quantity: number;
};
