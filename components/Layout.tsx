import NavBar from "./NavBar"
import Head from 'next/head'
import { ReactNode } from "react"

interface LayoutProps {
  children?: ReactNode,
  title?: string
}

const Layout : React.FC<LayoutProps> = (props) => {
  return <>
    <Head>
      <title>{props.title ? props.title : "Maxwell Yu"}</title>
      <meta name="description" content="Personal Website of Maxwell Yu" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <NavBar></NavBar>
      {props.children}
    </main>
  </>
}

export default Layout