import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fluffy Care Studio | Pet Bathing & Grooming",
  description:
    "Gentle one-on-one pet bathing and grooming with transparent care notes and calm appointment flow.",
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
