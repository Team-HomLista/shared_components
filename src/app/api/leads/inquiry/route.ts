import { NextResponse } from "next/server";

interface RequestBody {
  anonymous_id: string;
}

export async function POST(request: Request) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const body = (await request.json()) as RequestBody;
    const url = `${API_URL}/api/leads/inquiries`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json();

      return NextResponse.json(
        {
          message: `Error from downstream server: ${JSON.stringify(errorData)}`
        },
        { status: response.status }
      );
    }

    return NextResponse.json(await response.json(), { status: 200 });
  } catch (error) {
    console.error("Error in Inquiry route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
