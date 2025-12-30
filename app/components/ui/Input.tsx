"use client";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="mb-3 bg-white text-black focus:outline-none w-full rounded-lg border px-3 py-2"
    />
  );
}
