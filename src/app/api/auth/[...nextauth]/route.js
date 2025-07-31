// app/api/auth/[...nextauth]/route.js


import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";




// Create the handler with authOptions
const handler = NextAuth(authOptions);

// Export GET and POST handlers for the App Router
export { handler as GET, handler as POST };
