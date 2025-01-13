import { vars } from "~/styles/themes/vars.css";

export function focusRing() {
  return {
    outline: `2px solid ${vars.colors.focusRing}`,
    borderRadius: 2,
  };
}
