// src/app/components/ContainerHistoryTableView.tsx
"use client";

import { useState } from "react";
import { sampleTankData } from "@/data/ch";
import { type RowData } from "@/utils/cn/table-config-ui";
import { HistoryViewToggle } from "./HistoryViewToggle";
import { TableView } from "./TableView";
import { CardListView } from "./CardListView";

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

      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div className="absolute inset-0 overflow-auto p-1">
          {viewMode === "table" ? (
            <TableView
              data={sampleTankData}
              selectedNo={selectedNo}
              onRowSelect={handleRowSelect}
            />
          ) : (
            <CardListView
              data={sampleTankData}
              selectedNo={selectedNo}
              onRowSelect={handleRowSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}