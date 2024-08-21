import { useState } from 'react'

import PriceCard from './PriceCard/PriceCard'

import priceCards from './Cards'

import './PriceSection.css'

const PriceSection = () => {
  const [selectedCard, setSelectedCard] = useState(2)

  return (
    <section className="price-section">
      <div className="container">
        <div className="price-text">
          <span className="price-title">Become a PREMIUM MEMBER</span>
          <span className="price-subtitle">
            Premium Business <br />1 TB free space and 4 TB monthly transfer
          </span>
        </div>
        <div className="card-container">
          {priceCards.map(({ id, price, duration, features }) => (
            <PriceCard
              key={id}
              id={id}
              price={price}
              duration={duration}
              features={features}
              onClick={() => setSelectedCard(id)}
              isSelected={selectedCard === id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PriceSection
