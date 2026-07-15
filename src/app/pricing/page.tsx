import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaw, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for all dog training programs. Puppy training from $599, obedience from $699, board & train from $1,999.",
};

const plans = [
  {
    name: "Puppy Starter",
    price: "$599",
    period: "6-week program",
    description: "The perfect start for your new puppy. In-home sessions that fit your schedule.",
    badge: "Most Popular",
    features: [
      "6 Private In-Home Sessions",
      "Housebreaking & Crate Training",
      "Bite Inhibition Training",
      "Basic Commands (Sit, Stay, Come)",
      "Socialization Protocols",
      "Training Handbook",
      "Unlimited Text Support",
      "Graduation Certificate",
    ],
    href: "/services/puppy-training",
  },
  {
    name: "Obedience Essentials",
    price: "$699",
    period: "4-8 week program",
    description: "Build reliable obedience that works in the real world. For dogs 4+ months.",
    features: [
      "8 Private Training Sessions",
      "Loose Leash Walking",
      "Reliable Recall (Come)",
      "Place & Stay Commands",
      "Impulse Control Training",
      "Training E-Collar (optional)",
      "Progress Tracker Access",
      "Group Class Access",
    ],
    href: "/services/obedience-training",
  },
  {
    name: "Behavior Transformation",
    price: "$899",
    period: "8-12 week program",
    description: "Comprehensive behavior modification for reactivity, aggression, and anxiety.",
    badge: "Specialized",
    features: [
      "Initial Behavioral Assessment",
      "Custom Behavior Plan",
      "12 Private Sessions",
      "Reactivity & Aggression Rehab",
      "Separation Anxiety Protocol",
      "Veterinary Collaboration",
      "24/7 Emergency Support",
      "Lifetime Follow-Up Access",
    ],
    href: "/services/behavior-modification",
  },
  {
    name: "Board & Train Immersion",
    price: "$1,999–$3,499",
    period: "2-4 week program",
    description: "Intensive immersion training in a trainer's home. The fastest path to a well-trained dog.",
    badge: "Fastest Results",
    features: [
      "Daily Multiple Training Sessions",
      "Home Environment Immersion",
      "All Training Equipment Included",
      "Daily Photo/Video Updates",
      "Comprehensive Transfer Session",
      "Take-Home Training Guide",
      "2 Private Follow-Up Sessions",
      "Lifetime Phone Support",
    ],
    href: "/services/board-and-train",
  },
  {
    name: "Advanced Off-Leash",
    price: "$1,199",
    period: "4-week intensive",
    description: "Master off-leash reliability with e-collar conditioning and real-world proofing.",
    features: [
      "E-Collar System Included",
      "12 Training Sessions",
      "Field Trips (Trails & Parks)",
      "Recall at Distance",
      "Emergency Stop Command",
      "Place at Distance",
      "Owner Training & Transfer",
      "Lifetime Group Refreshers",
    ],
    href: "/services/advanced-off-leash",
  },
  {
    name: "Group Classes",
    price: "$199",
    period: "6-week session",
    description: "Affordable small-group training with socialization benefits. Max 6 dogs per class.",
    features: [
      "6 Group Sessions (1hr each)",
      "Max 6 Dogs Per Class",
      "Basic & Intermediate Levels",
      "Socialization Opportunities",
      "Weekend & Evening Times",
      "Training Homework",
      "Group Chat Support",
      "Discount on Private Sessions",
    ],
    href: "/services/group-classes",
  },
];

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Investment</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Every program includes hands-on training, owner education, and ongoing support. No hidden fees, no contracts — just results.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`glass-card flex flex-col ${plan.badge ? 'ring-2 ring-primary/30' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-1">{plan.description}</CardDescription>
                  </div>
                  {plan.badge && <Badge className="bg-primary text-primary-foreground shrink-0">{plan.badge}</Badge>}
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="size-3 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="inline-flex w-full">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure which program is right for your dog?</p>
          <Link href="/contact" className="inline-flex">
            <Button variant="outline" size="lg">
              <FontAwesomeIcon icon={faPaw} className="mr-2" />
              Book a Free Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
