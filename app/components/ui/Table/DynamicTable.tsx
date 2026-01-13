"use client";

import React from "react";
import { cn } from "@/utils/ui";
import { tableVariants, thVariants, tdVariants } from "@/cnUtils/tableVariants";

/* =====================
   TYPES
   ===================== */

export type TableColumn<T extends Record<string, unknown>> = {
  key: keyof T & string;
  header: React.ReactNode;
  align?: "left" | "center" | "right";
  render?: (row: T) => React.ReactNode;
};

interface DynamicTableProps<T extends Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  density?: "normal" | "compact";
  emptyMessage?: string;
  className?: string;
}

/* =====================
   COMPONENT
   ===================== */

export default function DynamicTable<T extends Record<string, unknown>>({
  columns,
  data,
  density,
  emptyMessage = "No data available",
  className,
}: DynamicTableProps<T>) {
  return (
    <div className={cn(tableVariants({ density }), className)}>
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* HEADER */}
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(thVariants({ align: col.align }))}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-secondary/30 transition-colors"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(tdVariants({ align: col.align }))}
                    >
                      {col.render
                        ? col.render(row)
                        : String(row[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
