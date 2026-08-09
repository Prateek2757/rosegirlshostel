import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold">
        This room doesn&apos;t exist
      </h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you&apos;re looking for has moved or was never here. Let&apos;s
        get you back home.
      </p>
      <Button asChild size="lg" className="mt-8 rounded-full px-8">
        <Link href="/">
          <Home className="size-4" /> Back to Home
        </Link>
      </Button>
    </div>
  );
}
