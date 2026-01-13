"use client";

import DynamicTable from "@/app/components/ui/Table/DynamicTable";
import { ContainerOption } from "@/app/components/ui/Select/SelectTwo";
import {
  CONTAINER_LOG_COLUMNS,
  CONTAINER_LOG_DATA,
} from "@/data/containerLogs";

interface Props {
  container: ContainerOption | null;
  startDate: Date | null;
  endDate: Date | null;
}

export default function ContainerLogsTable({
  container,
  startDate,
  endDate,
}: Props) {
  return (
    <div className="space-y-4">
      {/* Header (optional / dynamic) */}
      <div>
        <span className="text-app-fg">
          {container ? `Logs — ${container.label}` : "Container Log histories"}
        </span>

        {startDate && endDate && (
          <p className="text-xs text-muted-foreground">
            {startDate.toLocaleDateString()} →{" "}
            {endDate.toLocaleDateString()}
          </p>
        )}
      </div>

      {/* Table always visible */}
      <DynamicTable
        columns={CONTAINER_LOG_COLUMNS}
        data={container ? CONTAINER_LOG_DATA : []}
        emptyMessage="No logs available. Select a container to begin."
      />
    </div>
  );
}
