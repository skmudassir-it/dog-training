import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faBone, faHeart, faStar, faShield, faCheck, faArrowLeft, faClock, faDog, faChartLine, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type ServiceSlug = "puppy-training" | "obedience-training" | "behavior-modification" | "advanced-off-leash" | "board-and-train" | "group-classes";

const services: Record<ServiceSlug, {
  title: string;
  description: string;
  badge: string;
  icon: typeof faPaw;
  image: string;
  longDescription: string;
  features: string[];
  pricing: string;
  duration: string;
  age: string;
  includes: string[];
  faq: { q: string; a: string }[];
}> = {
  "puppy-training": {
    title: "Puppy Training",
    description: "Give your puppy the best start in life with our comprehensive foundation program.",
    badge: "Most Popular",
    icon: faPaw,
    image: "/images/services/puppy-training.jpg",
    longDescription: "The first 16 weeks of a puppy's life are the most critical for shaping lifelong behavior. Our Puppy Training program leverages this critical window with positive reinforcement techniques that build confidence, trust, and good habits from day one. We cover everything from housebreaking and crate training to foundational commands and proper socialization — all in the comfort of your home where problems actually occur.",
    features: ["Housebreaking & Potty Training", "Crate Training", "Bite Inhibition", "Sit, Stay, Come, Down", "Leash Introduction", "Socialization Protocols"],
    pricing: "Starting at $599",
    duration: "6 weeks (weekly sessions)",
    age: "8-16 weeks",
    includes: ["6 Private In-Home Sessions", "Training Handbook", "Puppy Socialization Checklist", "Unlimited Text Support", "Graduation Certificate"],
    faq: [
      { q: "What age should my puppy start training?", a: "We recommend starting as early as 8 weeks. The earlier you establish good habits, the easier training will be as your puppy grows." },
      { q: "My puppy isn't fully vaccinated yet — is that okay?", a: "Yes! Our in-home sessions eliminate exposure risks. We also provide virtual options if preferred." },
      { q: "How long until I see results?", a: "Most puppy parents see significant improvement in housebreaking and basic manners within the first 2-3 sessions." },
    ],
  },
  "obedience-training": {
    title: "Obedience Training",
    description: "Build a rock-solid foundation of reliable obedience that works in the real world.",
    badge: "Essential",
    icon: faShield,
    image: "/images/services/obedience-training.jpg",
    longDescription: "Obedience is the cornerstone of a harmonious relationship with your dog. Our program goes beyond simple commands — we teach reliability under distraction, impulse control, and calm default behaviors. Whether you have a unruly adolescent or an adult dog who never learned manners, this program builds the skills your dog needs to be a pleasure to live with.",
    features: ["Sit & Down with Duration", "Reliable Recall (Come)", "Loose Leash Walking", "Heel Position", "Place Command", "Leave It & Drop It"],
    pricing: "Starting at $699",
    duration: "4-8 weeks",
    age: "4+ months",
    includes: ["8 Private Sessions", "Training E-Collar (optional)", "Progress Tracker", "Video Feedback", "Group Class Access"],
    faq: [
      { q: "Is my dog too old for obedience training?", a: "Absolutely not! Dogs can learn at any age. We've successfully trained dogs from 4 months to 12+ years old." },
      { q: "Do you use shock collars?", a: "We use modern e-collars only for advanced off-leash work, and always at the lowest perceptible level. Most obedience clients never need one." },
      { q: "What's the difference between basic and advanced obedience?", a: "Basic covers commands in low-distraction settings. Advanced proofing adds real-world distractions: other dogs, squirrels, doorbells, and public spaces." },
    ],
  },
  "behavior-modification": {
    title: "Behavior Modification",
    description: "Transform challenging behaviors with science-backed protocols and compassionate training.",
    badge: "Specialized",
    icon: faHeart,
    image: "/images/services/behavior-modification.jpg",
    longDescription: "Problem behaviors can strain — and sometimes break — the bond between you and your dog. Our behavior modification program uses the latest research in canine psychology and learning theory to address the root cause, not just the symptoms. We specialize in reactivity, aggression, separation anxiety, resource guarding, fear-based behaviors, and compulsive disorders. Every plan is custom-built after a thorough behavioral assessment.",
    features: ["Reactivity (Leash, Barrier, Dog)", "Human-Directed Aggression", "Separation Anxiety", "Resource Guarding", "Fear & Phobia Desensitization", "Compulsive Behaviors"],
    pricing: "Starting at $899",
    duration: "8-12 weeks",
    age: "Any age",
    includes: ["Initial Behavioral Assessment", "Custom Behavior Plan", "12 Private Sessions", "24/7 Emergency Support", "Veterinary Collaboration"],
    faq: [
      { q: "Can aggression really be fixed?", a: "While we never promise a 'cure', most aggressive dogs can be successfully managed and significantly improved with proper protocols and owner commitment." },
      { q: "Do you work with veterinarians?", a: "Yes. We often collaborate with your vet to rule out medical causes and, when appropriate, incorporate medication as part of a comprehensive plan." },
      { q: "Is my dog a lost cause?", a: "We've yet to meet a dog that couldn't improve with the right approach. The most important factor is owner commitment to the plan." },
    ],
  },
  "advanced-off-leash": {
    title: "Advanced Off-Leash Training",
    description: "Achieve total off-leash reliability so your dog can enjoy freedom safely.",
    badge: "Advanced",
    icon: faStar,
    image: "/images/services/advanced-off-leash.jpg",
    longDescription: "Imagine hiking with your dog off-leash, confident they'll return the instant you call — even mid-chase after a squirrel. Our Advanced Off-Leash program builds this level of reliability through progressive distance work, modern e-collar conditioning, and extensive proofing in real-world environments. This is the ultimate freedom for both you and your dog, achieved through clear communication, not intimidation.",
    features: ["Reliable Recall at Distance", "Remote Collar Conditioning", "Place at Distance", "Down at Distance", "Trail & Park Proofing", "Emergency Stop"],
    pricing: "Starting at $1,199",
    duration: "4-week intensive",
    age: "6+ months",
    includes: ["E-Collar System Included", "12 Training Sessions", "Field Trips (Trails/Parks)", "Owner Training & Transfer", "Lifetime Group Refreshers"],
    faq: [
      { q: "Is e-collar training humane?", a: "Yes, when done correctly. We condition the collar at the lowest perceptible level — like a tap on the shoulder — and never use it for punishment." },
      { q: "What breeds do best with off-leash training?", a: "All breeds can succeed, but working breeds (Shepherds, Retrievers, Collies) tend to excel due to their natural biddability." },
      { q: "Can I transition to off-leash after obedience training?", a: "Yes! In fact, that's the ideal progression. A solid on-leash foundation makes off-leash work much smoother." },
    ],
  },
  "board-and-train": {
    title: "Board & Train",
    description: "Intensive immersion training where your dog lives and learns with a professional trainer.",
    badge: "Intensive",
    icon: faBone,
    image: "/images/services/board-train.jpg",
    longDescription: "Our Board & Train program is the fastest path to a well-trained dog. Your dog stays in a trainer's home (not a kennel) for 2-4 weeks, receiving multiple daily training sessions woven into normal home life. This immersion approach produces faster, deeper results than weekly sessions — ideal for busy families, challenging behaviors, or preparing for major life changes like a new baby or move.",
    features: ["2-Week or 4-Week Programs", "Multiple Daily Sessions", "Home Environment Immersion", "Daily Photo/Video Updates", "Comprehensive Transfer Session", "Lifetime Phone Support"],
    pricing: "$1,999 (2-week) / $3,499 (4-week)",
    duration: "2 or 4 weeks",
    age: "4+ months",
    includes: ["All Training Equipment", "Daily Updates", "Take-Home Training Guide", "2 Private Follow-Up Sessions", "Group Class Access for Life"],
    faq: [
      { q: "Will my dog forget me?", a: "Not at all! Dogs bond primarily through positive experiences and scent — not just time. The transfer session ensures commands work for you, not just the trainer." },
      { q: "Where does my dog stay?", a: "In a trainer's home, not a kennel. Your dog lives as part of the family, learning household manners alongside formal training." },
      { q: "What about my dog's special needs (diet, meds, anxiety)?", a: "We accommodate all special requirements. During the initial assessment, we'll go over everything in detail." },
    ],
  },
  "group-classes": {
    title: "Group Classes",
    description: "Affordable small-group training with individual attention and socialization benefits.",
    badge: "Value",
    icon: faCheck,
    image: "/images/services/group-classes.jpg",
    longDescription: "Our Group Classes combine professional instruction with the added benefit of socialization. With a maximum of just 6 dogs per class, every team gets individual attention while dogs learn to focus around distractions. Classes run in 6-week cycles at our training facility and local parks. Perfect for dogs who already have basic manners and need proofing around other dogs.",
    features: ["Basic & Intermediate Levels", "Max 6 Dogs Per Class", "Socialization Opportunities", "Weekend & Evening Times", "6-Week Session Format", "Indoor & Outdoor Locations"],
    pricing: "$199 per 6-week session",
    duration: "6 weeks (1hr/week)",
    age: "4+ months (vaccinated)",
    includes: ["6 Group Sessions", "Training Homework", "Completion Certificate", "Group Chat Support", "Discount on Private Sessions"],
    faq: [
      { q: "My dog is reactive — can they join?", a: "Group class isn't appropriate for reactive dogs. We recommend starting with private behavior modification sessions first." },
      { q: "What if I miss a class?", a: "We offer one makeup session per 6-week cycle. Additional missed classes can be made up in a future cycle." },
      { q: "Do you offer advanced group classes?", a: "Yes! After completing Basic, dogs can advance to Intermediate where we add distance, duration, and distraction work." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services[slug as ServiceSlug];
  if (!s) return { title: "Not Found" };
  return { title: s.title, description: s.description };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services[slug as ServiceSlug];
  if (!s) return <div className="py-20 text-center"><h1 className="text-2xl font-bold">Service not found</h1></div>;

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 size-3" /> Back to All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{s.badge}</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">{s.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{s.longDescription}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2"><FontAwesomeIcon icon={faClock} className="text-primary size-4" /><span>{s.duration}</span></div>
                <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2"><FontAwesomeIcon icon={faDog} className="text-primary size-4" /><span>{s.age}</span></div>
                <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2 font-semibold text-primary">{s.pricing}</div>
              </div>
              <div className="flex gap-3 mt-6">
                <Link href="/contact" className="inline-flex"><Button size="lg">Get Started</Button></Link>
                <Link href="/pricing" className="inline-flex"><Button variant="outline" size="lg">View Pricing</Button></Link>
              </div>
            </div>
            <div className="w-full h-80 lg:h-96 bg-muted rounded-2xl overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 glass-card p-4">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="size-3" />
                    </div>
                    <span className="font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-10" />

              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {s.includes.map((inc) => (
                  <div key={inc} className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheck} className="size-4 text-primary" />
                    <span className="text-muted-foreground">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle>Program Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Investment</div>
                    <div className="text-xl font-bold text-primary">{s.pricing}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold">{s.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Age Range</div>
                    <div className="font-semibold">{s.age}</div>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full">Book a Free Assessment</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {s.faq.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Ready to get started with {s.title}?</h2>
          <p className="text-primary-foreground/80 mb-6">Schedule your free consultation and assessment today.</p>
          <Link href="/contact" className="inline-flex"><Button variant="secondary" size="lg">Book Your Free Assessment</Button></Link>
        </div>
      </section>
    </>
  );
}
