import './StatSection.css'

const StatSection = () => {
  return (
    <section className="stat-section">
      <div className="container">
        <div className="stat-container">
          <div className="stat-download">
            <span className="stat-title">999529 000 000</span>
            <span className="stat-subtitle">Загружено файлов на сервис</span>
          </div>
          <div className="stat-customers">
            <span className="stat-title">235 764 784</span>
            <span className="stat-subtitle">
              Зарегистрировано пользователей
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatSection
