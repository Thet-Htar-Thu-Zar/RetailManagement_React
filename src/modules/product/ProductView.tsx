import api from "@/api";
import { productcolumns } from "./chunks/productColumns";
import { ProductDataTable } from "./chunks/productData-table";

const ProductView = () => {
  const { data: product } = api.product?.fetchStocks?.useQuery() ?? {};
  return (
    <div className="py-3 m-4 bg-white rounded-lg shadow-md">
      <h4 className="text-3xl font-semibold text-center text-slate-700 flex justify-center">
        Stock Page🛍🎗
      </h4>

      <ProductDataTable columns={productcolumns} data={product ?? []} />
    </div>
  );
};

export default ProductView;
