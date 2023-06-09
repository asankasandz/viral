import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Accordion from 'react-bootstrap/Accordion';
import { Carousel } from 'react-bootstrap';
import Slider from "@/components/Slider";




const inter = Inter({ subsets: ["latin"] });

const servicesData = [
  {
    topTitle: "Write blog about Chocolate and health",
    topDescription:
      "Contrary to popular belief, chocolate, particularly dark chocolate, can be beneficial for cardiovascular health. Dark chocolate is rich in flavonoids, which are antioxidants ...",
    bottomTitle: "Generating Blog articles",
    bottomDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt ",
  },
  {
    topTitle: "Write blog about Chocolate and health",
    topDescription:
      "Contrary to popular belief, chocolate, particularly dark chocolate, can be beneficial for cardiovascular health. Dark chocolate is rich in flavonoids, which are antioxidants ...",
    bottomTitle: "Generating Blog articles",
    bottomDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt ",
  },
  {
    topTitle: "Write blog about Chocolate and health",
    topDescription:
      "Contrary to popular belief, chocolate, particularly dark chocolate, can be beneficial for cardiovascular health. Dark chocolate is rich in flavonoids, which are antioxidants ...",
    bottomTitle: "Generating Blog articles",
    bottomDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt ",
  },
  {
    topTitle: "Write blog about Chocolate and health",
    topDescription:
      "Contrary to popular belief, chocolate, particularly dark chocolate, can be beneficial for cardiovascular health. Dark chocolate is rich in flavonoids, which are antioxidants ...",
    bottomTitle: "Generating Blog articles",
    bottomDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt ",
  },
  {
    topTitle: "Write blog about Chocolate and health",
    topDescription:
      "Contrary to popular belief, chocolate, particularly dark chocolate, can be beneficial for cardiovascular health. Dark chocolate is rich in flavonoids, which are antioxidants ...",
    bottomTitle: "Generating Blog articles",
    bottomDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt ",
  },
  {
    topTitle: "Write blog about Chocolate and health",
    topDescription:
      "Contrary to popular belief, chocolate, particularly dark chocolate, can be beneficial for cardiovascular health. Dark chocolate is rich in flavonoids, which are antioxidants ...",
    bottomTitle: "Generating Blog articles",
    bottomDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt ",
  },
];

const pricingData = [
  {
    title: "Starter",
    pricePerMonth: "0$/Mon",
    features: [
      "10 users included",
      "2 GB of storage",
      "Email support",
      "Help center access",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
    ]
  },
  {
    title: "Basic",
    pricePerMonth: "$10/Mon",
    features: [
      "20 users included",
      "5 GB of storage",
      "Email support",
      "Help center access",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
    ]
  },
  {
    title: "Pro",
    pricePerMonth: "$20/Mon",
    features: [
      "Unlimited users",
      "10 GB of storage",
      "Email support",
      "Help center access",
      "Priority email support",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
      "Lorem",
    ]
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>vairal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className={`${styles.hero} position-relative`}>
          <Image className="img-fluid position-absolute top-0 start-0" src="/home/hero-bg.png" width={1682} height={378} />
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
                <div className={styles.content}>
                  <h1 className={styles.heroTitle}>
                    <span>
                      Artificial Intelligence powered
                    </span>
                    <span className="primary-color"> HUMANIZED AI.GENCy</span>
                  </h1>
                  <div className="sub-content ">
                    <p className="text-white pb-3 pb-md-3 pb-lg-0">Generate conversion focused ad creatives and social media post creatives in a matter of
                      seconds using Artificial Intelligence. Get better results while saving time.</p>
                    <div className="btn-wrapper">
                      <button className="btn btn-primary me-2 fw-bold fs-6 text-uppercase" type="button">
                        GENERATE
                      </button>
                      <button className="btn btn-outline-primary fw-bold fs-6 text-uppercase" type="button">
                        CHECK OUR PLANS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 ">
                  <div className="img-wrapper h-100 d-flex align-items-end">
                    <img className={`${styles.heroSideImage} img-fluid h-100`} src="/home/hero-side.webp" />
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.carousel} container`}>
        <Slider />
        </section>

        <section className={styles.bodyContent}>
          <div className="container">
            <h3 className={`${styles.title} text-center text-white`}>
              <span className="primary-color">AI can analyze vast amounts of data and identify patterns,</span> unlocking valuable insights that drive innovation in various industries.
            </h3>

            <div className={styles.cardsWrapper}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {servicesData.map((service, index) => (
                  <div className="col" key={index}>
                    <div className="card border border-0 h-100 bg-transparent">
                      <div className={`${styles.contentWrap} card-body`}>
                        <div className={styles.cardTop}>
                          <h6 className={`${styles.innerTitle} fw-bold`}>{service.topTitle}</h6>
                          <p href="#" className={`${styles.innerDesription} mb-0`}>{service.topDescription}</p>
                        </div>
                        <div className={styles.cardBottom}>
                          <h6 className="fw-bold">{service.bottomTitle}</h6>
                          <p className={styles.bottomDescription}>{service.bottomDescription}</p>
                          <a href="#" className={`${styles.bottomLink} btn text-white p-0`}>Learn more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.bottomBody}>
              <div className="d-flex justify-content-center pt-5 pb-2">
                <button className="btn btn-outline-primary me-2 fw-bold fs-6" type="button">
                  Did you know?
                </button>
              </div>
              <h4 className={`${styles.bottomDescription} text-center text-white`}>
                AI algorithms can predict consumer trends and preferences, empowering businesses to create innovative products and services that resonate with their target audience.
              </h4>
            </div>
          </div>
        </section>

        <section className={`${styles.subscriptions} container`}>
          <h3 className={`${styles.subscriptionsTitle} text-center text-white fw-bold`}>Subscription Plans</h3>

          <div className={styles.plans}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {pricingData.map((plan, index) => (
                <div className="col" key={index}>
                  <div className={`${styles.cardWrap} card mb-4 box-shadow h-100`}>
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">{plan.title}</h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">{plan.pricePerMonth}</h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <button type="button" className="btn btn-block btn-primary fw-bold">Sign up for free</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.faqwrapper} container`}>
          <h3 className={`${styles.faqTitle} text-center text-white fw-bold`}>FAQS</h3>

          <div className={`${styles.faqAccordion} mb-3` }>
          <Accordion className={`${styles.accordionWrap}` } defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className={`${styles.accordionHeader}` }>What is VAIRAL?</Accordion.Header>
              <Accordion.Body className={`${styles.accordionBody}` }>
                Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
          <div className={`${styles.faqAccordion} mb-3` }>
          <Accordion className={`${styles.accordionWrap}` } defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className={`${styles.accordionHeader}` }>What is VAIRAL?</Accordion.Header>
              <Accordion.Body className={`${styles.accordionBody}` }>
                Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
          <div className={`${styles.faqAccordion} mb-3` }>
          <Accordion className={`${styles.accordionWrap}` } defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className={`${styles.accordionHeader}` }>What is VAIRAL?</Accordion.Header>
              <Accordion.Body className={`${styles.accordionBody}` }>
                Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
          <div className={`${styles.faqAccordion} mb-3` }>
          <Accordion className={`${styles.accordionWrap}` } defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className={`${styles.accordionHeader}` }>What is VAIRAL?</Accordion.Header>
              <Accordion.Body className={`${styles.accordionBody}` }>
                Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>


        </section>


      </main>
      <Footer />
    </>
  );
}
