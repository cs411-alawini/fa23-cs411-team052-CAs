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

  useEffect(() => {
    // Resize the Tableau visualizations on window resize
    const resizeHandler = () => {
      const resizeViz = (id) => {
        const divElement = document.getElementById(id);
        const vizElement = divElement && divElement.getElementsByTagName('object')[0];
        if (vizElement) {
          vizElement.style.width = '100%';
          vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;
        }
      };

      resizeViz('viz1701127565034'); // Resize first visualization
      resizeViz('viz1701127565035'); // Resize second visualization
      resizeViz('viz1701126787969'); // Resize third visualization
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler(); // Initial resize
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>C2C Dashboard Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <link rel="stylesheet" href="style/dash.css" />
      </head>
      <body>
        <div className="outer">
          <div className="wrapper">
            <Nav />
            <main className="dashboard">
              {/* First Data Visualization */}
              <div
                className='tableauPlaceholder'
                id='viz1701127565034'
                style={{ position: 'relative', width: '100%' }}
              >
                <noscript>
                  <a href='#'>
                    <img
                      alt='Degree Distribution w/ Gender'
                      src='https://public.tableau.com/static/images/cs/cs411degreedistributionvisual/Sheet3/1_rss.png'
                      style={{ border: 'none' }}
                    />
                  </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                    <param name='embed_code_version' value='3' /> 
                    <param name='site_root' value='' />
                    <param name='name' value='cs411degreedistributionvisual&#47;Sheet3' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;cs&#47;cs411degreedistributionvisual&#47;Sheet3&#47;1.png' /> 
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='filter' value='publish=yes' />
                </object>
              </div>

              {/* Second Data Visualization */}
              <div
                className='tableauPlaceholder'
                id='viz1701127565035'
                style={{ position: 'relative', width: '100%' }}
              >
               <noscript>
                  <a href='#'>
                    <img
                      alt='Sheet2'
                      src='https://public.tableau.com/views/cs411placedvs_notvisual/Sheet2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link'
                      style={{ border: 'none' }}
                    />
                  </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                    <param name='embed_code_version' value='3' /> 
                    <param name='site_root' value='' />
                    <param name='name' value='cs411placedvs_notvisual&#47;Sheet2' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;cs&#47;cs411placedvs_notvisual&#47;Sheet2&#47;1.png' /> 
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='filter' value='publish=yes' />
                </object>
              </div>

              {/* Third Data Visualization */}
              <div
                className='tableauPlaceholder'
                id='viz1701126787969'
                style={{ position: 'relative', width: '100%' }}
              >
                <noscript>
                  <a href='#'>
                    <img
                      alt='Salary Distribution'
                      src='https://public.tableau.com/static/images/cs/cs411salarydistributionvisual/Sheet1/1_rss.png'
                      style={{ border: 'none' }}
                    />
                  </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                    <param name='embed_code_version' value='3' /> 
                    <param name='site_root' value='' />
                    <param name='name' value='cs411salarydistributionvisual&#47;Sheet1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;cs&#47;cs411salarydistributionvisual&#47;Sheet1&#47;1.png' /> 
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='filter' value='publish=yes' />
                </object>
                <div className = "Distribution_Table" style={{ display: 'none' }}>
                  <img src="" alt = "table"/>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Dashboard;