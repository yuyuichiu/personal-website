import { useState, useEffect } from 'react'
import { NextPage } from "next"
import Layout from "../../../components/Layout"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import styles from '../../../styles/blogpost.module.scss'
import { BsFillHouseDoorFill, BsFillPencilFill, BsFillTrashFill, BsTrashFill } from 'react-icons/bs'
import { Modal, Button } from "react-bootstrap";
import remarkGfm from 'remark-gfm'
import router from 'next/router'

interface DeleteWidget {
  show: boolean,
  onDelete: (deleteOption: boolean) => void
}

const DeleteWidget: React.FC<DeleteWidget> = (props) => {
  return <Modal show={props.show} closeButton>
    <Modal.Header closeButton>
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

const componentConfig = {
  table: ({...props}) => <table className="table" {...props}></table>,
  img: ({...props}) => <img style={{maxWidth: '300px'}} {...props} />,
}

const Post: NextPage<any> = (props) => {
  useEffect(() => {
    
  }, []);

  const [askDelete , setAskDelete] = useState(false);

  const onDeleteRequest = () => { setAskDelete(true); }
  const deleteHandler = (deleteOption: boolean) => {
    setAskDelete(false);
    if(deleteOption && router.isReady) {
      fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${props.post._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type' : "application/json" },
        body: JSON.stringify({"img" : props.post.preview_image})
      })
        .then((res) => {
          console.log('deleted.')
          setTimeout(() => router.back(), 1000);
        })
        .catch((err) => console.log(err.message))
    }
  }

  return <>
    <Layout title={`${props.post.title} - Maxwell Blog`}>
      <DeleteWidget show={askDelete} onDelete={(d) => deleteHandler(d)}/>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center mb-1 mt-3 fs-2'>{props.post.title}</h1>
          <p className='text-center'>Created: {props.post.created_at.split("T")[0]}, by {props.post.author_name || 'Maxwell Yu (temp)'}</p>
          <hr />
        </div>
        <div className="col-sm-9">
          {props.post.preview_image && 
          <img 
            className={`${styles.blogImage}`}
            src={props.post.preview_image}
          />}
          <ReactMarkdown className="mt-3" remarkPlugins={[remarkGfm]} components={componentConfig}>
            {`${props.post.body}`}
          </ReactMarkdown>
        </div>
        <div className="col-sm-3">
          <div className={`${styles.back}`}>
            <Link href='/blog'>
              <BsFillHouseDoorFill size={30}/>
            </Link>
            <Link href={`/blog/update/${props.post._id}`}>
              <BsFillPencilFill size={30}/>
            </Link>
            <button onClick={() => onDeleteRequest()} className={styles.delete}>
              <BsTrashFill size={30} style={{ color: '#CB0101' }}/>
            </button>
          </div>
          <div className={`${styles.ad}`}>
          </div>
          <div className={`${styles.recommandation}`}></div>
        </div>
      </div>
    </Layout>
  </>
}

export const getStaticPaths = async () => {
  // Get array of possible post paths to render
  const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles');
  const posts = await res.json();

  const allPaths = posts.map( (p: {_id: string}) => { return { params: { postId: p._id } } } );
  
  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context: any)  =>{
  try {
    const res = await fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${context.params.postId}`);
    const post = await res.json();
    return {
      props: { post: post },
      revalidate: 1
    }
  } catch {
    return {
      props: { error: true }
    }
  }
}
export default Post