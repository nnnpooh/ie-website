import Image from 'next/image';
function Partner() {
  return (
    <div className='section_container mx-auto md:px-52'>
      <div className='text-center'>
        <h1 className='section_title text-white'>Sponsors and partners</h1>
      </div>
      <div className='flex flex-wrap mt-12'>
        <div className='relative md:w-1/4 w-1/2 p-2'>
          <Image
            src='/demo/partner/msie 280110.png'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
        <div className='relative md:w-1/4 w-1/2 p-2'>
          <Image
            src='/demo/partner/bannerddru_280x1101.jpg'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
        <div className='relative md:w-1/4 w-1/2 p-2'>
          <Image
            src='/demo/partner/bannerstep_280x1101.jpg'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
        <div className='relative md:w-1/4 w-1/2 p-2 h-20'>
          <Image
            src='/demo/partner/logis.jpg'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
      </div>
    </div>
  );
}

export default Partner;
