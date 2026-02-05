"use client";

import { useEffect, useState } from "react";

export function RickCounter() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/rm/alive-ricks-count")
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error || "Failed to fetch");
          });
        }
        return res.json();
      })
      .then((data) => {
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Alive Ricks: {count}</div>;
}
