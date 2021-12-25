import Layout from "../components/Layout"
import { NextPage } from "next"
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

const TestPage: NextPage = () => {
  const componentConfig = {
    p: ({...props}) => <p className="m-0" {...props}/>,
    table: ({node, ...props}) => <table className="table" {...props}></table>
  }
  const markdown = `
  **Here is some JavaScript code:**

  ~~~
  console.log('It works!')
  const John = new Human();
  ~~~

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  `

  return <>
    <Layout title='page for testing purpose'>
      <h1 className="text-center mb-4">Testing</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={componentConfig}>
        {markdown}
      </ReactMarkdown>
    </Layout>
  </>
}

export default TestPage