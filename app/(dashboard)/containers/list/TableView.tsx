// src/components/history/TableView.tsx
import { cn } from "@/utils/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/app/components/ui/Customs/DynamicTable";
import { columns, type RowData } from "@/utils/cn/table-config-ui";
import { TableComplexHeader } from "./TableComplexHeader";

interface TableViewProps {
  data: RowData[];
  selectedNo: string | null;
  onRowSelect: (row: RowData) => void;
}

export function TableView({ data, selectedNo, onRowSelect }: TableViewProps) {
  return (
    <Table className="w-full min-w-max border-separate border-spacing-0">
      <TableComplexHeader />

      <TableBody>
        {data.map((row) => {
          const isSelected = selectedNo === row.no;

          return (
            <TableRow
              key={row.no}
              onClick={() => onRowSelect(row)}
              className={cn(
                "group border-b border-primary transition-colors cursor-pointer",
                isSelected ? "bg-primary/40" : "hover:bg-primary/50"
              )}
            >
              {columns.map((col) => {
                const value = row[col.key as keyof RowData];
                const isNoColumn = col.key === "no";

                return (
                  <TableCell
                    key={col.key}
                    className={cn(
                      col.sticky ? "sticky z-30" : "",
                      isNoColumn ? "left-0 bg-secondary" : "",
                      isSelected ? "bg-primary/40" : "group-hover:bg-primary/50",
                      col.cellClassName || "",
                      "whitespace-nowrap text-center border-r border-primary/30",
                      col.className
                    )}
                  >
                    {value ?? "—"}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}