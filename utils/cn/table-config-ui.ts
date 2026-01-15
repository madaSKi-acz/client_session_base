// src/components/ui/table-config.ts
import { cn } from "@/utils/ui";

export type ColumnDef<T> = {
  key: keyof T | string;
  label: string;
  width?: string;
  sticky?: boolean;
  stickyLeft?: string;
  className?: string;
  headerClassName?: string;
  cellClassName?: string,
  group?: string;
  colSpan?: number;
  rowSpan?: number;
  align?: "left" | "center" | "right";
};

export type RowData = {
  no: string;
  quantity: string;
  brand: string;
  company_import: string;
  status_import: string;
  cop: string;
  tigger_import: string;
  plate_code: string;
  train_import: string;
  arrived_date: string;
  train_no_import: string;
  start_date: string;
  port_import: string;
  unzip: string;
  company_export: string;
  take_down_date: string;
  port_export_take: string;
  tigger_export: string;
  plate_number: string;
  status_export: string;
  loaded_train: string;
  arrived_on: string;
  train_no_export: string;
  team: string;
  issue_date: string;
  refe_no: string;
  issue_on: string;
  staff_delivery: string;
  port_delivery: string;
  actual_crt_dt: string;
  ref_d_no_redelivery: string;
  start_on_redelivery: string;
  staff_redelivery: string;
  port_redelivery: string;
  toke_down: string;
  ref_d_no_export: string;
  started_on_export: string;
  staff_export: string;
  port_export_final: string;
  toke_down_status: string;
  // add more fields if needed
};

// ── Base cell styles ────────────────────────────────────────

export const baseCell = cn(
  "whitespace-nowrap text-center border-r border-primary/30"
);

export const getCellClass = (isSelected: boolean, extra = "") =>
  cn(
    baseCell,
    isSelected ? "bg-primary/40" : "group-hover:bg-primary/50",
    extra
  );

export const getStickyCellClass = (isSelected: boolean) =>
  cn(
    "sticky left-0 z-10 text-center font-medium whitespace-nowrap border-r border-primary/30",
    isSelected ? "bg-primary/40" : "bg-secondary group-hover:bg-primary/50"
  );

// ── Column definitions ──────────────────────────────────────

export const columns: ColumnDef<RowData>[] = [
  {
    key: "no",
    label: "No.",
    width: "min-w-[64px]",
    sticky: true,
    headerClassName: "sticky left-0 top-0 z-30 bg-secondary font-semibold border-b border-r border-primary",
    cellClassName: "sticky Z-30 left-0 backdrop-blur-lg",
    rowSpan: 3,
  },
  {
    key: "quantity",
    label: "Quantity",
    width: "min-w-[96px]",
    sticky: true,
    headerClassName:
      "sticky top-0 bg-secondary font-semibold border-b border-r border-primary",
    rowSpan: 3,
  },
  {
    key: "brand",
    label: "Brand",
    width: "min-w-[140px]",
    sticky: true,
    headerClassName:
      "sticky top-0 bg-secondary font-semibold border-b border-primary py-1.5",
    rowSpan: 3,
  },

  // ── IMPORT group (colSpan 11 in level 1) ──
  // You will handle colSpan in the header rendering logic

  // Level 3 columns under IMPORT
  { key: "company_import", label: "Company" },
  { key: "status_import", label: "Status" },
  { key: "cop", label: "Cop" },
  { key: "tigger_import", label: "Tigger" },
  { key: "plate_code", label: "plate code" },
  { key: "train_import", label: "Train" },
  { key: "arrived_date", label: "Arrived date" },
  { key: "train_no_import", label: "train no." },
  { key: "start_date", label: "start Date" },
  { key: "port_import", label: "port" },
  { key: "unzip", label: "unzip" },

  // EXPORT group
  { key: "company_export", label: "Company" },
  { key: "take_down_date", label: "take down Date" },
  { key: "port_export_take", label: "port" },
  { key: "tigger_export", label: "tigger" },
  { key: "plate_number", label: "plate number" },
  { key: "status_export", label: "Status" },
  { key: "loaded_train", label: "Loaded train" },
  { key: "arrived_on", label: "Arrived On" },
  { key: "train_no_export", label: "train no" },
  { key: "team", label: "team" },

  { key: "issue_date", label: "Issue Date", rowSpan: 3 },

  // Delivery group
  { key: "refe_no", label: "refe No." },
  { key: "issue_on", label: "issue On" },
  { key: "staff_delivery", label: "staff" },
  { key: "port_delivery", label: "port" },
  { key: "actual_crt_dt", label: "actual_crt_dt" },

  // Re-delivery group
  { key: "ref_d_no_redelivery", label: "ref d No." },
  { key: "start_on_redelivery", label: "start On" },
  { key: "staff_redelivery", label: "staff" },
  { key: "port_redelivery", label: "port" },
  { key: "toke_down", label: "toke down" },

  // Tank Export (ref) group
  { key: "ref_d_no_export", label: "ref d No." },
  { key: "started_on_export", label: "started On" },
  { key: "staff_export", label: "staff" },
  { key: "port_export_final", label: "port" },
  {
    key: "toke_down_status",
    label: "toke down Status",
    className: "font-medium",
  },
];