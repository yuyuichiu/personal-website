import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Highlight from 'react-highlight';

interface MarkdownInterface {
  className?: string,
}

// Syntax Highlighter and Markdown Custom Config
const componentConfig = {
  table: ({...props}) => <table className="table" {...props}></table>,
  img: ({...props}) => <img style={{maxWidth: '300px'}} {...props} />,
  code: ({...props}) => <Highlight {...props}></Highlight>,
  a: ({...props}) => <a {...props} style={{ textDecoration: 'underline' }}></a>,
}

const CustomMarkdown: React.FC<MarkdownInterface> = (props) => {
  return <ReactMarkdown className={props.className || ''} remarkPlugins={[remarkGfm]} components={componentConfig}>
    {`${props.children}`}
  </ReactMarkdown>
}

export default CustomMarkdown