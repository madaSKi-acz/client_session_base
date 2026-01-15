// src/app/containers/page.tsx

"use client";

import React, { useState } from "react";
import ContainerSelect, {
  ContainerOption,
} from "@/app/components/ui/Select/SelectTwo";
import DateRangePicker from "@/app/components/ui/DatePicker/DateRangePicker";
import { CONTAINER_OPTIONS } from "@/data/containers";

import ContainerHistoryTableView from "./ContainerHistoryTableView";

export default function ContainerPage() {
  const [selectedContainer, setSelectedContainer] =
    useState<ContainerOption | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="flex flex-col h-full space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-app-fg">
          Containers list
        </h1>
      </header>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContainerSelect
          id="container-select"
          label="Choose Container"
          options={CONTAINER_OPTIONS}
          value={selectedContainer}
          onChange={setSelectedContainer}
          placeholder="Search container..."
          isClearable
        />

        <DateRangePicker
          label="Selection Period"
          placeholder="Select date range..."
          startDate={startDate}
          endDate={endDate}
          onChange={setDateRange}
          className="w-full"
        />
      </div>

      <div
        className="
          flex-1              
          min-h-[400px]
          min-w-max 
          isolate 
          overflow-x-auto 
          scrollbar-thin
          py-4 lg:py-2 md:py-2
        "
      >
        <ContainerHistoryTableView />
      </div>
    </div>
  );
}
