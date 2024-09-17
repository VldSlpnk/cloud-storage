import { FadeLoader } from 'react-spinners'
import './Loader.css'

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <FadeLoader
        color={'#6db2f3'}
        loading={loading}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
