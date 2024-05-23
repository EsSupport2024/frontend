import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.essupport.in"),
  title: "Best Facility Management Solutions | ES Support",
  description:
    "Discover top-notch facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance solutions with ES Support.",
  keywords: [
    "facility",
    "management",
    "MEP services",
    "IT",
    "services",
    "security",
    "operation",
    "maintenance",
    "civil",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Facility Management Solutions | ES Support",
    description:
      "Discover top-notch facility management, MEP services, IT services, security services, operation & maintenance, and civil & maintenance solutions with ES Support.",
    url: "https://www.essupport.in/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
