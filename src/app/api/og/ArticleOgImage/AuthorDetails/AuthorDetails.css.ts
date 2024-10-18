import { CSSProperties } from "react";

export const wrapper: CSSProperties = {
  display: "flex",
  gap: 50,
};

export const image: CSSProperties = {
  width: 250,
  height: 250,
};

export const textWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 3,
};

export const name: CSSProperties = {
  fontFamily: '"Open Sans"',
  fontSize: 40,
  fontWeight: 700,
};

export const address: CSSProperties = {
  fontSize: 30,
  fontWeight: 700,
  fontFamily: '"Open Sans"',
};
