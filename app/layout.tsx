import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"


const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Jenesh Devganiya | Full-Stack Developer & Node.js Expert",
  description: "Explore the professional portfolio of Jenesh Devganiya, showcasing projects, skills, and expertise in Full-Stack Development, Node.js, React, and modern web technologies.",
  keywords: [
    "Jenesh Devganiya",
    "Full-Stack Developer",
    "Node.js Developer",
    "React Developer",
    "TypeScript",
    "Next.js Portfolio",
    "Web Development",
    "Software Engineer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Jenesh Devganiya", url: "https://your-vercel-deployment-link.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className}`}>
        <div className="hidden md:block">
          <AnimatedCursor
           innerSize={8}
           outerSize={35}
           innerScale={2}
           outerScale={2}
           outerAlpha={0}
           innerStyle={{
            backgroundColor: "white",
           }}
           outerStyle={{
            border: "3px solid white",
           }}
           />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
