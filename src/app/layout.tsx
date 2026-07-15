import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "Pawsitive K9 Academy | Professional Dog Training",
    template: "%s | Pawsitive K9 Academy",
  },
  description: "Transform your dog into a well-behaved companion with Pawsitive K9 Academy's positive reinforcement training. Serving Metro City with puppy training, obedience, behavior modification, and board & train programs.",
  keywords: ["dog training", "puppy training", "obedience training", "dog behavior", "board and train", "Metro City"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
