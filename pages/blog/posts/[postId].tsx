import { useState, useEffect, useContext } from 'react'
import { NextPage } from "next"
import Layout from "../../../components/Layout"
import Link from "next/link"
import styles from '../../../styles/blogpost.module.scss'
import { BsFillHouseDoorFill, BsFillPencilFill, BsTrashFill } from 'react-icons/bs'
import { Modal, Button, Toast } from "react-bootstrap";
import router from 'next/router'
import Cookies from 'js-cookie'
import CustomMarkdown from '../../../components/CustomMarkdown'
import AuthContext from '../../../context/authContext'


interface DeleteWidget {
  show: boolean,
  onDelete: (deleteOption: boolean) => void
}

const DeleteWidget: React.FC<DeleteWidget> = (props) => {
  return <Modal show={props.show} centered>
    <Modal.Header>
      <Modal.Title>Confirm Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete the post??</Modal.Body>
    <Modal.Footer>
      <Button variant="dark" onClick={() => props.onDelete(false)}>
        No
      </Button>
      <Button variant="danger" onClick={() => props.onDelete(true)}>
        Delete post
      </Button>
    </Modal.Footer>
  </Modal>
}

const Post: NextPage<any> = (props) => {
  const [askDelete , setAskDelete] = useState(false);
  const authCtx = useContext(AuthContext);

  const onDeleteRequest = () => { setAskDelete(true); }
  const deleteHandler = (deleteOption: boolean) => {
    setAskDelete(false);
    if(deleteOption && router.isReady) {
      fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${props.post._id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type' : "application/json",
          'authentication': `${Cookies.get('token')}`
       },
        body: JSON.stringify({"img" : props.post.preview_image})
      })
        .then((res) => {
          if(res.ok) { return res.json() }
          else throw 'Unauthenticated'
        })
        .then((data) => {
          console.log('deleted.')
          setTimeout(() => router.push('/blog'), 1000);
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return <>
    <Layout title={`${props.post.title} - Maxwell Blog`}>
      <DeleteWidget show={askDelete} onDelete={(d) => deleteHandler(d)}/>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center mb-1 mt-3 fs-2'>{props.post.title}</h1>
          <p className='text-center'>Created: {props.post.created_at.split("T")[0]}, by {props.post.author === 'yuyuichiu' ? 'Maxwell Yu' : props.post.author || 'Unknown'}</p>
          <hr />
        </div>
        <div className="col-sm-9">
          {props.post.preview_image && 
          <img 
            className={`${styles.blogImage}`}
            src={props.post.preview_image}
          />}
          <CustomMarkdown className="mt-3">
            {`${props.post.body}`}
          </CustomMarkdown>
        </div>
        <div className="col-sm-3">
          <div className={`${styles.back}`}>
            <Link href='/blog'>
              <span className='m-0'><BsFillHouseDoorFill size={30}/></span>
            </Link>
            {(authCtx.role === 0 || authCtx.username === props.post.author) && 
            <Link href={`/blog/update/${props.post._id}`}>
              <span className='m-0'><BsFillPencilFill size={30}/></span>
            </Link>}
            {(authCtx.role === 0 || authCtx.username === props.post.author) && 
            <button onClick={() => onDeleteRequest()} className={styles.delete}>
              <span className='m-0'><BsTrashFill size={30} style={{ color: '#CB0101' }}/></span>
            </button>}
          </div>
          <div className={`${styles.ad}`}>
          </div>
          <div className={`${styles.recommandation}`}></div>
        </div>
      </div>
    </Layout>
  </>
}

/* export const getStaticPaths = async () => {
  // Get array of possible post paths to render
  const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles');
  const posts = await res.json();

  const allPaths = posts.map( (p: {_id: string}) => { return { params: { postId: p._id } } } );
  
  return {
    paths: allPaths,
    fallback: false
  }
} */

export const getServerSideProps = async (context: any)  =>{
  try {
    const res = await fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${context.params.postId}`);
    const post = await res.json();
    return {
      props: { post: post }
    }
  } catch {
    return {
      props: { notFound: true }
    }
  }
}
export default Post