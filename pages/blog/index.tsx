import type { NextPage } from 'next'
import { useState, useEffect, useContext, useRef } from 'react'
import Layout from '../../components/Layout'
import { ListGroup, Button } from 'react-bootstrap'
import Link from 'next/link';
import { BsArrowUpCircle, BsSearch } from "react-icons/bs";
import styles from '../../styles/blog.module.scss';
import AuthContext from '../../context/authContext';

const Articles : NextPage<{articles: any, image: any}> = (props) => {
  const authCtx = useContext(AuthContext);
  const [query, setQuery] = useState('');

  return <>
    <Layout title="Maxwell Blog">
      <section className={`${styles.blog}`}>
        <nav className={`${styles.toolbar}`}>
          <h2 className='m-2'>Blog</h2>
          <div className={`${styles.search}`}>
            <div className={`${styles.left} d-none d-md-flex`}>
              {/* Tags - to do later */}
              {/* <div className={`${styles.tag}`}>Experiment</div>
              <div className={`${styles.tag} ${styles.active}`}>Experiment 2</div> */}
            </div>
            <div className={`${styles.right}`}>
              <Link href='/blog/create' passHref>
                <div className='p-0 m-0 btn'><BsArrowUpCircle size={24}/></div>
              </Link>
              <div>
                <BsSearch size={28}/>
                <input type='text' onChange={(e) => setQuery(e.target.value)} placeholder='By title / content'/>
              </div>
            </div>
          </div>
        </nav>

        <ListGroup className={`${styles.posts}`}>
          {props.articles.filter((x: any) => x.title.toLowerCase().includes(query.toLowerCase()) || x.body.toLowerCase().includes(query.toLowerCase())).map((article: any) => {
            return <Link key={article._id} href={`/blog/posts/${article._id}`} passHref>
              <ListGroup.Item className={`${styles.post}`} action>
                {article.preview_image && <img src={article.preview_image}/>}
                <div className={`${styles.post_info}`}>
                  <h3>{article.title}</h3>
                  <div className={`${styles.subset}`}>
                    <small>Created at: {article.created_at.split('T')[0]}</small>
                    <p>
                      {`${article.body.split('\n\n')[0] || ""}`}
                    </p>
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

export const getServerSideProps = async () => {
  const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles', {
    credentials: 'include',
  });
  const articles = await res.json();

  return {
    props: { articles }
  }
}

export default Articles