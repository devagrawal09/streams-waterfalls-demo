import { type ReactNode } from "react";
import "../styles.css";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return <main>{children}</main>;
}
