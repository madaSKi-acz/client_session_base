"use client";

import { useEffect, useState } from "react";

interface ConfirmModalProps {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  danger = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const [visible, setVisible] = useState(false);

  // Trigger enter animation
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeWithAnimation = (action: () => void) => {
    setVisible(false);
    setTimeout(action, 200); // match transition duration
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-opacity duration-200
        ${visible ? "opacity-100" : "opacity-0"}
        bg-black/40 backdrop-blur-sm
      `}
    >
      <div
        className={`
          w-full max-w-md rounded-xl bg-white p-6 shadow-xl
          transform transition-all duration-200 ease-out
          ${visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-2"}
        `}
      >
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => closeWithAnimation(onCancel)}
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {cancelText}
          </button>

          <button
            onClick={() => closeWithAnimation(onConfirm)}
            className={`rounded-md px-4 py-2 text-sm font-medium text-white cursor-pointer
              ${danger
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"}
            `}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
