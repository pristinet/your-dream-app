import { Phone, Mail, Facebook, Twitter, Youtube, Instagram, Search, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/chiefdom-logo.png";

const NAV = [
  "Home", "About Us", "Leadership", "News", "Projects", "SIS", "Investment", "Contact",
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-header text-header-foreground text-xs">
        <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
          <p className="font-medium tracking-wide">Unity. Tradition. Development.</p>
          <div className="flex items-center gap-5">
            <a href="tel:+23276123456" className="hidden items-center gap-1.5 hover:text-secondary sm:flex">
              <Phone className="h-3.5 w-3.5 text-secondary" />
              +232 76 123456
            </a>
            <a href="mailto:info@sheborachiefdom.sl" className="hidden items-center gap-1.5 hover:text-secondary md:flex">
              <Mail className="h-3.5 w-3.5 text-secondary" />
              info@sheborachiefdom.sl
            </a>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-secondary"><Facebook className="h-3.5 w-3.5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-secondary"><Twitter className="h-3.5 w-3.5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-secondary"><Youtube className="h-3.5 w-3.5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-secondary"><Instagram className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Bombali Shebora Chiefdom crest" className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14" width={64} height={64} />
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-primary md:text-lg">BOMBALI SHEBORA</p>
              <p className="font-display text-base font-bold text-primary md:text-lg">CHIEFDOM</p>
              <p className="text-[10px] font-medium tracking-wider text-secondary md:text-xs">BAI SEBORA N'GBALAN II</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  i === 0 ? "text-secondary" : "text-foreground hover:text-secondary"
                }`}
              >
                {item}
                {i !== 0 && i !== NAV.length - 1 && <ChevronDown className="h-3 w-3" />}
                {i === 0 && <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-secondary" />}
              </a>
            ))}
            <button aria-label="Search" className="ml-2 rounded-full p-2 text-foreground transition-colors hover:bg-muted hover:text-secondary">
              <Search className="h-4 w-4" />
            </button>
          </nav>

          <button
            className="rounded-md p-2 text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container flex flex-col py-3">
              {NAV.map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className={`border-b border-border/50 py-3 text-sm font-semibold uppercase tracking-wide ${
                    i === 0 ? "text-secondary" : "text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
