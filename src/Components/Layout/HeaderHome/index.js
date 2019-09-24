import React from 'react';
import './style.css';
import HeaderImage from './../../../Assets/Images/header-image.png';

export default function HeaderHome() {
  return (
    <>
        <div className="headerHome">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <div className="dividerHorizontal"></div>
                <p>Nam pulvinar augue id tortor tincidunt, eget mattis eros porta. Curabitur vel elementum lacus. Nullam nulla lectus, porta nec facilisis non, cursus mollis dui. Vestibulum sodales blandit risus at rhoncus. Donec sagittis, massa sed interdum viverra, purus sem pellentesque ligula, a semper felis metus sed ex.</p>
                <div>
                <button className="btn btn-outline">Lorem</button>
                <button className="btn btn-outline">Ipsum</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <img src={HeaderImage} />
              </div>
            </div>
            <div className="boxMouseAnimate">
              <div className="mouse"></div>
            </div>
          </div>
        </div>
    </>
  );
}