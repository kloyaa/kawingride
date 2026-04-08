import Image from "next/image";

import { blobAssetPaths } from "@/constants/blob-assets";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200/70 dark:ring-white/10">
        <Image
          src={blobAssetPaths.logo}
          alt="Kawing Ride logo"
          width={55}
          height={55}
          unoptimized
          className="h-11 w-11 object-cover"
        />
      </span>
      <span className="font-logo text-[0.95rem] font-bold uppercase leading-none tracking-[0.18em]">
        <span className={inverted ? "text-white" : "text-slate-900 dark:text-white"}>Kawing</span>
        <span className={inverted ? "text-brand-200" : "text-brand-700"}> Ride</span>
      </span>
    </span>
  );
}
