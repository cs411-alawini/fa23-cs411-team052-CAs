
import React, { useEffect } from 'react';
import './Dashboard.css';
import Nav from './Navigation';

function Dashboard() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="outer">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <link rel="stylesheet" href="style/dash.css" />
        <title>C2C Dashboard Page</title>
      </head>
      <body>
        <div className="wrapper">
          <Nav />
          <nav className="sidebar">
            <div className="container">
              <h3 className="title">Menu</h3>
              <ul>
                <li><a href="#">Trends</a></li>
                <li><a href="#">Trends</a></li>
                <li><a href="#">Trends</a></li>
              </ul>
            </div>
          </nav>
          <main className="dashboard">
            <div className='tableauPlaceholder' id='viz1701127565034' style={{position: 'relative' }}>
              <noscript>
                <a href='#'>
                  <img alt='Degree Distribution w/ Gender' src='https://public.tableau.com/static/images/cs/cs411degreedistributionvisual/Sheet3/1_rss.png' style={{ border: 'none' }} />
                </a>
              </noscript>
              <object className='tableauViz' style={{ display: 'none' }}>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='cs411degreedistributionvisual&#47;Sheet3' />
                <param name='tabs' value='no' /><param name='toolbar' value='yes' />
                <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;cs&#47;cs411degreedistributionvisual&#47;Sheet3&#47;1.png' />
                <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />
                <param name='filter' value='publish=yes' />
              </object>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;