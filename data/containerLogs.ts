import { TableColumn } from "@/app/components/ui/Table/DynamicTable";

/* =====================
   DATA TYPE
   ===================== */

export type ContainerLog = {
  date: string;
  action: string;
  status: "Success" | "Pending" | "Failed";
};

/* =====================
   TABLE COLUMNS
   ===================== */

export const CONTAINER_LOG_COLUMNS: TableColumn<ContainerLog>[] = [
  {
    key: "date",
    header: "Date",
  },
  {
    key: "action",
    header: "Action",
  },
  {
    key: "status",
    header: "Status",
  },
];

/* =====================
   MOCK DATA (replace with API later)
   ===================== */

export const CONTAINER_LOG_DATA: ContainerLog[] = [
  {
    date: "2026-01-13",
    action: "Inspection",
    status: "Success",
  },
  {
    date: "2026-01-12",
    action: "Maintenance",
    status: "Pending",
  },
  {
    date: "2026-01-11",
    action: "Repair",
    status: "Failed",
  },
];
