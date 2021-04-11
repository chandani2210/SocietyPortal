import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
function GetCharges() {

    //Initialization
     const [charge_array,setCharge]=useState(null)
    
    //Assigning apis
     const chargeUrl='http://localhost:8080/society/admin/charges'



    function fetchCharges() {
        fetch(chargeUrl)
        .then(resp=>resp.json)
        .then(data =>{
            console.log(data)
            setCharge(data)
        })
    }


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
        
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Flats
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/AddFlat">Add</NavLink>
            <NavLink className="dropdown-item" to="/RemoveFlat">Remove</NavLink>
           </div>   
        </li>
        <li className="nav-item dropdown active">
        
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Members
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/AddMember">Add</NavLink>
            <NavLink className="dropdown-item" to="/RemoveMember">Remove</NavLink>
           </div>   
        </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Visitor">Visitors</NavLink>
      </li>
      <li className="nav-item dropdown active">
        
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Charges
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/MonthlyCharges">MonthlyCharge</NavLink>
            <NavLink className="dropdown-item" to="/Payment">Payment</NavLink>
            <NavLink className="dropdown-item" to="/RemoveCharges">Remove</NavLink>
           </div>
           </li>   
       <li className="nav-item dropdown active">
        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Details
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink class="dropdown-item" to="/GetDetails">Flat Details</NavLink>
            <NavLink class="dropdown-item" to="/GetMembers">Member Details</NavLink>
              <NavLink class="dropdown-item" to="/GetCharges">Charge Details</NavLink>
            <NavLink class="dropdown-item" to="/GetVisitors">Visitor Details</NavLink>
           </div>   
        </li>
    </ul>
  </div>
</nav>  
            
            
            
                    <button onClick={fetchCharges} className="btn btn-success">Charge Details</button>
                
            
                <div className="container">
                 <table class="table table-bordered table-dark mb-0 mt-5"> 
                         <thead> 
                             <tr>
                                <th scope="col" class="pr-0 pl-2">Charge Id</th>
                                <th scope="col">Rent Charge</th>
                                <th scope="col">Flat Number</th>
                                 <th scope="col">Water Bill</th>
                                 <th scope="col">Electricity Bill</th>
                                 <th scope="col">Maintenance Charge</th>
                             </tr>
                         </thead>
                    </table>
            {charge_array && charge_array.map((charge,index)=>{
                return(
                    <table className="table border table-primary mb-0" key={index}>
                        <tbody >
                            <tr >
                                <th scope="row" className="pl-0 pr-0">{charge.charge_id}</th>
                                <td>{charge.flat_no.flat_no}</td>
                                <td>{charge.rent_charge}</td>
                                <td>{charge.water_bill}</td>
                                <td>{charge.electricity_bill}</td>
                                <td>{charge.maintenance_charge}</td>
                            </tr>
                        </tbody>
                    </table>
                   
                    );
                })}
                </div>        


        </div>
           
            
        
    );
}


export default GetCharges;


