import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import { ListGroup, Button } from 'react-bootstrap'
import Link from 'next/link'
import { BsArrowUpCircle, BsSearch } from "react-icons/bs";
import styles from '../../styles/blog.module.scss'

const Articles : NextPage<{articles: any, image: any}> = (props) => {
  console.log(props.articles)
  return <>
    <Layout title="Maxwell Blog">
      <section className={`${styles.blog}`}>
        
        <nav className={`${styles.toolbar}`}>
          <h2 className='m-2'>Blog</h2>
          <div className={`${styles.search}`}>
            <div className={`${styles.left}`}>
              <div className={`${styles.tag}`}>Experiment</div>
              <div className={`${styles.tag} ${styles.active}`}>Experiment 2</div>
            </div>
            <div className={`${styles.right}`}>
              <Link href='/blog/create' passHref>
                <BsArrowUpCircle size={24}/>
              </Link>
              <div>

                <BsSearch size={28}/>
                <input type='text' />
              </div>
            </div>
          </div>
        </nav>

        <ListGroup className={`${styles.posts}`}>
          {props.articles.map((article: any) => {
            return <Link key={article._id} href={`/blog/post/${article._id}`} passHref>
              <ListGroup.Item className={`${styles.post}`} action>
                {article.preview_image && <img src={`http://localhost:4000/public/uploads/${article.preview_image}`}/>}
                <div className={`${styles.post_info}`}>
                  <h3>{article.title}</h3>
                  <div className={`${styles.subset}`}>
                    <small>Created at: {article.created_at.split('T')[0]}</small>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit placeat consequatur fugit explicabo cumque, ipsa, officia perspiciatis culpa? </p>
                  </div>
                </div>
              </ListGroup.Item>
            </Link>
          })}
        </ListGroup>

        <aside className={`${styles.rectangle}`}></aside>
        <aside className={`${styles.triangle}`}></aside>
      </section>
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