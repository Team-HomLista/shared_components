export class GuestService {
  static async postFingerprint(anonymous_id: string) {
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
