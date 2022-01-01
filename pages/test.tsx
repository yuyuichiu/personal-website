import { useState, useEffect, useContext } from 'react';
import TestContext from '../context/testcontext'
import Layout from "../components/Layout"
import { NextPage } from "next"

interface CtxInterface {
  msg: string,
  isTesting: boolean,
  changeMsg: () => void
}

const MiddleComponent: React.FC = () => {
  return <>
    <BottomComponent />
  </>
}

const BottomComponent: React.FC = () => {
  /* return <TestContext.Consumer>
    {ctx => 
      <button onClick={() => ctx.changeMsg()}>{ctx.msg}</button>
    }
  </TestContext.Consumer> */

  const ctx = useContext(TestContext);

  return <>
    <button onClick={() => ctx.changeMsg()}>{ctx.msg}</button>
  </>
}

const TestPage: NextPage = () => {
  const [msg, setMsg] = useState('First phase')
  const [isTesting, setIsTesting] = useState(true)
  
  const testCtx: CtxInterface = {
    msg: msg,
    isTesting: isTesting,
    changeMsg: () => setMsg(msg === 'Second phase' ? 'First phase' : 'Second phase')
  }

  return <TestContext.Provider value={testCtx}>
    <Layout title='page for testing purpose'>
      <MiddleComponent />
    </Layout>
  </TestContext.Provider>
}

export default TestPage