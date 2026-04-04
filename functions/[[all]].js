export async function onRequestGet(ctx) {
  return new Response(JSON.stringify({
    hasMedia: !!ctx.env.MEDIA,
    env: Object.keys(ctx.env)
  }), { headers: { "Content-Type": "application/json" }});
}