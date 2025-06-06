import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Nausheen Alam Sarosh | Professor of Computer Science & AI Ethics",
  description: "Professor Dr. Nausheen Alam Sarosh's professional academic portfolio showcasing research in AI ethics, publications, achievements, and academic contributions.",
  keywords: "Dr. Nausheen Alam Sarosh, AI ethics, Computer Science, Professor, Academic Research, Artificial Intelligence, Machine Learning, Publications",
  authors: [{ name: "Dr. Nausheen Alam Sarosh" }],
  openGraph: {
    title: "Dr. Nausheen Alam Sarosh | Professor of Computer Science & AI Ethics",
    description: "Professor Dr. Nausheen Alam Sarosh's professional academic portfolio showcasing research in AI ethics, publications, achievements, and academic contributions.",
    url: "https://drnausheen.com",
    siteName: "Dr. Nausheen Alam Sarosh Portfolio",
    images: [
      {
        url: "/dr-nausheen-profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Nausheen Alam Sarosh | Professor of Computer Science & AI Ethics",
    description: "Professor Dr. Nausheen Alam Sarosh's professional academic portfolio showcasing research in AI ethics, publications, achievements, and academic contributions.",
    images: ["/dr-nausheen-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
