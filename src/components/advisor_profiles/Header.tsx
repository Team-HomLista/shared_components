import { Button } from "@/shared/components/ui";
import { Globe, Languages, Briefcase } from "lucide-react";

interface HeaderProps {
  imageUrl?: string;
  name: string;
  role: string;
  location: string;
  languages: string;
  experience: string;
}

export function Header({
  imageUrl,
  name,
  role,
  location,
  languages,
  experience,
}: HeaderProps) {
  return (
    <div className="bg flex flex-col gap-4 rounded-xl border px-6 py-5 sm:flex-row sm:items-center sm:gap-6">
      <div className="bg-primary-foreground text-foreground flex h-30 w-30 items-center justify-center rounded-full text-xl font-bold shadow-md overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-muted-foreground">
            Placeholder
          </div>
        )}
      </div>

      <div className="flex-1 space-y-1">
        <h1 className="text-foreground text-2xl font-semibold">{name}</h1>
        <Button
          variant="link"
          className="h-auto p-0 text-sm font-medium text-ring"
        >
          {role}
        </Button>

        <div className="text-foreground mt-2 flex flex-wrap gap-3 pt-8 text-sm">
          <div className="flex items-center gap-1">
            <Globe size={16} /> {location}
          </div>
          <div className="flex items-center gap-1">
            <Languages size={16} /> {languages}
          </div>
          <div className="flex items-center gap-1">
            <Briefcase size={16} /> {experience}
          </div>
        </div>
      </div>
    </div>
  );
}
