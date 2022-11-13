import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import Link from "next/link";
// import Image from 'next/image'

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section
      className="page-intro"
      style={{
        background: "url('/images/pngegg.png') no-repeat right top",
        backgroundSize: "contain",
      }}
    >
      <Swiper navigation effect="fade" className="swiper-wrapper">
        {/* <SwiperSlide>
          <div className="page-intro__slide">
            <div className="container">
              <div className="page-intro__slide__content">
                <Image
                  src="/images/slide-1.png"
                  alt="Picture of the author"
                  width={1432}
                  height={716}
                />
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.png')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h1
                  style={{ padding: "10px", width: "fit-content" }}
                  className="glasscard"
                >
                  VAKRATUNDA SK
                  <br />
                  Paithani & Sarees
                </h1>
                <h2
                  style={{ padding: "10px", width: "fit-content" }}
                  className="glasscard"
                >
                  SALE 20% OFF
                </h2>
                {/* <h2>20% OFF</h2> */}
                <Link href="/paithanis/all-paithani">
                  <div
                    style={{ padding: "10px", width: "fit-content" }}
                    className="glasscard btn-shop"
                  >
                    <i className="icon-right"></i>Shop now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.png')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Make your house into a home</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>On purchases over $199</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
