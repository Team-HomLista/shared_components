import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const SERVER_URL = process.env.SERVER_URL;
    const HARD_KEY = String(process.env.HARD_KEY);

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const url = `${SERVER_URL}/properties/${slug}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-HARD-KEY": HARD_KEY,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      return NextResponse.json(
        { message: `Error from downstream server: ${JSON.stringify(errorData)}` },
        { status: response.status },
      );
    }

    return NextResponse.json(await response.json(), { status: 200 });
  } catch (error) {
    console.error("Error in featured properties route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
