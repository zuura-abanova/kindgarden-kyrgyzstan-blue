import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroKids from "@/assets/hero-kids.jpg";
import { MapPin, Phone, Mail, Clock, Heart, BookOpen, Palette, Music, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kun Bala — Kindergarten in Bishkek, Kyrgyzstan" },
      {
        name: "description",
        content:
          "A warm, modern kindergarten in Kok-Jar, Bishkek. Caring teachers, creative programs, and a safe space for children ages 2–6.",
      },
      { property: "og:title", content: "Kun Bala — Kindergarten in Bishkek" },
      {
        property: "og:description",
        content: "Where every child grows, plays, and shines. Son-Kol 43, Kok-Jar, Bishkek.",
      },
    ],
  }),
});

const programs = [
  { icon: BookOpen, title: "Early Learning", desc: "Letters, numbers and curiosity through play-based discovery." },
  { icon: Palette, title: "Creative Arts", desc: "Painting, crafting and storytelling to spark imagination." },
  { icon: Music, title: "Music & Movement", desc: "Singing, dancing and rhythm to build confidence." },
  { icon: Users, title: "Social Skills", desc: "Friendship, sharing and kindness in every activity." },
  { icon: Heart, title: "Caring Environment", desc: "Small groups with attentive, certified teachers." },
  { icon: Sparkles, title: "Two Languages", desc: "Daily lessons in Kyrgyz, Russian and English." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <span>Kun Bala</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild className="rounded-full shadow-[var(--shadow-soft)]">
            <a href="#contact">Enroll Now</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-soft)]" aria-hidden />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sunshine/30 blur-3xl" aria-hidden />

        <div className="container relative mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <MapPin className="h-4 w-4" /> Kok-Jar, Bishkek
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Where little hearts <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">learn to shine</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              A warm, modern kindergarten in the heart of Bishkek. We help children
              ages 2–6 grow through play, creativity, and care.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)] h-12 px-8">
                <a href="#contact">Book a Tour</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8">
                <a href="#programs">Our Programs</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Years caring</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">8:1</div>
                <div className="text-sm text-muted-foreground">Child–teacher</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[image:var(--gradient-hero)] rounded-3xl opacity-20 blur-2xl" aria-hidden />
            <img
              src={heroKids}
              alt="Happy children playing at Kun Bala kindergarten in Bishkek"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-[var(--shadow-soft)] w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A second home for your child</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Kun Bala, we believe every child is unique. Our caring teachers create
            a safe, joyful space where children explore, make friends, and discover
            the world around them. Located in beautiful Kok-Jar, our bright classrooms
            and outdoor garden are designed for curious little explorers.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary">Programs</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we offer</h2>
            <p className="text-muted-foreground text-lg">
              A balanced day of learning, creativity, play and rest.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <Card
                key={p.title}
                className="p-7 rounded-2xl border-border/60 bg-card hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground mb-4">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-[image:var(--gradient-hero)] p-10 md:p-16 text-primary-foreground shadow-[var(--shadow-soft)] grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest opacity-80">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Come say hello</h2>
              <p className="opacity-90 text-lg max-w-md">
                We'd love to show you around our kindergarten. Schedule a tour or
                give us a call — we're here to answer your questions.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full h-12 px-8 mt-4">
                <a href="tel:+996700000000">Call Us</a>
              </Button>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="opacity-90">Son-Kol Street 43, Kok-Jar</div>
                  <div className="opacity-90">Bishkek, Kyrgyzstan</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="opacity-90">+996 (700) 00-00-00</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="opacity-90">hello@kunbala.kg</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="opacity-90">Mon–Fri: 8:00 — 18:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kun Bala Kindergarten · Bishkek, Kyrgyzstan
        </div>
      </footer>
    </div>
  );
}
