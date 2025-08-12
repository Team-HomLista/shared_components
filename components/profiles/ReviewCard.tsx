import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/components/ui/dropdown-menu";

interface ReviewCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  content,
  author,
  date,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm bg-background m-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
          <div className="flex gap-1 mt-1">
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
            <button className="size-8 flex items-center justify-center rounded hover:bg-sidebar-accent transition">
              <MoreHorizontal className="size-5 text-sidebar-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-foreground"
              onClick={() => alert("Reportado")}
            >
              Reportar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-sm text-foreground mt-4">{content}</p>

      <div className="mt-6 text-sm text-sidebar-foreground">
        <p className="font-semibold">{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
