import FeaturesCard from './FeaturesCard/FeaturesCard'

import featuresCard1 from '../../../assets/img/features/featuresCard/featuresCard1.svg'
import featuresCard2 from '../../../assets/img/features/featuresCard/featuresCard2.svg'
import featuresCard3 from '../../../assets/img/features/featuresCard/featuresCard3.svg'
import featuresCard4 from '../../../assets/img/features/featuresCard/featuresCard4.svg'

import './FeaturesSection.css'

const FeaturesSection = () => {
  return (
    <section className="features-banner">
      <div className="container">
        <div className="features-card-sec">
          <FeaturesCard
            img={featuresCard1}
            title={'SAFE AND SECURE'}
            subtitle={
              'Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever.'
            }
          />
          <FeaturesCard
            img={featuresCard2}
            title={'Access from anywhere'}
            subtitle={
              'Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.'
            }
          />
          <FeaturesCard
            img={featuresCard3}
            title={'STORE AND MANAGE ALL YOUR FILES!'}
            subtitle={
              'Upload multiple files at once and keep them forever on this site. If you`re using FireFox or Chrome, you can simply drag & drop your files to begin uploading.'
            }
          />
          <FeaturesCard
            img={featuresCard4}
            title={'Any point of the globe'}
            subtitle={
              'High speed from any location with internet access! Gigabit networking and high-performance server!'
            }
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
