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
            <h1>College</h1>
            <h1>To Career</h1>
            <h4>by: Trisha, Ana, Areeba, Chai</h4>
            <a href="/info">More Info</a>
          </div>
        </div>
        <div className="img">
          <div className="img-inner">
            <img src="https://ttn-media.s3.amazonaws.com/wp-content/uploads/2021/12/05232643/PandemicGraduation_EthanCarroll-678x381.png" alt="Image cannot be displayed" width="400px" height="auto"/>

            {/* <div className="info-button">
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <div className="info-text">
                <p>This webapp is designed to display customized data visualizations regarding career information for college students including salary distribution, gender distribution and previous work experience.</p>
              </div>
            </div>

            <div className="info-button b2">
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <div className="info-text">
                <p>Our placement data visualization displays current data on the probability of getting placed into a specialization based on previous work experiecen. <br/>
                The table below it uses an AI generated predictive algorithm to predict the probability of a user being placed based on their inputted information.</p>
              </div>
            </div>

            <div className="info-button b3">
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <div className="info-text">
                <p>In addition to placement user data users can see a dashboard that displays current trends regarding salary distribution and gender distribution.</p>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;