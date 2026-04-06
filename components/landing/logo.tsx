import { Icon } from "./icons";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={[
          "flex h-9 w-9 items-center justify-center rounded-xl shadow-sm",
          inverted ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-brand-700 text-white",
        ].join(" ")}
      >
        <Icon name="bolt" className="h-4 w-4" />
      </span>
      <span className="font-display text-sm font-extrabold leading-none tracking-tight">
        <span className={inverted ? "text-white" : "text-slate-900"}>Community</span>
        <br />
        <span className={inverted ? "text-brand-200" : "text-brand-700"}>Ride</span>
      </span>
    </span>
  );
}
