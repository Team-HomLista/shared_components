"use server";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.IDENTIFY_JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
const alg = process.env.IDENTIFY_JWT_ALG as "HS256" | "HS384" | "HS512";

export async function encrypt<T extends {}>(payload: T) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: [alg]
    });

    return payload;
  } catch {
    console.log("Failed to verify session");
  }
}
