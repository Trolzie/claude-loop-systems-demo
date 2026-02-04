export function AppHeader(props: { title: string; tagline: string }) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.tagline}</p>
    </header>
  );
}
