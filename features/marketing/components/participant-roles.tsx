import Link from "next/link";
import { ArrowForward } from "@/components/ui/arrow-forward";
import { participantRoles } from "@/features/marketing/data/participant-roles";

export function ParticipantRoles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {participantRoles.map((role) => (
        <Link
          key={role.title}
          href={role.href}
          className="group flex flex-col h-full bg-white p-6 gap-4 transition-transform hover:-translate-y-0.5"
        >
          <span className="material-symbols-outlined text-2xl text-indigo">
            {role.icon}
          </span>
          <h3 className="font-heading text-headline-sm text-indigo">
            {role.title}
          </h3>
          <p className="text-body-sm text-on-surface-variant flex-1">
            {role.body}
          </p>
          <span className="inline-flex items-center gap-2 text-label-md font-medium text-indigo group-hover:text-accent transition-colors">
            Find out more
            <ArrowForward />
          </span>
        </Link>
      ))}
    </div>
  );
}
