"use client";

import { Text } from "~/components/Text";
import { Heading } from "~/components/Heading";
import { ArticleCard } from "~/components/ArticleCard";

export default function Home() {
  return (
    <>
      <Heading level={1}>Heading 1</Heading>
      <Text>
        From which we spring invent the universe corpus callosum the only home
        we ve ever known decipherment dispassionate extraterrestrial observer.
        Venture vanquish the impossible vastness is bearable only through love
        not a sunrise but a galaxyrise the carbon in our apple pies
        extraordinary claims require extraordinary evidence.
      </Text>
      <Heading level={2}>Latest blog posts</Heading>
      <ArticleCard.Grid>
        <ArticleCard
          imageSrc={"/stacked-pebbles.webp"}
          createdAt={new Date(2024, 7, 21)}
          readTime={5}
          title={"Designing flexible React components with composition pattern"}
        />
        <ArticleCard
          imageSrc={"/milky-way-and-tree.webp"}
          createdAt={new Date(2024, 7, 21)}
          readTime={5}
          title={"Why you should use headless UI library"}
        />
      </ArticleCard.Grid>
    </>
  );
}
