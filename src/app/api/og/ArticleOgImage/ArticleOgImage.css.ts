import { CSSProperties } from "react";

import { colors } from "~/styles/colors";

export const wrapper: CSSProperties = {
  display: "flex",
  width: 1200,
  height: 630,
  boxSizing: "border-box",
  padding: 65,
  color: colors.black,
  background: colors.alabaster,
};

export const contentWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
};

export const title: CSSProperties = {
  display: "flex",
  fontSize: 60,
  fontFamily: '"Source Sans 3"',
};
