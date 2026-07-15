import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeart, faGraduationCap, faTrophy, faUsers, faShield, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pawsitive K9 Academy's mission, our certified trainers, and our science-based approach to dog training in Metro City.",
};

const values = [
  { title: "Positive Reinforcement", description: "We believe dogs learn best through reward-based methods that build trust and enthusiasm, not fear or intimidation.", icon: faHeart },
  { title: "Science-Backed Methods", description: "Our protocols are grounded in the latest research on canine cognition, learning theory, and behavioral psychology.", icon: faGraduationCap },
  { title: "Individualized Approach", description: "Every dog is unique. We create custom training plans tailored to your dog's breed, temperament, history, and your family's goals.", icon: faPaw },
  { title: "Owner Partnership", description: "Training doesn't end when the session does. We empower you with the skills and knowledge to maintain and build on your dog's progress.", icon: faUsers },
];

const team = [
  { name: "Sarah Mitchell", role: "Founder & Head Trainer", cert: "CPDT-KA, IAABC", bio: "8+ years of professional dog training experience. Sarah specializes in behavior modification and has rehabilitated hundreds of dogs with severe reactivity and aggression.", image: "/images/team/sarah.jpg" },
  { name: "Marcus Chen", role: "Senior Trainer", cert: "CPDT-KA, Fear Free", bio: "Marcus brings 6 years of experience with a focus on puppy development and advanced off-leash training. His calm, patient approach puts even the most nervous dogs at ease.", image: "/images/team/marcus.jpg" },
  { name: "Emily Rodriguez", role: "Behavior Specialist", cert: "CDBC, KPA-CTP", bio: "Emily is a certified dog behavior consultant with expertise in separation anxiety and fear-based behaviors. She developed our group class curriculum.", image: "/images/team/emily.jpg" },
  { name: "David Park", role: "Board & Train Manager", cert: "CPDT-KA", bio: "David runs our board & train program from his home, providing 24/7 care and training. His dedication to each dog's success is unmatched.", image: "/images/team/david.jpg" },
];

const milestones = [
  { year: "2018", event: "Pawsitive K9 Academy founded by Sarah Mitchell with a mission to bring humane, science-based training to Metro City." },
  { year: "2019", event: "Launched Board & Train program after demand for intensive training solutions outpaced private sessions." },
  { year: "2020", event: "Expanded to a team of 4 trainers and added group class offerings at our training facility." },
  { year: "2022", event: "Launched our Advanced Off-Leash program, becoming the premier off-leash training provider in the region." },
  { year: "2024", event: "Celebrated training our 500th dog and maintained a 98% client satisfaction rating." },
  { year: "2025", event: "Expanded behavior modification services with veterinary collaboration partnerships and remote training options." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Our Mission: <span className="text-primary">Better Dogs, Happier Families</span></h1>
              <p className="text-lg text-muted-foreground mb-4">
                At Pawsitive K9 Academy, we believe that every dog has the potential to be a well-behaved, confident companion. Our mission is to unlock that potential through science-based, positive reinforcement training that strengthens the bond between dogs and their families.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded in 2018 by Sarah Mitchell, CPDT-KA, we've grown from a one-trainer operation to Metro City's most trusted dog training academy — with 500+ dogs trained and a 98% client satisfaction rate.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="inline-flex"><Button size="lg">Work With Us</Button></Link>
                <Link href="/services" className="inline-flex"><Button variant="outline" size="lg">Our Programs</Button></Link>
              </div>
            </div>
            <div className="w-full h-80 lg:h-96 bg-muted rounded-2xl overflow-hidden">
              <img src="/images/about/about-team.jpg" alt="Pawsitive K9 Academy Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Training Philosophy</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-2">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground">Certified professionals passionate about transforming dogs and enriching families.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="glass-card text-center overflow-hidden">
                <div className="w-full h-56 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.cert}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="glass-card p-5 flex gap-4">
                <div className="text-lg font-extrabold text-primary shrink-0 w-14">{m.year}</div>
                <p className="text-muted-foreground">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Ready to meet the team?</h2>
          <p className="text-primary-foreground/80 mb-6">Book your free assessment and let's create a plan for your dog.</p>
          <Link href="/contact" className="inline-flex"><Button variant="secondary" size="lg">Schedule a Consultation</Button></Link>
        </div>
      </section>
    </>
  );
}
