import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingCta } from "@/components/layout/floating-cta";
import { HostelJsonLd } from "@/components/shared/json-ld";
import { site } from "@/lib/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Safe & Comfortable Girls Hostel in Kathmandu`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "girls hostel Kathmandu",
    "ladies hostel Nepal",
    "safe hostel for girls",
    "student accommodation Kathmandu",
    "girls hostel New Baneshwor",
    "hostel with food Kathmandu",
    "working women hostel",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Safe & Comfortable Girls Hostel in Kathmandu`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Girls Hostel in Kathmandu`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E91E63" },
    { media: "(prefers-color-scheme: dark)", color: "#121014" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <FloatingCta />
        </ThemeProvider>
        <HostelJsonLd />
      </body>
    </html>
  );
}
