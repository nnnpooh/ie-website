import { FC } from 'react';
import { NextPage } from 'next';
import { Card, Stack, Title, Text, Badge, Table } from '@mantine/core';
import axios from 'axios';

interface props {
  data: {
    data: any[];
    paging: any;
  };
}

const FacebookFeed: NextPage<props> = ({ data }) => {
  const dataArr = data.data;
  console.log(dataArr);
  return (
    <Stack spacing={'md'}>
      {dataArr.map((el) => (
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
};

export default FacebookFeed;

export async function getStaticProps() {
  const pageId = process.env.PAGE_ID;
  const accessToken = process.env.PAGE_ACCESS_TOKEN;
  const url = `https://graph.facebook.com/v14.0/${pageId}/feed`;
  const res = await axios.get<any>(url, {
    params: {
      access_token: accessToken,
      fields: 'id,created_time,message,permalink_url,full_picture,attachments',
    },
  });

  return {
    props: {
      data: res.data,
    },
  };
}
