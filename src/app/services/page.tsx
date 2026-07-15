import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faBone, faHeart, faStar, faShield, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Dog Training Services",
  description: "Puppy training, obedience, behavior modification, advanced off-leash, board & train, and group classes — find the right program for your dog.",
};

const services = [
  { slug: "puppy-training", title: "Puppy Training", description: "Start your puppy off right. Our 6-week program covers socialization, housebreaking, crate training, bite inhibition, and foundational commands like sit, stay, and come. Perfect for puppies 8-16 weeks.", icon: faPaw, image: "/images/services/puppy-training.jpg", features: ["Housebreaking & Crate Training", "Bite Inhibition", "Socialization", "Basic Commands", "6-Week Program", "In-Home Sessions"], badge: "Most Popular" },
  { slug: "obedience-training", title: "Obedience Training", description: "Build a foundation of reliable obedience. Covers sit, down, stay, come, heel, and place commands with real-world distractions. Suitable for dogs of any age.", icon: faShield, image: "/images/services/obedience-training.jpg", features: ["Sit, Stay, Come, Heel", "Place Command", "Leash Walking", "Impulse Control", "Real-World Proofing", "4-8 Week Programs"], badge: "Essential" },
  { slug: "behavior-modification", title: "Behavior Modification", description: "Transform challenging behaviors using proven positive reinforcement protocols. We address reactivity, aggression, separation anxiety, resource guarding, and excessive barking.", icon: faHeart, image: "/images/services/behavior-modification.jpg", features: ["Reactivity Management", "Aggression Rehab", "Separation Anxiety", "Resource Guarding", "Custom Behavior Plans", "Ongoing Support"], badge: "Specialized" },
  { slug: "advanced-off-leash", title: "Advanced Off-Leash", description: "Master off-leash reliability with distance commands, remote collar conditioning, and advanced impulse control. Perfect for hiking, dog parks, and total freedom.", icon: faStar, image: "/images/services/advanced-off-leash.jpg", features: ["Full Off-Leash Recall", "Distance Commands", "E-Collar Conditioning", "Place at Distance", "Trail & Park Proofing", "4-Week Intensive"], badge: "Advanced" },
  { slug: "board-and-train", title: "Board & Train", description: "Your dog lives with a professional trainer for 2-4 weeks of immersive daily training. Ideal for busy families or dogs needing intensive behavior work.", icon: faBone, image: "/images/services/board-train.jpg", features: ["2-4 Week Programs", "Daily Training Sessions", "Home-Like Environment", "Video Progress Updates", "Owner Transfer Session", "Lifetime Support"], badge: "Intensive" },
  { slug: "group-classes", title: "Group Classes", description: "Affordable small-group training sessions focused on basic obedience and socialization. Max 6 dogs per class for individual attention.", icon: faCheck, image: "/images/services/group-classes.jpg", features: ["Small Class Sizes", "Socialization Focus", "Basic Obedience", "Affordable Pricing", "6-Week Sessions", "Weekend Availability"], badge: "Value" },
];

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Programs</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Our Training Services</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Every dog is unique. Browse our programs to find the perfect fit for your companion.</p>
        </div>
        <div className="grid gap-8">
          {services.map((svc) => (
            <Card key={svc.slug} className="glass-card overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="w-full h-48 md:h-full bg-muted flex items-center justify-center overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2 p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FontAwesomeIcon icon={svc.icon} className="size-4" />
                      </div>
                      <h2 className="text-2xl font-bold">{svc.title}</h2>
                    </div>
                    <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/40">{svc.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{svc.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheck} className="size-3 text-primary" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/services/${svc.slug}`} className="inline-flex">
                    <Button variant="outline">
                      Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
