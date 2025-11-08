import Section from "@/components/Section";
import { demoSlides } from "@/lib/slides";

export default function HomePage() {
  return (
    <main className="bg-black">
      {demoSlides.map(({ title, body }) => (
        <Section key={title} title={title}>
          {body ? <p>{body}</p> : null}
        </Section>
      ))}
    </main>
  );
}
