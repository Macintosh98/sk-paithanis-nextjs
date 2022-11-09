const Subscribe = () => {
  return (
    // <section className="subscribe">
    //   <div className="container">
    //     <div style={{backgroundImage: 'url(/images/subscribe.jpg)'}} className="subscribe__content">
    //       <h4>Subscribe to our newsletter and receive exclusive offers every week</h4>

    //       <form className="subscribe__form">
    //         <input type="email" placeholder="Email address" />
    //         <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
    //       </form>
    //     </div>
    //   </div>
    // </section>
    <section className="subscribe">
      <div className="container">
        <div
          className="subscribe__content glasscard"
          style={{
            backgroundImage: "url(/images/pngegg2.png)",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
          }}
        >
          <h4>
            Subscribe to our newsletter and receive exclusive offers every week
          </h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
