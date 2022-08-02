import styles from "./News.module.css";

function HomeNewsCard() {
  return (
    <div className="pt-0 pb-0">
      <div className="md:flex flex-wrap">
        <div className="w-1/1 md:w-2/6 p-2">
          <img src="/demo/usrfile_961821_100352.jpg" className="w-full" />
        </div>
        <div className="w-1/1 md:w-4/6 p-4">
          <h3 className="text-white">
            เปิดรับสมัครสมัครเพื่อเข้าศึกษาต่อในหลักสูตรปริญญาโท IM
            ในภาคการศึกษาที่ 1 ปีการศึกษา 2565 (รอบที่ 2)
          </h3>
          <div className={`${styles.tagBox} mt-4`}>
            NEWS
          </div>

          <div className=" md:mt-16 mt-4">
            <p className="text-white">Date: Thursday, 12.31.2022, 09:29pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNewsCard;
