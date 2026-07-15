import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Looks like this page ran off-leash and got lost. Let's get you back on track!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex">
            <Button><FontAwesomeIcon icon={faPaw} className="mr-2" /> Back Home</Button>
          </Link>
          <Link href="/services" className="inline-flex">
            <Button variant="outline">View Programs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
