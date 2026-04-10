"use client";

import { useEffect } from "react";

import { APP_NAME } from "@/constants/branding";

type LegalTitleMarqueeProps = {
  title: string;
};

export function LegalTitleMarquee({ title }: LegalTitleMarqueeProps) {
  useEffect(() => {
    const baseTitle = `${title} | ${APP_NAME}`;

    if (baseTitle.length <= 28) {
      document.title = baseTitle;

      return () => {
        document.title = baseTitle;
      };
    }

    const spacer = "   •   ";
    const marqueeText = `${baseTitle}${spacer}`;
    let frame = 0;

    document.title = baseTitle;

    const intervalId = window.setInterval(() => {
      frame = (frame + 1) % marqueeText.length;
      document.title = `${marqueeText.slice(frame)}${marqueeText.slice(0, frame)}`;
    }, 250);

    return () => {
      window.clearInterval(intervalId);
      document.title = baseTitle;
    };
  }, [title]);

  return null;
}
