import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return <Layout title='404 Not Found'>
    <h2 className='warning'>404 Not Found</h2>
    <p className='text-center'>Ummm... This page is not valid</p>
    <Link href='/' passHref>
      <button className='w-100 btn btn-dark'>🏃 Back to index page</button>
    </Link>
  </Layout>
}