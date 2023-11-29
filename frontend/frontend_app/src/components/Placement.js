import './Placement.css';
import Nav from './Navigation';

function Placement() {
  return (
    <div className="wrapper">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
        <Nav/>
        <div class="form">
            <form>
                <label for="fname">USER_ID:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">PASSWORD:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">EMAIL:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">NAME:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">HSC_PERCENT:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">HSC_SUBJECT:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">SSC_PERCENT:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">SSC_PERCENT:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">WORK_EXP:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">UNDERGRAD_DEGREE:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">GENDER:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">DEGREE_PERCENT:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">GRAD_PERCENT:</label><br/>
                <input type="text" id="lname" name="lname"/>
                <label for="lname">GRAD_DEGREE:</label><br/>
                <input type="text" id="lname" name="lname"/>
            </form>
        </div>
           
    </div>
  );
}

export default Placement;