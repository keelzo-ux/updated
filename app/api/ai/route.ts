export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a coding assistant." },
        { role: "user", content: prompt },
      ],
    }),
  });

  const data = await response.json();

  return new Response(
    JSON.stringify({
      result: data.choices?.[0]?.message?.content || "No response",
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
