import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
function GetMembers() {

    //Initialization
     const [member_array,setMember]=useState(null)
    
    //Assigning apis
     const memberUrl='http://localhost:8080/society/admin/members'

    function fetchMembers() {
        fetch(memberUrl)
        .then(resp=>resp.json())
        .then(data =>{
            console.log(data)
            setMember(data)
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
            
            
            
                    <button onClick={fetchMembers} className="btn btn-success">Member Details</button>
                
            
                <div className="container">
                 <table class="table table-bordered table-dark mb-0 mt-5"> 
                        <thead> 
                             <tr>
                                <th scope="col" class="pr-0 pl-2">Member Id</th>
                                <th scope="col">Flat Number</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Aadhaar Number</th> 
                                <th scope="col">Phone number</th>
                            </tr>
                        </thead>
                    </table>
            {member_array && member_array.map((member,index)=>{
                return(
                    <table className="table border table-primary mb-0" key={index}>
                        <tbody  >
                            <tr>
                                <th scope="row" class="pl-5">{member.id}</th>
                                <td scope="row">{member.flat_no.flat_no}</td>
                                <td scope="row" class="pl-5">{member.first_name}</td>
                                <td scope="row" class="pl-3">{member.last_name}</td>
                                <td scope="row" class="pl-3 pr-0">{member.gender}</td>
                                <td scope="row">{member.age}</td>
                                <td scope="row" class="pl-0 pr-0">{member.aadhaar_number}</td>
                                <td scope="row" class="pl-0 pr-0" >{member.phone_number}</td>
                            </tr>
                        </tbody>
                    </table>
                   
                    );
                })}
                </div>        


        </div>
           
            
        
    );
}


export default GetMembers;


