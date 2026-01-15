// src/app/components/ContainerHistoryTableView.tsx
"use client";

import { useState } from "react";
import { cn } from "@/utils/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/app/components/ui/Customs/DynamicTable";
import { sampleTankData } from "@/data/ch";
import {
  columns,
  type RowData,
} from "@/utils/cn/table-config-ui";
import { TableComplexHeader } from "./TableComplexHeader";

export default function ContainerHistoryTableView() {
  const [selectedNo, setSelectedNo] = useState<string | null>(null);

  const handleRowClick = (row: RowData) => {
    console.log("Clicked row:", row);
    setSelectedNo(row.no);
  };

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between px-1">
        <h6 className="text-lg font-bold tracking-tight">
          Container / Tank History
        </h6>
      </div>

      <div className="relative flex-1 min-h-0 overflow-hidden rounded-lg border border-primary">
        <div className="absolute inset-0 overflow-auto">
          <Table className="w-full min-w-max border-separate border-spacing-0">
            <TableComplexHeader />

            <TableBody>
              {sampleTankData.map((row) => {
                const isSelected = selectedNo === row.no;

                return (
                  <TableRow
                    key={row.no}
                    onClick={() => handleRowClick(row)}
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
                          {value ?? "-"}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}