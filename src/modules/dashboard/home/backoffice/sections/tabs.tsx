"use client";

import { FC, useState } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DemandMapChart from "@/modules/dashboard/home/backoffice/sections/demand-chart";
import FranchiseRankingCard from "@/modules/dashboard/home/backoffice/sections/franchise-ranking";
import GaugeChart from "@/modules/dashboard/home/backoffice/sections/gauge-chart";
import LeadSourcesPie from "@/modules/dashboard/home/backoffice/sections/lead-sources-pie";
import PieChartCard from "@/modules/dashboard/home/backoffice/sections/pie-chart-card";

import ChartCard from "./charts";
import TopAgenciesTable from "./top-agencies-table";

interface ChartTab {
  key: string;
  label: string;
  charts: any[];
}

interface ChartsTabsProps {
  tabs: ChartTab[];
}

const ChartsTabsSection: FC<ChartsTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

  return (
    <section className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="gap-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key} className="px-3 py-1 text-xs font-medium">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.key}
            value={tab.key}
            className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {tab.charts.map((chart, index) => {
              switch (chart.type) {
                case "line":
                  return <ChartCard key={index} title={chart.title} data={chart.data} />;
                case "ranking":
                  return <FranchiseRankingCard key={index} data={chart.data} />;
                case "gauge":
                  return (
                    <GaugeChart
                      key={index}
                      title={chart.title}
                      percentage={chart.percentage}
                      goal={chart.goal}
                    />
                  );
                case "pie":
                  if (chart.title.includes("Fuentes")) {
                    return <LeadSourcesPie key={index} data={chart.data} />;
                  } else {
                    return <PieChartCard key={index} title={chart.title} data={chart.data} />;
                  }
                case "table":
                  return <TopAgenciesTable key={index} data={chart.data} />;
                case "bar":
                  return (
                    <DemandMapChart
                      key={index}
                      title={chart.title}
                      data={chart.data}
                      keys={Object.keys(chart.data[0]).filter((k) => k !== "name")}
                    />
                  );
                default:
                  return null;
              }
            })}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ChartsTabsSection;
