"use client";

import { useState } from "react";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";

export default function Home() {
  const [query, setQuery] = useState("rick");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [names, setNames] = useState<string[]>([]);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/rm/characters?name=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNames(data.slice(0, 5));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <AppHeader title="Claude Loop Systems" />

      <p style={{ marginTop: 16 }}>
        This is a small Next.js + TypeScript project used to demo Claude Code
        agents, skills, and an issues-driven development loop.
      </p>

      <section style={{ marginTop: 16 }}>
        <h2>Search Characters</h2>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter character name"
            style={{ flex: 1, padding: 8 }}
          />
          <button onClick={handleSearch} disabled={loading} style={{ padding: 8 }}>
            Search
          </button>
        </div>

        {loading && <p style={{ marginTop: 8 }}>Loading...</p>}
        {error && <p style={{ marginTop: 8, color: "red" }}>{error}</p>}
        {names.length > 0 && (
          <ul style={{ marginTop: 8 }}>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Endpoints</h2>
        <ul>
          <li>
            <a href="/api/health">/api/health</a>
          </li>
        </ul>
      </section>

      <AppFooter />
    </main>
  );
}
