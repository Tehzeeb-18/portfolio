import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Tehzeeb Hassan | IT Intern - Web Developer",
  description: "Motivated Computer Science graduate with practical experience in front-end web development and design. Specializing in HTML, CSS, JavaScript, Bootstrap, and graphic design.",
  keywords: ["Web Developer", "Front-End Developer", "Graphic Designer", "HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Adobe Illustrator", "Photoshop"],
  authors: [{ name: "M Tehzeeb Hassan" }],
  openGraph: {
    title: "M Tehzeeb Hassan | IT Intern - Web Developer",
    description: "Motivated Computer Science graduate with practical experience in front-end web development and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
