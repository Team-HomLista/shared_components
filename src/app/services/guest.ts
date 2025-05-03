export class GuestService {
  static async postFingerprint(anonymous_id: string) {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const response = await fetch("/api/guest/fingerprinting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        anonymous_id,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error(new Error(`GuestService.postFingerprint: ${errorData}`));
    }
    return (await response.json()) as {
      guest_id: number;
      lead_id: number;
      user_id: number;
    };
  }
}
