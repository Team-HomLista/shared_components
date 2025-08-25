"use client";
import { Thumbmark } from "@thumbmarkjs/thumbmarkjs";
import { useEffect } from "react";

import { FINGERPRINT_STORAGE_KEY, IDENTIFICATIONS_STORAGE_KEY } from "@/constants/localstorage";
import { identifyGuest } from "@/services/legacy/guest";

export const useFingerprinting = () => {
  const saveFingerprint = async (fingerprint: string) => {
    try {
      const response = await identifyGuest(fingerprint);

      localStorage.setItem(FINGERPRINT_STORAGE_KEY, fingerprint);
      localStorage.setItem(IDENTIFICATIONS_STORAGE_KEY, JSON.stringify(response));
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

    if (storedFingerprint && JSON.parse(identification ?? "{}")?.user_id) {
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
};
