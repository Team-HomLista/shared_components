import { FC } from "react";
import {
  Breadcrumb as PaginationBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

interface BreadcrumbPaginationProps {
  propertyTitle?: string;
}

export const BreadcrumbPagination: FC<BreadcrumbPaginationProps> = ({
  propertyTitle,
}) => {
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter(Boolean);
  const isDetail = pathParts?.[0] === "properties" && pathParts.length === 2;

  return (
    <>
      <PaginationBreadcrumb className="px-64 pt-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <img
                src="https://cannele-bucket.nyc3.cdn.digitaloceanspaces.com/shared/icons/logo.svg"
                alt="Logo"
                className="h-8 w-8"
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Página principal</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/properties">Propiedaes</BreadcrumbLink>
          </BreadcrumbItem>
          {isDetail && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage
                  style={{
                    maxWidth: 300,
                    display: "inline-block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {propertyTitle || "Detalles de propiedad"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </PaginationBreadcrumb>
    </>
  );
};
