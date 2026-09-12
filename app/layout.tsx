import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariska Davidse | GZ-Psycholoog & Executive Coaching",
  description:
    "Mariska Davidse is GZ-psycholoog en executive coach voor persoonlijke en professionele ontwikkeling.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}