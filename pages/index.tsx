import Carousel from "../src/components/layouts/Carousel";
import HomeNews from "../src/components/news/HomeNews";
import HomeCurriculum from "../src/components/curriculum/HomeCurriculum";
import ExternalLink from "../src/components/layouts/ExternalLink";
import HomeResearch from "../src/components/research/HomeResearch";
import Partner from "../src/components/layouts/Partner";
export default function Home() {
  return (
    <>
      <Carousel />
      <HomeNews />
      <HomeCurriculum />

      <ExternalLink />

      <HomeResearch />

      <Partner />
    </>
  );
}
