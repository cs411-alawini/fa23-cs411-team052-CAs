import React, { useState, useEffect } from 'react';
import './index.css';
import $ from 'jquery';
import Nav from './Navigation';

function Landing() {
  const [isInfoTextVisible, setInfoTextVisible] = useState(false);

  useEffect(() => {
    const handleInfoButtonClick = (e) => {
      e.stopPropagation();
      const $infoText = $(e.currentTarget).find('.info-text');
      $infoText.addClass('show');
      $('.info-text').not($infoText).removeClass('show');
    };

    const handleDocumentClick = () => {
      $('.info-text').removeClass('show');
    };

    const handleInfoTextClick = (e) => {
      e.stopPropagation();
    };

    // Attach event listeners
    $('.info-button').on('click', handleInfoButtonClick);
    $(document).on('click', handleDocumentClick);
    $('.info-text').on('click', handleInfoTextClick);

    // Clean up event listeners on component unmount
    return () => {
      $('.info-button').off('click', handleInfoButtonClick);
      $(document).off('click', handleDocumentClick);
      $('.info-text').off('click', handleInfoTextClick);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div className="wrapper">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
    <Nav/>
      <div className="banner">
        <div className="text">
          <div className="text-inner">
            <h1>C2C</h1>
            <p>College 2 Careers</p>
            <a href="#">More Info</a>
          </div>
        </div>
        <div className="img">
          <div className="img-inner">
            <img src="" alt="place image here" />

            <div className="info-button">
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <div className="info-text">
                <h3>Interactive Data Visualizations</h3>
                <p>Place some info here</p>
              </div>
            </div>

            <div className="info-button b2">
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <div className="info-text">
                <h3>Career Prospects</h3>
                <p>Place some info here</p>
              </div>
            </div>

            <div className="info-button b3">
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <div className="info-text">
                <h3>Current Trends</h3>
                <p>Place some info here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;