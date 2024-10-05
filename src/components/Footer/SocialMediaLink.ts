import { ComponentType, SVGProps } from "react";

export type SocialMediaLink = {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGElement>>;
};