const services = ["基础洗护", "精修造型", "猫咪护理", "皮毛护理"];

const packages = [
  {
    title: "轻柔净洗",
    price: "88",
    text: "洗澡、吹干、梳毛、耳眼清洁、脚底毛修剪。",
  },
  {
    title: "全套洗护",
    price: "168",
    text: "包含基础洗护、开结梳理、基础修型和护理建议。",
    featured: true,
  },
  {
    title: "修剪造型",
    price: "238",
    text: "适合换季短剪、犬种造型或拍照前整理。",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="毛绒护理屋首页">
            <span className="brand-mark">M</span>
            <span>毛绒护理屋</span>
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#pricing">价格</a>
            <a href="#booking">预约</a>
          </div>
          <a className="nav-cta" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护门店介绍">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">一对一洗护 · 猫犬分区 · 全程可沟通</p>
              <h1>Every bath should feel thoughtfully cared for.</h1>
              <p className="hero-text">
                温和洗护、精修造型、皮毛护理。到店先检查状态，再安排适合毛孩的节奏。
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  预约洗护
                </a>
                <a className="button secondary" href="#pricing">
                  查看价格
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container compact-grid">
            <div>
              <p className="eyebrow">服务项目</p>
              <h2>把常见洗护需求讲简单。</h2>
              <p className="section-text">
                不赶时间，不粗暴处理。我们根据体型、毛量、皮肤状态和性格调整水温、风力和休息节奏。
              </p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <div className="service-pill" key={service}>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-band">
          <div className="container">
            <div className="section-head">
              <h2>价格透明，到店前可预估。</h2>
              <p>实际价格会根据体型、毛量和打结程度微调。</p>
            </div>
            <div className="price-grid">
              {packages.map((item) => (
                <article className={`price-card${item.featured ? " featured" : ""}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="price" aria-label={`${item.title} ${item.price} 元起`}>
                    <span className="price-currency" aria-hidden="true">
                      ¥
                    </span>
                    <span className="price-amount" aria-hidden="true">
                      {item.price}
                    </span>
                    <small> 起</small>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking">
          <div className="container">
            <div className="booking">
              <div>
                <p className="eyebrow">预约到店</p>
                <h2>安排一次轻松洗护。</h2>
                <p>营业时间：周二至周日 10:00-20:00。提交后我们会确认档期和预计价格。</p>
              </div>
              <form className="booking-form">
                <input type="text" name="name" placeholder="你的称呼" aria-label="你的称呼" />
                <input type="tel" name="phone" placeholder="联系电话" aria-label="联系电话" />
                <select name="service" aria-label="选择服务" defaultValue="">
                  <option value="">选择服务</option>
                  <option>轻柔净洗</option>
                  <option>全套洗护</option>
                  <option>修剪造型</option>
                  <option>猫咪护理</option>
                </select>
                <button className="button" type="submit">
                  提交预约
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>毛绒护理屋 · 宠物洗护与造型</span>
          <span>花园路 18 号 · 400-880-6620</span>
        </div>
      </footer>
    </>
  );
}
