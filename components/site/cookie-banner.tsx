"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "openlawuk-cookie-notice";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore quota / private-mode failures; still hide for this session.
    }
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <section
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1a1a1a] bg-[#FAF9F6]"
    >
      <div className="flex flex-col items-stretch gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="text-body-md text-[#0b1c30]">
          This website uses cookies to enhance the user experience.
        </p>
        <Button type="button" variant="secondary" onClick={dismiss} className="shrink-0">
          I understand
        </Button>
      </div>
    </section>
  );
}
