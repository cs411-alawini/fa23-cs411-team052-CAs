import './Navigation.css';
import c2cLogo from './logo.png';

function Nav() {
  return (
       <div class = "wrapper">
        <header>
          <div class="logo">
            <img src={c2cLogo} alt = "place C2C graphic here" width="200px" height="200px"/>
          </div>
          <div class="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/dash">Dashboard</a></li>
              <li><a href="/place">Placement</a></li>
              <li><a href="/search">Search</a></li>
            </ul>
          </div>
        </header>
    </div>
  );
}

export default Nav;
