import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="home-hero-section">
          <h1 className="home-title">
            Personal <br />
            and Business
          </h1>
          <span className="home-subtitle">Online storage</span>

          <hr
            style={{
              color: '#D8D8D8',
              backgroundColor: '#3B668D',
              height: 2,
              margin: '30px 0 45px',
              width: '506px',
            }}
          />
          <span className="home-store-title">
            STORE AND MANAGE ALL YOUR Files!
          </span>

          <span className="home-store-subtitle">
            Upload multiple files at once and keep them forever on this site. If
            you&apos;re using FireFox or Chrome, you can simply drag & drop your
            files to begin uploading
          </span>
          <button className="home-btn">
            <span className="home-btn-text">Try SkyBox Now</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
