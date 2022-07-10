function ResearchInterestCard() {
  return (
    <div className="flex flex-wrap mt-4">
      <div className="md:w-1/3 w-full md:p-4">
        <img src="/demo/engine-g3178ad518_1280.jpg" className="w-full" />
      </div>
      <div className="md:w-2/3 w-full md:p-4">
        <h3 className="mt-4 md:mt-0">Research title</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <h3 className="mt-4">Publications</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}

export default ResearchInterestCard;
