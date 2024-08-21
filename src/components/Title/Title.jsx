import './Title.css'

const Title = ({ textTitle, textSubTitle }) => {
  return (
    <div className="title-container">
      <h1 className="title-title">{textTitle}</h1>
      <span className="title-subtitle">{textSubTitle}</span>
    </div>
  )
}

export default Title
