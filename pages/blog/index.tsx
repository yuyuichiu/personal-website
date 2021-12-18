import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import { ListGroup, Button } from 'react-bootstrap'
import Link from 'next/link'

const Articles : NextPage<{articles: any}> = (props) => {
  console.log(props.articles)
  return <>
    <Layout title="Maxwell Blog">
      <div className="mx-5 my-3">
        <div className='d-flex justify-content-between align-items-center my-3' style={{ width: '100%' }}>
          <h1 className='m-2'>Blog</h1>
          <Link href='/blog/create' passHref>
            <Button variant="dark">Create Post</Button>
          </Link>
        </div>
        <ListGroup>
          {props.articles.map((article: any) => {
            return <Link key={article.id} href={`/blog/post/${article.id}`} passHref>
              <ListGroup.Item action>
                <h6>{article.title}</h6>
                <small>Created at: {article.creation_time.split('T')[0]}</small>
              </ListGroup.Item>
            </Link>
          })}
        </ListGroup>
      </div>
    </Layout>
  </>
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/api/articles');
  const articles = await res.json();

  return {
    props: { articles },
    revalidate: 1
  }
}

export default Articles