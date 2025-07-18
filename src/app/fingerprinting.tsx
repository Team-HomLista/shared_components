"use client";
import { useEffect } from "react";
import { Thumbmark } from "@thumbmarkjs/thumbmarkjs";
import { GuestService } from "./services/guest";

// Extend the Navigator interface to include deviceMemory
declare global {
  interface Navigator {
    deviceMemory?: number;
  }
}

const FINGERPRINT_STORAGE_KEY = "FINGERPRINT";
const IDENTIFICATIONS_STORAGE_KEY = "IDENTIFICATIONS";

export const Fingerprinting = () => {
  const saveFingerprint = async (fingerprint: string) => {
    try {
      let response = await GuestService.postFingerprint(fingerprint);

      localStorage.setItem(FINGERPRINT_STORAGE_KEY, fingerprint);
      localStorage.setItem(
        IDENTIFICATIONS_STORAGE_KEY,
        JSON.stringify(response),
      );
    } catch (apiError) {
      console.error("Error posting fallback fingerprint:", apiError);
      localStorage.removeItem(IDENTIFICATIONS_STORAGE_KEY);
      localStorage.removeItem(FINGERPRINT_STORAGE_KEY);
    }
  };

  useEffect(() => {
    /* Asegurarse de que se ejecuta solo en el cliente */
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    /* Intentar recuperar la huella digital del localStorage */
    const storedFingerprint = localStorage.getItem(FINGERPRINT_STORAGE_KEY);
    const identification = localStorage.getItem(IDENTIFICATIONS_STORAGE_KEY);

    if (storedFingerprint && JSON.parse(identification ?? "{}")?.user_uuid) {
      return;
    }

    const tm = new Thumbmark();

    tm.get()
      .then((result) => {
        saveFingerprint(result.thumbmark);
      })
      .catch((error) => {
        console.error("Error getting fingerprint:", error);
      });
  }, []);

  return null;
};
