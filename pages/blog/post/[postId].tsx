import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../../../components/Layout"

const Post: NextPage<any> = (props) => {
  const router = useRouter();

  return <>
    <Layout title={``}>
      <div className="mx-5 my-3">
        <h1>Post Title: {router.query.postId}</h1>
        <small>Created: 16 December 2021, by Maxwell Yu</small>
        <hr />
        <img src="https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock?fit=fill&w=480&h=270"></img>
        <p className="my-4">{`Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Nam architecto laudantium aliquid laborum dignissimos impedit magni tenetur iste dolore alias inventore cupiditate nulla molestiae, porro est numquam hic \n deserunt rerum sapiente quibusdam exercitationem? Ipsa, earum nostrum assumenda porro voluptates non esse molestiae consequatur iste commodi, consectetur, voluptate aut amet sunt adipisci quaerat quae! Error pariatur recusandae mollitia esse, voluptatibus eius odit fugit nesciunt alias. Similique tempore id libero exercitationem suscipit necessitatibus eos facilis ratione laboriosam. Soluta corrupti asperiores qui minus nihil eos officia debitis perferendis quod sequi. Ducimus ratione, libero atque dolores eos voluptatum earum ullam soluta hic iusto corrupti?`}</p>
      </div>
    </Layout>
  </>
}

export default Post