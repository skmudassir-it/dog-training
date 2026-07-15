import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <FontAwesomeIcon icon={faPaw} className="size-5" />
              <span>Pawsitive K9 Academy</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transforming dogs into well-behaved family members through positive reinforcement training in the Greater Metro area.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-5" /></a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-5" /></a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><FontAwesomeIcon icon={faYoutube} className="size-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-secondary transition-colors">Success Stories</Link></li>
              <li><Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services/puppy-training" className="hover:text-secondary transition-colors">Puppy Training</Link></li>
              <li><Link href="/services/obedience-training" className="hover:text-secondary transition-colors">Obedience Training</Link></li>
              <li><Link href="/services/behavior-modification" className="hover:text-secondary transition-colors">Behavior Modification</Link></li>
              <li><Link href="/services/advanced-off-leash" className="hover:text-secondary transition-colors">Advanced Off-Leash</Link></li>
              <li><Link href="/services/board-and-train" className="hover:text-secondary transition-colors">Board & Train</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-4 mt-0.5 text-secondary" />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-4 mt-0.5 text-secondary" />
                <span>hello@pawsitivek9.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4 mt-0.5 text-secondary" />
                <span>123 Training Lane<br />Metro City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Pawsitive K9 Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
