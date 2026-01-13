"use client";

import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/utils/ui";
import { getMonth, getYear } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

/** * SECTION: Types & Interfaces */
interface DateRangeProps {
  label?: string;
  placeholder?: string;
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
  className?: string;
}

interface CustomInputProps {
  value?: string;
  placeholder?:string;
  onClick?: () => void;
  onClear: () => void; 
}

/** * SECTION: Custom Input Component */
const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, placeholder, onClick, onClear }, ref) => (
    <div className="relative w-full">
      <button
        type="button"
        ref={ref}
        onClick={onClick}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border bg-white border-primary px-3 py-1 text-sm transition-all text-left cursor-pointer",
          "focus:ring-2 focus:ring-primary/20 outline-none pr-10", 
          "dark:bg-secondary dark:text-app-fg"
        )}
      >
        <span className="truncate w-full">
          {value || <span className="text-gray-400 italic">{placeholder}</span>}
        </span>
      </button>
      
      {value && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-muted-foreground hover:bg-destructive hover:text-white transition-colors cursor-pointer flex items-center justify-center z-10"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
);

CustomInput.displayName = "DateRangeInput";

/** * SECTION: Main Component */
export default function DateRangePicker({ label, placeholder, startDate, endDate, onChange, className }: DateRangeProps) {
  
  const handleDateChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) onChange(dates);
    else onChange([null, null]);
  };

  return (
    <div className={cn("flex flex-col w-full", className)}>
      {label && (
        <label className="text-sm font-medium text-app-fg">
          {label}
        </label>
      )}

      <div className="w-full relative date-picker-container">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          placeholderText={placeholder}
          customInput={<CustomInput onClear={() => onChange([null, null])} />}
          portalId="root-portal"
          popperPlacement="bottom-start"
          shouldCloseOnSelect={true}
          autoComplete="off"

          /* SECTION: Custom Header Logic */
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-3 py-2 bg-secondary/50">
              <button
                type="button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="p-1.5 rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft size={16} className="text-app-fg" />
              </button>

              <div className="text-sm font-bold text-app-fg uppercase tracking-wide">
                {date.toLocaleString('default', { month: 'long' })} {getYear(date)}
              </div>

              <button
                type="button"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="p-1.5 rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors disabled:opacity-30 cursor-pointer"
              >
                <ChevronRight size={16} className="text-app-fg" />
              </button>
            </div>
          )}
        />
      </div>

      <style jsx global>{`
        .date-picker-container .react-datepicker-wrapper {
          display: block !important;
          width: 100% !important;
        }

        .react-datepicker {
          border: 1px solid var(--color-border) !important;
          background-color: var(--color-app-bg) !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1) !important;
          font-family: inherit !important;
          margin-top: 8px !important;
          overflow: hidden;
        }

        /* Hide default navigation and triangle */
        .react-datepicker__navigation,
        .react-datepicker__triangle {
          display: none !important;
        }

        .react-datepicker__header {
          background-color: transparent !important;
          border-bottom: 1px solid var(--color-border) !important;
          padding: 0 !important;
        }

        /* Day Labels (Su, Mo, Tu...) */
        .react-datepicker__day-names {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px 0 12px;
        }
        .react-datepicker__day-name {
          font-size: 0.75rem !important;
          font-weight: 600 !important;
          color: var(--color-app-fg) !important;
          opacity: 0.5;
          width: 2.5rem !important;
        }

        /* Month Container (The numbers) */
        .react-datepicker__month {
          margin: 0 !important;
          padding: 8px 12px 12px 12px !important;
        }

        /* Individual Day Styles */
        .react-datepicker__day {
          width: 2.5rem !important;
          line-height: 2.5rem !important;
          margin: 0.1rem !important;
          font-size: 0.875rem !important;
          border-radius: 8px !important;
          color: var(--color-app-fg) !important;
          transition: all 0.2s ease;
          cursor: pointer !important;
        }

        .react-datepicker__day:hover {
          background-color: var(--color-secondary) !important;
        }

        /* Range Styles - Using Primary (Green) */
        .react-datepicker__day--in-range,
        .react-datepicker__day--selected,
        .react-datepicker__day--in-selecting-range {
          background-color: var(--color-primary) !important;
          color: #000 !important;
          font-weight: 700 !important;
        }

        /* Dim days from other months */
        .react-datepicker__day--outside-month {
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
}