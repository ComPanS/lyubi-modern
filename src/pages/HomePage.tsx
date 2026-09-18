import { highlights, reviews, services, site } from '../content/site'

export function HomePage() {
  const asset = (name: string) => `${import.meta.env.BASE_URL}media/${name}`

  return <>
    <section className="hero" id="top">
      <img src={asset('hero.jpg')} alt="Светлые волосы после окрашивания" />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <p className="hero-kicker">Калуга · Гоголя, 2</p>
        <div className="hero-copy">
          <p className="eyebrow">Салон красоты «Люби»</p>
          <h1>{site.tagline}</h1>
          <p>{site.description}</p>
          <a className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a>
        </div>
        <div className="hero-note"><span>01</span><p>Подбираем оттенок<br />под вас, а не наоборот</p></div>
      </div>
    </section>

    <section className="intro section" id="about">
      <div className="section-label">01 / о салоне</div>
      <div className="intro-main"><h2>Красота,<br /><em>которую</em> хочется носить</h2><p>«Люби» — салон в центре Калуги для тех, кто выбирает продуманный цвет, здоровые волосы и понятный результат.</p></div>
      <div className="stat-line">{highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    </section>

    <section className="service-section section" id="services">
      <div className="section-label">02 / направления</div>
      <div className="service-heading"><h2>Ваш следующий<br /><em>оттенок</em></h2><p>Перед процедурой обсуждаем желаемый результат и состояние волос. На выходе — цвет, который легко поддерживать.</p></div>
      <div className="service-list">{services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b></article>)}</div>
    </section>

    <section className="image-band"><div className="image-caption"><span>03 / внимание к деталям</span><strong>Точный цвет.<br />Бережный подход.</strong></div><img src={asset('hero.jpg')} alt="Работа с цветом волос в салоне Люби" /></section>

    <section className="trust section" id="reviews"><div className="section-label">04 / гости говорят</div><div className="trust-head"><div><strong>5,0</strong><span>299 оценок<br />на Яндекс Картах</span></div><h2>Сюда<br /><em>возвращаются</em></h2></div><div className="review-list">{reviews.map((review, index) => <blockquote key={review}><span>0{index + 1}</span><p>«{review}»</p></blockquote>)}</div></section>

    <section className="contact" id="contacts"><div className="contact-mark">Л</div><div className="section-label">05 / приходите</div><h2>Будем<br /><em>рады</em> вам</h2><div className="contact-details"><p>{site.contact.address}</p><p>{site.contact.hours}</p><a className="button button-dark" href={site.bookingUrl} target="_blank" rel="noreferrer">Выбрать время <span>↗</span></a><a className="phone" href={site.contact.phoneHref}>{site.contact.phone}</a><div><a href={site.mapsUrl} target="_blank" rel="noreferrer">Открыть карту ↗</a><a href={site.vkUrl} target="_blank" rel="noreferrer">VK ↗</a></div></div></section>
  </>
}
