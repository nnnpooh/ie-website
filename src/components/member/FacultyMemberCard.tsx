import { FC } from 'react';
import Image from 'next/image';
import { Card } from '@mantine/core';
import { useRouter } from 'next/router';
import { FacultyType } from '@/src/api/types/manual';

interface Props {
  fac: FacultyType;
}

const FacultyMemberCard: FC<Props> = ({ fac }) => {
  const router = useRouter();
  const lang = router.locale;

  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <Card.Section>
        <div className='relative h-80 w-full bg-red-300'>
          <Image
            src={fac.profileImage?.sourceUrl || ''}
            layout='fill'
            objectFit='cover'
            objectPosition='top'
            alt={fac.fullNameEn}
          />
        </div>
      </Card.Section>
      <div className='mt-4'>
        <div className='text-md font-bold text-primary'>
          {lang === 'th' ? fac.fullNameTh : fac.fullNameEn}
        </div>
        <h3>{fac.adminPositionTh}</h3>
      </div>
    </Card>
  );
};

export default FacultyMemberCard;
