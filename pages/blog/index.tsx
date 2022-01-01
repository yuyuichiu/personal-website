import type { NextPage } from 'next'
import { useState, useEffect, useContext } from 'react'
import Layout from '../../components/Layout'
import { ListGroup, Button } from 'react-bootstrap'
import Link from 'next/link';
import { BsArrowUpCircle, BsSearch } from "react-icons/bs";
import styles from '../../styles/blog.module.scss';
import AuthContext from '../../context/authContext';

const Articles : NextPage<{articles: any, image: any}> = (props) => {
  const authCtx = useContext(AuthContext);

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
                <div className='p-0 m-0 btn'><BsArrowUpCircle size={24}/></div>
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
            return <Link key={article._id} href={`/blog/posts/${article._id}`} passHref>
              <ListGroup.Item className={`${styles.post}`} action>
                {article.preview_image && <img src={article.preview_image}/>}
                <div className={`${styles.post_info}`}>
                  <h3>{article.title}</h3>
                  <div className={`${styles.subset}`}>
                    <small>Created at: {article.created_at.split('T')[0]}</small>
                    <p>
                      {`${article.body.match(/[A-Za-z0-9,.?! ]+/)[0].substr(0,120) || ""}`}
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

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/api/articles', {
    credentials: 'include',
  });
  const articles = await res.json();

  return {
    props: { articles },
    revalidate: 1
  }
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:4000/api/articles', { credentials: 'include' });
  const articles = await res.json();

  return {
    props: {
      articles: articles,
      cookies: context.req.cookies,
    }
  }
} */

export default Articles