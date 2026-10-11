"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAdminAuthed } from "@/lib/store";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Enter your atelier email and passcode.");
      return;
    }
    if (password.length < 4) {
      setError("Passcode must be at least 4 characters.");
      return;
    }
    setAdminAuthed(true);
    router.push("/admin");
  }

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-160px)] max-w-[1100px] items-center px-4 py-12 md:px-8">
      <div className="grid w-full overflow-hidden rounded-[2.5rem] bg-white shadow-[0_24px_48px_-12px_rgba(20,20,20,0.08)] lg:grid-cols-2">
        <div className="p-8 md:p-12">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-taupe">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Private atelier access
          </p>
          <h1 className="font-serif text-[36px] leading-tight text-ink md:text-[44px]">
            Welcome to L&apos;Étoile Atelier
          </h1>
          <p className="mt-3 text-[15px] leading-6 text-taupe">
            Sign in to manage inventory, review client quotes, and send moodboard links.
          </p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Client identifier / email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. eleanor@vanderbilt.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Master passcode</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[12px] text-taupe"
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {error ? (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            ) : null}
            <Button type="submit" className="w-full">
              Sign in to your portfolio
            </Button>
            <p className="text-center text-[12px] text-taupe">
              Demo access — any email and a 4+ character passcode.
            </p>
          </form>
        </div>
        <div className="relative hidden min-h-[520px] lg:block">
          <img
            src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1400&q=80"
            alt="Ivory couture gown in a sunlit atelier"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <div className="absolute inset-x-8 bottom-8 text-white">
            <p className="font-serif text-[28px] leading-snug">
              Where architectural grandeur meets tailored curation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
