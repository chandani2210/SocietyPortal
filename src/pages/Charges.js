import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../css/Flat.css';
class Charges extends Component{

    constructor(){
        super();
        this.state={
          id:'',
          rent:'',
          water_bill:'',
          electricity_bill:'',
          maintenance:'',
          flat_number:''
        }
    }
    
      onChangedId = (event) =>{
        this.setState({
            id: event.target.value
        })
      }
    
      onChangedRent = (event) =>{
        this.setState({
            rent: event.target.value
        })
      }
      onChangedWaterBill = (event) =>{
        this.setState({
            water_bill: event.target.value
        })
      }
      onChangedElectricityBill = (event) =>{
        this.setState({
            electricity_bill: event.target.value
        })
      }
      onChangedMaintenance = (event) =>{
        this.setState({
            maintenance: event.target.value
        })
      }
    
      onChangedFlatNumber=(event)=>{
        this.setState({
          flat_number:event.target.value
        })
      }

       
  onSubmitHandler=(event)=>{
    event.preventDefault();
    let data={
        "charge_id": this.state.id,
        "rent_charge": this.state.rent,
        "water_bill": this.state.water_bill,
        "electricity_bill": this.state.electricity_bill,
        "maintenance_charge": this.state.maintenance,
        "flat_no": {
            "flat_no": this.state.flat_number
      }
    }
    const chargeId= this.state.id
    const rentCharge = this.state.rent
    const waterBill = this.state.water_bill
    const electricityBill =this.state.electricity_bill
    const maintenanceCharge = this.state.maintenance
///charges/{charge_id}/monthlycharge/{rent_charge}/{water_bill}/{electricity_bill}/{maintenance_charge}
    axios.put('http://localhost:8080/society/admin/charges/'+chargeId+'/monthlycharge/'+rentCharge+'/'+waterBill+'/'+electricityBill+'/'+maintenanceCharge+'',data)
    .then(resp => {
      alert('Monthly Charge Uploaded Successfully')
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

                    {/* TAKE INPUTS FROM THE ADMIN */}
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
                         <label>Rent</label>
                         <input value={this.rent} onChange={this.onChangedRent} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Water bill</label>
                         <input value={this.water_bill} onChange={this.onChangedWaterBill} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                         <label>Electricity bill</label>
                         <input value={this.electricity_bill} onChange={this.onChangedElectricityBill} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </input>
                    </div>
                    <div className="form-group">
                         <label>Maintenance</label>
                         <input value={this.maintenance} onChange={this.onChangedMaintenance} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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
export default Charges;