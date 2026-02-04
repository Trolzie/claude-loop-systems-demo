import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Loop Systems",
  description: "Systems engineering loops where Markdown is the system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
