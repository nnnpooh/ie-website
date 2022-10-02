import styles from '/styles/Layout.module.css';
import Image from 'next/image';
function HomeCurriculum() {
  return (
    <div className='section_container section_bg mx-auto md:px-52'>
      <div className='text-center'>
        <h1 className='section_title text-white'>curriculum</h1>
      </div>
      <div className='flex-wrap md:flex mt-4'>
        <div className='relative w-1/1 md:w-5/12 p-4'>
          <Image
            src='/demo/construction-worker-g935b508b6_1280.jpg'
            layout='fill'
            objectFit='cover'
            alt='bachlor'
          />
        </div>
        <div className='w-1/1 md:w-7/12 p-4 text-white'>
          <h3 className='mb-2'>Bachelor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='flex mt-40'>
            <button className={styles.btnCurriculum}>รายละเอียด</button>
          </div>
        </div>
      </div>

      <div className='flex-wrap md:flex mt-4'>
        <div className='relative w-1/1 md:w-5/12 p-4'>
          <Image
            src='/demo/construction-worker-g935b508b6_1280.jpg'
            layout='fill'
            objectFit='cover'
            alt='bachlor'
          />
        </div>
        <div className='w-1/1 md:w-7/12 p-4 text-white'>
          <h3 className='mb-2'>Master</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='md:flex flex-wrap mt-10'>
            <button className={styles.btnCurriculum}>
              Engineering Program in Industrial Engineering
            </button>
            <button className={styles.btnCurriculum}>
              Science Program in Industrial Management
            </button>
            <button className={styles.btnCurriculum}>
              Engineering Program in Logistics Engineering and Supply Chain
              Management
            </button>
          </div>
        </div>
      </div>

      <div className='flex-wrap md:flex mt-4'>
        <div className='relative w-1/1 md:w-5/12 p-4'>
          <Image
            src='/demo/construction-worker-g935b508b6_1280.jpg'
            layout='fill'
            objectFit='cover'
            alt='bachlor'
          />
        </div>
        <div className='w-1/1 md:w-7/12 p-4 text-white'>
          <h3 className='mb-2'>Doctoral</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='flex mt-40'>
            <button className={styles.btnCurriculum}>รายละเอียด</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCurriculum;
