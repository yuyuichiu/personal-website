import { NextPage } from "next"
import Layout from "../../../components/Layout"
import ReactMarkdown from "react-markdown"
import Link from "next/link"

const Post: NextPage<any> = (props) => {
  console.log(props)
  return <>
    <Layout title={`${props.post.title} - Maxwell Blog`}>
      {props.post.preview_image && <img src={`http://localhost:4000/public/uploads/${props.post.preview_image}`} className='blogImage' />}
      <div className="mx-5 d-flex flex-column">
        <h1 className='text-center'>{props.post.title}</h1>
        <p className='text-center'>Created: {props.post.created_at.split("T")[0]}, by {props.post.author_name || 'Maxwell Yu (temp)'}</p>
        <hr />
        <ReactMarkdown className="mt-3">{`${props.post.body}`}</ReactMarkdown>
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