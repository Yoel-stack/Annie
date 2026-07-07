import type { Metadata } from "next";
import { quickFont, quickFontTitle } from "../config/fonts";
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from "@clerk/localizations";
import { clerkTheme } from "../components/clerk/ClerkAppearance";
import "./globals.css";
  
  
export const metadata: Metadata = {
  title: "Annie",
  description: "Papeleria creativa Annie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quickFont.variable} ${quickFontTitle.variable}   antialiased`}
    >
      <body className={`${quickFont.className} antialased`}>
        <ClerkProvider localization={esES} appearance={clerkTheme}>{children}</ClerkProvider>
      </body>
    </html>
  )
};
