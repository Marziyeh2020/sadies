import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our luxury tailoring, bridal alterations, menswear fitting, and custom garment services.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | SADIES",
    description: "Explore our luxury tailoring, bridal alterations, menswear fitting, and custom garment services.",
    url: "https://sadies.com/services",
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sadies.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sadies.com/services"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Tailoring and Alterations",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SADIES"
    },
    "areaServed": {
      "@type": "City",
      "name": "Clayton"
    }
  }
];

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
