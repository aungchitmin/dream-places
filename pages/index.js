import Head from 'next/head'
import Filter from '../components/Filter'
import HaveBeen from '../components/HaveBeen'
import Navbar from '../components/Navbar'
import WantTo from '../components/WantTo'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-gray-200'>
      <Head>
        <title>Travel-Goals</title>
        <meta name="description" content="created by ACM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Filter />
      <WantTo />
      <HaveBeen />
    </div>
  )
}
