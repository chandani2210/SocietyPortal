import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light bg-danger shadow">
    <a className="navbar-brand" href="#"><i className="fa fa-building-o" aria-hidden="true"></i>Silicon Apartment</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item dropdown active">
        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Flats
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink class="dropdown-item" to="/AddFlat">Add</NavLink>
            <NavLink class="dropdown-item" to="/RemoveFlat">Remove</NavLink>
           </div>   
        </li>
        <li className="nav-item dropdown active">
        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Members
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink class="dropdown-item" to="/AddMember">Add</NavLink>
            <NavLink class="dropdown-item" to="/RemoveMember">Remove</NavLink>
           </div>   
        </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Visitor">Visitors</NavLink>
      </li>
      <li className="nav-item dropdown active">
        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Charges
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink class="dropdown-item" to="/MonthlyCharges">MonthlyCharge</NavLink>
            <NavLink class="dropdown-item" to="/Payment">Payment</NavLink>
            <NavLink class="dropdown-item" to="/RemoveCharges">Remove</NavLink>
           </div>   
        </li>
    </ul>
  </div>
</nav>  
            </div>
        );
    }
}

export default Navbar;