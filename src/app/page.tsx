import { AppHeader } from "@/components/AppHeader";

export default function Home() {
  return (
    <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <AppHeader title="Claude Loop Systems" tagline="Markdown is the system." />

      <p style={{ marginTop: 16 }}>
        This is a small Next.js + TypeScript project used to demo Claude Code
        agents, skills, and an issues-driven development loop.
      </p>

      <section style={{ marginTop: 16 }}>
        <h2>Endpoints</h2>
        <ul>
          <li>
            <a href="/api/health">/api/health</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
