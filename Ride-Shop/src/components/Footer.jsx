function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="footer-content-text">
              <div className="footer-content-text1">Stay up to speed</div>
              <div className="footer-content-text2">
                Sign up to get the latest Dance offers, updates, and tips
                straight to your inbox.
              </div>
              <div className="footer-content-input">
                <form action="">
                  <input
                    type="email"
                    name="gmail"
                    id="gmail"
                    placeholder="your@email.de"
                  />
                  <input type="submit" value="" id="click" />
                </form>
              </div>
              <div className="footer-content-text3">
                By checking this box, you allow Dance to collect data relating
                to the Dance newsletter, including whether it has been opened
                and clicked through. For more information.
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="footer-ules">
              <ul>
                <p>Menu</p>

                <li>
                  <a href="#">Rides</a>
                </li>
                <li>
                  <a href="#">Concierge</a>
                </li>
                <li>
                  <a href="#">For Business</a>
                </li>
                <li>
                  <a href="#">Start now</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="footer-ules">
              <ul>
                <p>Products</p>
                <li>
                  <a href="#">Ebikes</a>
                </li>
                <li>
                  <a href="#">Moped</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6">
            <div className="footer-ules ul-company">
              <ul>
                <p>Company</p>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6">
            <div className="footer-ules ul-legal">
              <ul>
                <p>Legal</p>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Imprint</a>
                </li>
                <li>
                  <a href="#">Cancel subscription</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
