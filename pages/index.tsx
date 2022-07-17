import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import styles from '../styles/Home.module.css'

const Home: NextPage<{data: RootQueryToFacultyConnection}> = ({data}) => {
  console.log({data: data.nodes?.forEach(el=>el?.faculty_fields.)})
  return (
    <div className={styles.container}>
      
      {JSON.stringify(data)}
          </div>
  )
}

export default Home

import {RootQueryToFacultyConnection} from '../src/generated/graphql'
export async function getStaticProps() {
  const { data  } = await client.query({
    query: gql`
    query NewQuery {
      faculties {
        nodes {
          faculty_fields {
            emailJson
            fieldGroupName
            firstnameEn
            firstnameTh
            lastnameEn
            lastnameTh
            phoneJson
            titleEn
            titleTh
          }
        }
      }
    }
    `,
  });

  return {
    props: {
      data: data ,
    },
 };
}