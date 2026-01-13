"use client";

import React from 'react';
import Select, { GroupBase, Props, SingleValue, ActionMeta } from 'react-select';
import { cn } from "@/utils/ui"; 

/** * SECTION: Types & Interfaces */
export interface ContainerOption {
  value: string;
  label: string;
}

interface ContainerSelectProps extends Omit<Props<ContainerOption, false, GroupBase<ContainerOption>>, 'value' | 'onChange'> {
  label?: string;
  error?: string;
  id: string;
  value?: ContainerOption | null;
  onChange?: (newValue: SingleValue<ContainerOption>, actionMeta: ActionMeta<ContainerOption>) => void;
}

export default function ContainerSelect({ 
  label, 
  error, 
  id,
  className, 
  value,
  onChange,
  ...props 
}: ContainerSelectProps) {
  return (
    /** * SECTION: Outer Wrapper */
    <div className={cn("flex flex-col gap-1.5 w-full text-left", className)}>
      
      {/* SECTION: Label */}
      {label && (
        <label className="text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
          {label}
        </label>
      )}

      {/** * SECTION: React Select Core */}
      <Select
        unstyled
        isSearchable
        value={value}
        instanceId={id}
        onChange={onChange}
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}

        /** * SECTION: The Bulletproof Cursor Fix
         * We use 'styles' here because react-select applies 'cursor: default' 
         * directly to the element style, which often ignores Tailwind classes.
         */
        styles={{
          option: (base) => ({
            ...base,
            cursor: 'pointer', // This overrides the library's internal 'default' cursor
          }),
          control: (base) => ({
            ...base,
            cursor: 'pointer',
          })
        }}
        
        /** * SECTION: Tailwind Class Mappings */
        classNames={{
          container: () => "cursor-pointer",

          control: ({ isFocused }) => cn(
            "flex h-10 w-full rounded-md border bg-white border-primary px-3 py-1 text-sm transition-all cursor-pointer",
            isFocused ? "border-primary ring-2 ring-primary/20" : "hover:border-accent-foreground/30"
          ),

          input: () => "text-foreground font-sans cursor-pointer",
          singleValue: () => "text-foreground cursor-pointer",

          menu: () => "mt-2 z-[9999] text-sm text-semibold border bg-white shadow-md rounded-md overflow-hidden animate-in fade-in-0 zoom-in-95 cursor-pointer",

          option: ({ isFocused, isSelected }) => cn(
            "relative flex w-full select-none items-center px-2 py-1.5 text-sm outline-none transition-colors",
            "cursor-pointer", 
            isFocused && "bg-slate-100 text-accent-foreground",
            isSelected && "bg-primary text-primary-foreground",
            "active:opacity-80"
          ),

          placeholder: () => "text-gray-400 italic",
          indicatorsContainer: () => "gap-1 cursor-pointer px-2",

          dropdownIndicator: ({ selectProps }) => cn(
            "text-muted-foreground hover:text-foreground transition-transform duration-200 cursor-pointer",
            selectProps.menuIsOpen ? "rotate-180 text-primary" : "rotate-0"
          ),

          clearIndicator: () => "text-muted-foreground hover:text-destructive cursor-pointer",

          noOptionsMessage: () => "p-4 text-sm text-muted-foreground text-center cursor-default"
        }}
        {...props}
      />

      {/* SECTION: Error Message */}
      {error && <p className="text-xs text-destructive font-medium mt-1">{error}</p>}
    </div>
  );
}