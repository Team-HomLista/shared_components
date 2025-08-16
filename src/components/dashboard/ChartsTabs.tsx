"use client";

import { FC, useState } from "react";
import GaugeChart from "./GaugeChart";
import PieChartCard from "./PieChartCard";
import TopAgenciesTable from "./TopAgenciesTable";
import DemandMapChart from "./DemandMapChart";
import LeadSourcesPie from "./LeadSourcesPie";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs";
import FranchiseRankingCard from "./FranchiseRankingCard";
import ChartCard from "./ChartsSection";

interface ChartTab {
  key: string;
  label: string;
  charts: any[];
}

interface ChartsTabsProps {
  tabs: ChartTab[];
}

const ChartsTabs: FC<ChartsTabsProps> = ({ tabs }) => {
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
                      colors={["--publishable-status", "--paused-status-foreground", "--approved-status"]}
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

export default ChartsTabs;
