import { useState } from 'react'
import priceCards from '../HomePage/PriceSection/Cards'
import PriceCard from '../HomePage/PriceSection/PriceCard/PriceCard'
import Title from '../Title/Title'
import './PricePage.css'
import StatSection from '../StatSection/StatSection'
import Footer from '../Footer/Footer'

const PricePage = () => {
  const [selectedCard, setSelectedCard] = useState(2)

  return (
    <>
      <section className="price-page-banner">
        <div className="container">
          <Title textTitle={'tariff plans'} textSubTitle={'Online storage'} />
          <div className="price-card-container">
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
      <StatSection />
    </>
  )
}

export default PricePage
