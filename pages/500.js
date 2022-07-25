import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom500() {
  return <Layout title='404 Not Found'>
    <h2 className='warning'>500 Internal Server Error</h2>
    <p className='text-center'>There is something wrong with the server</p>
    <p>If you can, please contact your scenario to Dave Yu @ yuichiuyu1915@gmail.com.</p>
    <Link href='/' passHref>
      <button className='w-100 btn btn-dark'>🏃 Back to index page</button>
    </Link>
  </Layout>
}