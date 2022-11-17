import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div
            className="site-footer__description glasscard"
            style={{ paddingTop: "0px" }}
          >
            {/* <h6><Logo /> <span>E</span>-Shop</h6> */}
            {/* <Image style={{ borderRadius: "20px", boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)"}} src={"/images/logo_22_comp.jpg"} height={150} width={150}/>  */}
            <Image src={"/images/logo_21_comp.png"} height={220} width={400} />
            {/* <br/><br/><br/> */}
            {/* <h6><span>VakratundaSK </span> - Paithani & Sarees</h6> */}
            <p className="glasscard animation">
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links glasscard">
            <ul className="animation glasscard">
              <h4>Shopping online</h4>
              <hr />
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul className="animation glasscard">
              <h4>Information</h4>
              <hr />
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Bacome a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul className="animation glasscard">
              <h4>Contact</h4>
              <hr />
              {/* <li><a href="#">store@uikit.com</a></li> */}
              <li>
                <Link href="https://wa.me/+917350451717">
                  Hotline: +91 7350451717
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom glasscard">
        <div className="container">
          <p>
            DESIGN BY{" "}
            <a
              href="http://abhishekzambare.vercel.app/"
              style={{ fontWeight: 600 }}
            >
              "Abhishek Zambare"
            </a>{" "}
            - © 2022. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
