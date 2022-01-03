import NavBar from "./NavBar"
import Head from 'next/head'
import { ReactNode } from "react"
import webIcon from '../public/assets/favicon.ico'

interface LayoutProps {
  children?: ReactNode,
  title?: string
}

const Layout : React.FC<LayoutProps> = (props) => {
  return <>
    <Head>
      <title>{props.title ? props.title : "Maxwell Yu"}</title>
      <meta name="description" content="Personal Website of Maxwell Yu" />
      <link rel="icon" href={webIcon.src} />
    </Head>

    <main>
      <NavBar></NavBar>
      <div className="container p-0">
        {props.children}
      </div>
    </main>
  </>
}

export default Layout