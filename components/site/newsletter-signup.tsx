"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (!email) return;
        window.location.href = `mailto:hello@openlaw.org.uk?subject=Open Law updates&body=Please add me to updates: ${encodeURIComponent(email)}`;
      }}
    >
      <p className="text-label-sm text-cream/50 uppercase tracking-wide">
        Stay informed
      </p>
      <p className="text-body-sm text-cream/70">
        Get standards updates and ecosystem news from Open Law.
      </p>
      <div className="flex border-b border-cream/40 focus-within:border-accent transition-colors">
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="flex-1 bg-transparent text-cream placeholder:text-cream/40 py-2 outline-none text-body-sm"
        />
        <button
          type="submit"
          className="text-cream hover:text-accent transition-colors px-2"
          aria-label="Sign up for updates"
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </form>
  );
}
