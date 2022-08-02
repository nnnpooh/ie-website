import styles from "./Research.module.css";
function HomeResearchCard() {
  return (
    <div className="bg-white">
      <img src="/demo/research_01.JPG" className="w-full" />
      <div className="p-4">
        <h3 className={styles.cardTitle}>
          project 825 Efficiency improvement of Chokes production using
          simulation technique.
        </h3>
        <div className={`${styles.tag} mt-4`}>Bacheior</div>

        <div className={`${styles.curriculumTag} mt-2 mb-4`}>
          Engineering Program in Industrial Engineering
        </div>
        <p className={styles.p}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <div className="flex">
            <div className="w-1/2">
                <p className={`${styles.date} mt-4`}>9 June 2022</p>
            </div>
            <div className="w-1/2">
                <button className={styles.btnReadMore}>Read more</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeResearchCard;
