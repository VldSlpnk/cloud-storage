import './PriceCard.css'

const PriceCard = ({ id, price, duration, features, onClick, isSelected }) => {
  return (
    <div
      className={`price-card ${isSelected ? 'selected' : ''} price-card-${id}`}
      onClick={() => onClick(id)}
    >
      {id === 2 && <span className="card-popular">Most popular</span>}
      <h2 className="card-duration">{duration}</h2>
      <p className="card-price">{price}</p>
      <hr
        style={{
          color: '#D3D3D3',
          backgroundColor: '#D3D3D3',
          height: 1,
          margin: '80px auto 50px',
          width: '308px',
        }}
      />
      <ul className="card-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {isSelected && (
        <>
          <button className="card-sign-btn">
            <span>Sign Up</span>
          </button>
          <p className="card-money-back">14-day money-back guarantee</p>
        </>
      )}
    </div>
  )
}

export default PriceCard
