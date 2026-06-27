import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SADIES for luxury alterations and tailoring in Clayton, MO.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | SADIES",
    description: "Get in touch with SADIES for luxury alterations and tailoring in Clayton, MO.",
    url: "https://sadies.com/contact",
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
        "name": "Contact",
        "item": "https://sadies.com/contact"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "SADIES Contact Page",
    "url": "https://sadies.com/contact"
  }
];

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
