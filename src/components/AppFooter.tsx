export function AppFooter() {
  return (
    <footer style={{ backgroundColor: "pink", padding: "1rem" }}>
      <p>
        Built with loops. <a href="/api/health">Health check</a>
      </p>
      <p>
        <a href="/api/rm/characters">Characters API</a> &middot;{" "}
        <a href="https://github.com/troelschristensen/claude-loop-systems-demo">
          GitHub
        </a>
      </p>
      <p>&copy; 2026 Claude Loop Systems</p>
    </footer>
  );
}
