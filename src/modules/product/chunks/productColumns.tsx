import { UpdateProductInputType } from "@/api/product/types";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const productcolumns: ColumnDef<UpdateProductInputType>[] = [
  {
    accessorKey: "No",
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-blue-200 flex ml-20 text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("productName")}</div>
    ),
  },
  {
    accessorKey: "remainingStock",
    header: () => <div className="text-right">Remaining Stock</div>,
    cell: ({ row }) => {
      return <div className="text-right">{row.getValue("remainingStock")}</div>;
    },
  },
  {
    accessorKey: "productPrice",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("productPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    accessorKey: "productProfit",
    header: () => <div className="text-right">Product Profit</div>,
    cell: ({ row }) => {
      const profit = parseFloat(row.getValue("productProfit"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(profit);

      return <div className="text-right">{formatted}</div>;
    },
  },
  // {
  //   accessorKey: "action",
  //   header: () => <div className="text-right">Action</div>,
  //   cell: ({ row }) => {
  //     return <ProductAction product={row.original as ProductType} />;
  //   },
  // },
];

export const columnVisibility = {
  createdAt: false,
};
