import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav Ojha | Python Developer Intern • FastAPI • Flask • MERN Stack",
  description:
    "Portfolio of Gourav Ojha - Python Developer Intern, FastAPI & Flask REST APIs, MERN Stack, AI Agent & ML Systems Builder, 300+ LeetCode DSA.",
  icons: {
    icon: "/favicon.ico",
  },
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