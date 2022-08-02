import Carousel from "../components/layouts/Carousel";
import HomeNews from "../components/news/HomeNews";
import HomeCurriculum from "../components/curriculum/HomeCurriculum";
import ExternalLink from "../components/layouts/ExternalLink";
import HomeResearch from "../components/research/HomeResearch";
import Partner from "../components/layouts/Partner";
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
