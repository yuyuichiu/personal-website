import { Spinner } from "react-bootstrap"
import loadingSVG from '../public/assets/square-loading-svg.svg'

const LoadingWidget = (props: { loading: boolean }) => {
  return <div className={`loading ${!props.loading ? 'hidden' : ''} d-flex position-fixed w-100 h-100 justify-content-center align-items-center`}>
    <div className="overlay w-100 h-100"></div>
    {/* <Spinner animation='grow' className='position-fixed'/>  */} 
    {/* <img src={loadingSVG.src} className="position-absolute" width={50}/> */}
    <div className="ball">
      <div className='left'></div>
      <div className='right'></div>
    </div>
  </div>
}

export default LoadingWidget