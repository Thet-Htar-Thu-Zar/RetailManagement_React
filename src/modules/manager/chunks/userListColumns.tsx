import { GetAllUserType } from "@/api/user/types";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

export const userlistcolumns: ColumnDef<GetAllUserType>[] = [
  {
    accessorKey: "No",
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.index + 1}</div>;
    },
  },

  {
    accessorKey: "userName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-blue-200 flex pl-20 text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("userName")}</div>
    ),
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-center">{formatted}</div>;
    },
  },

  {
    accessorKey: "userRole",
    header: () => <div className="text-center">User Role</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("userRole")}</div>;
    },
  },

  {
    accessorKey: "createdDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-black hover:bg-blue-200 text-center ml-20"
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
