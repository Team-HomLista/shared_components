import { LeadFormData } from "@/modules/home/sections/find/schemas";

export class InquiryService {
  static async postGeneral(
    anonymous_id: string,
    data: Omit<LeadFormData, "contactConsent" | "dataConsent">,
  ) {
    const url = `api/leads/inquiry`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ anonymous_id, ...data, type: "GENERAL" }),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as Error;

      console.error(new Error(`InquiryService.postGeneral: ${errorData}`));
      return errorData;
    }

    return (await response.json()) as null;
  }
}
