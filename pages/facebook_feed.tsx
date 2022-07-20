import { FC } from 'react';
import { NextPage } from 'next';
import { Card, Stack, Title, Text, Badge, Table } from '@mantine/core';
import axios from 'axios';

interface FacebookData {
  data: any[];
  paging: any;
}

interface props {
  dataUndergradTh: FacebookData;
  dataMasterIM: FacebookData;
  dataPhD: FacebookData;
}

const FacebookFeed: NextPage<props> = ({
  dataUndergradTh,
  dataMasterIM,
  dataPhD,
}) => {
  const dataUndergradThArray = dataUndergradTh.data;
  const dataMasterIMArray = dataMasterIM.data;
  const dataPhDArray = dataPhD.data;

  const DisplayFacebookData: FC<{ dataArray: any[]; title: string }> = ({
    dataArray,
    title,
  }) => (
    <Stack spacing={'md'}>
      <Title>{title}</Title>
      {dataArray.map((el) => (
        <Card shadow='sm' p='lg' key={el.id}>
          {el?.full_picture ? (
            <Card.Section>
              <img src={el.full_picture || ''} />
            </Card.Section>
          ) : (
            <Title>[No Image]</Title>
          )}

          {el.message || '[No message]'}

          <Text>
            <Badge>
              <a href={el.permalink_url} target='_blank' rel='noreferrer'>
                Link
              </a>
            </Badge>
          </Text>
          <Text>Created at {new Date(el.created_time).toDateString()}</Text>
        </Card>
      ))}
    </Stack>
  );

  return (
    <>
      <DisplayFacebookData
        dataArray={dataUndergradThArray}
        title={'Undergrad'}
      />
      <DisplayFacebookData dataArray={dataMasterIMArray} title={'Master IM'} />
      <DisplayFacebookData dataArray={dataPhDArray} title={'Ph.D'} />
    </>
  );
};

export default FacebookFeed;

export async function getStaticProps() {
  const pageIdUndergradTh = process.env.PAGE_ID_UNDERGRAD_TH;
  const pageIdMasterIM = process.env.PAGE_ID_MASTER_IM;
  const pageIdPhD = process.env.PAGE_ID_PHD;
  const accessToken = process.env.PAGE_ACCESS_TOKEN;

  const urlUndergradTh = `https://graph.facebook.com/v14.0/${pageIdUndergradTh}/feed`;
  const urlMasterIM = `https://graph.facebook.com/v14.0/${pageIdMasterIM}/feed`;
  const urlPhD = `https://graph.facebook.com/v14.0/${pageIdPhD}/feed`;

  const postLimit = 5;

  const resUndergradTh = await axios.get<any>(urlUndergradTh, {
    params: {
      access_token: accessToken,
      fields: 'id,created_time,message,permalink_url,full_picture,attachments',
      limit: postLimit,
    },
  });

  const resMasterIM = await axios.get<any>(urlMasterIM, {
    params: {
      access_token: accessToken,
      fields: 'id,created_time,message,permalink_url,full_picture,attachments',
      limit: postLimit,
    },
  });

  const resPhD = await axios.get<any>(urlPhD, {
    params: {
      access_token: accessToken,
      fields: 'id,created_time,message,permalink_url,full_picture,attachments',
      limit: postLimit,
    },
  });

  return {
    props: {
      dataUndergradTh: resUndergradTh.data,
      dataMasterIM: resMasterIM.data,
      dataPhD: resPhD.data,
    },
  };
}
