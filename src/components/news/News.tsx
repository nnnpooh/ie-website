import { NextPage } from 'next';
import { FBFeedType } from '@src/api';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Container, Card, ScrollArea } from '@mantine/core';

interface Props {
  ug: FBFeedType;
  im: FBFeedType;
  grad: FBFeedType;
}

const NewsPage: NextPage<Props> = ({ ug, im, grad }) => {
  console.log({ ug, im, grad });

  const ts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className='bg-gray-200'>
      <ScrollContainer>
        <div className='flex gap-2'>
          {ts.map((el) => (
            <div
              className='flex h-80 w-80 bg-red-300 items-center justify-center flex-none'
              style={{ width: 500 }}
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      </ScrollContainer>

      {/* <Container size={'xl'}>
        <div className='flex gap-2'>
          {ug.data.map((fb) => (
            <Card key={fb.id}>
              <Card.Section>
                {fb?.full_picture && (
                  <div className='relative h-80 w-80'>
                    <Image
                      src={fb.full_picture}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                )}
              </Card.Section>
              <div>
                {fb?.attachments?.data
                  ? fb.attachments.data[0].description
                  : ''}
              </div>
            </Card>
          ))}
        </div>
      </Container> */}
    </div>
  );
};

export default NewsPage;
