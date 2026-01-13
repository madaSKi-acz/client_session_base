"use client";

import React, { useState } from 'react';
import ContainerSelect, { ContainerOption } from '@/app/components/ui/Select/SelectTwo';
import DateRangePicker from '@/app/components/ui/DatePicker/DateRangePicker';
import { CONTAINER_OPTIONS } from '@/data/containers';
import ContainerLogsTable from "./TableView";


export default function ContainerPage() {
  const [selectedContainer, setSelectedContainer] = useState<ContainerOption | null>(null);
  
  // Date Range State
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <header className="w-full mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-app-fg">
          Containers list
        </h1>
      </header>

      <main className="space-y-8">
  {/* SECTION: Filters */}
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    <ContainerSelect
      id="container-select"
      label="Choose Container"
      options={CONTAINER_OPTIONS}
      value={selectedContainer}
      onChange={(option) => setSelectedContainer(option)}
      placeholder="Search container..."
      isClearable
    />

    <DateRangePicker
      label="Selection Period"
      placeholder="Select date range..."
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => setDateRange(update)}
      className="w-full"
    />
  </div>

  {/* SECTION: Table */}
  <ContainerLogsTable
    container={selectedContainer}
    startDate={startDate}
    endDate={endDate}
  />
</main>

    </div>
  );
}