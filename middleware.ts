import { clerkMiddleware } from "@clerk/nextjs/server";

// Це middleware захищає всі маршрути, включаючи API та TRPC.
// Відредагуйте його, якщо потрібно дозволити доступ до деяких маршрутів без авторизації.
// Документація: https://clerk.com/docs/references/nextjs/auth-middleware

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
