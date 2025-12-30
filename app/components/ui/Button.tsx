"use client";

export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="mt-4 w-full cursor-pointer border-1 bg-white text-lg font-semibold rounded-lg px-4 py-2 text-black disabled:opacity-50"
    >
      {children}
    </button>
  );
}
