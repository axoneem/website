import { Inter, STIX_Two_Text, Funnel_Display, Raleway } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix-two-text",
});

export const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
}); 

export default raleway;