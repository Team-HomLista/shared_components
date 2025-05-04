import { LeadFormData } from "@/app/components/sections/find/schemas";

export class InquiryService {
  static async postGeneral(
    leadId: number,
    data: Omit<LeadFormData, "contactConsent" | "dataConsent">,
  ) {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const url = `${SERVER_URL}/leads/${leadId}/inquiry`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify({ ...data, type: "GENERAL" }),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as Error;

      console.error(
        new Error(`InquiryService.postGeneral: ${JSON.stringify(errorData)}`),
      );
      return errorData;
    }

    return (await response.json()) as null;
  }
}
