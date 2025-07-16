"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Component, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
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
                  Algo salió mal
                </h2>
                <p className="mb-4 text-gray-600">
                  No pudimos cargar los detalles de la propiedad. Esto puede
                  deberse a un problema de conexión o la propiedad ya no está
                  disponible.
                </p>
                <div className="flex justify-center gap-4">
                  <Button onClick={() => window.location.reload()}>
                    Intentar de nuevo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.history.back()}
                  >
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
