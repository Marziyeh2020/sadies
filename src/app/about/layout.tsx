import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the SADIES family, our 20-year tailoring tradition, and our commitment to luxury craftsmanship in Clayton, MO.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | SADIES",
    description: "Learn about the SADIES family, our 20-year tailoring tradition, and our commitment to luxury craftsmanship.",
    url: "https://sadies.com/about",
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
      "name": "About",
      "item": "https://sadies.com/about"
    }
  ]
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
