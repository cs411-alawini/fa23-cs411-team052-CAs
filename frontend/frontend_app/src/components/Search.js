import './Search.css';
import Nav from './Navigation';

function Search() {
  return (
    <div className="wrapper">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
        <Nav/>
        <div class="form">
            <form id="form"> 
                <input type="search" id="query" name="q" placeholder="Search..."/>
                <button>Search</button>
            </form>
        </div>
           
    </div>
  );
}

export default Search;