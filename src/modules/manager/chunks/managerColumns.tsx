import { SaleReportType } from "@/api/sale/types";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

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
    header: () => <div className="text-right">Product ID</div>,
    cell: ({ row }) => {
      return <div className="text-right">{row.getValue("productID")}</div>;
    },
  },
  {
    accessorKey: "quantitySold",
    header: () => <div className="text-right">Quantity Sold</div>,
    cell: ({ row }) => {
      return <div className="text-right">{row.getValue("quantitySold")}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="text-right">Total Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "totalProfit",
    header: () => <div className="text-right">Total Profit</div>,
    cell: ({ row }) => {
      const profit = parseFloat(row.getValue("totalProfit"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(profit);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="bg-white text-black hover:bg-blue-200"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Created Date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("createdDate")}</div>
    ),
  },
];

export const columnVisibility = {
  createdAt: false,
};
