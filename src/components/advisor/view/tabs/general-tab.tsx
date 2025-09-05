"use client";

import { Globe, Linkedin, Facebook, Mail, Instagram, Phone } from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface GeneralTabProps {
  mode: "agency" | "agent";
  data: {
    state: string;
    address: string;
    lada: string;
    phone: string;
    extension?: string;
    website?: string;
    email?: string;
    linkedin?: string;
    facebook?: string;
    username?: string;
    contactPhone?: string;
    agency?: string;
    mobile?: string;
  };
}

export const GeneralTab: FC<GeneralTabProps> = ({ mode, data }) => {
  const { t } = useTranslation("auth");

  const Item = ({
    title,
    value,
    prefixNode
  }: {
    title?: string;
    value?: string;
    prefixNode?: React.ReactNode;
  }) => (
    <div className="space-y-1">
      {title && <p className="text-muted-foreground text-sm font-medium">{title}</p>}
      <div className="flex items-center gap-2 text-sm">
        {prefixNode}
        <span className="text-foreground">{value || "—"}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Agency */}
      {mode === "agent" && (
        <Item title={t("generalForm.fields.agency.label")} value={data.agency} />
      )}

      {/* State */}
      <Item title={t("generalForm.fields.state.label")} value={data.state} />

      {/* Email */}
      {mode === "agent" && <Item title={t("generalForm.fields.email.label")} value={data.email} />}

      {/* Address */}
      <Item title={t("generalForm.fields.address.label")} value={data.address} />

      {/* Office Phone */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Item title={t("generalForm.fields.phone.label")} value={data.phone} />
        <Item title={t("generalForm.fields.extension.label")} value={data.extension} />
      </div>

      {/* Mobile */}
      {mode === "agent" && (
        <Item title={t("generalForm.fields.mobile.label")} value={data.mobile} />
      )}

      {/* Contact */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Item
          title={t("generalForm.fields.website.label")}
          value={data.website}
          prefixNode={<Globe className="text-foreground h-4 w-4" />}
        />
        <Item
          title={t("generalForm.fields.email.label")}
          value={data.website}
          prefixNode={<Mail className="text-foreground h-4 w-4" />}
        />
        <Item
          title={t("generalForm.fields.linkedin.label")}
          value={data.linkedin}
          prefixNode={<Linkedin className="text-foreground h-4 w-4" />}
        />
        <Item
          title={t("generalForm.fields.facebook.label")}
          value={data.facebook}
          prefixNode={<Facebook className="text-foreground h-4 w-4" />}
        />
        <Item
          title={t("generalForm.fields.username.label")}
          value={data.username}
          prefixNode={<Instagram className="text-foreground h-4 w-4" />}
        />
        <Item
          title={t("generalForm.fields.username.label")}
          value={data.username}
          prefixNode={<Phone className="text-foreground h-4 w-4" />}
        />
      </div>
    </div>
  );
};
