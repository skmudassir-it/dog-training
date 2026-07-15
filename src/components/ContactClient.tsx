"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faPaw, faClock, faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
            <FontAwesomeIcon icon={faCheck} className="size-8" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Received!</h1>
          <p className="text-muted-foreground mb-8">Thank you for reaching out. We'll get back to you within 24 hours to schedule your free assessment.</p>
          <Button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", program: "", message: "" }); }}>
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/40">Get In Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Ready to transform your dog? Fill out the form and we'll schedule your free assessment within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Book Your Free Assessment</CardTitle>
                <CardDescription>Tell us about your dog and goals. No obligation, no pressure.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
                      <Input value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="John Smith" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
                      <Input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                      <Input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Program Interest *</label>
                      <Select value={formData.program} onValueChange={(v: string | null) => handleChange("program", v || "")} required>
                        <option value="">Select a program</option>
                        <option value="puppy-training">Puppy Training</option>
                        <option value="obedience-training">Obedience Training</option>
                        <option value="behavior-modification">Behavior Modification</option>
                        <option value="advanced-off-leash">Advanced Off-Leash</option>
                        <option value="board-and-train">Board & Train</option>
                        <option value="group-classes">Group Classes</option>
                        <option value="not-sure">Not Sure — Need Guidance</option>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Tell Us About Your Dog</label>
                    <Textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Breed, age, specific behaviors you'd like to address, and any other relevant details..." rows={4} />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button type="submit" disabled={loading} className="w-full" size="lg">
                    {loading ? <><FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin" /> Submitting...</> : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0"><FontAwesomeIcon icon={faPhone} className="size-4" /></div>
                  <div><div className="font-medium">Phone</div><div className="text-sm text-muted-foreground">(555) 234-5678</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0"><FontAwesomeIcon icon={faEnvelope} className="size-4" /></div>
                  <div><div className="font-medium">Email</div><div className="text-sm text-muted-foreground">hello@pawsitivek9.com</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0"><FontAwesomeIcon icon={faMapMarkerAlt} className="size-4" /></div>
                  <div><div className="font-medium">Location</div><div className="text-sm text-muted-foreground">123 Training Lane<br />Metro City, ST 12345</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0"><FontAwesomeIcon icon={faClock} className="size-4" /></div>
                  <div><div className="font-medium">Hours</div><div className="text-sm text-muted-foreground">Mon-Fri: 8am-7pm<br />Sat: 9am-4pm<br />Sun: Closed</div></div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <FontAwesomeIcon icon={faPaw} className="size-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Free Assessment</h3>
                <p className="text-sm text-primary-foreground/80">No obligation, no pressure — just expert advice on the best path forward for your dog.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
