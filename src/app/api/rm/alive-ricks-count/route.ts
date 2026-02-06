export async function GET() {
  try {
    const apiUrl = "https://rickandmortyapi.com/api/character/?name=rick&status=alive";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch alive Ricks count from upstream API" }), {
        status: 502,
        headers: {
          "content-type": "application/json",
        },
      });
    }

    const data = await response.json();

    return new Response(JSON.stringify({ count: data.info.count }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch alive Ricks count from upstream API" }), {
      status: 502,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
