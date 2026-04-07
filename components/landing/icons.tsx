import type { ComponentProps } from "react";
import type { IconType } from "react-icons";
import {
  IoAlertCircle,
  IoArrowForward,
  IoCalendarClear,
  IoCheckmark,
  IoCheckmarkCircle,
  IoClose,
  IoEye,
  IoFlash,
  IoGift,
  IoInformationCircle,
  IoLockClosed,
  IoMenu,
  IoMoon,
  IoPeople,
  IoPerson,
  IoShieldCheckmark,
  IoStar,
  IoStatsChart,
  IoSunny,
  IoWarning,
} from "react-icons/io5";

export type IconName =
  | "alert"
  | "arrow-right"
  | "bolt"
  | "calendar"
  | "chart"
  | "check"
  | "check-circle"
  | "close"
  | "eye"
  | "gift"
  | "info"
  | "lock"
  | "menu"
  | "moon"
  | "shield"
  | "star"
  | "sun"
  | "user"
  | "users"
  | "warning";

const icons: Record<IconName, IconType> = {
  alert: IoAlertCircle,
  "arrow-right": IoArrowForward,
  bolt: IoFlash,
  calendar: IoCalendarClear,
  chart: IoStatsChart,
  check: IoCheckmark,
  "check-circle": IoCheckmarkCircle,
  close: IoClose,
  eye: IoEye,
  gift: IoGift,
  info: IoInformationCircle,
  lock: IoLockClosed,
  menu: IoMenu,
  moon: IoMoon,
  shield: IoShieldCheckmark,
  star: IoStar,
  sun: IoSunny,
  user: IoPerson,
  users: IoPeople,
  warning: IoWarning,
};

type IconProps = ComponentProps<"svg"> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];

  return <Component aria-hidden="true" focusable="false" {...props} />;
}
