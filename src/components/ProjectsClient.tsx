"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaw } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Story {
  title: string;
  category: string;
  dog: string;
  description: string;
  image: string;
  results: string[];
}

export function ProjectsClient({ categories, stories }: { categories: string[]; stories: Story[] }) {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? stories : stories.filter((s) => s.category === filter);

  return (
    <>
      <Tabs value={filter} onValueChange={(v) => setFilter(v ?? "All")} className="mb-10">
        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="rounded-full">{cat}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-8">
        {filtered.map((story, i) => (
          <Card key={i} className="glass-card overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 w-full h-64 md:h-full bg-muted flex items-center justify-center overflow-hidden">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-3 p-6 sm:p-8">
                <div className="text-sm font-semibold text-primary mb-1">{story.category}</div>
                <h2 className="text-2xl font-bold mb-1">{story.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{story.dog}</p>
                <p className="text-muted-foreground mb-5">{story.description}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {story.results.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="size-3 text-primary" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
