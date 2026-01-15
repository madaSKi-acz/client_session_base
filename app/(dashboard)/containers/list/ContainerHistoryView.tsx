// src/app/components/ContainerHistoryTableView.tsx
"use client";

import { useState } from "react";
import { cn } from "@/utils/ui";
import { sampleTankData } from "@/data/ch";
import { type RowData } from "@/utils/cn/table-config-ui";
import { HistoryViewToggle } from "./HistoryViewToggle";
import { TableView } from "./TableView";
import { DetailViewWithHeader } from "./DetailViewWithHeader";

export default function ContainerHistoryTableView() {
  const [selectedNo, setSelectedNo] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  const handleRowSelect = (row: RowData) => {
    setSelectedNo(row.no);
  };

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between px-1">
        <h6 className="text-lg font-bold tracking-tight">
          Container / Tank History
        </h6>

        <HistoryViewToggle
          viewMode={viewMode}
          onViewChange={setViewMode}
        />
      </div>

      {/* ── Main scrollable container ── */}
      <div className="relative flex-1">
        {/* This div handles ALL scrolling (vertical + horizontal) */}
        <div className="absolute inset-0 overflow-auto custom-scrollbar">
          <div className={cn(
            "min-h-full",
            viewMode === "table" ? "min-w-max" : "w-full"
          )}>
            {viewMode === "table" ? (
              <TableView
                data={sampleTankData}
                selectedNo={selectedNo}
                onRowSelect={handleRowSelect}
              />
            ) : (
              <DetailViewWithHeader
                data={sampleTankData}
                selectedNo={selectedNo}
                onRowSelect={handleRowSelect}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}