import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
});
