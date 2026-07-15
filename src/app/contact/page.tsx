import type { Metadata } from "next";
import { ContactClient } from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pawsitive K9 Academy. Book a free assessment, ask questions, or start your dog's training journey.",
};

export default function ContactPage() {
  return <ContactClient />;
}
