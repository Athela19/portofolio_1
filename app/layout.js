import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ambatukam | Professional Developer & UI/UX Designer",
  description: "Explore the professional and cheerful portfolio of Ambatukam (Amba). Specialized in building high-performance web applications with a focus on user-centric design and technical excellence.",
  keywords: ["Ambatukam", "Amba", "Web Developer", "UI/UX Designer", "Next.js", "React Portfolio", "Professional Developer"],
  authors: [{ name: "Ambatukam", url: "https://portofolio-1-ochre.vercel.app/" }],
  creator: "Ambatukam",
  metadataBase: new URL("https://portofolio-1-ochre.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-1-ochre.vercel.app/",
    title: "Ambatukam | Creative Developer & Designer",
    description: "Crafting digital experiences with passion and precision. Check out Amba's latest projects and skills.",
    siteName: "Ambatukam Portfolio",
    images: [
      {
        url: "/image_1.jpg",
        width: 1200,
        height: 630,
        alt: "Ambatukam Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambatukam | Creative Developer & Designer",
    description: "Professional developer blending engineering with cheerful design.",
    images: ["/image_1.jpg"],
    creator: "@ambatukam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
