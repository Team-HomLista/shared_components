"use client";

import { FC } from "react";

import { TabsSection } from "@/shared/components/ui/tabs-section";

import { agencyMock } from "./mocks";
import { AgencyHeader } from "./sections/agency-header";
import { AgencySidebar } from "./sections/agency-sidebar";
import { AdministratorsTab } from "./tabs/administrators-tab";
import { CertificationsTab } from "./tabs/certifications-tab";
import { ExperienceTab } from "./tabs/experience-tab";
import { GeneralTab } from "./tabs/general-tab";
import { VideoTab } from "./tabs/video-tab";

interface ContainerProps {
  slug?: string;
}

export const AgencyEditContainer: FC<ContainerProps> = () => {
  return (
    <section className="container mx-auto space-y-8 p-6">
      {/* Header */}
      <AgencyHeader {...agencyMock.header} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Tabs Content */}
        <div className="lg:col-span-3">
          <TabsSection
            defaultValue="general"
            items={[
              { value: "general", label: "General", content: <GeneralTab /> },
              { value: "admins", label: "Administradores", content: <AdministratorsTab /> },
              { value: "experience", label: "Experiencia", content: <ExperienceTab /> },
              {
                value: "certifications",
                label: "Certificaciones",
                content: <CertificationsTab />
              },
              { value: "videos", label: "Videos", content: <VideoTab /> }
            ]}
          />
        </div>

        {/* Sidebar */}
        <AgencySidebar {...agencyMock.sidebar} />
      </div>
    </section>
  );
};
