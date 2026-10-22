import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav Ojha | SDE Intern & Full Stack Developer Portfolio",
  description:
    "Portfolio of Gourav Ojha - SDE Intern, Full Stack Developer, Backend Developer, Python & AI Systems Engineer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
