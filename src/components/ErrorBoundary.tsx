"use client";

import { Button } from "@shared/components/ui/button";
import { Component, ReactNode } from "react";

import { Navbar } from "@/components/navbar";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  title?: string;
  description?: string;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Property page error:", error, errorInfo);

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <>
            <Navbar variant="default" />
            <div className="flex flex-1 items-center justify-center">
              <div className="mx-auto max-w-md p-6 text-center">
                <h2 className="mb-4 text-2xl font-bold text-red-600">
                  {this.props.title ?? "Algo salió mal"}
                </h2>
                <p className="mb-4 text-gray-600">
                  {this.props.description ??
                    "No pudimos cargar esta página. Por favor, intenta de nuevo más tarde."}
                </p>
                <div className="flex justify-center gap-4">
                  <Button onClick={() => window.location.reload()}>Intentar de nuevo</Button>
                  <Button variant="outline" onClick={() => window.history.back()}>
                    Regresar
                  </Button>
                </div>
              </div>
            </div>
          </>
        )
      );
    }

    return this.props.children;
  }
}
