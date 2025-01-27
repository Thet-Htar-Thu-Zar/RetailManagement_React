export type AddSaleType = {
  productID: string;
  quantitySold: number;
  createdBy: string;
};

export type GetAllSaleType = {
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

export type SaleReportType = {
  productID: string;
  quantitySold: string;
  totalPrice: number;
  totalProfit: number;
  createdDate: string;
};

export type GetSaleSummary = {
  totalSaleRevenue: number;
  totalSaleProfit: number;
};
