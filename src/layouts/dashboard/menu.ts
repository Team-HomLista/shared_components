"use client";

import { Building2, Home, UserCog, Users } from "lucide-react";

import { Menu } from "@/types/menu";

export const menu: Menu = [
  {
    id: "dashboard",
    label: "Home",
    icon: Home,
    href: "/dashboard"
  },
  {
    id: "administration",
    label: "Administración",
    icon: UserCog,
    subMenu: [
      {
        id: "administration/operators",
        label: "Operadores",
        href: "/dashboard/administration/operators"
      }
    ]
  },
  {
    id: "advisors",
    label: "Asesores Inmobiliarios",
    icon: Users,
    subMenu: [
      {
        id: "advisors/franchises",
        label: "Franquicias",
        href: "/dashboard/advisors/franchises"
      },
      {
        id: "advisors/agencies",
        label: "Agencias",
        href: "/dashboard/advisors/agencies"
      },
      {
        id: "advisors/agents",
        label: "Agentes",
        href: "/dashboard/advisors/agents"
      }
    ]
  },
  {
    id: "real_state",
    label: "Inmobiliarias",
    icon: Building2,
    subMenu: [
      {
        id: "real_state/properties",
        label: "Propiedades",
        href: "/dashboard/real_state/properties"
      },
      {
        id: "real_state/features",
        label: "Caracteristicas",
        href: "/dashboard/real_state/features"
      }
    ]
  }
];
