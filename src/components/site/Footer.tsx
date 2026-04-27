import { MessageSquare, AlertTriangle, HandHeart, Users, ArrowRight, MapPin, Phone, Mail, Clock, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/chiefdom-logo.png";
import map from "@/assets/sierra-leone-map.png";

const ENGAGE = [
  { icon: MessageSquare, title: "HAVE FEEDBACK?", sub: "Submit your feedback or suggestions", cta: "SUBMIT FEEDBACK" },
  { icon: AlertTriangle, title: "REPORT AN ISSUE", sub: "Help us improve our community", cta: "REPORT NOW" },
  { icon: HandHeart, title: "VOLUNTEER", sub: "Be part of our development journey", cta: "GET INVOLVED" },
  { icon: Users, title: "COMMUNITY FORUM", sub: "Join discussions and share your ideas", cta: "JOIN THE FORUM" },
];

const QUICK_LINKS = [
  "About the Chiefdom",
  "Leadership",
  "News & Announcements",
  "Development Projects",
  "Shebora Innovation Space",
  "Investment & Opportunities",
  "Community Engagement",
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", color: "bg-[#1877F2]" },
  { icon: Twitter, label: "Twitter", color: "bg-[#1DA1F2]" },
  { icon: Youtube, label: "YouTube", color: "bg-[#FF0000]" },
  { icon: Instagram, label: "Instagram", color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Engagement strip */}
      <div className="border-b border-white/10">
        <div className="container grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGE.map(({ icon: Icon, title, sub, cta }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-0.5 text-xs text-footer-muted">{sub}</p>
                <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-secondary hover:underline">
                  {cta} <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Chiefdom crest" className="h-12 w-12 object-contain" width={48} height={48} loading="lazy" />
            <p className="font-display text-base font-bold">BOMBALI SHEBORA<br />CHIEFDOM</p>
          </div>
          <p className="mt-4 text-sm text-footer-muted">
            Preserving our heritage, promoting peace, and driving sustainable development for a better future.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-bold text-secondary">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l}><a href="#" className="text-footer-muted hover:text-secondary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-bold text-secondary">CONTACT US</h3>
          <ul className="space-y-3 text-sm text-footer-muted">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /><span>Bombali Shebora Chiefdom Office<br />Magburaka, Bombali District<br />Sierra Leone</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-secondary" /> +232 76 123456</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-secondary" /> info@sheborachiefdom.sl</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-secondary" /> Mon - Fri: 8:00 AM - 4:00 PM</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-bold text-secondary">FOLLOW US</h3>
          <ul className="space-y-2 text-sm">
            {SOCIALS.map(({ icon: Icon, label, color }) => (
              <li key={label}>
                <a href="#" className="flex items-center gap-2 text-footer-muted hover:text-secondary">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-md text-white ${color}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base font-bold text-secondary">OUR LOCATION</h3>
          <div className="rounded-lg bg-white/5 p-3">
            <img src={map} alt="Map of Sierra Leone showing Bombali Shebora location" loading="lazy" width={300} height={300} className="mx-auto h-40 w-auto" />
            <p className="mt-2 text-center text-xs text-footer-muted">Bombali Shebora Chiefdom</p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-secondary/95">
        <div className="container flex flex-col items-center justify-between gap-2 py-3 text-xs text-secondary-foreground sm:flex-row">
          <p>© 2025 Bombali Shebora Chiefdom. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
