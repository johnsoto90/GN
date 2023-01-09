import { Inter } from "@next/font/google";
import Landing from "../components/pages/ladingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Landing />;
}
