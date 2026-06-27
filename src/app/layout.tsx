import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sadies.com'),
  title: {
    default: "SADIES | Luxury Alterations & Tailoring",
    template: "%s | SADIES"
  },
  description: "Luxury tailoring, bridal alterations, menswear tailoring and custom fittings located in Clayton, MO.",
  keywords: ["luxury tailoring", "alterations", "bridal alterations", "menswear tailoring", "custom fittings", "Clayton MO tailor", "St. Louis tailoring"],
  authors: [{ name: "SADIES" }],
  creator: "SADIES",
  publisher: "SADIES",
  icons: {
    icon: "/asset/favicon.png",
    shortcut: "/asset/favicon.png",
    apple: "/asset/favicon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SADIES | Luxury Alterations & Tailoring",
    description: "Expert craftsmanship, luxury tailoring, bridal alterations, and menswear fittings.",
    url: "https://sadies.com",
    siteName: "SADIES",
    images: [
      {
        url: "/asset/logo1.png",
        width: 1200,
        height: 630,
        alt: "SADIES Luxury Tailoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SADIES | Luxury Alterations & Tailoring",
    description: "Expert craftsmanship, luxury tailoring, bridal alterations, and menswear fittings.",
    images: ["/asset/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "SADIES",
      "image": "https://sadies.com/asset/whitelogo.png",
      "@id": "https://sadies.com",
      "url": "https://sadies.com",
      "telephone": "+13147279976",
      "email": "info@sadiesalteration.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7612 WYDOWN.",
        "addressLocality": "CLAYTON",
        "addressRegion": "MO",
        "postalCode": "63105",
        "addressCountry": "US"
      },
      "priceRange": "$$$"
    },
    {
      "@type": "Organization",
      "name": "SADIES",
      "url": "https://sadies.com",
      "logo": "https://sadies.com/asset/logo1.png",
      "sameAs": [
        "https://instagram.com/sadies_alteration"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LoadingScreen /> */}
        <Navbar />
        <Chatbot />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
