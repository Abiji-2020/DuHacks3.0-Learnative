import {
  CalendarDays,
  Code,
  ImageIcon,
  MessageSquare,
  Users2Icon,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },

  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },

  {
    label: "Events",
    icon: CalendarDays,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/calendar",
  },
];
