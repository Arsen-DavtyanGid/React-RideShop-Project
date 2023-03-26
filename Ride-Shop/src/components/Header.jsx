function Header() {
  function visible() {
    let el = document.querySelector(".manu-box");
    el.classList.toggle("visible");
  }
  return (
    <header>
      <div className="manu-box">
        <ul>
          <li>
            <a href="#">Concierge</a>
          </li>
          <li>
            <a href="#">Rides</a>
          </li>
          <li>
            <a href="#">For Business</a>
          </li>
          <li>
            <a href="#">En</a>
          </li>
          <li>
            <a href="#">
              <button className="manu-button">Start now</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="nav-logo">
              <a href="#">Dance</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="nav-right-part">
              <div className="links">
                <a href="#">Concierge</a>
                <a href="#">Rides</a>
                <a href="#">For Business</a>
                <a href="#">En</a>
              </div>
              <div className="nav-button">
                <button>Start now</button>
              </div>
              <div className="manu-box-icon">
                <a href="#" onClick={visible}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                  >
                    <path
                      fill="white"
                      d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-text-content-flex">
        <div className="header-text-content-real">
          <div className="header-text-1">Your future</div>
          <div className="header-text-2">is electric</div>
          <div className="header-text-3">
            <div className="HT3R">
              Get your own ebike or emoped with our flexible subscription
            </div>
          </div>
          <div className="header-text-button">
            <button>Start now</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
