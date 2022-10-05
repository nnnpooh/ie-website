import Carousel from "../src/components/layouts/Carousel";
import News from "../src/components/news/News";
import HomeCurriculum from "../src/components/curriculum/HomeCurriculum";
import ExternalLink from "../src/components/layouts/ExternalLink";
import HomeResearch from "../src/components/research/HomeResearch";
import { getFacebookFeeds, FBFeedType } from "@src/api";
import Partner from "../src/components/layouts/Partner";
import { NextPage } from "next";

interface Props {
  dataUndergradTh: FBFeedType;
  dataMasterIM: FBFeedType;
  dataGrad: FBFeedType;
}

const Home: NextPage<Props> = ({ dataUndergradTh, dataMasterIM, dataGrad }) => {
  return (
    <>
      <Carousel />
      <News ug={dataUndergradTh} im={dataMasterIM} grad={dataGrad} />
      <HomeCurriculum />
      <ExternalLink />
      <HomeResearch />
      <Partner />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { dataUndergradTh, dataMasterIM, dataGrad } = await getFacebookFeeds();
  return {
    props: {
      dataUndergradTh,
      dataMasterIM,
      dataGrad,
    },
  };
}
