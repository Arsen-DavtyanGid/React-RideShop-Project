function Section1() {
  return (
    <section className="Section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="section1-text">
              <h1>How it works</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="section1-content">
              <div className="section1-content-text">1. Pick your city</div>
              <div className="section1-content-text">2. Choose your ride</div>
              <div className="section1-content-text">
                3. Delivery to your door
              </div>
              <div className="section1-content-text">4. Ride freely</div>
              <div className="section1-content-button">
                <button>Start now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="section-bike"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
