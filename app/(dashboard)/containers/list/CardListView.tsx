// src/components/history/CardListView.tsx
import { cn } from "@/utils/ui";
import { type RowData } from "@/utils/cn/table-config-ui";

interface CardListViewProps {
  data: RowData[];
  selectedNo: string | null;
  onRowSelect: (row: RowData) => void;
}

export function CardListView({ data, selectedNo, onRowSelect }: CardListViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
      {data.map((row) => {
        const isSelected = selectedNo === row.no;

        return (
          <div
            key={row.no}
            onClick={() => onRowSelect(row)}
            className={cn(
              "border rounded-lg p-4 bg-card shadow-sm transition-all cursor-pointer",
              isSelected
                ? "border-primary ring-2 ring-primary/30 shadow-md"
                : "border-border hover:border-primary/50 hover:shadow-md"
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-base">No. {row.no}</h3>
              <span className="text-xs text-muted-foreground font-medium">
                {row.quantity}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Brand</span>
                <span className="font-medium">{row.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Import Co.</span>
                <span>{row.company_import || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Export Co.</span>
                <span>{row.company_export || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Issue Date</span>
                <span>{row.issue_date || "—"}</span>
              </div>
              {/* Add more key fields here as needed */}
            </div>
          </div>
        );
      })}
    </div>
  );
}