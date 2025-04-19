"use client";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { ComparisonSection } from "@/types/plan-info";
import { Fragment } from "react";

interface ComparisonTableProps {
  sections: ComparisonSection[];
}

export function ComparisonTable({ sections }: ComparisonTableProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="sticky top-0 z-10 flex w-full flex-row bg-white pt-8 pb-4">
        <div className="flex w-2/6 items-center pl-6 text-xl font-semibold">
          PLANES DE HOMLISTA
        </div>
        <div className="flex w-1/6 flex-col items-center justify-center">
          <h3 className="mb-2 text-xl font-semibold">Perfil gratuito</h3>
          <div className="mb-4">
            <span className="text-primary text-xl font-bold">$0 MXN</span>
            <span className="ml-1 text-sm text-gray-500">/ MES</span>
          </div>
          <Button size={"lg"}>Suscribirse</Button>
        </div>
        <div className="flex w-1/6 flex-col items-center justify-center">
          <h3 className="mb-2 text-xl font-semibold">Asesor</h3>
          <div className="mb-4">
            <span className="text-primary text-xl font-bold">$1,580 MXN</span>
            <span className="ml-1 text-sm text-gray-500">/ MES</span>
          </div>
          <Button size={"lg"}>Suscribirse</Button>
        </div>
        <div className="flex w-1/6 flex-col items-center justify-center">
          <h3 className="mb-2 text-xl font-semibold">Agencia</h3>
          <div className="mb-4">
            <span className="text-primary text-xl font-bold">$3,000 MXN</span>
            <span className="ml-1 text-sm text-gray-500">/ MES</span>
          </div>
          <Button size={"lg"}>Suscribirse</Button>
        </div>
        <div className="flex w-1/6 flex-col items-center justify-center">
          <h3 className="mb-2 text-xl font-semibold">Agencia VIP</h3>
          <div className="mb-4">
            <span className="text-primary text-xl font-bold">$4,200 MXN</span>
            <span className="ml-1 text-sm text-gray-500">/ MES</span>
          </div>
          <Button size={"lg"} className="bg-accent">
            Suscribirse
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader className="h-0">
          <TableRow className="h-0">
            <TableHead className="h-0 w-2/6" />
            <TableHead className="h-0 w-1/6" />
            <TableHead className="h-0 w-1/6" />
            <TableHead className="h-0 w-1/6" />
            <TableHead className="h-0 w-1/6" />
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {sections.map((section, index) => (
            <Fragment key={index}>
              {/* Section Title */}
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="bg-[#ddf1f4] pl-6 text-left text-xl font-bold"
                >
                  {section.title}
                </TableCell>
              </TableRow>
              {/* Section Items */}
              {section.items.map((item, itemIndex) => (
                <TableRow key={itemIndex}>
                  <TableCell className="flex items-center gap-2 p-4 font-medium">
                    {item.Icon && <item.Icon className="h-5 w-5" />}
                    {item.name}
                  </TableCell>
                  {/* Free Plan */}
                  <TableCell className="text-center">
                    {typeof item.free === "string" ? (
                      <span>{item.free}</span>
                    ) : item.free ? (
                      <Check className="text-accent mx-auto h-5 w-5" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-400" />
                    )}
                  </TableCell>
                  {/* Agent Plan */}
                  <TableCell className="text-center">
                    {typeof item.agent === "string" ? (
                      <span>{item.agent}</span>
                    ) : item.agent ? (
                      <Check className="text-accent mx-auto h-5 w-5" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-400" />
                    )}
                  </TableCell>
                  {/* Agency Plan */}
                  <TableCell className="text-center">
                    {typeof item.agency === "string" ? (
                      <span>{item.agency}</span>
                    ) : item.agency ? (
                      <Check className="text-accent mx-auto h-5 w-5" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-400" />
                    )}
                  </TableCell>
                  {/* Agency VIP Plan */}
                  <TableCell className="text-center">
                    {typeof item.agencyVIP === "string" ? (
                      <span>{item.agencyVIP}</span>
                    ) : item.agencyVIP ? (
                      <Check className="text-accent mx-auto h-5 w-5" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-gray-400" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
