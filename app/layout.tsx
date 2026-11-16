import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import { ThemeProvider } from "@/components/ThemeContext";

const { hero } = portfolioData;

export const metadata: Metadata = {
  title: `${hero.name} | ${hero.designations.join(" & ")}`,
  description: hero.tagline,
  keywords: [
    "Md. Iftekhirul Alam",
    "IT Administrator",
    "Junior Frontend Developer",
    "Web Developer",
    "React",
    "Tailwind CSS",
    "Network Administrator",
    "Dhaka Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: hero.name }],
  openGraph: {
    title: `${hero.name} | ${hero.designations.join(" & ")}`,
    description: hero.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
