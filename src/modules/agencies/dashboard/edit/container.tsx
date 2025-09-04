"use client";

import { FC } from "react";

import { AgencyHeader } from "@/components/advisor/edit/sections/agency-header";
import { AgencySidebar } from "@/components/advisor/edit/sections/sidebar";
import { AdministratorsTab } from "@/components/advisor/edit/tabs/administrators-tab";
import { CertificationsTab } from "@/components/advisor/edit/tabs/certifications-tab";
import { ExperienceTab } from "@/components/advisor/edit/tabs/experience-tab";
import { GeneralTab } from "@/components/advisor/edit/tabs/general-tab";
import { VideoTab } from "@/components/advisor/edit/tabs/video-tab";
import { TabsSection } from "@/components/ui/tabs-section";

import { agencyMock } from "./mocks";

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
              { value: "general", label: "General", content: <GeneralTab mode="agency" /> },
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
