import { LeadFormData } from "@/app/components/sections/find/schemas";

export class InquiryService {
  static async postGeneral(
    leadId: number,
    data: Omit<LeadFormData, "contactConsent" | "dataConsent">,
  ) {
    const url = `api/leads/${leadId}/inquiry`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...data, type: "GENERAL" }),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as Error;

      console.error(new Error(`InquiryService.postGeneral: ${errorData}`));
      return errorData;
    }

    return (await response.json()) as null;
  }
}
