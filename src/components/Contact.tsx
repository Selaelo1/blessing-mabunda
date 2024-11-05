import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <footer className="py-12 bg-zinc-800/50" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-400">
          Get in Touch
        </h2>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:contact@blessingmabunda.com"
            className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 transition-colors transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="tel:+27780211698"
            className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 transition-colors transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Phone</span>
          </a>
        </div>
        <p className="text-zinc-400">
          © 2024 Blessing Mabunda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
