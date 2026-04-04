export async function onRequestGet(ctx) {
  const path = new URL(ctx.request.url).pathname.replace("/media/", "");
  console.log("Looking up R2 key:", path);
  console.log("MEDIA binding exists:", !!ctx.env.MEDIA);
  
  const file = await ctx.env.MEDIA.get(path);
  console.log("File found:", !!file);
  
  if (!file) return new Response(`404 - key not found: ${path}`, { status: 404 });
  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  });
}