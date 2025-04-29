"use client";
import { useEffect } from "react";
import { bufferToHex, stringToBuffer } from "./utils/buffer";
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
  useEffect(() => {
    /* Asegurarse de que se ejecuta solo en el cliente */
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    /* Intentar recuperar la huella digital del localStorage */
    const storedFingerprint = localStorage.getItem(FINGERPRINT_STORAGE_KEY);

    if (storedFingerprint) {
      return;
    }

    const generateFingerprint = async () => {
      const components = [];

      try {
        /* 1. User Agent */
        components.push(navigator.userAgent || "N/A");

        /* 2. Idioma(s). */
        components.push(navigator.language || "N/A");
        components.push((navigator.languages || []).join(","));

        /* 3. Resolución de pantalla y profundidad de color */
        components.push(
          `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`,
        );

        /* 4. Zona Horaria */
        try {
          components.push(new Date().getTimezoneOffset().toString());
        } catch (e) {
          components.push("N/A");
        }

        /* 5. Hardware Concurrency (Núcleos CPU) */
        components.push(navigator.hardwareConcurrency?.toString() || "N/A");

        /* 6. Device Memory (RAM Aproximada) - No siempre disponible */
        components.push(navigator.deviceMemory?.toString() || "N/A");

        /* 7. Canvas Fingerprint */
        try {
          const canvas = document.createElement("canvas");
          canvas.width = 200;
          canvas.height = 60;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            /*  Dibujar algo predecible pero sensible a variaciones */
            ctx.fillStyle = "rgb(100, 150, 200)";
            ctx.fillRect(10, 10, 180, 40);
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.font = "16px Arial";
            ctx.fillText("Hello Fingerprint! <>?*%$", 20, 35);
            components.push(canvas.toDataURL());
          } else {
            components.push("Canvas N/A");
          }
        } catch (e) {
          components.push("Canvas Error");
        }

        /* 8. AudioContext Fingerprint (usando OfflineAudioContext para
        consistencia). */
        try {
          const AudioContext =
            window.OfflineAudioContext || window.OfflineAudioContext;
          if (AudioContext) {
            /* Crear contexto offline: 1 canal, 5000 muestras, 44100Hz */
            const audioCtx = new AudioContext(1, 5000, 44100);
            const oscillator = audioCtx.createOscillator();
            oscillator.type = "triangle"; // Tipo de onda
            /* Frecuency. */
            oscillator.frequency.setValueAtTime(10000, audioCtx.currentTime);

            const compressor = audioCtx.createDynamicsCompressor();
            /* Configurar compresor con valores específicos */
            compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
            compressor.knee.setValueAtTime(40, audioCtx.currentTime);
            compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
            compressor.attack.setValueAtTime(0, audioCtx.currentTime);
            compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

            oscillator.connect(compressor);
            compressor.connect(audioCtx.destination);

            oscillator.start(0);
            const renderedBuffer = await audioCtx.startRendering();
            const bufferData = renderedBuffer.getChannelData(0);
            let bufferSum = 0;
            for (let i = 0; i < bufferData.length; i++) {
              bufferSum += Math.abs(bufferData[i]);
            }
            components.push(bufferSum.toString());
          } else {
            components.push("AudioContext N/A");
          }
        } catch (e) {
          console.warn("AudioContext fingerprinting failed:", e);
          components.push("Audio Error");
        }

        /* Combinar todos los componentes en un solo string, usando un
        separador improbable. */
        const combinedString = components.join("~~~");

        /* Generar el Hash SHA-256 */
        if (window.crypto && window.crypto.subtle) {
          const buffer = stringToBuffer(combinedString);
          const hashBuffer = await window.crypto.subtle.digest(
            "SHA-256",
            buffer,
          );
          const finalHash = bufferToHex(hashBuffer);

          /* Guardar la nueva huella en localStorage */
          localStorage.setItem(FINGERPRINT_STORAGE_KEY, finalHash);

          try {
            const response = await GuestService.postFingerprint(finalHash);

            localStorage.setItem(
              IDENTIFICATIONS_STORAGE_KEY,
              JSON.stringify(response),
            );
          } catch (apiError) {
            console.error("Error posting fingerprint:", apiError);
            localStorage.removeItem(IDENTIFICATIONS_STORAGE_KEY);
          }
        } else {
          console.warn(
            "SubtleCrypto API not available. Using fallback fingerprint.",
          );
          /* Fallback (menos seguro): podrías usar el string combinado o un hash
          simple, no recomendado para producción */
          const fallbackFingerprint = combinedString;

          /* Guardar la huella (fallback) en localStorage */
          localStorage.setItem(FINGERPRINT_STORAGE_KEY, fallbackFingerprint);

          try {
            const response =
              await GuestService.postFingerprint(fallbackFingerprint);

            localStorage.setItem(
              IDENTIFICATIONS_STORAGE_KEY,
              JSON.stringify(response),
            );
          } catch (apiError) {
            console.error("Error posting fallback fingerprint:", apiError);
            localStorage.removeItem(IDENTIFICATIONS_STORAGE_KEY);
          }
        }
      } catch (error) {
        console.error("Error generating fingerprint:", error);
      }
    };

    /* Si no se encontró en localStorage, generar una nueva. */
    generateFingerprint();
  }, []);

  return null;
};
