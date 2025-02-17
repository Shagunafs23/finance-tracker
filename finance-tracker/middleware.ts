import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes for which authentication protection is not required
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

// Use the clerkMiddleware to protect routes
export default clerkMiddleware(async (auth, request) => {
  // Skip authentication for public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
