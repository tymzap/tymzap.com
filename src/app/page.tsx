import { LatestArticles } from "./LatestArticles";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestArticles />
      <Projects />
    </>
  );
}
