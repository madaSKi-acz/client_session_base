// src/components/table/TableComplexHeader.tsx
import { TableHead, TableRow, TableHeader } from "@/app/components/ui/Customs/DynamicTable";

export function TableComplexHeader() {
  return (
    <TableHeader className="bg-card">
      {/* Row 1 - Top level groups */}
      <TableRow>
        <TableHead
          rowSpan={3}
          className="sticky left-0 top-0 z-30 bg-secondary text-center font-semibold min-w-[64px] border-b border-r border-primary"
        >
          No.
        </TableHead>
        <TableHead
          rowSpan={3}
          className="sticky top-0 z-20 bg-secondary text-center font-semibold min-w-[96px] border-b border-r border-primary"
        >
          Quantity
        </TableHead>
        <TableHead
          rowSpan={3}
          className="sticky top-0 z-20 bg-secondary text-center font-semibold min-w-[140px] border-b border-primary py-1.5"
        >
          Brand
        </TableHead>

        <TableHead colSpan={11} className="text-center bg-primary/10 font-bold border-b border-primary">
          IMPORT
        </TableHead>

        <TableHead colSpan={10} className="text-center bg-primary/5 font-bold border-b border-primary">
          EXPORT
        </TableHead>

        <TableHead
          rowSpan={3}
          className="sticky top-0 z-20 text-center font-semibold min-w-[120px] bg-card border-b border-primary"
        >
          Issue Date
        </TableHead>

        <TableHead
          colSpan={5}
          rowSpan={2}
          className="text-center bg-amber-100/70 font-semibold border border-amber-400/60"
        >
          Delivery of Imported oil tank
        </TableHead>

        <TableHead
          colSpan={5}
          rowSpan={2}
          className="text-center bg-blue-100/60 font-semibold border border-blue-400/60"
        >
          Re-delivery of tank
        </TableHead>

        <TableHead
          colSpan={5}
          rowSpan={2}
          className="text-center bg-green-100/60 font-semibold border border-green-400/60"
        >
          Tank Export (ref)
        </TableHead>
      </TableRow>

      {/* Row 2 */}
      <TableRow className="shadow-sm">
        <TableHead
          rowSpan={2}
          className="left-[64px] top-0 z-30 bg-secondary text-center min-w-[120px] border-b border-r border-primary"
        >
          Company
        </TableHead>
        <TableHead colSpan={7} className="text-center bg-card border-b border-primary">
          INSERT / DISCHARGE FROM train
        </TableHead>
        <TableHead colSpan={2} className="text-center bg-card border-b border-primary">
          DELIVER TO
        </TableHead>
        <TableHead
          rowSpan={2}
          className="sticky top-0 z-20 text-center min-w-[70px] bg-card border-b border-primary"
        >
          unzip
        </TableHead>

        <TableHead
          rowSpan={2}
          className="text-center min-w-[120px] bg-card border-b border-primary"
        >
          Company
        </TableHead>
        <TableHead colSpan={5} className="text-center bg-card border-b border-primary">
          INSERT / LIFT-OFF FROM
        </TableHead>
        <TableHead colSpan={4} className="text-center bg-card border-b border-primary">
          SHIP / LOAD TO train
        </TableHead>
      </TableRow>

      {/* Row 3 - detailed headers */}
      <TableRow className="bg-muted/60 shadow-sm">
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30">Status</TableHead>
        <TableHead className="z-20 min-w-[80px] bg-muted/60 border-r border-primary/30">Cop</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30">Tigger</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30">plate code</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30">Train</TableHead>
        <TableHead className="z-20 min-w-[120px] bg-muted/60 border-r border-primary/30">Arrived date</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30">train no.</TableHead>

        <TableHead className="z-20 min-w-[120px] bg-muted/60 border-r border-primary/30">start Date</TableHead>
        <TableHead className="z-20 min-w-[160px] bg-muted/60 border-r border-primary/30">port</TableHead>

        <TableHead className="z-20 min-w-[130px] bg-muted/60 border-r border-primary/30 text-center">take down Date</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">port</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">tigger</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">plate number</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">Status</TableHead>

        <TableHead className="z-20 min-w-[120px] bg-muted/60 border-r border-primary/30 text-center">Loaded train</TableHead>
        <TableHead className="z-20 min-w-[120px] bg-muted/60 border-r border-primary/30 text-center">Arrived On</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">train no</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">team</TableHead>

        <TableHead className="z-20 min-w-[120px] bg-muted/60 border-r border-primary/30 text-center">refe No.</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">issue On</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">staff</TableHead>
        <TableHead className="z-20 min-w-[160px] bg-muted/60 border-r border-primary/30 text-center">port</TableHead>
        <TableHead className="z-20 min-w-[130px] bg-muted/60 border-r border-primary/30 text-center">actual_crt_dt</TableHead>

        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">ref d No.</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">start On</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">staff</TableHead>
        <TableHead className="z-20 min-w-[160px] bg-muted/60 border-r border-primary/30 text-center">port</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">toke down</TableHead>

        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">ref d No.</TableHead>
        <TableHead className="z-20 min-w-[110px] bg-muted/60 border-r border-primary/30 text-center">started On</TableHead>
        <TableHead className="z-20 min-w-[100px] bg-muted/60 border-r border-primary/30 text-center">staff</TableHead>
        <TableHead className="z-20 min-w-[160px] bg-muted/60 border-r border-primary/30 text-center">port</TableHead>
        <TableHead className="z-20 min-w-[120px] bg-muted/60 text-center">toke down Status</TableHead>
      </TableRow>
    </TableHeader>
  );
}