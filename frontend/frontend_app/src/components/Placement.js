import './Placement.css';
import Nav from './Navigation';

function Placement() {
  return (
    <div className="wrapper">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
        <Nav/>
        <div class="form">
            <form>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/>
            </form>
        </div>
           
    </div>
  );
}

export default Placement;