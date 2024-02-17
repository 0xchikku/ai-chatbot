import { Response } from "express";
import { AUTH_COOKIE } from "../utils/constants.js";
import { createToken } from "../utils/token-manager.js";


export const clearAndSetUserCookie = (res: Response, user: any) => {

  res.clearCookie(AUTH_COOKIE, { path: "/", domain: "localhost", httpOnly: true, signed: true })

  const token = createToken(user._id.toString(), user.email, "7d")

  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // setting 7 days

  res.cookie(AUTH_COOKIE, token, { path: "/", domain: "localhost", httpOnly: true, signed: true, expires, sameSite: "none", secure: true },);
}