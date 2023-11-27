import React from 'react';
import './Dashboard.css'; // Make sure to create this CSS file and import any necessary styles
import Nav from './Navigation';

function Dashboard() {
  return (
    <div className="outer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />
      <link rel="stylesheet" href="style/dash.css" />
      <div className="wrapper">
        <Nav />
        <nav className="sidebar">
          <div className="container">
            <h3 className="title">Menu</h3>
            <ul>
              <li>
                <a href="#">Trends</a>
              </li>
              <li>
                <a href="#">Trends</a>
              </li>
              <li>
                <a href="#">Trends</a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="dashboard">
          <div className="chart" id="scientificChart">
            <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg" alt="Scientific Chart" />
          </div>
          <div className="chart" id="pieChart">
            <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg" alt="Pie Chart" />
          </div>
          <div className="chart" id="carpetChart">
            <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg" alt="Carpet Chart" />
          </div>
          <div className="chart" id="donutChart">
            <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg" alt="Donut Chart" />
          </div>
          {/* Additional charts */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
