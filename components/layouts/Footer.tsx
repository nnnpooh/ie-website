import styles from '/styles/Layout.module.css';
function Footer() {
  return (
    <footer>
      <div className={styles.footer1Container}>
        <div className='flex flex-wrap md:px-52 pt-4 pb-4 text-white'>
          <div className='w-1/1 md:w-1/4 p-4'>
            <h5>MAP</h5>
            <div className={styles.googleMap}>
              <iframe
                className='w-full'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0623839901814!2d98.94944231484689!3d18.795372987249504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6de4ff030f%3A0x356e11b17f0636bd!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4Lit4Li44LiV4Liq4Liy4Lir4LiB4Liy4Lij!5e0!3m2!1sth!2sth!4v1657441662767!5m2!1sth!2sth'
                style={{ border: 0 }}
                height='200'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='w-1/1 md:w-1/4 p-4'>
            <h5>CONTACT US</h5>
            <p className={`${styles.footerContact} pb-3`}>
              ภาควิชาวิศวกรรมอุตสาหการ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
              239 ถ.ห้วยแก้ว ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200
            </p>
            <p className={styles.footerContact}>
              โทร 053-944125-6, 053-944183
              <br />
              มือถือ 085-0392906
              <br />
              แฟกซ์ 053-944185, 053944125-126 ต่อ 104
              <br />
              อีเมลล์ iecmu000@gmail.com
            </p>
          </div>
          <div className='w-1/1 md:w-1/4 p-4'>
            <h5>QUICK LINK</h5>
            <ul className={`list-disc px-5 ${styles.footerContact}`}>
              <a href='http://iecenter.eng.cmu.ac.th/'>
                <li>IECENTER</li>
              </a>
              <a href='https://ie.eng.cmu.ac.th/IE2014/elearning/'>
                <li>E-Learning</li>
              </a>
              <a href='https://ie.eng.cmu.ac.th/IE2014/download/'>
                <li>Downloads</li>
              </a>
              <a href='http://edserv.eng.cmu.ac.th/ie_book/'>
                <li>E-Document</li>
              </a>
              <a href='http://ie.eng.cmu.ac.th/meetingroom/index.php'>
                <li>Reserve Study Room</li>
              </a>
              <a href='https://ie.eng.cmu.ac.th/IE2014/article/table/'>
                <li>ตารางเรียน / ตารางการใช้ห้อง</li>
              </a>
              <a href='http://ie.eng.cmu.ac.th/research/'>
                <li>ระบบฐานข้อมูลวิจัย</li>
              </a>
              <a href='https://ie.eng.cmu.ac.th/IE2014/article/statistic/'>
                <li>สถิติบัณฑิตที่สำเร็จการศึกษา</li>
              </a>
            </ul>
          </div>
          <div className='w-1/1 md:w-1/4 p-4'>
            <h5>SITEMAP</h5>
            <ul className={`list-disc px-5 ${styles.footerContact}`}>
              <a href='#'>
                <li>Home</li>
              </a>
              <a href='#'>
                <li>About</li>
              </a>
              <a href='#'>
                <li>Curriculum</li>
              </a>
              <a href='#'>
                <li>Members</li>
              </a>
              <a href='#'>
                <li>Research</li>
              </a>
              <a href='#'>
                <li>Resources</li>
              </a>
              <a href='#'>
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer2Container}>
        <div className='container mx-auto md:px-52 bottom-0 p-4'>
          <p className='text-white'>
            © 2022 Industrial Engineering CMU. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
