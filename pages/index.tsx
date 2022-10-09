import Carousel from "../src/components/layouts/Carousel";
import NewsTab from "../src/components/news/NewsTab";
import HomeCurriculum from "../src/components/curriculum/HomeCurriculum";
import ExternalLink from "../src/components/layouts/ExternalLink";
import HomeResearch from "../src/components/research/HomeResearch";
import { getFacebookFeeds, FBFeedType } from "@src/api";
import Partner from "../src/components/layouts/Partner";
import { NextPage } from "next";

interface Props {
  dataFacebookFeed: FBFeedType[];
}

const Home: NextPage<Props> = ({ dataFacebookFeed }) => {
  return (
    <>
      <Carousel />
      <NewsTab data={dataFacebookFeed} />
      <HomeCurriculum />
      <ExternalLink />
      <HomeResearch />
      <Partner />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { dataFacebookFeed } = await getFacebookFeeds();
  return {
    props: {
      dataFacebookFeed,
    },
  };
}
