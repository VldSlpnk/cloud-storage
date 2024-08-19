import './Title.css'

const Title = ({ textTitle, textSubTitle }) => {
  return (
    <div>
      <h1>{textTitle}</h1>
      <span>{textSubTitle}</span>
    </div>
  )
}

export default Title
