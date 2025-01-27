import {
  Waves,
  Music,
  Mic,
  PenTool,
  Code,
  Drum,
  Sliders,
  Wind,
  MessageCircle,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface CourseFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const courseFeatures: CourseFeature[] = [
  {
    icon: Waves,
    title: "Kick & Bass",
    description:
      "Learn the techniques for creating a powerful and punchy kick and bass for psytrance music.",
  },
  {
    icon: Music,
    title: "Sound Design",
    description:
      "Master the art of sound design and create your own unique sounds and presets.",
  },
  {
    icon: Mic,
    title: "Mixing & Mastering",
    description:
      "Learn the techniques and tools of professional mixing and mastering.",
  },
  {
    icon: PenTool,
    title: "Arrangement & Composition",
    description:
      "Discover the secrets of arrangement and composition and how to create dynamic and engaging tracks.",
  },
  {
    icon: Code,
    title: "Workflow & Productivity",
    description:
      "Optimize your workflow and increase your productivity with tips and tricks from Kabayun.",
  },
  {
    icon: Drum,
    title: "Percussion & Groove",
    description:
      "Learn how to create dynamic and groovy percussion patterns and add movement and energy to your tracks.",
  },
  {
    icon: Sliders,
    title: "Modular Synthesizers",
    description:
      "Explore the world of modular synthesizers and learn how to create complex and evolving sounds.",
  },
  {
    icon: Wind,
    title: "Atmospheres & FX",
    description:
      "Create immersive atmospheres and effects to add depth and texture to your tracks.",
  },
  {
    icon: MessageCircle,
    title: "Feedback & Support",
    description:
      "Get personalized feedback and support to help you achieve your goals.",
  },
];
