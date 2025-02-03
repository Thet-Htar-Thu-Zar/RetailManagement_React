import { SaleReportType } from "@/api/sale/types";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { format } from "date-fns";

export const salecolumns: ColumnDef<SaleReportType>[] = [
  {
    accessorKey: "No",
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.index + 1}</div>;
    },
  },

  {
    accessorKey: "productID",
    header: () => <div className="text-center">Product ID</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("productID")}</div>;
    },
  },
  {
    accessorKey: "quantitySold",
    header: () => <div className="text-center">Quantity Sold</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("quantitySold")}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="text-center">Total Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "totalProfit",
    header: () => <div className="text-center">Total Profit</div>,
    cell: ({ row }) => {
      const profit = parseFloat(row.getValue("totalProfit"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(profit);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-black hover:bg-blue-200 text-center ml-10"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Created Date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdDate"));
      const formatted = format(date, "yyyy-MM-dd   HH:mm:ss");
      return <div className="text-center ">{formatted}</div>;
    },
  },
];

export const columnVisibility = {
  createdAt: false,
};
