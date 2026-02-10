
export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  return new Response(JSON.stringify({
    result: `// Generated Script\nconsole.log("${prompt}")`
  }), { headers: { 'Content-Type': 'application/json' } })
}
