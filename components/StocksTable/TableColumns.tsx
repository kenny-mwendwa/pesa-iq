import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import TableColumnHeader from "./TableColumnHeader";
import type { Stock } from "@/types/Stocks";

export const StocksTableColumns: ColumnDef<Stock>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select-all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select-row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "symbol",
    header: () => <TableColumnHeader name="Symbol" />,
    cell: ({ row }) => <div className="w-[30px]">{row.getValue("symbol")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <TableColumnHeader name="Name" />,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "currency",
    header: () => <TableColumnHeader name="Currency" />,
    cell: ({ row }) => <div>{row.getValue("currency")}</div>,
  },
  {
    accessorKey: "exchange",
    header: () => <TableColumnHeader name="Exchange" />,
    cell: ({ row }) => <div>{row.getValue("exchange")}</div>,
  },
  {
    accessorKey: "mic_code",
    header: () => <TableColumnHeader name="Mic Code" />,
    cell: ({ row }) => <div>{row.getValue("mic_code")}</div>,
  },
  {
    accessorKey: "country",
    header: () => <TableColumnHeader name="Country" />,
    cell: ({ row }) => <div>{row.getValue("country")}</div>,
  },
  {
    accessorKey: "type",
    header: () => <TableColumnHeader name="Type" />,
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
];
