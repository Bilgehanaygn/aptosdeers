import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout/Layout';
import HomeMain from '../components/HomeMain/HomeMain';

export default function HomePage() {



  return (
    <Layout children={<HomeMain/>} />
  )
}
