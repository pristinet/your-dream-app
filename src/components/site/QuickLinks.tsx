import { Home, Users, Megaphone, Settings, Lightbulb, Handshake, UsersRound } from "lucide-react";

const ITEMS = [
  { icon: Home, title: "ABOUT THE CHIEFDOM", sub: "Learn Our History" },
  { icon: Users, title: "LEADERSHIP", sub: "Meet Our Leaders" },
  { icon: Megaphone, title: "NEWS & ANNOUNCEMENTS", sub: "Stay Informed" },
  { icon: Settings, title: "DEVELOPMENT PROJECTS", sub: "Track Our Progress" },
  { icon: Lightbulb, title: "SHEBORA INNOVATION SPACE", sub: "Empowering Youth" },
  { icon: Handshake, title: "INVESTMENT & OPPORTUNITIES", sub: "Partner With Us" },
  { icon: UsersRound, title: "COMMUNITY ENGAGEMENT", sub: "Get Involved" },
];

const QuickLinks = () => {
  return (
    <section className="container relative -mt-10 md:-mt-14 lg:-mt-16">
      <div className="grid grid-cols-2 gap-3 rounded-xl bg-card p-4 shadow-elevated sm:grid-cols-3 md:p-6 lg:grid-cols-7">
        {ITEMS.map(({ icon: Icon, title, sub }) => (
          <a
            key={title}
            href="#"
            className="group flex flex-col items-center rounded-lg p-3 text-center transition-colors hover:bg-muted"
          >
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <p className="text-[11px] font-bold leading-tight text-primary">{title}</p>
            <p className="mt-1 text-[10px] text-muted-foreground">{sub}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
