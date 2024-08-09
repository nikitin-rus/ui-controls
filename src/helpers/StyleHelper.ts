import { ITheme } from "../styles/theme";

export const cvar = (key: keyof ITheme): string => `var(${key})`;
