import Image from "next/image";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description glasscard">
            {/* <h6><Logo /> <span>E</span>-Shop</h6> */}
            <Image style={{}} src={"/images/logo.jpg"} height={200} width={400}/> 
            {/* <span>VakratundaSK </span> - Paithani & Sarees*/}
            <p>House My Brand designs clothing for the young, the old & everyone in between – but most 
              importantly, for the fashionable</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links glasscard">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              {/* <li><a href="#">store@uikit.com</a></li> */}
              <li><a href="https://wa.me/+918793780458">Hotline: +91 8793780458</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom glasscard">
        <div className="container">
          <p>DESIGN BY <a href="http://abhishekzambare.vercel.app/">"Abhishek Zambare"</a> - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer