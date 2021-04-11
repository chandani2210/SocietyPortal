//import logo from './logo.svg';
import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../css/Flat.css';
class Member extends Component{

  constructor(){
    super();
    this.state={
      id:'',
      first_name:'',
      last_name:'',
      username:'',
      password:'',
      gender:'',
      age:'',
      aadhaar_number:'',
      phone_number:'',
      flat_number:''
    }
  }


  onChangedId = (event) =>{
    this.setState({
        id: event.target.value
    })
  }

  onChangedFirstName = (event) =>{
    this.setState({
        first_name: event.target.value
    })
  }
  onChangedLastName = (event) =>{
    this.setState({
        last_name: event.target.value
    })
  }

  onChangedGender = (event) =>{
    this.setState({
        gender: event.target.value
    })
  }

  onChangedAadhaarNumber = (event) =>{
    this.setState({
        aadhaar_number: event.target.value
    })
  }
  onChangedPhoneNumber = (event) =>{
    this.setState({
        phone_number : event.target.value
    })
  }
  onChangedFlatNumber = (event) =>{
    this.setState({
        flat_number: event.target.value
    })
  }

  onChangedAge = (event) =>{
    this.setState({
        age: event.target.value
    })
  }
  onChangedUsername = (event) =>{
    this.setState({
        username: event.target.value
    })
  }
  onChangedPassword = (event) =>{
    this.setState({
        password: event.target.value
    })
  }



  
  onSubmitHandler=(event)=>{
    event.preventDefault();
    let memberData={
      "id": this.state.id,
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "username": this.state.username,
      "password": this.state.password,
      "gender": this.state.gender,
      "age": this.state.age,
      "aadhaar_number": this.state.aadhaar_number,
      "phone_number":this.state.phone_number,
      "flat_no": {
          "flat_no": this.state.flat_number
      }
    }

    axios.post('http://localhost:8080/society/admin/members',memberData)
    .then(resp => {
      alert('Member Added Successfully')
    })
    .catch(error=>{
    alert('Something went wrong!')
  
    })

   
  }




    render(){
        return(
            <div>
            {/* NAVIGATION BAR */}
          <Navbar/>
      

                {/* TAKING INPUTS FROM ADMIN */}
      <div>
        <div class="card mt-5 container fit-card">
                  <div class="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                  <div className="row">
                    <div className="col">
                       <div className="form-group">
                         <label>Id</label>
                         <input value={this.id} onChange={this.onChangedId} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>First Name</label>
                         <input value={this.firstName} onChange={this.onChangedFirstName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Last Name</label>
                         <input value={this.lastName} onChange={this.onChangedLastName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>   
                    <div className="form-group">
                         <label>Username</label>
                         <input value={this.username} onChange={this.onChangedUsername} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Password</label>
                         <input value={this.password} onChange={this.onChangedPassword} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div> 
                    </div>
                    <div className="col">
                      <div className="form-group">
                         <label>Gender</label>
                         <input value={this.gender} onChange={this.onChangedGender} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    
                    <div className="form-group">
                         <label>Age</label>
                         <input value={this.Age} onChange={this.onChangedAge} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Aadhaar number</label>
                         <input value={this.aadhaarNumber} onChange={this.onChangedAadhaarNumber} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Phone number</label>
                         <input value={this.phoneNumber} onChange={this.onChangedPhoneNumber} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Flat number</label>
                         <input value={this.flatNumber} onChange={this.onChangedFlatNumber} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    </div>
                  </div>
                   
                    
                    <button type="submit" className="btn btn-primary w-25">Submit</button>
                    </form>
                    </div>
                    </div>
            </div>
                  </div>

            
        );
    }
}
    export default Member;