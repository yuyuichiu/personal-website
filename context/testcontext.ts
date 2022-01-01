import { createContext } from "react"

interface CtxInterface {
  msg: string,
  isTesting: boolean,
  changeMsg: () => void
}

const TestContext = createContext<CtxInterface>({
  msg: 'default',
  isTesting: false,
  changeMsg: () => {}
})
export default TestContext