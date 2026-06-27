import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View our gallery of luxury alterations, bridal transformations, and bespoke tailoring projects.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | SADIES",
    description: "View our gallery of luxury alterations, bridal transformations, and bespoke tailoring projects.",
    url: "https://sadies.com/portfolio",
  }
};

const jsonLd = {
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
      "name": "Portfolio",
      "item": "https://sadies.com/portfolio"
    }
  ]
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
