import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroKids from "@/assets/akniet/photo-1.jpg";
import logoAkniet from "@/assets/akniet-logo.png";
import posterAkniet from "@/assets/akniet/poster.png";
import gal2 from "@/assets/akniet/photo-2.jpg";
import gal3 from "@/assets/akniet/photo-3.jpg";
import gal4 from "@/assets/akniet/photo-4.jpg";
import gal5 from "@/assets/akniet/photo-5.jpg";
import gal6 from "@/assets/akniet/photo-6.jpg";
import gal7 from "@/assets/akniet/photo-7.jpg";
import gal8 from "@/assets/akniet/photo-8.jpg";
import gal9 from "@/assets/akniet/photo-9.jpg";
import gal10 from "@/assets/akniet/photo-10.jpg";
import gal11 from "@/assets/akniet/photo-11.jpg";
import tourVideo from "@/assets/akniet/tour.mp4";
import tourPoster from "@/assets/akniet/tour-poster.jpg";
import gis1 from "@/assets/akniet/gis-1.jpg";
import gis2 from "@/assets/akniet/gis-2.jpg";
import gis3 from "@/assets/akniet/gis-3.jpg";
import gis4 from "@/assets/akniet/gis-4.jpg";
import gis5 from "@/assets/akniet/gis-5.jpg";
import gis6 from "@/assets/akniet/gis-6.jpg";
import gis7 from "@/assets/akniet/gis-7.jpg";
import gis8 from "@/assets/akniet/gis-8.jpg";
import gis9 from "@/assets/akniet/gis-9.jpg";
import gis10 from "@/assets/akniet/gis-10.jpg";
import gis11 from "@/assets/akniet/gis-11.jpg";
import gis12 from "@/assets/akniet/gis-12.jpg";
import { MapPin, Phone, Mail, Clock, Heart, BookOpen, Palette, Music, Users, Sparkles, Globe, Play, Navigation, Facebook, Instagram, Copy, Check, GraduationCap, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akniet — Kindergarten in Bishkek, Kyrgyzstan" },
      {
        name: "description",
        content:
          "A warm, modern kindergarten in Kok-Jar, Bishkek. Caring teachers, creative programs, and a safe space for children ages 1.5–6.",
      },
      { property: "og:title", content: "Akniet — Kindergarten in Bishkek" },
      {
        property: "og:description",
        content: "Where every child grows, plays, and shines. Son-Kol 43, Kok-Jar, Bishkek.",
      },
    ],
  }),
});

type Lang = "en" | "ru" | "ky";

const t = {
  en: {
    nav: { about: "About", programs: "Programs", gallery: "Gallery", contact: "Contact", enroll: "Enroll Now" },
    hero: {
      badge: "Kok-Jar, Bishkek",
      title1: "Where little hearts",
      title2: "learn to shine",
      desc: "A warm, modern kindergarten in the heart of Bishkek, Kyrgyzstan. We help children ages 1.5–6 grow through play, creativity, and care.",
      cta1: "Book a Tour",
      cta2: "Our Programs",
      kindergartenWord: "KINDERGARTEN",
      stats: [
        { n: "1.5–6", l: "Years old" },
        { n: "8:1", l: "Child–teacher" },
        { n: "3", l: "Languages" },
      ],
    },
    about: {
      tag: "About Us",
      title: "A second home for your child",
      desc: "At Akniet, we believe every child is unique. Our caring teachers create a safe, joyful space where children explore, make friends, and discover the world around them. Located in beautiful Kok-Jar, our bright classrooms and outdoor garden are designed for curious little explorers. We welcome children from 1.5 to 6 years old.",
    },
    programs: {
      tag: "Programs",
      title: "What we offer",
      desc: "A balanced day of learning, creativity, play and rest.",
      items: [
        { title: "Early Learning", desc: "Letters, numbers and curiosity through play-based discovery." },
        { title: "Creative Arts", desc: "Painting, crafting and storytelling to spark imagination." },
        { title: "Music & Movement", desc: "Singing, dancing and rhythm to build confidence." },
        { title: "Social Skills", desc: "Friendship, sharing and kindness in every activity." },
        { title: "Caring Environment", desc: "Small groups with attentive, certified teachers." },
        { title: "Three Languages", desc: "Daily lessons in Kyrgyz, Russian and English." },
        { title: "Taekwondo Classes", desc: "Fun martial arts sessions that build strength, focus and discipline." },
        { title: "School Preparation", desc: "Reading, writing and math readiness for our older group." },
      ],
    },
    contact: {
      tag: "Visit Us",
      title: "Come say hello",
      desc: "We'd love to show you around our kindergarten. Schedule a tour or give us a call — we're here to answer your questions.",
      call: "Call Us",
      address: "Address",
      addr1: "Son-Kol Street 43, Kok-Jar",
      addr2: "Bishkek, Kyrgyzstan",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      hoursVal: "Mon–Fri: 8:00 — 18:30",
    },
    map: {
      title: "Find us on the map",
      desc: "Located in Kok-Jar, just a short drive from central Bishkek.",
      google: "Directions in Google Maps",
      yandex: "Directions in Yandex Maps",
      twogis: "Directions in 2GIS",
    },
    copyAddress: "Copy address",
    copied: "Copied!",
    footer: "Akniet Kindergarten · Bishkek, Kyrgyzstan",
    heroAlt: "Happy children playing at Akniet kindergarten in Bishkek",
    gallery: {
      tag: "Gallery",
      title: "A look inside Akniet",
      desc: "Bright classrooms, cozy play areas and our outdoor space — take a peek at where your child will spend their day.",
      videoTitle: "Tour of our kindergarten",
      videoCaption: "Take a short walk through Akniet",
      playLabel: "Play video",
    },
  },
  ru: {
    nav: { about: "О нас", programs: "Программы", gallery: "Галерея", contact: "Контакты", enroll: "Записаться" },
    hero: {
      badge: "Кок-Жар, Бишкек",
      title1: "Где маленькие сердца",
      title2: "учатся сиять",
      desc: "Тёплый современный детский сад в самом сердце Бишкека, Кыргызстан. Мы помогаем детям от 1,5 до 6 лет расти через игру, творчество и заботу.",
      cta1: "Записаться на экскурсию",
      cta2: "Наши программы",
      kindergartenWord: "ДЕТСКИЙ САД",
      stats: [
        { n: "1,5–6", l: "Возраст" },
        { n: "8:1", l: "Дети–педагог" },
        { n: "3", l: "Языка" },
      ],
    },
    about: {
      tag: "О нас",
      title: "Второй дом для вашего ребёнка",
      desc: "В Akniet мы верим, что каждый ребёнок уникален. Наши заботливые педагоги создают безопасное и радостное пространство, где дети исследуют мир, заводят друзей и открывают новое. Светлые классы и уютный сад в Кок-Жаре созданы для маленьких исследователей. Принимаем детей от 1,5 до 6 лет.",
    },
    programs: {
      tag: "Программы",
      title: "Что мы предлагаем",
      desc: "Сбалансированный день обучения, творчества, игр и отдыха.",
      items: [
        { title: "Раннее развитие", desc: "Буквы, цифры и любознательность через игру." },
        { title: "Творчество", desc: "Рисование, поделки и сказки для развития фантазии." },
        { title: "Музыка и движение", desc: "Песни, танцы и ритм для уверенности в себе." },
        { title: "Социальные навыки", desc: "Дружба, доброта и умение делиться каждый день." },
        { title: "Заботливая среда", desc: "Небольшие группы и сертифицированные педагоги." },
        { title: "Три языка", desc: "Ежедневные занятия на кыргызском, русском и английском." },
        { title: "Тхэквондо", desc: "Весёлые занятия боевыми искусствами: сила, концентрация и дисциплина." },
        { title: "Подготовка к школе", desc: "Чтение, письмо и счёт для старшей группы." },
      ],
    },
    contact: {
      tag: "Посетите нас",
      title: "Приходите в гости",
      desc: "Мы с радостью покажем вам наш детский сад. Запишитесь на экскурсию или позвоните — мы ответим на все вопросы.",
      call: "Позвонить",
      address: "Адрес",
      addr1: "ул. Сон-Көл 43, Кок-Жар",
      addr2: "Бишкек, Кыргызстан",
      phone: "Телефон",
      email: "Эл. почта",
      hours: "Часы работы",
      hoursVal: "Пн–Пт: 8:00 — 18:30",
    },
    map: {
      title: "Найдите нас на карте",
      desc: "Расположены в Кок-Жаре, в нескольких минутах от центра Бишкека.",
      google: "Маршрут в Google Картах",
      yandex: "Маршрут в Яндекс Картах",
      twogis: "Маршрут в 2ГИС",
    },
    copyAddress: "Скопировать адрес",
    copied: "Скопировано!",
    footer: "Детский сад Akniet · Бишкек, Кыргызстан",
    heroAlt: "Счастливые дети в детском саду Akniet в Бишкеке",
    gallery: {
      tag: "Галерея",
      title: "Загляните в Akniet",
      desc: "Светлые классы, уютные игровые зоны и наша территория — посмотрите, где ваш ребёнок проведёт свой день.",
      videoTitle: "Экскурсия по детскому саду",
      videoCaption: "Короткая прогулка по Akniet",
      playLabel: "Смотреть видео",
    },
  },
  ky: {
    nav: { about: "Биз жөнүндө", programs: "Программалар", gallery: "Галерея", contact: "Байланыш", enroll: "Жазылуу" },
    hero: {
      badge: "Көк-Жар, Бишкек",
      title1: "Кичинекей жүрөктөр",
      title2: "жаркырап өсөт",
      desc: "Кыргызстандын Бишкек шаарынын жүрөгүндөгү жылуу, заманбап балдар бакчасы. Биз 1,5 жаштан 6 жашка чейинки балдарга оюн, чыгармачылык жана кам көрүү аркылуу өсүүгө жардам беребиз.",
      cta1: "Экскурсияга жазылуу",
      cta2: "Программаларыбыз",
      kindergartenWord: "БАЛДАР БАКЧАСЫ",
      stats: [
        { n: "1,5–6", l: "Жаш" },
        { n: "8:1", l: "Бала–тарбиячы" },
        { n: "3", l: "Тил" },
      ],
    },
    about: {
      tag: "Биз жөнүндө",
      title: "Балаңыз үчүн экинчи үй",
      desc: "Akniet'те ар бир бала уникалдуу деп ишенебиз. Камкор тарбиячыларыбыз балдар үчүн коопсуз, кубанычтуу чөйрө түзөт. Көк-Жардагы жарык класстарыбыз жана бакчабыз кичинекей изилдөөчүлөр үчүн арналган. 1,5 жаштан 6 жашка чейинки балдарды кабыл алабыз.",
    },
    programs: {
      tag: "Программалар",
      title: "Биз эмнени сунуштайбыз",
      desc: "Окуу, чыгармачылык, оюн жана эс алуу — тең салмактуу күн.",
      items: [
        { title: "Эрте өнүгүү", desc: "Тамгалар, сандар жана кызыгуу — оюн аркылуу." },
        { title: "Чыгармачылык", desc: "Сүрөт, кол өнөрчүлүк жана жомоктор." },
        { title: "Музыка жана кыймыл", desc: "Ыр, бий жана ритм — өзүнө ишенүү үчүн." },
        { title: "Коомдук көндүмдөр", desc: "Достук, боорукердик жана бөлүшүү." },
        { title: "Камкор чөйрө", desc: "Кичи топтор жана тажрыйбалуу тарбиячылар." },
        { title: "Үч тил", desc: "Күнүмдүк сабактар: кыргыз, орус, англис." },
        { title: "Тхэквондо", desc: "Күч, көңүл топтоо жана тартипти өстүргөн кызыктуу сабактар." },
        { title: "Мектепке даярдоо", desc: "Улуу топ үчүн окуу, жазуу жана эсептөө." },
      ],
    },
    contact: {
      tag: "Бизге келиңиз",
      title: "Учурашууга келиңиз",
      desc: "Бакчабыз менен таанышууга чакырабыз. Экскурсияга жазылыңыз же чалыңыз — суроолоруңузга жооп беребиз.",
      call: "Чалуу",
      address: "Дарек",
      addr1: "Сон-Көл көчөсү 43, Көк-Жар",
      addr2: "Бишкек, Кыргызстан",
      phone: "Телефон",
      email: "Электрондук почта",
      hours: "Иш убактысы",
      hoursVal: "Дүй–Жума: 8:00 — 18:30",
    },
    map: {
      title: "Бизди картадан табыңыз",
      desc: "Көк-Жарда жайгашканбыз, Бишкектин борборунан бир аз алыс.",
      google: "Google Картадан жол",
      yandex: "Яндекс Картадан жол",
      twogis: "2GIS аркылуу жол",
    },
    copyAddress: "Даректи көчүрүү",
    copied: "Көчүрүлдү!",
    footer: "Akniet балдар бакчасы · Бишкек, Кыргызстан",
    heroAlt: "Akniet балдар бакчасындагы бактылуу балдар",
    gallery: {
      tag: "Галерея",
      title: "Akniet'ке көз чаптырыңыз",
      desc: "Жарык класстар, жайлуу оюн аянтчалары жана короо — балаңыз күнүн кайда өткөрөрүн көрүңүз.",
      videoTitle: "Бакчабыз менен таанышуу",
      videoCaption: "Akniet боюнча кыска саякат",
      playLabel: "Видеону көрүү",
    },
  },
} as const;

const programIcons = [BookOpen, Palette, Music, Users, Heart, Sparkles, Shield, GraduationCap];
const programTones = [
  "bg-primary/15 text-primary",
  "bg-accent/30 text-accent-foreground",
  "bg-sunshine/40 text-secondary-foreground",
  "bg-mint/40 text-secondary-foreground",
  "bg-berry/30 text-secondary-foreground",
  "bg-secondary text-secondary-foreground",
];

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const c = t[lang];
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const phoneDisplay = "+996 55 012 76 35";
  const phoneHref = "tel:+996550127635";
  const fullAddress = "Son-Kol 43, Kok-Jar, Bishkek, Kyrgyzstan";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = fullAddress;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "ky", label: "KY" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <img
              src={logoAkniet}
              alt="Akniet kindergarten logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span>Akniet</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">{c.nav.about}</a>
            <a href="#programs" className="hover:text-primary transition-colors">{c.nav.programs}</a>
            <a href="#gallery" className="hover:text-primary transition-colors">{c.nav.gallery}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{c.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 rounded-full border border-border bg-card p-1">
              <Globe className="h-4 w-4 ml-2 text-muted-foreground" />
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${
                    lang === l.code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Switch to ${l.label}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <Button asChild className="rounded-full shadow-[var(--shadow-soft)]">
              <a href="#contact">{c.nav.enroll}</a>
            </Button>
          </div>
        </div>
        {/* Mobile lang switcher */}
        <div className="sm:hidden flex justify-center pb-3 -mt-1">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
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
              <MapPin className="h-4 w-4" /> {c.hero.badge}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight uppercase">
              <span className="text-primary">K</span>
              <span className="text-sunshine">I</span>
              <span className="text-mint">N</span>
              <span className="text-berry">D</span>
              <span className="text-accent-foreground">E</span>
              <span className="text-primary">R</span>
              <span className="text-sunshine">G</span>
              <span className="text-mint">A</span>
              <span className="text-berry">R</span>
              <span className="text-primary">T</span>
              <span className="text-sunshine">E</span>
              <span className="text-mint">N</span>
              <span className="text-foreground"> - </span>
              <span className="text-berry">A</span>
              <span className="text-primary">K</span>
              <span className="text-sunshine">N</span>
              <span className="text-mint">I</span>
              <span className="text-berry">E</span>
              <span className="text-primary">T</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {c.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)] h-12 px-8">
                <a href="#contact">{c.hero.cta1}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8">
                <a href="#programs">{c.hero.cta2}</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-6">
              {c.hero.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="h-10 w-px bg-border" />}
                  <div>
                    <div className="text-3xl font-bold text-primary">{s.n}</div>
                    <div className="text-sm text-muted-foreground">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[image:var(--gradient-hero)] rounded-3xl opacity-20 blur-2xl" aria-hidden />
            <img
              src={posterAkniet}
              alt={c.heroAlt}
              className="relative rounded-3xl shadow-[var(--shadow-soft)] w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary">{c.about.tag}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.about.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{c.about.desc}</p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary">{c.programs.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.programs.title}</h2>
            <p className="text-muted-foreground text-lg">{c.programs.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.programs.items.map((p, i) => {
              const Icon = programIcons[i];
              const tone = programTones[i % programTones.length];
              return (
                <Card
                  key={p.title}
                  className="p-7 rounded-2xl border-border/60 bg-card hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${tone}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Gallery */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary">{c.gallery.tag}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.gallery.title}</h2>
            <p className="text-muted-foreground text-lg">{c.gallery.desc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:col-span-2 md:row-span-2 group bg-black">
              {videoPlaying ? (
                <video
                  src={tourVideo}
                  poster={tourPoster}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover aspect-square"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoPlaying(true)}
                  aria-label={c.gallery.playLabel}
                  className="relative block h-full w-full aspect-square text-left"
                >
                  <img
                    src={tourPoster}
                    alt={c.gallery.videoTitle}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-7 w-7 md:h-9 md:w-9 fill-current ml-1" />
                    </span>
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <span className="block text-base md:text-lg font-semibold">{c.gallery.videoTitle}</span>
                    <span className="block text-xs md:text-sm opacity-90">{c.gallery.videoCaption}</span>
                  </span>
                </button>
              )}
            </div>
            {[gis1, gis2, gis3, gis4, gis5, gis6, gis7, gis8, gis9, gis10, gis11, gis12, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11].map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ${
                  i === 5 || i === 13 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`${c.gallery.title} — ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-[image:var(--gradient-hero)] p-10 md:p-16 text-primary-foreground shadow-[var(--shadow-soft)] grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest opacity-80">{c.contact.tag}</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{c.contact.title}</h2>
              <p className="opacity-90 text-lg max-w-md">{c.contact.desc}</p>
              <Button asChild size="lg" variant="secondary" className="rounded-full h-12 px-8 mt-4">
                <a href={phoneHref}>{c.contact.call}</a>
              </Button>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.contact.address}</div>
                  <div className="opacity-90">{c.contact.addr1}</div>
                  <div className="opacity-90">{c.contact.addr2}</div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    aria-label={c.copyAddress}
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors px-3 py-1.5 text-xs font-semibold"
                  >
                    {addressCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {addressCopied ? c.copied : c.copyAddress}
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.contact.phone}</div>
                  <a href={phoneHref} className="opacity-90 hover:opacity-100 underline-offset-2 hover:underline">
                    {phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.contact.email}</div>
                  <a
                    href="mailto:aknietkindergarten@gmail.com"
                    className="opacity-90 hover:opacity-100 underline-offset-2 hover:underline"
                  >
                    aknietkindergarten@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.contact.hours}</div>
                  <div className="opacity-90">{c.contact.hoursVal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section id="map" className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{c.map.title}</h2>
            <p className="text-muted-foreground mt-3">{c.map.desc}</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Akniet Kindergarten location map"
              src="https://www.google.com/maps?q=Son-Kol+43,+Kok-Jar,+Bishkek&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Son-Kol+43+Kok-Jar+Bishkek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" /> {c.map.google}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a
                href="https://yandex.com/maps/?rtext=~Son-Kol+43,+Kok-Jar,+Bishkek&rtt=auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" /> {c.map.yandex}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a
                href="https://2gis.kg/bishkek/firm/70000001102761172"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" /> {c.map.twogis}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/17yVpfzcMK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/akniet_cadik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <div className="text-center">© 2026 {c.footer}</div>
        </div>
      </footer>
    </div>
  );
}
