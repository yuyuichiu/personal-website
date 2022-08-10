import NavBar from "./NavBar"
import Head from 'next/head'
import { ReactNode } from "react"
import webIcon from '../public/assets/moon.png'

const description = "Dave Yu (俞睿釗), an experienced web developer who builds your project and evolves with technology.";

interface LayoutProps {
  children?: ReactNode,
  title?: string,
  noContainer?: boolean
}

const Layout : React.FC<LayoutProps> = (props) => {
  return <>
    <Head>
      <title>{props.title ? props.title : "Dave Yu | Full-Stack Web Developer"}</title>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <link rel="icon" href={webIcon.src} />
    </Head>

    <main>
      <NavBar></NavBar>
      <div className={`${!props.noContainer ? 'container' : ''} p-0`}>
        {props.children}
      </div>
    </main>
  </>
}

export default Layout