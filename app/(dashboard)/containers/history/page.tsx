// src/app/history/page.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/Customs/ContainerHistoryTable";

import { sampleTankData } from "@/data/ch";

export default function HistoryPage() {
  return (
    <div className="flex h-full flex-col gap-5">
      {/* Title area */}
      <div className="flex items-center justify-between">
        <h6 className="text-lg font-bold tracking-tight">
          Container / Tank History
        </h6>
        <p className="text-sm text-muted-foreground">
          {sampleTankData.length} records
        </p>
      </div>

      {/* Table container – constrained + scrollable */}
      <div className="relative flex-1 min-h-0 rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <div className="absolute inset-0 overflow-auto">
          <Table className="border-separate border-spacing-0">
            <TableHeader className="sticky top-0 z-20 bg-card shadow-sm">
              {/* === Row 1 === */}
              <TableRow>
                <TableHead
                  rowSpan={3}
                  className="sticky left-0 z-30 bg-secondary text-center min-w-[64px]"
                >
                  No.
                </TableHead>
                <TableHead rowSpan={3} className="text-center min-w-[96px]">
                  Quantity
                </TableHead>
                <TableHead rowSpan={3} className="min-w-[140px]">
                  Brand
                </TableHead>

                <TableHead
                  colSpan={11}
                  className="text-center bg-primary/10 font-semibold"
                >
                  IMPORT
                </TableHead>

                <TableHead
                  colSpan={10}
                  className="text-center bg-primary/5 font-semibold"
                >
                  EXPORT
                </TableHead>

                <TableHead rowSpan={3} className="text-center min-w-[120px]">
                  Issue Date
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className="text-center bg-amber-50/70"
                >
                  Delivery of Imported oil tank
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className="text-center bg-blue-50/60"
                >
                  Re-delivery of tank
                </TableHead>

                <TableHead
                  colSpan={5}
                  rowSpan={2}
                  className="text-center bg-green-50/60"
                >
                  Tank Export (ref)
                </TableHead>
              </TableRow>

              {/* === Row 2 === */}
              <TableRow>
                <TableHead rowSpan={2} className="text-center min-w-[120px]">
                  Company
                </TableHead>
                <TableHead colSpan={7} className="text-center">
                  INSERT / DISCHARGE FROM train
                </TableHead>
                <TableHead colSpan={2} className="text-center">
                  DELIVER TO
                </TableHead>
                <TableHead rowSpan={2} className="text-center min-w-[70px]">
                  unzip
                </TableHead>

                <TableHead rowSpan={2} className="text-center min-w-[120px]">
                  Company
                </TableHead>
                <TableHead colSpan={5} className="text-center">
                  INSERT / LIFT-OFF FROM
                </TableHead>
                <TableHead colSpan={4} className="text-center">
                  SHIP / LOAD TO train
                </TableHead>
              </TableRow>

              {/* === Row 3 === */}
              <TableRow className="bg-muted/50">
                {/* IMPORT – INSERT/DISCHARGE */}
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="min-w-[80px]">Cop</TableHead>
                <TableHead className="min-w-[100px]">Tigger</TableHead>
                <TableHead className="min-w-[100px]">plate code</TableHead>
                <TableHead className="min-w-[100px]">Train</TableHead>
                <TableHead className="min-w-[120px]">Arrived date</TableHead>
                <TableHead className="min-w-[110px]">train no.</TableHead>

                {/* IMPORT – DELIVER TO */}
                <TableHead className="min-w-[120px]">start Date</TableHead>
                <TableHead className="min-w-[160px]">port</TableHead>

                {/* EXPORT – INSERT/LIFT-OFF */}
                <TableHead className="min-w-[130px]">take down Date</TableHead>
                <TableHead className="min-w-[110px]">port</TableHead>
                <TableHead className="min-w-[100px]">tigger</TableHead>
                <TableHead className="min-w-[110px]">plate number</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>

                {/* EXPORT – SHIP/LOAD */}
                <TableHead className="min-w-[120px]">Loaded train</TableHead>
                <TableHead className="min-w-[120px]">Arrived On</TableHead>
                <TableHead className="min-w-[110px]">train no</TableHead>
                <TableHead className="min-w-[100px]">team</TableHead>

                {/* Delivery */}
                <TableHead className="min-w-[120px]">refe No.</TableHead>
                <TableHead className="min-w-[110px]">issue On</TableHead>
                <TableHead className="min-w-[100px]">staff</TableHead>
                <TableHead className="min-w-[160px]">port</TableHead>
                <TableHead className="min-w-[130px]">actual_crt_dt</TableHead>

                {/* Re-delivery */}
                <TableHead className="min-w-[110px]">ref d No.</TableHead>
                <TableHead className="min-w-[110px]">start On</TableHead>
                <TableHead className="min-w-[100px]">staff</TableHead>
                <TableHead className="min-w-[160px]">port</TableHead>
                <TableHead className="min-w-[100px]">toke down</TableHead>

                {/* Tank Export */}
                <TableHead className="min-w-[110px]">ref d No.</TableHead>
                <TableHead className="min-w-[110px]">started On</TableHead>
                <TableHead className="min-w-[100px]">staff</TableHead>
                <TableHead className="min-w-[160px]">port</TableHead>
                <TableHead className="min-w-[120px]">toke down Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sampleTankData.map((row, idx) => (
                <TableRow
                  key={row.no}
                  className={idx % 2 === 0 ? "bg-muted/30" : "border-1"}
                >
                  <TableCell
                    className="sticky left-0 z-10 bg-secondary text-center font-medium whitespace-nowrap"
                  >
                    {row.no}
                  </TableCell>

                  <TableCell className="text-center whitespace-nowrap">
                    {row.quantity}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{row.brand}</TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.company_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.status_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{row.cop}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.tigger_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.plate_code}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.train_import}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.arrived_date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.train_no_import}
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.start_date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.port_import}
                  </TableCell>

                  <TableCell className="text-center whitespace-nowrap">
                    {row.unzip}
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.company_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.take_down_date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.port_export_take}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.tigger_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.plate_number}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.status_export}
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.loaded_train}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.arrived_on}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.train_no_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{row.team}</TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.issue_date}
                  </TableCell>

                  <TableCell className="whitespace-nowrap">{row.refe_no}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.issue_on}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.staff_delivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.port_delivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.actual_crt_dt}
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.ref_d_no_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.start_on_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.staff_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.port_redelivery}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{row.toke_down}</TableCell>

                  <TableCell className="whitespace-nowrap">
                    {row.ref_d_no_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.started_on_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.staff_export}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {row.port_export_final}
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium">
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