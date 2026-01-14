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


  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between px-1">
        <h6 className="text-lg font-bold tracking-tight">
          Container / Tank History
        </h6>
       
      </div>

      {/* Table wrapper */}
      <div className="relative flex-1 min-h-0 rounded-lg border-2 border-primary/80 bg-card shadow-md overflow-hidden">
        <div className="absolute inset-0 overflow-auto">
                   <Table className="border-separate border-spacing-0 min-w-max">
            <TableHeader className="sticky top-0 z-20 bg-card shadow-sm">
              {/* Row 1 */}
              <TableRow className="border-b-2 border-primary/50">
                <TableHead
                  rowSpan={3}
                  className="sticky left-0 z-30 bg-secondary text-center font-semibold min-w-[64px] border-r border-primary/30"
                >
                  No.
                </TableHead>
                <TableHead rowSpan={3} className="text-center font-semibold min-w-[96px] border-r border-primary/30">
                  Quantity
                </TableHead>
                <TableHead rowSpan={3} className="min-w-[140px] font-semibold border-r border-primary/30">
                  Brand
                </TableHead>

                <TableHead
                  colSpan={11}
                  className="text-center bg-primary/10 font-bold border-b-2 border-primary/50"
                >
                  IMPORT
                </TableHead>

                <TableHead
                  colSpan={10}
                  className="text-center bg-primary/5 font-bold border-b-2 border-primary/50"
                >
                  EXPORT
                </TableHead>

                <TableHead rowSpan={3} className="text-center font-semibold min-w-[120px] border-r border-primary/30">
                  Issue Date
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className="text-center bg-amber-100/70 font-semibold border-b-2 border-amber-400/60"
                >
                  Delivery of Imported oil tank
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className="text-center bg-blue-100/60 font-semibold border-b-2 border-blue-400/60"
                >
                  Re-delivery of tank
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className="text-center bg-green-100/60 font-semibold border-b-2 border-green-400/60"
                >
                  Tank Export (ref)
                </TableHead>
              </TableRow>

              {/* Row 2 */}
              <TableRow className="border-b border-primary/40">
                <TableHead rowSpan={2} className="text-center min-w-[120px] border-r border-primary/30">
                  Company
                </TableHead>
                <TableHead colSpan={7} className="text-center border-b border-primary/30">
                  INSERT / DISCHARGE FROM train
                </TableHead>
                <TableHead colSpan={2} className="text-center border-b border-primary/30">
                  DELIVER TO
                </TableHead>
                <TableHead rowSpan={2} className="text-center min-w-[70px] border-r border-primary/30">
                  unzip
                </TableHead>

                <TableHead rowSpan={2} className="text-center min-w-[120px] border-r border-primary/30">
                  Company
                </TableHead>
                <TableHead colSpan={5} className="text-center border-b border-primary/30">
                  INSERT / LIFT-OFF FROM
                </TableHead>
                <TableHead colSpan={4} className="text-center border-b border-primary/30">
                  SHIP / LOAD TO train
                </TableHead>
              </TableRow>

              {/* Row 3 */}
              <TableRow className="bg-muted/60 border-b-2 border-primary/50">
                <TableHead className="min-w-[100px] border-r border-primary/30">Status</TableHead>
                <TableHead className="min-w-[80px] border-r border-primary/30">Cop</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">Tigger</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">plate code</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">Train</TableHead>
                <TableHead className="min-w-[120px] border-r border-primary/30">Arrived date</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">train no.</TableHead>

                <TableHead className="min-w-[120px] border-r border-primary/30">start Date</TableHead>
                <TableHead className="min-w-[160px] border-r border-primary/30">port</TableHead>

                <TableHead className="min-w-[130px] border-r border-primary/30">take down Date</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">port</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">tigger</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">plate number</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">Status</TableHead>

                <TableHead className="min-w-[120px] border-r border-primary/30">Loaded train</TableHead>
                <TableHead className="min-w-[120px] border-r border-primary/30">Arrived On</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">train no</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">team</TableHead>

                <TableHead className="min-w-[120px] border-r border-primary/30">refe No.</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">issue On</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">staff</TableHead>
                <TableHead className="min-w-[160px] border-r border-primary/30">port</TableHead>
                <TableHead className="min-w-[130px] border-r border-primary/30">actual_crt_dt</TableHead>

                <TableHead className="min-w-[110px] border-r border-primary/30">ref d No.</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">start On</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">staff</TableHead>
                <TableHead className="min-w-[160px] border-r border-primary/30">port</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">toke down</TableHead>

                <TableHead className="min-w-[110px] border-r border-primary/30">ref d No.</TableHead>
                <TableHead className="min-w-[110px] border-r border-primary/30">started On</TableHead>
                <TableHead className="min-w-[100px] border-r border-primary/30">staff</TableHead>
                <TableHead className="min-w-[160px] border-r border-primary/30">port</TableHead>
                <TableHead className="min-w-[120px]">toke down Status</TableHead>
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
                  <TableCell
                    className="sticky left-0 z-10 bg-secondary text-center font-medium whitespace-nowrap border-r border-primary/30"
                  >
                    {row.no}
                  </TableCell>

                  <TableCell className="text-center whitespace-nowrap border-r border-border/50">
                    {row.quantity}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.brand}
                  </TableCell>

                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.company_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">
                    {row.status_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap border-r border-border/50">{row.cop}</TableCell>
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
