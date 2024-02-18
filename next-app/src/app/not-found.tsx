export async function GET() {
  // return a permanent redirect to the SPA
  return Response.redirect(process.env.NEXT_PUBLIC_SPA_URL || "", 301)
}