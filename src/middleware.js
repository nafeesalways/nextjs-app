import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const isTokenOk = Boolean(token);
  const isAdminUser = token?.role == "admin";
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");
  const isProductPage=req.nextUrl.pathname.startsWith('/products');
  if(isProductPage && !isTokenOk){
     const callbackUri = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUri=${callbackUri}`,req.url)
    );
  }
  if (isAdminSpecificRoute && !isAdminUser) {
    const callbackUri = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUri=${callbackUri}`,req.url)
    );
  }

  return NextResponse.next();
};
