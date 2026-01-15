// src/app/components/ContainerHistoryTableView.tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/Customs/DynamiceTable";
import { sampleTankData } from "@/data/ch";

export default function ContainerHistoryTableView() {
  const headerRow1Height = 45;   // ← CHANGE THIS (px)
  const headerRow2Height = 40;   // ← CHANGE THIS (px)
  const headerRow3Top = headerRow1Height + headerRow2Height;
  
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between px-1">
        <h6 className="text-lg font-bold tracking-tight">
          Container / Tank History
        </h6>
      </div>

      {/* Table wrapper */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div className="absolute inset-0 overflow-auto">
          <Table className="border-separate border-spacing-0 min-w-max">
            <TableHeader className="bg-card">
              {/* Row 1 - Top level groups */}
              <TableRow>
                <TableHead
                  rowSpan={3}
                  className="sticky left-0 top-0 border-b z-30 bg-secondary text-center font-semibold min-w-[64px]"
                >
                  No.
                </TableHead>
                <TableHead rowSpan={3} className="sticky border-b border-primary bg-secondary text-center font-semibold min-w-[96px]">
                  Quantity
                </TableHead>
                <TableHead rowSpan={3} className="sticky bg-secondary text-center min-w-[140px] font-semibold py-1.5">
                  Brand
                </TableHead>

                <TableHead
                  colSpan={11}
                  className={`text-center bg-primary/10 font-bold`}
                >
                  IMPORT
                </TableHead>

                <TableHead
                  colSpan={10}
                  className={`text-center bg-primary/5 font-bold`}
                >
                  EXPORT
                </TableHead>

                <TableHead
                  rowSpan={3}
                  className={`text-center font-semibold min-w-[120px] bg-card`}
                >
                  Issue Date
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className={`text-center bg-amber-100/70 font-semibold border border-amber-400/60`}
                >
                  Delivery of Imported oil tank
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className={`text-center bg-blue-100/60 font-semibold border border-blue-400/60`}
                >
                  Re-delivery of tank
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className={`text-center bg-green-100/60 font-semibold border border-green-400/60`}
                >
                  Tank Export (ref)
                </TableHead>
              </TableRow>

              {/* Row 2 */}
              <TableRow className="shadow-sm">
                <TableHead
                  rowSpan={2}
                  className={`z-20 sticky text-center min-w-[120px] bg-white`}
                >
                  Company
                </TableHead>
                <TableHead
                  colSpan={7}
                  className={`z-20 text-center bg-card`}
                >
                  INSERT / DISCHARGE FROM train
                </TableHead>
                <TableHead
                  colSpan={2}
                  className={`z-20 text-center bg-card`}
                >
                  DELIVER TO
                </TableHead>
                <TableHead
                  rowSpan={2}
                  className={`z-20 text-center min-w-[70px] bg-card`}
                >
                  unzip
                </TableHead>

                <TableHead
                  rowSpan={2}
                  className={`z-20 text-center min-w-[120px] bg-card`}
                >
                  Company
                </TableHead>
                <TableHead
                  colSpan={5}
                  className={`z-20 text-center bg-card`}
                >
                  INSERT / LIFT-OFF FROM
                </TableHead>
                <TableHead
                  colSpan={4}
                  className={`z-20 text-center bg-card`}
                >
                  SHIP / LOAD TO train
                </TableHead>
              </TableRow>

              {/* Row 3 - most detailed headers */}
              <TableRow className="bg-muted/60 shadow-sm">
                <TableHead className={`z-20 min-w-[100px] bg-muted/60`}>
                  Status
                </TableHead>
                <TableHead className={`z-20 min-w-[80px] bg-muted/60`}>
                  Cop
                </TableHead>
                <TableHead className={`z-20 min-w-[100px] bg-muted/60`}>
                  Tigger
                </TableHead>
                <TableHead className={`z-20 min-w-[100px] bg-muted/60`}>
                  plate code
                </TableHead>
                <TableHead className={`z-20 min-w-[100px] bg-muted/60`}>
                  Train
                </TableHead>
                <TableHead className={`z-20 min-w-[120px] bg-muted/60`}>
                  Arrived date
                </TableHead>
                <TableHead className={`z-20 min-w-[110px] bg-muted/60`}>
                  train no.
                </TableHead>

                <TableHead className={`z-20 min-w-[120px] bg-muted/60`}>
                  start Date
                </TableHead>
                <TableHead className={`z-20 min-w-[160px] bg-muted/60`}>
                  port
                </TableHead>

                <TableHead className="z-20 min-w-[130px] border-r border-primary/30 bg-muted/60">
                  take down Date
                </TableHead>
                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  port
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  tigger
                </TableHead>
                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  plate number
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  Status
                </TableHead>

                <TableHead className="z-20 min-w-[120px] border-r border-primary/30 bg-muted/60">
                  Loaded train
                </TableHead>
                <TableHead className="z-20 min-w-[120px] border-r border-primary/30 bg-muted/60">
                  Arrived On
                </TableHead>
                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  train no
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  team
                </TableHead>

                <TableHead className="z-20 min-w-[120px] border-r border-primary/30 bg-muted/60">
                  refe No.
                </TableHead>
                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  issue On
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  staff
                </TableHead>
                <TableHead className="z-20 min-w-[160px] border-r border-primary/30 bg-muted/60">
                  port
                </TableHead>
                <TableHead className="z-20 min-w-[130px] border-r border-primary/30 bg-muted/60">
                  actual_crt_dt
                </TableHead>

                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  ref d No.
                </TableHead>
                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  start On
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  staff
                </TableHead>
                <TableHead className="z-20 min-w-[160px] border-r border-primary/30 bg-muted/60">
                  port
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  toke down
                </TableHead>

                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  ref d No.
                </TableHead>
                <TableHead className="z-20 min-w-[110px] border-r border-primary/30 bg-muted/60">
                  started On
                </TableHead>
                <TableHead className="z-20 min-w-[100px] border-r border-primary/30 bg-muted/60">
                  staff
                </TableHead>
                <TableHead className="z-20 min-w-[160px] border-r border-primary/30 bg-muted/60">
                  port
                </TableHead>
                <TableHead className={`z-20 min-w-[120px] bg-muted/60`}>
                  toke down Status
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sampleTankData.map((row, idx) => (
                <TableRow
                  key={row.no}
                  className={`
                    border-b border-border/70
                    ${idx % 2 === 0 ? "bg-muted/30" : ""}
                    hover:bg-muted/50 transition-colors
                  `}
                >
                  <TableCell className="sticky left-0 z-10 bg-secondary text-center font-medium whitespace-nowrap border-r border-primary/30">
                    {row.no}
                  </TableCell>

                  <TableCell className="text-center whitespace-nowrap">
                    {row.quantity}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.brand}
                  </TableCell>

                  {/* IMPORT columns */}
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.company_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.status_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.cop}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.tigger_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.plate_code}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.train_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.arrived_date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.train_no_import}
                  </TableCell>

                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.start_date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.port_import}
                  </TableCell>

                  <TableCell className="text-center whitespace-nowrap border-r border-border/50">
                    {row.unzip}
                  </TableCell>

                  {/* EXPORT columns */}
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.company_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.take_down_date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.port_export_take}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.tigger_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.plate_number}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.status_export}
                  </TableCell>

                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.loaded_train}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.arrived_on}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.train_no_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.team}
                  </TableCell>

                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.issue_date}
                  </TableCell>

                  {/* Delivery of Imported oil tank */}
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.refe_no}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.issue_on}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.staff_delivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.port_delivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.actual_crt_dt}
                  </TableCell>

                  {/* Re-delivery of tank */}
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.ref_d_no_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.start_on_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.staff_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.port_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.toke_down}
                  </TableCell>

                  {/* Tank Export (ref) */}
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.ref_d_no_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.started_on_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.staff_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.port_export_final}
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium border-r border-border/50">
                    {row.toke_down_status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}