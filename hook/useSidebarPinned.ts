"use client";

import { useEffect, useState } from "react";

export function useSidebarPinned() {
  const [isPinned, setIsPinned] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage only after mount (client-side)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sidebarPinned");
      if (stored !== null) {
        const parsed = JSON.parse(stored);
        if (typeof parsed === "boolean") {
          setIsPinned(parsed);
        }
      }
    } catch (error) {
      console.warn("Failed to load sidebarPinned from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const togglePinned = () => {
    const newValue = !isPinned;
    setIsPinned(newValue);
    try {
      localStorage.setItem("sidebarPinned", JSON.stringify(newValue));
    } catch (error) {
      console.warn("Failed to save sidebarPinned", error);
    }
  };

  const setPinned = (value: boolean) => {
    setIsPinned(value);
    try {
      localStorage.setItem("sidebarPinned", JSON.stringify(value));
    } catch (error) {
      console.warn("Failed to save sidebarPinned", error);
    }
  };

  return { isPinned, togglePinned, setPinned, isLoaded };
}   