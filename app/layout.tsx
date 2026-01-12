import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Tehzeeb Hassan | Web Developer & UI/UX Designer",
  description: "Computer Science graduate specializing in front-end development and creative design. Building modern, responsive web experiences with React, Next.js, Tailwind CSS, and more. Based in Mianwali, Pakistan.",
  keywords: [
    "M Tehzeeb Hassan",
    "Tehzeeb Hassan",
    "Web Developer",
    "Front-End Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "React Developer",
    "Next.js Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Python",
    "SQL",
    "Git",
    "GitHub",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma",
    "Responsive Design",
    "Web Design",
    "Portfolio",
    "Mianwali Pakistan",
    "University of Mianwali",
    "Ezitech Institute",
    "SuperTech Institute",
  ],
  authors: [{ name: "M Tehzeeb Hassan", url: "https://github.com/Tehzeeb-18" }],
  creator: "M Tehzeeb Hassan",
  publisher: "M Tehzeeb Hassan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-tehzeeb-18s-projects.vercel.app",
    title: "M Tehzeeb Hassan | Web Developer & UI/UX Designer",
    description: "Computer Science graduate specializing in front-end development and creative design. Building modern, responsive web experiences with React, Next.js, and Tailwind CSS.",
    siteName: "M Tehzeeb Hassan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M Tehzeeb Hassan - Web Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M Tehzeeb Hassan | Web Developer & UI/UX Designer",
    description: "Computer Science graduate specializing in front-end development and creative design.",
    images: ["/og-image.png"],
    creator: "@tehzeeb18",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://portfolio-tehzeeb-18s-projects.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "M Tehzeeb Hassan",
    url: "https://portfolio-tehzeeb-18s-projects.vercel.app",
    image: "https://portfolio-tehzeeb-18s-projects.vercel.app/og-image.png",
    jobTitle: "Web Developer & UI/UX Designer",
    description: "Computer Science graduate specializing in front-end development and creative design",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Mianwali",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mianwali",
      addressCountry: "Pakistan",
    },
    email: "tehzeebh456@gmail.com",
    telephone: "+92-306-0811362",
    sameAs: [
      "https://github.com/Tehzeeb-18",
      "https://www.linkedin.com/in/tehzeeb-hassan18",
    ],
    knowsAbout: [
      "Web Development",
      "Front-End Development",
      "UI/UX Design",
      "Graphic Design",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Python",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
