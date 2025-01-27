import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipsProvider } from "@/components/tooltip-provider";
import { Toaster } from "sonner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Superluminal",
    default: "Superluminal | Peace, Love & Psytrance",
  },
  description:
    "Superluminal is the psychedelic trance project of Kabayun and his partner Yasmin. Known for pumping basslines and twisted soundscapes, perfect for kicking up dust and shaking your chakras!",
  keywords: [
    "Superluminal",
    "Psychedelic Trance",
    "Psytrance",
    "Electronic Music",
    "Kabayun",
    "Sangoma Records",
    "Electronic Dance Music",
    "Progressive Trance",
    "Psychedelic Music",
    "FM Bookings",
  ],
  authors: [{ name: "Superluminal", url: "https://superluminalpsy.com" }],
  creator: "Superluminal",
  publisher: "Sangoma Records",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://superluminalpsy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superluminalpsy.com",
    title: "Superluminal | Peace, Love & Psytrance",
    description:
      "Superluminal is the psychedelic trance project of Kabayun and his partner Yasmin. Known for pumping basslines and twisted soundscapes, perfect for kicking up dust and shaking your chakras!",
    siteName: "Superluminal",
    images: [
      {
        url: "/sl5.jpg",
        width: 1200,
        height: 630,
        alt: "Superluminal - Psychedelic Trance Producer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superluminal | Peace, Love & Psytrance",
    description: "Psychedelic Trance Producer - Sangoma Records",
    images: ["/sl5.jpg"],
    creator: "@superluminalpsy",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "music",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipsProvider>
              <div className="relative min-h-screen flex flex-col">
                <Nav />
                <main className="flex-grow pt-16">
                  {children}
                  <Toaster richColors position="top-center" />
                </main>
                <Footer />
              </div>
            </TooltipsProvider>
          </QueryProvider>
        </ThemeProvider>
        <Analytics />
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-FKHRB3VQCT`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FKHRB3VQCT');
            `}
          </Script>
        </>
      </body>
    </html>
  );
}
