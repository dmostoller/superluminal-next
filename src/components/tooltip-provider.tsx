"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

export function TooltipsProvider({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
