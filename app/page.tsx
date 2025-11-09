import Presentation from "@/components/Presentation";
import { demoSlides } from "@/lib/slides";

export default function HomePage() {
  return <Presentation slides={demoSlides} />;
}
