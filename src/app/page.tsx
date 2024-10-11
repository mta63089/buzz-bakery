import Dashboard from "@/components/dashboard-06";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="">
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    </div>
  );
}
