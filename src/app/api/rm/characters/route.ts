export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (!name) {
    return new Response(JSON.stringify({ error: "name query parameter is required" }), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  try {
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch characters from upstream API" }), {
        status: 502,
        headers: {
          "content-type": "application/json",
        },
      });
    }

    const data = await response.json();
    const names = data.results.map((r: { name: string }) => r.name);

    return new Response(JSON.stringify(names), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch characters from upstream API" }), {
      status: 502,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
