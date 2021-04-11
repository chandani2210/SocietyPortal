//import logo from './logo.svg';
import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../css/Flat.css';
class Flat extends Component{
  constructor(){
    super();
    this.state={
        flat_no:'',
        floor_no:'',
        block_no:'',
        id:'',
    }
  }
 
  
  onChangedFlatNo = (event) =>{
    this.setState({
        flat_no: event.target.value
    })
  }

  onChangedFloorNo = (event) =>{
    this.setState({
        floor_no: event.target.value
    })
  }

  onChangedBlockNo = (event) =>{
    this.setState({
        block_no: event.target.value
    })
  }

  
  // CHARGES
  onChangedId = (event) =>{
    this.setState({
        id: event.target.value
    })
  }

  onSubmitHandler =(event)=>{
    event.preventDefault();
    let data= {
      "flat_no": this.state.flat_no,
      "floor_no": this.state.floor_no,
      "block_no":this.state.block_no
  }

  axios.post('http://localhost:8080/society/admin/flats',data)
  .then(resp => {
    alert('Flat Added Successfully!!!')
    //CHARGES
   let chargeData={
    "charge_id": this.state.id,
    "rent_charge": 0,
    "water_bill": 0,
    "electricity_bill": 0,
    "maintenance_charge": 0,
    "flat_no": {
        "flat_no": this.state.flat_no
  }
}
  const flatNo=this.state.flat_no
  axios.post('http://localhost:8080/society/admin/charges',chargeData)
  .then(resp => {
    alert('Welcome to Flat '+flatNo)
  })
  .catch(error=>{
  alert('Something went wrong!')

  })
  })
  .catch(error=>{
  alert('Something went wrong!')

  })


   


}

    render(){
        return (

            <div>
            {/* NAVIGATION BAR */}
          <Navbar/>

          
                {/* TAKING INPUTS FROM ADMIN */}

             <div>
                <div class="card mt-5 container fit-card">
                  <div class="card-body">
                     <form onSubmit={this.onSubmitHandler.bind(this)}>
                          <div className="form-group">
                          <label>Flat_No</label>
                          <input value={this.flat_no} onChange={this.onChangedFlatNo} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          </input>
                          </div>
                          <div className="form-group">
                          <label>Floor_No</label>
                          <input value={this.floor_no} onChange={this.onChangedFloorNo} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          </input>
                          </div>
                          <div className="form-group">
                          <label>Block_No</label>
                          <input value={this.block_no} onChange={this.onChangedBlockNo} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          </input>
                          </div>
                          <div className="form-group">
                          <label>Charge_Id</label>
                          <input value={this.id} onChange={this.onChangedId} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          </input>
                          </div>
                          <button type="submit" className="btn btn-primary mx-auto w-25">Submit</button>
                    </form>
                  </div>
                </div>
               
            </div>
                  </div>
           
        );
    }
}

export default Flat;