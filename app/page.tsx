const services = [
  {
    title: "基础洗护",
    text: "温和沐浴、吹干、梳毛、耳眼清洁、脚底毛与肛周修剪。",
    mark: "01",
  },
  {
    title: "精修造型",
    text: "按犬种、毛量和日常打理习惯设计造型，兼顾可爱和舒适。",
    mark: "02",
  },
  {
    title: "猫咪洗护",
    text: "独立安静时段，减少等待和刺激，适合胆小或第一次到店的猫咪。",
    mark: "03",
  },
  {
    title: "皮毛护理",
    text: "针对打结、掉毛、干燥、异味和轻微皮屑，给出护理建议。",
    mark: "04",
  },
];

const packages = [
  {
    label: "日常清洁",
    title: "轻柔净洗",
    price: "88",
    text: "适合短毛、小体型或定期维护的毛孩。",
    includes: ["温和沐浴吹干", "耳眼清洁", "脚底毛与肛周修剪"],
  },
  {
    label: "人气选择",
    title: "全套洗护",
    price: "168",
    text: "覆盖大多数猫狗的完整到店护理。",
    includes: ["包含轻柔净洗", "开结梳理与基础修型", "护理记录与居家建议"],
    featured: true,
  },
  {
    label: "精致造型",
    title: "修剪造型",
    price: "238",
    text: "适合需要修出轮廓、换季短剪或拍照造型的毛孩。",
    includes: ["包含全套洗护", "犬种造型或创意修剪", "照片记录与复购周期建议"],
  },
];

const steps = ["预约沟通", "到店检查", "温和洗护", "反馈接送"];

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
            <a href="#standard">标准</a>
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
                从日常洗护到精修造型，我们根据性格、毛量、皮肤状态和生活习惯安排节奏。到店先检查，再开始护理。
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  预约洗护
                </a>
                <a className="button secondary" href="#pricing">
                  查看套餐
                </a>
              </div>
              <div className="hero-stats" aria-label="门店亮点">
                <div className="stat">
                  <strong>45分钟</strong>
                  <span>小型犬洗护起</span>
                </div>
                <div className="stat">
                  <strong>1对1</strong>
                  <span>固定美容师跟进</span>
                </div>
                <div className="stat">
                  <strong>7项</strong>
                  <span>到店基础检查</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head">
              <h2>常见洗护需求，一次到店处理清楚。</h2>
              <p>不套用固定流程，先看毛孩的状态，再选择水温、工具、风力和休息节奏。</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <span className="card-icon">{service.mark}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="standard" className="section-band">
          <div className="container split">
            <div className="feature-photo" role="img" aria-label="明亮整洁的宠物洗护环境" />
            <div className="standard-copy">
              <p className="eyebrow">护理标准</p>
              <h2>不赶时间，不粗暴处理，让节奏跟着毛孩走。</h2>
              <p>
                我们会先观察紧张程度、皮肤状态、耳道气味和打结位置，再安排洗护方案。完成后同步护理记录，方便你回家继续照顾。
              </p>
              <div className="check-list">
                <div className="check">
                  <b>1</b>
                  <span>猫犬区域分开，工具消毒，每只宠物使用独立毛巾。</span>
                </div>
                <div className="check">
                  <b>2</b>
                  <span>洗澡前检查泛红、伤口、敏感点和明显不适。</span>
                </div>
                <div className="check">
                  <b>3</b>
                  <span>接送时说明毛结、耳朵、指甲和皮肤状态。</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container">
            <div className="section-head">
              <h2>套餐清楚，价格透明。</h2>
              <p>最终价格会根据体型、毛量、打结程度微调。预约前可先发照片预估。</p>
            </div>
            <div className="price-grid">
              {packages.map((item) => (
                <article className={`price-card${item.featured ? " featured" : ""}`} key={item.title}>
                  <span className="tag">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="price">
                    ¥{item.price}
                    <small> 起</small>
                  </div>
                  <ul className="includes">
                    {item.includes.map((include) => (
                      <li key={include}>{include}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band">
          <div className="container">
            <div className="section-head">
              <h2>从预约到接回，每一步都说得明白。</h2>
              <p>减少等待和反复沟通，让第一次来的毛孩也更容易放松。</p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step}</h3>
                  <p>
                    {index === 0 && "确认体型、年龄、性格、打结和近期皮肤情况。"}
                    {index === 1 && "检查耳眼、指甲、皮肤和毛结，再说明预计时间。"}
                    {index === 2 && "按状态调整水温、风力、工具和休息次数。"}
                    {index === 3 && "同步护理记录、居家梳毛方式和下次周期。"}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container trust-grid">
            <div className="trust-panel">
              <p className="eyebrow eyebrow-light">为什么选择我们</p>
              <h2>给把宠物当家人的人，一个更安心的洗护选择。</h2>
              <p>干净只是基础。我们更关心舒适度、早期皮肤观察，以及主人回家真正用得上的护理建议。</p>
            </div>
            <div className="trust-list">
              <div className="trust-item">
                <strong>安静时段可约</strong>
                <p>适合胆小、老年、第一次洗护或容易紧张的宠物。</p>
              </div>
              <div className="trust-item">
                <strong>用品可追溯</strong>
                <p>按皮肤状态选择产品，敏感体质也可自带洗护用品。</p>
              </div>
              <div className="trust-item">
                <strong>异常先沟通</strong>
                <p>遇到严重打结、皮肤异常或明显抗拒，会先联系主人确认。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="section-band">
          <div className="container">
            <div className="booking">
              <div>
                <p className="eyebrow">预约到店</p>
                <h2>安排一次更轻松的洗护。</h2>
                <p>留下联系方式，我们会在营业时间确认档期、预计耗时和价格。营业时间：周二至周日 10:00-20:00。</p>
              </div>
              <form className="booking-form">
                <input type="text" name="name" placeholder="你的称呼" aria-label="你的称呼" />
                <input type="tel" name="phone" placeholder="联系电话" aria-label="联系电话" />
                <select name="service" aria-label="选择服务" defaultValue="">
                  <option value="">选择服务</option>
                  <option>轻柔净洗</option>
                  <option>全套洗护</option>
                  <option>修剪造型</option>
                  <option>猫咪洗护</option>
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
