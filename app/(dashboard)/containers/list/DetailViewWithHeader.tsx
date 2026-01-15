// src/components/history/DetailViewWithHeader.tsx
"use client";

import { useEffect } from "react";
import { cn } from "@/utils/ui";
import { type RowData } from "@/utils/cn/table-config-ui";
import {
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  Truck,
} from "lucide-react";

interface DetailViewWithHeaderProps {
  data: RowData[];
  selectedNo: string | null;
  onRowSelect: (row: RowData) => void;
}

export function DetailViewWithHeader({
  data,
  selectedNo,
  onRowSelect,
}: Readonly<DetailViewWithHeaderProps>) {
  useEffect(() => {
    if (!selectedNo && data.length > 0) {
      onRowSelect(data[0]);
    }
  }, [data, selectedNo, onRowSelect]);

  const selectedRow = data.find((r) => r.no === selectedNo) || data[0];

  return (
    /**
     * 1. Added h-screen to lock the height to the viewport.
     * 2. Added overflow-hidden to block page-level vertical scrolling.
     */
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      
      {/* Header Row - Fixed (shrink-0 prevents it from squishing) */}
      <div className="border-b border-border bg-muted/40 shrink-0">
        <div
          className={cn(
            "overflow-x-auto whitespace-nowrap py-2 px-4",
            "scrollbar-thin scrollbar-thumb-primary/60 scrollbar-thumb-rounded-full",
            "hover:scrollbar-thumb-primary/80",
            "scrollbar-track-muted/20 scrollbar-track-rounded-full"
          )}
        >
          <div className="inline-flex gap-2">
            {data.map((row) => {
              const isActive = row.no === selectedNo;

              return (
                <button
                  key={row.no}
                  onClick={() => onRowSelect(row)}
                  className={cn(
                    "min-w-[130px] rounded-md border px-3.5 py-1.5 text-center text-sm font-medium transition-all cursor-pointer",
                    isActive
                      ? "bg-primary/20 border-primary text-primary shadow-sm"
                      : "bg-card border-border/70 text-foreground hover:border-primary/40 hover:bg-primary/5"
                  )}
                >
                  No. {row.no} – {row.quantity}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content - Made scrollable while parent remains locked.
        overflow-y-auto enables the internal scroll.
      */}
      {selectedRow && (
        <div className="flex-1 overflow-y-auto p-5 bg-background scrollbar-thin scrollbar-thumb-muted-foreground/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Left side – Main Cards */}
              <div className="flex-1 lg:w-[70%] space-y-5 order-2 lg:order-1">
                
                {/* IMPORT */}
                <div className="bg-blue-50/40 dark:bg-blue-950/25 rounded-lg p-5 border border-blue-200/50 dark:border-blue-800/30">
                  <div className="flex items-center gap-2.5 text-lg font-semibold mb-4">
                    <ArrowDownToLine className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    IMPORT
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company</span>
                      <span className="font-medium">{selectedRow.company_import || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">{selectedRow.status_import || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cop</span>
                      <span className="font-medium">{selectedRow.cop || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tigger</span>
                      <span className="font-medium">{selectedRow.tigger_import || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plate code</span>
                      <span className="font-medium">{selectedRow.plate_code || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Train</span>
                      <span className="font-medium">{selectedRow.train_import || "—"}</span>
                    </div>
                  </div>
                </div>

                {/* EXPORT */}
                <div className="bg-red-50/40 dark:bg-red-950/25 rounded-lg p-5 border border-red-200/50 dark:border-red-800/30">
                  <div className="flex items-center gap-2.5 text-lg font-semibold mb-4">
                    <ArrowUpFromLine className="h-5 w-5 text-red-600 dark:text-red-400" />
                    EXPORT
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company</span>
                      <span className="font-medium">{selectedRow.company_export || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Take down Date</span>
                      <span className="font-medium">{selectedRow.take_down_date || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Port</span>
                      <span className="font-medium">{selectedRow.port_export_take || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tigger</span>
                      <span className="font-medium">{selectedRow.tigger_export || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plate number</span>
                      <span className="font-medium">{selectedRow.plate_number || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">{selectedRow.status_export || "—"}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery & Re-delivery */}
                <div className="bg-amber-50/40 dark:bg-amber-950/25 rounded-lg p-5 border border-amber-200/50 dark:border-amber-800/30">
                  <div className="flex items-center gap-2.5 text-lg font-semibold mb-4">
                    <Truck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    Delivery & Re-delivery
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Refe No.</span>
                      <span className="font-medium">{selectedRow.refe_no || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issue On</span>
                      <span className="font-medium">{selectedRow.issue_on || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Staff (Delivery)</span>
                      <span className="font-medium">{selectedRow.staff_delivery || "—"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Basic Information – Sticky inside the scrollable area */}
              <div className="w-full lg:w-[30%] lg:min-w-[300px] order-1 lg:order-2">
                <div className="bg-muted/30 rounded-lg p-5 border border-muted lg:sticky lg:top-0">
                  <div className="flex items-center gap-2.5 text-xl font-semibold mb-5">
                    <Package className="h-5 w-5 text-primary" />
                    Basic Information
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between py-2.5 border-b border-border/50">
                      <span className="text-muted-foreground">No.</span>
                      <span className="font-semibold">{selectedRow.no}</span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-border/50">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-semibold">{selectedRow.quantity}</span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-border/50">
                      <span className="text-muted-foreground">Brand</span>
                      <span className="font-semibold">{selectedRow.brand}</span>
                    </div>
                    <div className="flex justify-between py-2.5">
                      <span className="text-muted-foreground">Issue Date</span>
                      <span className="font-semibold">{selectedRow.issue_date || "—"}</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 