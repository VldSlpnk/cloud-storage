import './FeaturesCard.css'

const FeaturesCard = ({ img, title, subtitle }) => {
  return (
    <div className="features-card-container">
      <div className="card-text">
        <span className="card-text-title">{title}</span>
        <span className="card-text-subtitle">{subtitle}</span>
      </div>
      <div className="card-img">
        <img src={img} alt={img} />
      </div>
    </div>
  )
}

export default FeaturesCard
