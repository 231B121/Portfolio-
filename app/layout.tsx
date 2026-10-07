import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav Ojha | AI/ML & Full Stack Developer Portfolio",
  description:
    "Portfolio of Gourav Ojha - AI/ML Intern, Full Stack Developer, Generative AI & Anomaly Detection Specialist",
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
