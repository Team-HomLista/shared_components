"use client";
import { Check, X } from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ComparisonSection } from "@/types/plan-info";

interface ComparisonTableProps {
  sections: ComparisonSection[];
}

type PlanType = "free" | "agent" | "agency" | "agencyVIP";

const planInfo = {
  free: { name: "Perfil gratuito", price: "$0 MXN", description: "/ MES" },
  agent: { name: "Asesor", price: "$1,580 MXN", description: "/ MES" },
  agency: { name: "Agencia", price: "$3,000 MXN", description: "/ MES" },
  agencyVIP: { name: "Agencia VIP", price: "$4,200 MXN", description: "/ MES" }
};

export function ComparisonTable({ sections }: ComparisonTableProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("free");
  return (
    <div className="flex w-full flex-col">
      {/* Desktop View - Hidden below 1100px */}
      <div className="hidden w-full flex-col xl:flex">
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
            <Button size="lg">Suscribirse</Button>
          </div>
          <div className="flex w-1/6 flex-col items-center justify-center">
            <h3 className="mb-2 text-xl font-semibold">Asesor</h3>
            <div className="mb-4">
              <span className="text-primary text-xl font-bold">$1,580 MXN</span>
              <span className="ml-1 text-sm text-gray-500">/ MES</span>
            </div>
            <Button size="lg">Suscribirse</Button>
          </div>
          <div className="flex w-1/6 flex-col items-center justify-center">
            <h3 className="mb-2 text-xl font-semibold">Agencia</h3>
            <div className="mb-4">
              <span className="text-primary text-xl font-bold">$3,000 MXN</span>
              <span className="ml-1 text-sm text-gray-500">/ MES</span>
            </div>
            <Button size="lg">Suscribirse</Button>
          </div>
          <div className="flex w-1/6 flex-col items-center justify-center">
            <h3 className="mb-2 text-xl font-semibold">Agencia VIP</h3>
            <div className="mb-4">
              <span className="text-primary text-xl font-bold">$4,200 MXN</span>
              <span className="ml-1 text-sm text-gray-500">/ MES</span>
            </div>
            <Button size="lg" variant="secondary">
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
                  <TableCell colSpan={5} className="bg-[#ddf1f4] pl-6 text-left text-xl font-bold">
                    {section.title}
                  </TableCell>
                </TableRow>
                {/* Section Items */}
                {section.items.map((item, itemIndex) => (
                  <TableRow key={itemIndex}>
                    <TableCell className="flex items-center gap-2 p-4 font-medium">
                      {item.Icon && <item.Icon className="h-5 w-5" />}
                      {item.name}
                      {item.Information && item.infoDescription && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-pointer">
                              <item.Information className="h-4.5 w-4.5 hover:text-gray-700" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-[200px] text-sm">{item.infoDescription}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
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

      {/* Mobile View - Visible below 1100px */}
      <div className="flex w-full flex-col xl:hidden">
        {/* Plan Selector */}
        <div className="sticky top-0 z-10 bg-white px-6 pt-8 pb-6">
          <div className="mb-6">
            <h2 className="mb-6 text-center text-xl font-semibold">PLANES DE HOMLISTA</h2>
            <Select
              value={selectedPlan}
              onValueChange={(value: PlanType) => setSelectedPlan(value)}
            >
              <SelectTrigger className="h-auto min-h-[60px] w-full p-4">
                <SelectValue>
                  <div className="flex flex-col items-start gap-1 text-left">
                    <span className="text-base font-semibold">{planInfo[selectedPlan].name}</span>
                    <span className="text-sm text-gray-500">
                      {planInfo[selectedPlan].price} {planInfo[selectedPlan].description}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="free" className="h-auto p-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-base font-semibold">Perfil gratuito</span>
                    <span className="text-sm text-gray-500">$0 MXN / MES</span>
                  </div>
                </SelectItem>
                <SelectItem value="agent" className="h-auto p-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-base font-semibold">Asesor</span>
                    <span className="text-sm text-gray-500">$1,580 MXN / MES</span>
                  </div>
                </SelectItem>
                <SelectItem value="agency" className="h-auto p-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-base font-semibold">Agencia</span>
                    <span className="text-sm text-gray-500">$3,000 MXN / MES</span>
                  </div>
                </SelectItem>
                <SelectItem value="agencyVIP" className="h-auto p-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-base font-semibold">Agencia VIP</span>
                    <span className="text-sm text-gray-500">$4,200 MXN / MES</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Selected Plan Info */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 text-lg font-semibold">{planInfo[selectedPlan].name}</h3>
            <div className="mb-5">
              <span className="text-primary text-2xl font-bold">
                {planInfo[selectedPlan].price}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {planInfo[selectedPlan].description}
              </span>
            </div>
            <Button
              size="lg"
              className={`w-full max-w-[200px] ${selectedPlan === "agencyVIP" ? "bg-accent" : ""}`}
            >
              Suscribirse
            </Button>
          </div>
        </div>

        {/* Mobile Table with 50/50 layout */}
        <div className="w-full overflow-x-hidden">
          <Table className="w-full table-fixed">
            <TableHeader className="h-0">
              <TableRow className="h-0">
                <TableHead className="h-0 w-1/2" />
                <TableHead className="h-0 w-1/2" />
              </TableRow>
            </TableHeader>

            <TableBody>
              {sections.map((section, index) => (
                <Fragment key={index}>
                  {/* Section Title */}
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="bg-[#ddf1f4] p-2! pl-4 text-left text-lg font-bold"
                    >
                      {section.title}
                    </TableCell>
                  </TableRow>
                  {/* Section Items */}
                  {section.items.map((item, itemIndex) => (
                    <TableRow key={itemIndex}>
                      <TableCell className="w-1/2 p-3 align-top font-medium">
                        <div className="flex items-start gap-2 text-wrap">
                          {item.Icon && <item.Icon className="mt-0.5 h-4 w-4 flex-shrink-0" />}
                          <span className="min-w-0 flex-1 text-sm text-clip">{item.name}</span>
                          {item.Information && item.infoDescription && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="flex-shrink-0 cursor-pointer">
                                  <item.Information className="h-4 w-4 hover:text-gray-700" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-[200px] text-sm">{item.infoDescription}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                      </TableCell>
                      {/* Selected Plan Value */}
                      <TableCell className="w-1/2 p-3 text-center align-top">
                        {(() => {
                          const value = item[selectedPlan];
                          if (typeof value === "string") {
                            return <span className="text-sm text-wrap">{value}</span>;
                          } else if (value) {
                            return <Check className="text-accent mx-auto h-5 w-5" />;
                          } else {
                            return <X className="mx-auto h-5 w-5 text-gray-400" />;
                          }
                        })()}
                      </TableCell>
                    </TableRow>
                  ))}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
