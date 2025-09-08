"use client";

import { FC } from "react";

import { AgencyHeader } from "@/components/advisor/edit/sections/agency-header";
import { AgencySidebar } from "@/components/advisor/edit/sections/sidebar";
import { CertificationsTab } from "@/components/advisor/view/tabs/certifications-tab";
import { ExperienceTab } from "@/components/advisor/view/tabs/experience-tab";
import { GeneralTab } from "@/components/advisor/view/tabs/general-tab";
import { VideoTab } from "@/components/advisor/view/tabs/videos-tab";
import { TabsSection } from "@/components/ui/tabs-section";

import {
  agencyMock,
  generalTabMock,
  experienceTabMock,
  certificationsTabMock,
  videoTabMock
} from "./mocks";

interface ContainerProps {
  slug?: string;
}

export const AgencyViewContainer: FC<ContainerProps> = () => {
  return (
    <section className="container mx-auto space-y-8 p-6">
      {/* Header */}
      <AgencyHeader {...agencyMock.header} hideDeactivateOption />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Tabs Content */}
        <div className="lg:col-span-3">
          <TabsSection
            defaultValue="general"
            items={[
              {
                value: "general",
                label: "General",
                content: <GeneralTab data={generalTabMock} mode="agency" />
              },
              {
                value: "experience",
                label: "Experiencia",
                content: <ExperienceTab data={experienceTabMock} />
              },
              {
                value: "certifications",
                label: "Certificaciones",
                content: <CertificationsTab data={certificationsTabMock} />
              },
              { value: "videos", label: "Videos", content: <VideoTab url={videoTabMock.url} /> }
            ]}
          />
        </div>

        {/* Sidebar */}
        <AgencySidebar {...agencyMock.sidebar} />
      </div>
    </section>
  );
};
