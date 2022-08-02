import HomeResearchCard from "./HomeResearchCard";

function HomeResearch() {
  return (
    <div className="section_container mx-auto md:px-12 section_bg">
      <div className="text-center">
        <h1 className="section_title text-white">research project</h1>
      </div>
      <div className="mt-12 flex flex-wrap">
        <div className="md:w-1/3 p-1">
          <HomeResearchCard />
        </div>
        <div className="md:w-1/3 p-1">
          <HomeResearchCard />
        </div>
        <div className="md:w-1/3 p-1">
          <HomeResearchCard />
        </div>
      </div>
    </div>
  );
}
export default HomeResearch;
