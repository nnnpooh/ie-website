import Image from 'next/image';

function ExternalLink() {
  return (
    <div className='section_container mx-auto md:px-52'>
      <div className='text-center'>
        <h1 className='section_title text-white'>external link</h1>
      </div>
      <div className='flex flex-wrap mt-12 justify-center'>
        <div className='relative md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2 h-40'>
          <Image
            src='/demo/fb.JPG'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
        <div className='relative md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <Image
            src='/demo/fb.JPG'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
        <div className='relative md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <Image
            src='/demo/fb.JPG'
            objectFit='contain'
            layout='fill'
            alt='...'
          />
        </div>
      </div>
      {/* <div className='flex flex-wrap mt-12 justify-center'>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/01.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/02.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/03.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/04.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/05.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/06.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/07.JPG' className='w-full' />
        </div>
        <div className='md:w-1/3 w-1/2 pt-4 md:pl-4 md:pr-4 pl-2 pr-2'>
          <img src='/demo/08.JPG' className='w-full' />
        </div>
      </div> */}
    </div>
  );
}

export default ExternalLink;
