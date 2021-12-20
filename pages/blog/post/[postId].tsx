import { NextPage } from "next"
import Layout from "../../../components/Layout"
import ReactMarkdown from "react-markdown"
import Link from "next/link"

const Post: NextPage<any> = (props) => {
  return <>
    <Layout title={`${props.post.title} - Maxwell Blog`}>
      <div className="mx-5 my-3 d-flex flex-column">
        {props.post.preview_image && <img src={`https://maxwellyu-blog.herokuapp.com/public/uploads/${props.post.preview_image}`} className='blogImage' />}
        <h1 className='text-center'>{props.post.title}</h1>
        <p className='text-center'>Created: {props.post.creation_time.split("T")[0]}, by {props.post.author_name}</p>
        <hr />
        <ReactMarkdown className="mt-3">{`${props.post.content}`}</ReactMarkdown>
      </div>
    </Layout>
  </>
}

export const getStaticPaths = async () => {
  // Get array of possible post paths to render
  const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles');
  const posts = await res.json();

  const allPaths = posts.map( (p: {id: number}) => { return { params: { postId: `${p.id}` } } } );
  
  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context: any)  =>{
  try {
    const res = await fetch(`http://maxwellyu-blog.herokuapp.com/api/articles/${context.params.postId}`);
    const post = await res.json();
    return {
      props: { post: post[0] },
      revalidate: 1
    }
  } catch {
    return {
      props: { error: true }
    }
  }
}
export default Post