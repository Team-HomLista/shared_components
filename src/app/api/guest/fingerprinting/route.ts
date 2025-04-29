import { NextResponse } from "next/server";

interface RequestBody {
  anonymous_id: string;
}

export async function POST(request: Request) {
  try {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const { anonymous_id } = (await request.json()) as RequestBody;

    const url = `${SERVER_URL}/guest/identify`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify({
        anonymous_id,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      return NextResponse.json(
        { message: `Error from downstream server: ${errorData}` },
        { status: response.status },
      );
    }

    return NextResponse.json(await response.json(), { status: 200 });
  } catch (error) {
    console.error("Error in fingerprinting route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
