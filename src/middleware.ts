import { NextResponse, NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  requestHeaders.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  //   console.log("Request URL:", req.url); // Log the request URL
  //   console.log("Request Geo:", req.geo); // Log the request geo information

  //   // Add new request headers
  //   requestHeaders.set("request-ip", req.ip);
  //   requestHeaders.set("request-url", req.url);
  //   requestHeaders.set("request-geo", JSON.stringify(req.geo));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
