import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Nav from './Navigation';

function Dashboard() {
  return (
    <div class="outer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
        <link rel="stylesheet" href="style/dash.css"/>
        <head>
            <title>C2C Dashboard Page</title>
        </head>
        <body>
        <div class = "wrapper">
            <Nav/>
            <nav class="sidebar">
                <div class="container">
                    <h3 class="title">Menu</h3>
                    <ul>
                        <li><a href = "#">Trends</a></li>
                        <li><a href = "#">Trends</a></li>
                        <li><a href = "#">Trends</a></li>
                    </ul>
                </div>
            </nav>
            <main class="dashboard">
                <div id ="scientificChart"> <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg"/></div>
                <div id="pieChart"><img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg"/></div>
                <div id="carpetChart"><img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg"/></div>
                <div id="donutChart"><img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg"/></div>
                <div id ="scientificChart"> <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg"/></div>
                <div id="pieChart"><img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg"/></div>
            </main>
        </div>
        </body>
    </div>
  );
}

export default Dashboard;