import { NextPage } from "next"
import Layout from "../../../components/Layout"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import styles from '../../../styles/blogpost.module.scss'
import { BsFillHouseDoorFill, BsFillPencilFill, BsFillTrashFill, BsTrashFill } from 'react-icons/bs'

const Post: NextPage<any> = (props) => {
  const onDelete = () => {
    console.log('Delete Triggered.');
    // Confirm Deletion
    // Case - delete
    // Case - cancel
  }

  console.log(props);
  return <>
    <Layout title={`${props.post.title} - Maxwell Blog`}>
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
            src={`http://localhost:4000/public/uploads/${props.post.preview_image}`}
          />}
          <ReactMarkdown className="m-3">{`${props.post.body}`}</ReactMarkdown>
        </div>
        <div className="col-sm-3">
          <div className={`${styles.back}`}>
            <Link href='/blog'>
              <BsFillHouseDoorFill size={30}/>
            </Link>
            <Link href={`/blog/update/${props.post._id}`}>
              <BsFillPencilFill size={30}/>
            </Link>
            <button onClick={() => onDelete()} className={styles.delete}>
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
  const res = await fetch('http://localhost:4000/api/articles');
  const posts = await res.json();

  const allPaths = posts.map( (p: {_id: string}) => { return { params: { postId: p._id } } } );
  
  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context: any)  =>{
  try {
    const res = await fetch(`http://localhost:4000/api/articles/${context.params.postId}`);
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