import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Poonam Palace - Luxury Banquet Hall in Pulgaon | Wedding & Event Venue",
  description: "Experience royal celebrations at Poonam Palace, Pulgaon's premier luxury banquet hall. Perfect for weddings, receptions, corporate events, and celebrations. Seating capacity 500+ guests. Book now!",
  keywords: "Poonam Palace, banquet hall Pulgaon, wedding venue Pulgaon, luxury banquet hall, event venue Maharashtra, wedding hall Wardha, reception venue, corporate events Pulgaon",
  authors: [{ name: "Poonam Palace" }],
  openGraph: {
    title: "Poonam Palace - Where Celebrations Become Royal",
    description: "Luxury banquet hall in Pulgaon offering world-class amenities for weddings, receptions, and events. Capacity 500+ guests.",
    url: "https://poonampalace.com",
    siteName: "Poonam Palace",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}