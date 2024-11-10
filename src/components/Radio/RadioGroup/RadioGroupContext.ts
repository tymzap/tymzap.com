import { RadioGroupState } from "@react-stately/radio";
import { createContext } from "react";

export const RadioGroupContext = createContext<RadioGroupState | null>(null);
