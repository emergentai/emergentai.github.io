import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Emergent AI - Toronto AI Lab | RAG, Agentic Workflows & Custom AI Solutions",
    template: "%s | Emergent AI",
  },
  description: "Toronto-based AI lab specializing in RAG systems, agentic workflows, customer service AI, and custom AI solutions. Transform your business with practical artificial intelligence.",
  keywords: [
    "AI lab Toronto",
    "RAG systems",
    "agentic workflows",
    "customer service AI",
    "business intelligence AI",
    "process automation",
    "custom AI solutions",
    "artificial intelligence Canada",
    "AI consulting Toronto",
    "machine learning solutions"
  ],
  openGraph: {
    title: "Emergent AI - Toronto AI Lab | RAG, Agentic Workflows & Custom AI Solutions",
    description: "Toronto-based AI lab specializing in RAG systems, agentic workflows, customer service AI, and custom AI solutions. Transform your business with practical artificial intelligence.",
    url: "https://emergentai.ca",
    siteName: "Emergent AI",
    images: [
      {
        url: "https://emergentai.ca/og.png",
        width: 1920,
        height: 1080,
        alt: "Emergent AI - Toronto AI Lab"
      },
    ],
    locale: "en-CA",
    type: "website",
  },
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
  twitter: {
    title: "Emergent AI - Toronto AI Lab",
    description: "Toronto-based AI lab specializing in RAG systems, agentic workflows, and custom AI solutions.",
    card: "summary_large_image",
    images: ["https://emergentai.ca/og.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "https://emergentai.ca",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body
        className={`bg-white dark:bg-black transition-colors duration-300 ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
