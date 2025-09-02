"use client";

import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroSize = "sm" | "md" | "lg" | "xl";
type HeroAlignment = "left" | "center" | "right";
type HeroVariant = "default" | "gradient" | "image" | "minimal";

interface KPI {
  label: string;
  value: string;
  icon?: React.ReactNode;
  description?: string;
}

interface CTA {
  label: string;
  href: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg";
  icon?: React.ReactNode;
}

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

interface WhiteLabelHeroProps {
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;

  // Actions
  primaryCta: CTA;
  secondaryCta?: CTA;
  tertiaryCta?: CTA;

  // Layout & Design
  variant?: HeroVariant;
  size?: HeroSize;
  align?: HeroAlignment;
  className?: string;

  // Brand & Colors
  primaryColor?: string;
  accentColor?: string;

  // Background
  backgroundUrl?: string;
  backgroundGradient?: string;
  backgroundOverlay?: boolean;
  backgroundPosition?: string;

  // Additional Content
  kpis?: KPI[];
  testimonial?: TestimonialProps;
  badge?: string;
  videoUrl?: string;

  // Accessibility
  "aria-label"?: string;
  id?: string;
}

export const WhiteLabelHero = forwardRef<HTMLElement, WhiteLabelHeroProps>(
  (
    {
      title,
      subtitle,
      description,
      eyebrow,
      primaryCta,
      secondaryCta,
      tertiaryCta,
      variant: _variant = "default",
      size = "lg",
      align = "center",
      className,
      primaryColor = "#0ea5e9",
      accentColor: _accentColor,
      backgroundUrl,
      backgroundGradient,
      backgroundOverlay = true,
      backgroundPosition = "center",
      kpis = [],
      testimonial,
      badge,
      videoUrl,
      "aria-label": ariaLabel,
      id
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20",
      lg: "py-20 sm:py-24",
      xl: "py-24 sm:py-32"
    };

    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    };

    const contentMaxWidth = {
      left: "max-w-none",
      center: "max-w-5xl mx-auto",
      right: "max-w-none"
    };

    const justifyContent = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end"
    };

    const hasBackground = backgroundUrl || backgroundGradient;
    const textColor = hasBackground ? "text-white" : "text-foreground";
    const mutedTextColor = hasBackground ? "text-white/80" : "text-muted-foreground";

    return (
      <section
        ref={ref}
        id={id}
        aria-label={ariaLabel || "Hero section"}
        className={cn("relative overflow-hidden", sizeClasses[size], className)}
      >
        {/* Background */}
        {hasBackground && (
          <div className="absolute inset-0 -z-10">
            {backgroundUrl && (
              <div
                className="h-full w-full bg-cover"
                style={{
                  backgroundImage: `url(${backgroundUrl})`,
                  backgroundPosition
                }}
                aria-hidden="true"
              />
            )}
            {backgroundGradient && (
              <div
                className="absolute inset-0"
                style={{ background: backgroundGradient }}
                aria-hidden="true"
              />
            )}
            {backgroundOverlay && (
              <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            )}
          </div>
        )}

        <div className="relative container px-4">
          <div
            className={cn(contentMaxWidth[align], alignClasses[align], "flex flex-col gap-4")}
            style={
              {
                "--brand-primary": primaryColor,
                "--brand-accent": _accentColor || primaryColor
              } as React.CSSProperties
            }
          >
            {/* Badge */}
            {badge && (
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-1 self-start bg-white/10 text-white backdrop-blur-sm"
              >
                <Star className="h-3 w-3" />
                {badge}
              </Badge>
            )}

            {/* Eyebrow */}
            {eyebrow && (
              <div
                className={cn(
                  "inline-block self-start rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
                  hasBackground
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-[color:var(--brand-primary)]/20 bg-[color:var(--brand-primary)]/5 text-[color:var(--brand-primary)]"
                )}
              >
                {eyebrow}
              </div>
            )}

            {/* Title */}
            <h1
              className={cn(
                "leading-tight font-bold tracking-tight",
                size === "xl" && "text-5xl sm:text-6xl lg:text-7xl",
                size === "lg" && "text-4xl sm:text-5xl lg:text-6xl",
                size === "md" && "text-3xl sm:text-4xl lg:text-5xl",
                size === "sm" && "text-2xl sm:text-3xl lg:text-4xl",
                hasBackground ? "text-white" : "text-[color:var(--brand-primary)]"
              )}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className={cn(
                  "text-xl leading-relaxed font-medium sm:text-2xl",
                  align === "center" && "mx-auto max-w-3xl",
                  mutedTextColor
                )}
              >
                {subtitle}
              </p>
            )}

            {/* Description */}
            {description && (
              <div className="flex flex-col gap-6">
                <p
                  className={cn(
                    "text-lg leading-relaxed sm:text-xl",
                    align === "center" && "mx-auto max-w-2xl",
                    mutedTextColor
                  )}
                >
                  {description}
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className={cn("flex flex-col gap-4 sm:flex-row sm:gap-6", justifyContent[align])}>
              <Link href={primaryCta.href}>
                <Button
                  size={primaryCta.size || "lg"}
                  variant={primaryCta.variant || "default"}
                  className={cn(
                    "group inline-flex items-center gap-2 font-semibold text-white transition-all hover:gap-3",
                    hasBackground
                      ? "bg-white/90 text-black hover:bg-white"
                      : "bg-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)]/90"
                  )}
                >
                  {primaryCta.label}
                  {primaryCta.icon || <ArrowRight className="h-4 w-4" />}
                </Button>
              </Link>

              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    size={secondaryCta.size || "lg"}
                    variant={secondaryCta.variant || "outline"}
                    className="group inline-flex items-center gap-2 border-white/20 bg-white/10 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    {secondaryCta.label}
                    {secondaryCta.icon}
                  </Button>
                </Link>
              )}

              {tertiaryCta && (
                <Link href={tertiaryCta.href}>
                  <Button
                    size={tertiaryCta.size || "lg"}
                    variant={tertiaryCta.variant || "ghost"}
                    className={cn(
                      "group inline-flex items-center gap-2 font-semibold",
                      hasBackground ? "text-white hover:bg-white/10" : ""
                    )}
                  >
                    {tertiaryCta.label}
                    {tertiaryCta.icon}
                  </Button>
                </Link>
              )}

              {videoUrl && (
                <Button
                  variant="ghost"
                  size="lg"
                  className={cn(
                    "group inline-flex items-center gap-2 font-semibold",
                    hasBackground ? "text-white hover:bg-white/10" : ""
                  )}
                  onClick={() => {
                    // Handle video modal or redirect
                    window.open(videoUrl, "_blank");
                  }}
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Button>
              )}
            </div>

            {/* KPIs */}
            {kpis.length > 0 && (
              <div
                className={cn(
                  "grid gap-6",
                  kpis.length === 1 && "grid-cols-1",
                  kpis.length === 2 && "grid-cols-1 sm:grid-cols-2",
                  kpis.length === 3 && "grid-cols-1 sm:grid-cols-3",
                  kpis.length >= 4 && "grid-cols-2 sm:grid-cols-4",
                  align === "center" && "mx-auto max-w-4xl"
                )}
              >
                {kpis.map((kpi, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex flex-col gap-2 rounded-lg border p-4 backdrop-blur-sm transition-all hover:scale-105",
                      hasBackground
                        ? "border-white/20 bg-white/10"
                        : "border-[color:var(--brand-primary)]/20 bg-transparent"
                    )}
                  >
                    {kpi.icon && <div className="text-white">{kpi.icon}</div>}
                    <div className={cn("text-2xl font-bold", textColor)}>{kpi.value}</div>
                    <div className={cn("text-sm font-medium", mutedTextColor)}>{kpi.label}</div>
                    {kpi.description && (
                      <div className={cn("text-xs", mutedTextColor)}>{kpi.description}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Testimonial */}
            {testimonial && (
              <div
                className={cn(
                  "flex flex-col gap-4 rounded-lg border bg-white/10 p-6 backdrop-blur-sm",
                  align === "center" && "mx-auto max-w-2xl"
                )}
              >
                <div className="flex">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className={cn("text-lg italic", textColor)}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1">
                    <div className={cn("font-semibold", textColor)}>{testimonial.author}</div>
                    {testimonial.role && (
                      <div className={cn("text-sm", mutedTextColor)}>{testimonial.role}</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

WhiteLabelHero.displayName = "WhiteLabelHero";
