import api from "@/api";
import { SaleDataTable } from "./chunks/managerData-table";
import { salecolumns } from "./chunks/managerColumns";

const ManagerView = () => {
  const { data: sale } = api.sale?.getallsale.useQuery() ?? {};
  const { data: salesummary } = api.sale?.getsalesummary.useQuery() ?? {};

  return (
    <div>
      <h1 className="text-3xl font-bold ml-10 ">Manager Page👨🏻‍💼</h1>
      <p className="text-gray-600 ml-10 mb-5">Overview of Sales Performance</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3 ml-20 mr-20">
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gradient-to-r from-green-200 to-blue-300">
          <h2 className="text-sm font-semibold text-gray-500">
            Total Sale Profit💸{" "}
          </h2>
          <p className="text-xl font-bold text-gray-800">
            ${salesummary?.totalSaleProfit}
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gradient-to-r from-green-200 to-blue-300">
          <h2 className="text-sm font-semibold text-gray-500">
            Total Sale Revenue💵
          </h2>
          <p className="text-xl font-bold text-gray-800">
            ${salesummary?.totalSaleRevenue}
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gradient-to-r from-green-200 to-blue-300">
          <h2 className="text-sm font-semibold text-gray-500">
            Total Sale Count🛍
          </h2>
          <p className="text-xl font-bold text-gray-800">{sale?.length}</p>
        </div>
      </div>

      <SaleDataTable columns={salecolumns} data={sale ?? []} />
    </div>
  );
};

export default ManagerView;
