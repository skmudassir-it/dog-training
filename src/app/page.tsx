import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faBone, faHeart, faStar, faShield, faCheck, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HomeClient } from "@/components/HomeClient";

const services = [
  { title: "Puppy Training", description: "Start your puppy off right with socialization, housebreaking, and foundational commands.", icon: faPaw, image: "/images/services/puppy-training.jpg", href: "/services/puppy-training" },
  { title: "Obedience Training", description: "Essential commands like sit, stay, come, heel, and proper leash walking.", icon: faShield, image: "/images/services/obedience-training.jpg", href: "/services/obedience-training" },
  { title: "Behavior Modification", description: "Address anxiety, aggression, excessive barking, and other behavioral issues.", icon: faHeart, image: "/images/services/behavior-modification.jpg", href: "/services/behavior-modification" },
  { title: "Advanced Off-Leash", description: "Master reliable off-leash control with distance commands and e-collar training.", icon: faStar, image: "/images/services/advanced-off-leash.jpg", href: "/services/advanced-off-leash" },
  { title: "Board & Train", description: "Intensive 2-4 week immersion programs with professional trainers in a home-like setting.", icon: faBone, image: "/images/services/board-train.jpg", href: "/services/board-and-train" },
  { title: "Group Classes", description: "Affordable small-group sessions that build socialization skills in a controlled environment.", icon: faCheck, image: "/images/services/group-classes.jpg", href: "/services/group-classes" },
];

const testimonials = [
  { name: "Sarah M.", quote: "Our rescue dog was aggressive with strangers. After 3 weeks of board & train with Pawsitive K9, she's a completely different dog — calm, confident, and loving.", role: "Rescue Dog Owner", rating: 5 },
  { name: "James R.", quote: "The puppy training program saved our sanity. Our Golden Retriever puppy went from chaos to calm in just 4 sessions. Highly recommend!", role: "Puppy Parent", rating: 5 },
  { name: "Lisa T.", quote: "We tried two other trainers before finding Pawsitive K9. Their positive reinforcement approach actually works, and our dog LOVES going to training.", role: "Doodle Owner", rating: 5 },
  { name: "Mike D.", quote: "The off-leash training is incredible. My German Shepherd now has perfect recall even around other dogs and squirrels. Life-changing!", role: "Working Breed Owner", rating: 5 },
];

const stats = [
  { number: "500+", label: "Dogs Trained" },
  { number: "8+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "6", label: "Programs Offered" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/40">
              Metro City's Trusted Dog Trainers
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Transform Your Dog Into a <span className="text-primary">Well-Behaved</span> Companion
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              We use science-based positive reinforcement to build trust, confidence, and lifelong good behavior. Every dog has potential — we help unlock it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="text-base">
                  <FontAwesomeIcon icon={faPaw} className="mr-2" />
                  Get a Free Assessment
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button variant="outline" size="lg" className="text-base">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Training Programs</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">From puppy basics to advanced off-leash mastery, we have a program tailored for every dog and every goal.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.href} href={svc.href} className="group block">
                <Card className="glass-card overflow-hidden transition-shadow hover:shadow-lg h-full">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={svc.icon} className="size-4" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{svc.title}</CardTitle>
                    <CardDescription>{svc.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <HomeClient testimonials={testimonials} />

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to Transform Your Dog?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation and let us create a customized training plan for your furry family member.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" variant="secondary" className="text-base">
              Schedule Your Free Assessment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
