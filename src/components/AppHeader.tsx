export function AppHeader(props: { title: string; tagline?: string }) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.tagline ? <p>{props.tagline}</p> : null}
    </header>
  );
}
