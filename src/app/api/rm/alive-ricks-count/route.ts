export async function GET() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?name=rick&status=alive"
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Upstream API returned error" }),
        {
          status: 502,
          headers: {
            "content-type": "application/json",
            "cache-control": "no-store",
          },
        }
      );
    }

    const data = await response.json();
    const count = data?.info?.count ?? 0;

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to fetch from upstream API" }),
      {
        status: 502,
        headers: {
          "content-type": "application/json",
          "cache-control": "no-store",
        },
      }
    );
  }
}
