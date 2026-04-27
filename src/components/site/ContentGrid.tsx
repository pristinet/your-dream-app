import { ArrowRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import sis from "@/assets/sis-youth.jpg";

const news = [
  { img: news1, title: "Government to Present Paramount Chief Elect on 2nd May 2026", date: "May 15, 2025" },
  { img: news2, title: "Chiefdom Council Meeting Held at Magburaka", date: "May 10, 2025" },
  { img: news3, title: "Youth Clean-Up Exercise Across Shebora Sections", date: "April 28, 2025" },
];

const projects = [
  { img: p1, title: "Wusum Community Center Construction", pct: 75 },
  { img: p2, title: "Feeder Road Rehabilitation Project", pct: 60 },
  { img: p3, title: "Clean Water Access Initiative", pct: 40 },
];

const SectionHeader = ({ title, link = "View All" }: { title: string; link?: string }) => (
  <div className="mb-4 flex items-center justify-between border-b-2 border-secondary/40 pb-2">
    <h2 className="font-display text-lg font-bold tracking-wide text-primary">{title}</h2>
    <a href="#" className="text-xs font-semibold text-secondary hover:underline">{link}</a>
  </div>
);

const ContentGrid = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Latest News */}
        <article className="rounded-xl bg-card p-5 shadow-card">
          <SectionHeader title="LATEST NEWS" />
          <ul className="space-y-4">
            {news.map((n) => (
              <li key={n.title} className="flex gap-3">
                <img src={n.img} alt={n.title} loading="lazy" width={96} height={72} className="h-16 w-24 shrink-0 rounded-md object-cover" />
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-semibold text-foreground">{n.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{n.date}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="mt-5 flex items-center justify-between rounded-md bg-primary px-4 py-3 text-xs font-bold uppercase text-primary-foreground transition-colors hover:bg-primary-glow">
            All News & Announcements <ArrowRight className="h-4 w-4" />
          </a>
        </article>

        {/* Ongoing Projects */}
        <article className="rounded-xl bg-card p-5 shadow-card">
          <SectionHeader title="ONGOING PROJECTS" />
          <ul className="space-y-4">
            {projects.map((p) => (
              <li key={p.title} className="flex gap-3">
                <img src={p.img} alt={p.title} loading="lazy" width={96} height={72} className="h-16 w-24 shrink-0 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-semibold text-foreground">{p.title}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="progress-track">
                      <div className="progress-bar" style={{ width: `${p.pct}%` }} />
                    </div>
                    <span className="text-xs font-bold text-secondary">{p.pct}%</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="mt-5 flex items-center justify-between rounded-md bg-primary px-4 py-3 text-xs font-bold uppercase text-primary-foreground transition-colors hover:bg-primary-glow">
            Project Dashboard <ArrowRight className="h-4 w-4" />
          </a>
        </article>

        {/* SIS */}
        <article className="overflow-hidden rounded-xl bg-card shadow-card">
          <div className="p-5">
            <SectionHeader title="SHEBORA INNOVATION SPACE" />
            <div className="rounded-lg bg-gradient-green p-5 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold leading-tight">
                Empowering the<br />Next Generation
              </h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                SIS is dedicated to inspiring innovation, skills development, and leadership among the youth of Bombali Shebora.
              </p>
              <img src={sis} alt="Youth at the Shebora Innovation Space" loading="lazy" width={768} height={300} className="mt-4 h-36 w-full rounded-md object-cover" />
              <a href="#" className="mt-4 flex items-center justify-between rounded-md bg-gradient-gold px-4 py-3 text-xs font-bold uppercase text-secondary-foreground transition-transform hover:-translate-y-0.5">
                Discover SIS <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContentGrid;
