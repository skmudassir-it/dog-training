import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faStar, faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectsClient } from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read real transformations from dogs who completed our training programs. Before-and-after stories that showcase the Pawsitive K9 difference.",
};

const categories = ["All", "Puppy Training", "Obedience", "Behavior Modification", "Board & Train", "Off-Leash"];

const stories = [
  { title: "Luna the Reactive Rescue", category: "Behavior Modification", dog: "Luna — 3yo Husky Mix", description: "Luna was surrendered twice for aggression before finding her forever home. After our 12-week behavior modification program, she earned her Canine Good Citizen certificate and now enjoys dog park playdates.", image: "/images/projects/luna.jpg", results: ["Zero aggressive incidents in 18 months", "Canine Good Citizen certified", "Off-leash reliable at dog parks", "Now a therapy dog candidate"] },
  { title: "Max the Uncontrollable Lab", category: "Board & Train", dog: "Max — 1yo Labrador", description: "Max was a 90-pound Labrador who dragged his elderly owner down the street, jumped on guests, and counter-surfed constantly. After 3 weeks of board & train, he became the calm, polite companion his family dreamed of.", image: "/images/projects/max.jpg", results: ["Perfect loose-leash walking", "No more jumping or counter surfing", "Reliable recall even around food", "Owner can walk him with one hand"] },
  { title: "Daisy the Anxious Doodle", category: "Puppy Training", dog: "Daisy — 10wk Goldendoodle", description: "Daisy's family was overwhelmed — she cried all night, had accidents everywhere, and nipped constantly. Our 6-week puppy program transformed her into a confident, housebroken pup who sleeps through the night.", image: "/images/projects/daisy.jpg", results: ["Fully housebroken in 3 weeks", "Sleeps through the night", "No more nipping or mouthing", "Mastered 8 basic commands"] },
  { title: "Rex the Off-Leash Star", category: "Off-Leash", dog: "Rex — 2yo German Shepherd", description: "Rex's owner wanted the freedom to hike off-leash but couldn't trust his recall around wildlife. After our 4-week advanced program, Rex now has rock-solid recall — even mid-chase after deer.", image: "/images/projects/rex.jpg", results: ["100% recall reliability on trails", "Place command at 50+ yards", "Emergency stop mastered", "Owner confidence restored"] },
  { title: "Buddy the Barking Beagle", category: "Obedience", dog: "Buddy — 5yo Beagle", description: "Buddy barked at everything — doorbells, squirrels, shadows. His family was getting noise complaints from neighbors. Our obedience program taught impulse control and quiet default behaviors.", image: "/images/projects/buddy.jpg", results: ["90% reduction in barking", "Calm greeting behavior", "Place command works during triggers", "Neighbor complaints stopped"] },
  { title: "Rocky the Board & Train Transformation", category: "Board & Train", dog: "Rocky — 3yo Pitbull Mix", description: "Rocky was a loving dog with zero manners. He jumped on furniture, bolted through doors, and had no recall. After 4 weeks of board & train, he's a joy to live with and his family raves about the transformation.", image: "/images/projects/rocky.jpg", results: ["Perfect household manners", "Reliable door threshold training", "Full off-leash recall at home", "Calm, confident companion"] },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/40">Transformations</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Success Stories</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Real dogs, real transformations. See what's possible with the right training approach.</p>
        </div>
        <ProjectsClient categories={categories} stories={stories} />
      </div>
    </section>
  );
}
