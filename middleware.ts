import { clerkMiddleware } from "@clerk/nextjs/server";

// Initialize the Clerk middleware with the publishableKey
export default clerkMiddleware({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
