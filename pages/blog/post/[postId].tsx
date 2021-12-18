import { NextPage } from "next"
import Layout from "../../../components/Layout"
import ReactMarkdown from "react-markdown"
import Link from "next/link"

const Post: NextPage<any> = (props) => {
  return <>
    <Layout title={`${props.post.title} - Maxwell Blog`}>
      <div className="mx-5 my-3">
        <Link href="/blog">
          <a className="test-right">Go back</a>
        </Link>
        <h1>{props.post.title}</h1>
        <small>Created: {props.post.creation_time.split("T")[0]}, by {props.post.author_name}</small>
        <hr />
        <img src="https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock?fit=fill&w=480&h=270"></img>
        <ReactMarkdown className="mt-3">{`${props.post.content}`}</ReactMarkdown>
      </div>
    </Layout>
  </>
}

export const getStaticPaths = async () => {
  // Get array of possible post paths to render
  const res = await fetch('http://localhost:4000/api/articles');
  const posts = await res.json();

  const allPaths = posts.map( (p: {id: number}) => { return { params: { postId: `${p.id}` } } } );
  
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