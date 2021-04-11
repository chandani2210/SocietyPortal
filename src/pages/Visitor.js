// import logo from './logo.svg';
import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
class Visitor extends Component{
  constructor(){
    super();
    this.state = {
      id:'',
      name:'',
      phone_number:'',
      address:'',
      visitor_pass_id:'',
      checkin_time:'',
      checkout_time:'',
      flat_number:''
    }
  }

  onChangedId = (event) =>{
    this.setState({
        id: event.target.value
    })
  }

  onChangedName = (event) =>{
    this.setState({
        name: event.target.value
    })
  }
  onChangedPhoneNumber = (event) =>{
    this.setState({
        phone_number: event.target.value
    })
  }

  onChangedAddress = (event) =>{
    this.setState({
        address: event.target.value
    })
  }

  onChangedVisitorPassId = (event) =>{
    this.setState({
        visitor_pass_id: event.target.value
    })
  }
  
  
  onChangedCheckInTime= (event) =>{
    this.setState({
        checkin_time: event.target.value
    })
  }
  
  onChangedCheckOutTime = (event) =>{
    this.setState({
      checkout_time: event.target.value
    })
  }

  onChangedFlatNumber = (event) =>{
    this.setState({
      flat_number: event.target.value
    })
  }


  onSubmitHandler=(event)=>{
    event.preventDefault();
    let data={
        "visitor_id": this.state.id,
        "name": this.state.name,
        "phone_no": this.state.phone_number,
        "address": this.state.address,
        "visitors_pass_id": this.state.visitor_pass_id,
        "checkin_time": this.state.checkin_time,
        "checkout_time": this.state.checkout_time,
        "flat_no": {
            "flat_no": this.state.flat_number
        }
    }

    axios.post('http://localhost:8080/society/admin/visitors',data)
    .then(resp => {
      alert('Visitor Details Saved!!')

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
          


          {/* TAKING INPUTS */}
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
                            <label>Name</label>
                            <input value={this.name} onChange={this.onChangedName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </input>
                    </div>
                    <div className="form-group">
                            <label>Phone number</label>
                            <input value={this.phone_number} onChange={this.onChangedPhoneNumber} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </input>
                    </div>
                    <div className="form-group">
                            <label>Address</label>
                            <input value={this.address} onChange={this.onChangedAddress} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </input>
                    </div>
                    </div>
                    <div className="col">
                     <div className="form-group">
                            <label>Visitor pass id</label>
                            <input value={this.visitor_pass_id} onChange={this.onChangedVisitorPassId} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </input>
                    </div>
                    <div className="form-group">
                            <label>CheckIn time</label>
                            <input value={this.checkin_time} onChange={this.onChangedCheckInTime} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </input>
                    </div>
                    <div className="form-group">
                            <label>CheckOut time</label>
                            <input value={this.checkout_time} onChange={this.onChangedCheckOutTime} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </input>
                    </div>
                    <div className="form-group">
                            <label>Flat number</label>
                            <input value={this.flat_number} onChange={this.onChangedFlatNumber} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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

export default Visitor;