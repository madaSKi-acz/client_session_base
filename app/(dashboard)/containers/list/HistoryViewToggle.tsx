// src/components/history/HistoryViewToggle.tsx
import { cn } from "@/utils/ui";
import { LayoutGrid, List } from "lucide-react";

interface HistoryViewToggleProps {
  viewMode: "table" | "card";
  onViewChange: (mode: "table" | "card") => void;
}

export function HistoryViewToggle({ viewMode, onViewChange }: HistoryViewToggleProps) {
  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-background p-1 shadow-sm">
      {/* Table view button */}
      <button
        onClick={() => onViewChange("table")}
        title="View as table"
        className={cn(
          "inline-flex h-8 w-10 items-center justify-center rounded-md text-sm transition-all cursor-pointer",
          viewMode === "table"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted/70"
        )}
      >
        <LayoutGrid className="h-3.5 w-3.5" />
      </button>

      {/* Card/List view button */}
      <button
        onClick={() => onViewChange("card")}
        title="View as card"
        className={cn(
          "inline-flex h-8 w-10 items-center justify-center rounded-md text-sm transition-all cursor-pointer",
          viewMode === "card"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted/70"
        )}
      >
        <List className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}