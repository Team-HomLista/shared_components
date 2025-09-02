import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface ReviewCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ title, content, author, date }) => {
  return (
    <div className="bg-background m-2 rounded-lg border p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-foreground font-semibold">{title}</h3>
          <div className="mt-1 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-xl leading-none"
                style={{ color: "var(--color-primary)" }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Menú de opciones */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:bg-sidebar-accent flex size-8 items-center justify-center rounded transition">
              <MoreHorizontal className="text-sidebar-foreground size-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-foreground" onClick={() => alert("Reportado")}>
              Reportar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-foreground mt-4 text-sm">{content}</p>

      <div className="text-sidebar-foreground mt-6 text-sm">
        <p className="font-semibold">{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
