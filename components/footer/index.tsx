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
            <Image
              alt=""
              src={"/images/logo_21_comp.png"}
              height={220}
              width={400}
            />
            {/* <br/><br/><br/> */}
            {/* <h6><span>VakratundaSK </span> - Paithani & Sarees</h6> */}
            <p className="glasscard animation">
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <Link href="#">
                  <i className="icon-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon-youtube-play"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__links glasscard">
            <ul className="animation glasscard">
              <h4>Shopping online</h4>
              <hr />
              <li>
                <Link href="#">Order Status</Link>
              </li>
              <li>
                <Link href="#">Shipping and Delivery</Link>
              </li>
              <li>
                <Link href="#">Returns</Link>
              </li>
              <li>
                <Link href="#">Payment options</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
            <ul className="animation glasscard">
              <h4>Information</h4>
              <hr />
              <li>
                <Link href="#">Gift Cards</Link>
              </li>
              <li>
                <Link href="#">Find a store</Link>
              </li>
              <li>
                <Link href="#">Newsletter</Link>
              </li>
              <li>
                <Link href="#">Bacome a member</Link>
              </li>
              <li>
                <Link href="#">Site feedback</Link>
              </li>
            </ul>
            <ul className="animation glasscard">
              <h4>Contact</h4>
              <hr />
              {/* <li><Link href="#">store@uikit.com</Link></li> */}
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
            <Link
              href="http://abhishekzambare.vercel.app/"
              style={{ fontWeight: 600 }}
            >
              "Abhishek Zambare"
            </Link>{" "}
            - © 2022. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
