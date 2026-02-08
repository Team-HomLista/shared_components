
import { Globe, Languages, Briefcase } from "lucide-react";
import { Button } from "../ui/button";

export function AgentHeader() {
  return (
    <div className="bg flex flex-col gap-4 rounded-xl border px-6 py-5 sm:flex-row sm:items-center sm:gap-6">
      <div className="bg-primary-foreground text-foreground flex h-30 w-30 items-center justify-center rounded-full text-xl font-bold shadow-md">
        CM
      </div>

      <div className="flex-1 space-y-1">
        <h1 className="text-foreground text-2xl font-semibold">
          Carlos Mendoza
        </h1>
        <Button
          variant="link"
          className="h-auto p-0 text-sm font-medium text-ring"
        >
          Real Estate Property
        </Button>

        <div className="text-foreground mt-2 flex flex-wrap gap-3 pt-8 text-sm">
          <div className="flex items-center gap-1">
            <Globe size={16} /> Cancún, Quintana Roo
          </div>
          <div className="flex items-center gap-1">
            <Languages size={16} /> Español, Inglés, Francés
          </div>
          <div className="flex items-center gap-1">
            <Briefcase size={16} /> 5 años de experiencia
          </div>
        </div>
      </div>
    </div>
  );
}
