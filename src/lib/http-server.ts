"use server";
import { getIdentifyToken } from "@/services/session";
import { headers as clientHeaders } from "next/headers";
import requestIp, { RequestHeaders } from "request-ip";

type config = RequestInit & {
  params?: any;
  withIdentifyToken?: boolean;
};

export async function fetchServer(
  path: string,
  {
    method = "GET",
    params,
    withIdentifyToken = true,
    headers: headerInt,
    ...config
  }: config = {},
) {
  try {
    const url = new URL(`${process.env.SERVER_URL}${path}`);

    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key]),
      );
    }

    const headers = await getHeaders(withIdentifyToken, headerInt);

    return await fetch(url.toString(), {
      method,
      headers,
      ...config,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getResponseData<T>(response: Response): Promise<T> {
  try {
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return responseData as T;
  } catch (error) {
    throw new Error(`Error parsing JSON: ${error}`);
  }
}

async function getHeaders(
  withIdentifyToken: boolean,
  headerInt: HeadersInit = {},
) {
  let headers: HeadersInit = {
    "X-Hard-Key": process.env.HARD_KEY ?? "",
    "Content-Type": "application/json",
    Accept: "application/json",
    ...headerInt,
  };

  if (withIdentifyToken) {
    const headerList = await clientHeaders();
    const headersReq: RequestHeaders = {};
    headerList.forEach((value, key) => {
      headersReq[key] = value;
    });
    const clientIp = requestIp.getClientIp({
      headers: headersReq,
    });

    const userAgent = headerList.get("user-agent");
    const IDENTIFY_TOKEN = (await getIdentifyToken()) ?? "";

    const realIp = headerList.get("x-real-ip");
    const forwardedFor = headerList.get("x-forwarded-for");

    headers = {
      "x-real-ip": clientIp ?? "",
      "x-forwarded-for": clientIp ?? "",
      "user-agent": userAgent ?? "",
      "X-IDENTIFY-TOKEN": IDENTIFY_TOKEN,
      ...headers,
    };
  }

  return headers;
}
