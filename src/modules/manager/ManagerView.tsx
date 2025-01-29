import api from "@/api";
import { SaleDataTable } from "./chunks/managerData-table";
import { salecolumns } from "./chunks/managerColumns";

const ManagerView = () => {
  const { data: sale } = api.sale?.getallsale.useQuery() ?? {};

  return (
    <div>
      <h1 className="text-3xl font-bold">Manager Page👨🏻‍💼</h1>
      <p className="text-gray-600">Overview of Sales Performance</p>
      <SaleDataTable columns={salecolumns} data={sale ?? []} />
    </div>
  );
};

export default ManagerView;
