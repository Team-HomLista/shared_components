import {
  Breadcrumb as PaginationBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@shared/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface BreadcrumbPaginationProps {
  propertyTitle?: string;
}

export const BreadcrumbPagination: FC<BreadcrumbPaginationProps> = ({ propertyTitle }) => {
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter(Boolean);
  const isPropertiesPage = pathParts?.[0] === "propiedades";
  const isDetail = isPropertiesPage && pathParts.length === 2;

  return (
    <>
      {isPropertiesPage && (
        <PaginationBreadcrumb className={isDetail ? "pt-8" : ""}>
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
              {isDetail ? (
                <BreadcrumbLink href="/propiedades" className="">
                  Propiedades
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>Propiedades</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {isDetail && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="inline-block max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
                    {propertyTitle || "Detalles de propiedad"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </PaginationBreadcrumb>
      )}
    </>
  );
};
