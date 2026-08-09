"use client";

import { useActionState, useRef, useState } from "react";
import { CalendarCheck, CheckCircle2, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { rooms } from "@/lib/data/rooms";
import { site } from "@/lib/data/site";

const initialState: InquiryState = { status: "idle" };

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
      {message}
    </p>
  );
}

export function BookingForm({ defaultRoom }: { defaultRoom?: string }) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const [intent, setIntent] = useState<"visit" | "reserve">("reserve");
  const formRef = useRef<HTMLFormElement>(null);
  const errors = state.status === "error" ? (state.errors ?? {}) : {};

  if (state.status === "success") {
    return (
      <div
        className="flex flex-col items-center rounded-3xl border bg-card p-10 text-center shadow-soft"
        role="status"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-success/15">
          <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2 max-w-md text-muted-foreground">{state.message}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          In a hurry? Reach us instantly:
        </p>
        <div className="mt-3 flex gap-3">
          <Button asChild variant="outline">
            <a href={`tel:${site.mobile}`}>
              <Phone className="size-4" /> Call Now
            </a>
          </Button>
          <Button asChild className="bg-[#25D366] text-white hover:bg-[#1fb857]">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-3xl border bg-card p-6 shadow-soft md:p-8"
      noValidate
    >
      <input type="hidden" name="intent" value={intent} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name *</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Sita Shrestha"
            className="mt-2"
            aria-invalid={!!errors.name}
            required
          />
          <FieldError message={errors.name} />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="98XXXXXXXX"
            className="mt-2"
            aria-invalid={!!errors.phone}
            required
          />
          <FieldError message={errors.phone} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2"
            aria-invalid={!!errors.email}
          />
          <FieldError message={errors.email} />
        </div>
        <div>
          <Label htmlFor="college">College / Workplace</Label>
          <Input
            id="college"
            name="college"
            placeholder="e.g. Tribhuvan University"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="occupation">Occupation</Label>
          <Select name="occupation">
            <SelectTrigger id="occupation" className="mt-2 w-full">
              <SelectValue placeholder="Select occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="medical-student">Medical Student</SelectItem>
              <SelectItem value="working-professional">Working Professional</SelectItem>
              <SelectItem value="intern">Intern</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="room">Preferred room *</Label>
          <Select name="room" defaultValue={defaultRoom}>
            <SelectTrigger id="room" className="mt-2 w-full" aria-invalid={!!errors.room}>
              <SelectValue placeholder="Choose a room type" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((room) => (
                <SelectItem key={room.slug} value={room.slug}>
                  {room.name} — Rs. {room.price.toLocaleString("en-IN")}/mo
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError message={errors.room} />
        </div>
        <div>
          <Label htmlFor="moveInDate">Move-in date *</Label>
          <Input
            id="moveInDate"
            name="moveInDate"
            type="date"
            className="mt-2"
            aria-invalid={!!errors.moveInDate}
            required
          />
          <FieldError message={errors.moveInDate} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Any questions or special requirements?"
            className="mt-2"
          />
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {state.message}
        </p>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          onClick={() => setIntent("reserve")}
          className="flex-1 bg-gradient-to-r from-primary to-[#f06292] text-primary-foreground shadow-soft transition-shadow duration-200 hover:shadow-lifted dark:to-[#f06292]"
        >
          {pending && intent === "reserve" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : null}
          Reserve Room
        </Button>
        <Button
          type="submit"
          size="lg"
          variant="outline"
          disabled={pending}
          onClick={() => setIntent("visit")}
          className="flex-1"
        >
          {pending && intent === "visit" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <CalendarCheck className="size-4" aria-hidden="true" />
          )}
          Book a Visit First
        </Button>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="ghost" size="lg" className="flex-1">
          <a href={`tel:${site.mobile}`}>
            <Phone className="size-4" /> Call Now
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="ghost"
          className="flex-1 text-[#1fa855] hover:bg-[#25D366]/10 hover:text-[#1fa855]"
        >
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a room.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp Us
          </a>
        </Button>
      </div>
    </form>
  );
}
